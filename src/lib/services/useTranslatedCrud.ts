import { useCallback, useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useLanguage, type Language } from '../../context/LanguageContext';
import type { ZodSchema } from 'zod';

/**
 * Configuration for translated CRUD operations
 */
export interface TranslatedCrudConfig<TBase, TTranslation, TInsert> {
  /** Base table name (e.g., 'experiences') */
  tableName: string;

  /** Translation table name (e.g., 'experience_translations') */
  translationTable: string;

  /** Foreign key field in translation table (e.g., 'experience_id') */
  foreignKey: keyof TTranslation;

  /** Fields that should be translated */
  translationFields: (keyof TInsert)[];

  /** Zod schema for validation */
  schema: ZodSchema<TInsert>;

  /** Optional: order field for sorting (default: 'order_index') */
  orderBy?: keyof TBase;

  /** Optional: order direction (default: true = ascending) */
  orderAscending?: boolean;

  /** Optional: default language (default: 'en') */
  defaultLanguage?: Language;
}

/**
 * Return type for useTranslatedCrud hook
 */
export interface TranslatedCrudService<TBase, TInsert, TUpdate> {
  /** Array of records with translations merged */
  data: TBase[];

  /** Loading state */
  isLoading: boolean;

  /** Error message if operation fails */
  error: string | null;

  /** Create a new record with translations */
  create: (itemData: TInsert, language?: Language) => Promise<TBase>;

  /** Update an existing record */
  update: (id: string, itemData: TUpdate, language?: Language) => Promise<TBase>;

  /** Delete a record */
  remove: (id: string) => Promise<void>;

  /** Manually refetch all records */
  refetch: () => Promise<void>;
}

/**
 * Generic hook for CRUD operations with translation support
 *
 * Eliminates duplication across Experience, Education, Skill, and other services
 * by providing a unified pattern for translated content management.
 *
 * Features:
 * - Automatic translation loading and merging
 * - Optimistic UI updates
 * - Validation with Zod schemas
 * - Language-aware CRUD operations
 * - Consistent error handling
 *
 * @example
 * ```typescript
 * // Define your service using the generic hook
 * export function useExperienceService(options = {}) {
 *   return useTranslatedCrud<Experience, ExperienceTranslation, ExperienceInsert, ExperienceUpdate>({
 *     tableName: 'experiences',
 *     translationTable: 'experience_translations',
 *     foreignKey: 'experience_id',
 *     translationFields: ['role', 'company', 'period', 'description', 'achievements'],
 *     schema: experienceSchema,
 *     orderBy: 'order_index'
 *   }, options);
 * }
 *
 * // Use in components
 * const { data: experiences, isLoading, create, update, remove } = useExperienceService();
 * ```
 *
 * @template TBase - Base entity type (e.g., Experience)
 * @template TTranslation - Translation entity type (e.g., ExperienceTranslation)
 * @template TInsert - Insert type (e.g., ExperienceInsert)
 * @template TUpdate - Update type (e.g., ExperienceUpdate)
 *
 * @param config - Configuration object defining table names, fields, and schema
 * @param options - Optional language override
 * @returns Service object with CRUD operations
 */
export function useTranslatedCrud<TBase extends { id: string }, TTranslation, TInsert, TUpdate>(
  config: TranslatedCrudConfig<TBase, TTranslation, TInsert, TUpdate>,
  options: { language?: Language } = {}
): TranslatedCrudService<TBase, TInsert, TUpdate> {
  const { language: contextLanguage } = useLanguage();
  const activeLanguage = options.language ?? contextLanguage;

  const {
    tableName,
    translationTable,
    foreignKey,
    translationFields,
    schema,
    orderBy = 'order_index' as keyof TBase,
    orderAscending = true,
    defaultLanguage = 'en' as Language
  } = config;

  const [data, setData] = useState<TBase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load base data and translations, then merge them
   */
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch base data
      const { data: baseData, error: baseError } = await supabase
        .from(tableName)
        .select('*')
        .order(orderBy as string, { ascending: orderAscending });

      if (baseError) throw baseError;

      // Fetch translations for active language
      const { data: translationData, error: translationError } = await supabase
        .from(translationTable)
        .select('*')
        .eq('language', activeLanguage);

      if (translationError) throw translationError;

      // Create translation lookup map
      const translationMap = new Map(
        (translationData || []).map((row: Record<string, unknown>) => [row[foreignKey as string], row])
      );

      // Merge base data with translations
      const merged = (baseData || []).map((row: Record<string, unknown>) => {
        const translation = translationMap.get(row.id as string);
        if (!translation) return row;

        // Merge translation fields
        const mergedRow = { ...row };
        translationFields.forEach(field => {
          if (translation[field as string] !== undefined) {
            mergedRow[field as string] = translation[field as string];
          }
        });

        return mergedRow;
      });

      setData(merged as TBase[]);
    } catch (err) {
      const message = err instanceof Error ? err.message : `Failed to load ${tableName}`;
      console.error(`Error loading ${tableName}:`, err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [activeLanguage, tableName, translationTable, foreignKey, translationFields, orderBy, orderAscending]);

  /**
   * Upsert translation for a record
   */
  const upsertTranslation = async (itemId: string, payload: Record<string, unknown>, language: Language) => {
    const translation: Record<string, unknown> = {
      [foreignKey as string]: itemId,
      language
    };

    // Copy translation fields from payload
    translationFields.forEach(field => {
      if (payload[field as string] !== undefined) {
        translation[field as string] = payload[field as string];
      }
    });

    const { error: translationError} = await supabase
      .from(translationTable)
      .upsert(translation, { onConflict: `${foreignKey as string},language` });

    if (translationError) throw translationError;
  };

  /**
   * Create a new record with translations
   */
  const create = async (itemData: TInsert, language: Language = activeLanguage): Promise<TBase> => {
    try {
      // Validate input
      const validatedData = schema.parse(itemData);

      // Insert base record
      const { data: newItem, error: insertError } = await supabase
        .from(tableName)
        .insert(validatedData as Record<string, unknown>)
        .select()
        .single();

      if (insertError) throw insertError;

      // Upsert translation
      await upsertTranslation(newItem.id as string, validatedData as Record<string, unknown>, language);

      // Optimistic update
      setData(prev =>
        [...prev, { ...newItem, ...validatedData } as TBase]
          .sort((a: TBase, b: TBase) => ((a[orderBy] as number) || 0) - ((b[orderBy] as number) || 0))
      );

      return newItem as TBase;
    } catch (err) {
      const message = err instanceof Error ? err.message : `Failed to create ${tableName} record`;
      console.error(`Error creating ${tableName}:`, err);
      throw new Error(message);
    }
  };

  /**
   * Update an existing record
   */
  const update = async (id: string, itemData: TUpdate, language: Language = activeLanguage): Promise<TBase> => {
    try {
      // Validate input (partial schema)
      const validatedData = schema.partial().parse(itemData);

      // Prepare base update (only non-translatable fields or default language)
      const baseUpdate: Record<string, unknown> = {};

      // Always update order_index if present
      if ('order_index' in validatedData) {
        baseUpdate.order_index = validatedData.order_index as unknown;
      }

      // If updating default language, also update base table translatable fields
      if (language === defaultLanguage) {
        translationFields.forEach(field => {
          if (validatedData[field as string] !== undefined) {
            baseUpdate[field as string] = validatedData[field as string];
          }
        });
      }

      // Update base record
      const { data: updatedItem, error: updateError } = await supabase
        .from(tableName)
        .update(baseUpdate)
        .eq('id', id)
        .select()
        .single();

      if (updateError) throw updateError;

      // Check if we have any translatable fields to update
      const hasTranslatableFields = translationFields.some(
        field => validatedData[field as string] !== undefined
      );

      if (hasTranslatableFields) {
        await upsertTranslation(id, validatedData as Record<string, unknown>, language);
      }

      // Optimistic update
      setData(prev =>
        prev.map(item =>
          item.id === id ? { ...item, ...validatedData, ...updatedItem } as TBase : item
        ).sort((a: TBase, b: TBase) => ((a[orderBy] as number) || 0) - ((b[orderBy] as number) || 0))
      );

      return updatedItem as TBase;
    } catch (err) {
      const message = err instanceof Error ? err.message : `Failed to update ${tableName} record`;
      console.error(`Error updating ${tableName}:`, err);
      throw new Error(message);
    }
  };

  /**
   * Delete a record
   */
  const remove = async (id: string): Promise<void> => {
    try {
      const { error: deleteError } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      // Optimistic update
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : `Failed to delete ${tableName} record`;
      console.error(`Error deleting ${tableName}:`, err);
      throw new Error(message);
    }
  };

  // Load data on mount and when language changes
  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    isLoading,
    error,
    create,
    update,
    remove,
    refetch: loadData
  };
}
