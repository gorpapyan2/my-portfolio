import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { Translation, TranslationInsert, TranslationUpdate } from '../../types/database.types';
import { translations as staticTranslations } from '../../translations';
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
 * Provides full CRUD operations with automatic fallback to static translations
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

  // Load translations from Supabase or fallback to static
  const loadTranslations = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Try to fetch from Supabase first
      const { data, error: supabaseError } = await supabase
        .from('translations')
        .select('*');

      if (supabaseError) {
        console.warn('Supabase not available, using static translations:', supabaseError.message);
        // Fallback to static translations
        setTranslations(staticTranslations);
        return;
      }

      if (data && data.length > 0) {
        // Convert Supabase data to the format expected by LanguageContext
        const formattedTranslations: Record<string, Record<string, string>> = {
          en: {},
          ru: {},
          am: {}
        };

        data.forEach((translation: Translation) => {
          if (formattedTranslations[translation.language]) {
            formattedTranslations[translation.language][translation.key] = translation.value;
          }
        });

        setTranslations(formattedTranslations);
      } else {
        // No data in Supabase, use static translations
        setTranslations(staticTranslations);
      }
    } catch (err) {
      console.error('Error loading translations:', err);
      setError(err instanceof Error ? err.message : 'Failed to load translations');
      // Fallback to static translations
      setTranslations(staticTranslations);
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
      
      const { error } = await supabase
        .from('translations')
        .upsert(validatedTranslations);

      if (error) throw error;

      // Reload translations
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
