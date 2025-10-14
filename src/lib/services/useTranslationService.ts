import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { Translation, TranslationInsert, TranslationUpdate } from '../../types/database.types';
import { translations as staticTranslations } from '../../translations';
import { translationInsertSchema, translationUpdateSchema } from '../schemas/translationSchema';

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
