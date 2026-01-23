import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { Translation, TranslationInsert, TranslationUpdate } from '../../types/database.types';
import { translationInsertSchema, translationUpdateSchema } from '../schemas/translationSchema';

/**
 * TranslationService interface - defines the shape of the translation service
 * @interface TranslationService
 * @property {Record<string, Record<string, string>>} translations - Translations organized by language and key (en, ru, am)
 * @property {boolean} isLoading - Indicates if translations are being fetched
 * @property {string|null} error - Error message if operation fails, null if successful
 * @property {Function} createTranslation - Creates a new translation with validation
 * @property {Function} updateTranslation - Updates an existing translation
 * @property {Function} deleteTranslation - Deletes a translation
 * @property {Function} bulkImport - Imports multiple translations at once
 * @property {Function} refreshTranslations - Manually refresh all translations
 */
export interface TranslationService {
  translations: Record<string, Record<string, string>>;
  isLoading: boolean;
  error: string | null;
  createTranslation: (translation: TranslationInsert) => Promise<void>;
  updateTranslation: (id: string, updates: TranslationUpdate) => Promise<void>;
  deleteTranslation: (id: string) => Promise<void>;
  bulkImport: (translations: TranslationInsert[]) => Promise<void>;
  refreshTranslations: () => Promise<void>;
}

/**
 * Service hook for managing multi-language translations from Supabase
 * Provides full CRUD operations from Supabase (DB is the single source of truth)
 * Supports three languages: English (en), Russian (ru), Armenian (am)
 * 
 * Hybrid system: Attempts Supabase first, falls back to static translations if unavailable
 * Perfect for dynamic translation management without requiring Supabase in production
 * 
 * @example
 * const { translations, isLoading, error, createTranslation, updateTranslation, deleteTranslation, bulkImport } = useTranslationService();
 * 
 * // Access translations
 * const appName = translations['en']['app.name'];
 * 
 * // Create new translation
 * await createTranslation({
 *   key: 'about.hero.title',
 *   language: 'en',
 *   value: 'Full Stack Developer',
 *   category: 'about'
 * });
 * 
 * // Bulk import
 * await bulkImport([
 *   { key: 'nav.home', language: 'en', value: 'Home', category: 'nav' },
 *   { key: 'nav.about', language: 'en', value: 'About', category: 'nav' }
 * ]);
 * 
 * @returns {TranslationService} Service object with translations and CRUD operations
 */
export function useTranslationService(): TranslationService {
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: {},
    ru: {},
    am: {}
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load translations from Supabase (no static fallback)
  const loadTranslations = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch from Supabase in batches to avoid default row limits
      const pageSize = 1000;
      let from = 0;
      let allTranslations: Translation[] = [];

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { data, error: supabaseError } = await supabase
          .from('translations')
          .select('*')
          .range(from, from + pageSize - 1);

        if (supabaseError) throw supabaseError;
        if (!data || data.length === 0) break;

        allTranslations = allTranslations.concat(data);
        if (data.length < pageSize) break;
        from += pageSize;
      }

      if (allTranslations.length > 0) {
        // Convert Supabase data to the format expected by LanguageContext
        const formattedTranslations: Record<string, Record<string, string>> = {
          en: {},
          ru: {},
          am: {}
        };

        allTranslations.forEach((translation: Translation) => {
          if (formattedTranslations[translation.language]) {
            formattedTranslations[translation.language][translation.key] = translation.value;
          }
        });

        setTranslations(formattedTranslations);
      } else {
        // No data available; keep empty structure
        setTranslations({ en: {}, ru: {}, am: {} });
      }
    } catch (err) {
      console.error('Error loading translations:', err);
      setError(err instanceof Error ? err.message : 'Failed to load translations');
      setTranslations({ en: {}, ru: {}, am: {} });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // CRUD operations
  const createTranslation = useCallback(async (translation: TranslationInsert) => {
    try {
      // Validate input
      const validatedData = translationInsertSchema.parse(translation);
      
      const { error } = await supabase
        .from('translations')
        .insert(validatedData);

      if (error) throw error;

      // Update local state
      setTranslations(prev => ({
        ...prev,
        [validatedData.language]: {
          ...prev[validatedData.language],
          [validatedData.key]: validatedData.value
        }
      }));
    } catch (err) {
      console.error('Error creating translation:', err);
      throw err;
    }
  }, []);

  const updateTranslation = useCallback(async (id: string, updates: TranslationUpdate) => {
    try {
      // Validate input
      const validatedData = translationUpdateSchema.parse(updates);
      
      const { data, error } = await supabase
        .from('translations')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update local state
      if (data) {
        setTranslations(prev => ({
          ...prev,
          [data.language]: {
            ...prev[data.language],
            [data.key]: data.value
          }
        }));
      }
    } catch (err) {
      console.error('Error updating translation:', err);
      throw err;
    }
  }, []);

  const deleteTranslation = useCallback(async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('translations')
        .delete()
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update local state
      if (data) {
        setTranslations(prev => {
          const newTranslations = { ...prev };
          delete newTranslations[data.language][data.key];
          return newTranslations;
        });
      }
    } catch (err) {
      console.error('Error deleting translation:', err);
      throw err;
    }
  }, []);

  const bulkImport = useCallback(async (translations: TranslationInsert[]) => {
    try {
      // Validate each translation
      const validatedTranslations = translations.map(translation => 
        translationInsertSchema.parse(translation)
      );
      
      // Fetch existing records by key and language to check for conflicts
      const { data: existingRecords, error: fetchError } = await supabase
        .from('translations')
        .select('id, key, language');
      
      if (fetchError) throw fetchError;
      
      // Create a lookup map for existing records using (key, language) composite
      const existingMap = new Map(
        (existingRecords || []).map(r => [`${r.key}::${r.language}`, r.id])
      );
      
      // Separate imports into CREATE (new) and UPDATE (existing) batches
      const recordsToInsert: TranslationInsert[] = [];
      const recordsToUpdate: Array<{ id: string; data: TranslationInsert }> = [];
      
      validatedTranslations.forEach(translation => {
        const compositeKey = `${translation.key}::${translation.language}`;
        const existingId = existingMap.get(compositeKey);
        
        if (existingId) {
          // Record exists - will update
          recordsToUpdate.push({ id: existingId, data: translation });
        } else {
          // Record is new - will insert
          recordsToInsert.push(translation);
        }
      });
      
      // Insert new records
      if (recordsToInsert.length > 0) {
        const { error: insertError } = await supabase
          .from('translations')
          .insert(recordsToInsert);
        
        if (insertError) throw insertError;
      }
      
      // Update existing records (batch updates to minimize queries)
      if (recordsToUpdate.length > 0) {
        for (const { id, data } of recordsToUpdate) {
          const { error: updateError } = await supabase
            .from('translations')
            .update({
              value: data.value,
              category: data.category
            })
            .eq('id', id);
          
          if (updateError) throw updateError;
        }
      }
      
      // Reload translations after successful import
      await loadTranslations();
    } catch (err) {
      console.error('Error bulk importing translations:', err);
      throw err;
    }
  }, [loadTranslations]);

  const refreshTranslations = useCallback(async () => {
    await loadTranslations();
  }, [loadTranslations]);

  // Load translations on mount
  useEffect(() => {
    loadTranslations();
  }, [loadTranslations]);

  return {
    translations,
    isLoading,
    error,
    createTranslation,
    updateTranslation,
    deleteTranslation,
    bulkImport,
    refreshTranslations
  };
}
