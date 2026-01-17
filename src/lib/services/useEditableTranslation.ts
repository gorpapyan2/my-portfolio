import { useState, useCallback } from 'react';
import { useTranslationService } from './useTranslationService';
import { supabase } from '../supabase';

interface EditableTranslation {
  en: string;
  ru: string;
  am: string;
}

interface UseEditableTranslationReturn {
  values: EditableTranslation;
  originalValues: EditableTranslation;
  isSaving: boolean;
  error: string | null;
  setValues: (values: Partial<EditableTranslation>) => void;
  save: () => Promise<void>;
  reset: () => void;
}

/**
 * Hook for managing in-place translation edits across all three languages
 * Loads existing translations and provides save/reset functionality
 * 
 * @param translationKey - The translation key (e.g., 'nav.about')
 * @returns Object with values, save/reset functions, and loading states
 */
export function useEditableTranslation(translationKey: string): UseEditableTranslationReturn {
  const { translations } = useTranslationService();
  const [values, setValues] = useState<EditableTranslation>({
    en: translations.en?.[translationKey] || '',
    ru: translations.ru?.[translationKey] || '',
    am: translations.am?.[translationKey] || '',
  });
  const [originalValues] = useState<EditableTranslation>({
    en: translations.en?.[translationKey] || '',
    ru: translations.ru?.[translationKey] || '',
    am: translations.am?.[translationKey] || '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSetValues = useCallback((newValues: Partial<EditableTranslation>) => {
    setValues(prev => ({ ...prev, ...newValues }));
    setError(null);
  }, []);

  const save = useCallback(async () => {
    try {
      setIsSaving(true);
      setError(null);

      const languages = ['en', 'ru', 'am'] as const;

      // Fetch all existing records for this key in all languages (one query)
      const { data: existingRecords, error: fetchError } = await supabase
        .from('translations')
        .select('id, language')
        .eq('key', translationKey);

      if (fetchError) {
        console.warn(`Failed to fetch existing translations for ${translationKey}:`, fetchError);
      }

      // Create lookup map by language
      const existingMap = new Map(
        (existingRecords || []).map((record) => [record.language, record.id])
      );

      // Process each language
      for (const lang of languages) {
        const newValue = values[lang];
        const originalValue = originalValues[lang];

        // Only update if value changed and is not empty
        if (newValue !== originalValue && newValue.trim()) {
          const existingId = existingMap.get(lang);
          const category = translationKey.split('.')[0] || 'common';

          if (existingId) {
            // Record exists - update it
            const { error: updateError } = await supabase
              .from('translations')
              .update({
                value: newValue,
                category
              })
              .eq('id', existingId);

            if (updateError) throw updateError;
          } else {
            // Record doesn't exist - insert it
            const { error: insertError } = await supabase
              .from('translations')
              .insert([{
                key: translationKey,
                language: lang,
                value: newValue,
                category
              }]);

            if (insertError) throw insertError;
          }
        }
      }

      setIsSaving(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save translations';
      setError(errorMessage);
      setIsSaving(false);
      throw err;
    }
  }, [values, originalValues, translationKey]);

  const reset = useCallback(() => {
    setValues(originalValues);
    setError(null);
  }, [originalValues]);

  return {
    values,
    originalValues,
    isSaving,
    error,
    setValues: handleSetValues,
    save,
    reset,
  };
} 
