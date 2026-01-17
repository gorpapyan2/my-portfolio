/**
 * Service hook for managing education data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 * 
 * @example
 * const { education, isLoading, error, createEducation, updateEducation, deleteEducation, refetch } = useEducationService();
 * 
 * @returns {Object} Service object with education state and CRUD operations
 * @returns {Education[]} education - Array of education records sorted by order_index
 * @returns {boolean} isLoading - Loading state during initial fetch or operations
 * @returns {string|null} error - Error message if operation fails, null if successful
 * @returns {Function} createEducation - Creates a new education record with validation
 * @returns {Function} updateEducation - Updates an existing education record
 * @returns {Function} deleteEducation - Deletes an education record
 * @returns {Function} refetch - Manually refetch all education records
 */

import { useCallback, useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Education, EducationInsert, EducationUpdate, EducationTranslationInsert } from '../../types/database.types';
import { educationSchema } from '../schemas/educationSchema';
import { useLanguage, type Language } from '../../context/LanguageContext';

const DEFAULT_LANGUAGE: Language = 'en';

type UseEducationOptions = {
  language?: Language;
};

export function useEducationService(options: UseEducationOptions = {}) {
  const { language: contextLanguage } = useLanguage();
  const activeLanguage = options.language ?? contextLanguage;
  const [education, setEducation] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads education records from Supabase, sorted by order_index
   * @private
   */
  const loadEducation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data: baseData, error: supabaseError } = await supabase
        .from('education')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) throw supabaseError;

      const { data: translationData, error: translationError } = await supabase
        .from('education_translations')
        .select('*')
        .eq('language', activeLanguage);

      if (translationError) throw translationError;

      const translationMap = new Map(
        (translationData || []).map((row) => [row.education_id, row])
      );

      const merged = (baseData || []).map((row) => {
        const translation = translationMap.get(row.id);
        return translation
          ? {
              ...row,
              degree: translation.degree,
              school: translation.school,
              year: translation.year,
              description: translation.description,
            }
          : row;
      });

      setEducation(merged);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load education records';
      console.error('Error loading education:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [activeLanguage]);

  /**
   * Creates a new education record
   * @param {EducationInsert} educationData - Education data to create (validated against educationSchema)
   * @returns {Promise<Education>} Created education record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const upsertTranslation = async (educationId: string, payload: EducationInsert, language: Language) => {
    const translation: EducationTranslationInsert = {
      education_id: educationId,
      language,
      degree: payload.degree,
      school: payload.school,
      year: payload.year,
      description: payload.description,
    };

    const { error: translationError } = await supabase
      .from('education_translations')
      .upsert(translation, { onConflict: 'education_id,language' });

    if (translationError) throw translationError;
  };

  const createEducation = async (educationData: EducationInsert, language: Language = activeLanguage) => {
    try {
      const validatedData = educationSchema.parse(educationData);
      
      const { data, error: supabaseError } = await supabase
        .from('education')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      await upsertTranslation(data.id, validatedData, language);

      // Optimistic update
      setEducation(prev => [...prev, { ...data, ...validatedData }]
        .sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create education record';
      console.error('Error creating education:', err);
      throw new Error(message);
    }
  };

  /**
   * Updates an existing education record
   * @param {string} id - UUID of the education record to update
   * @param {EducationUpdate} educationData - Partial education data to update
   * @returns {Promise<Education>} Updated education record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const updateEducation = async (id: string, educationData: EducationUpdate, language: Language = activeLanguage) => {
    try {
      const validatedData = educationSchema.partial().parse(educationData);
      
      const baseUpdate: EducationUpdate = {
        order_index: validatedData.order_index,
      };

      if (language === DEFAULT_LANGUAGE) {
        baseUpdate.degree = validatedData.degree;
        baseUpdate.school = validatedData.school;
        baseUpdate.year = validatedData.year;
        baseUpdate.description = validatedData.description;
      }

      const { data, error: supabaseError } = await supabase
        .from('education')
        .update(baseUpdate)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      if (validatedData.degree && validatedData.school && validatedData.year && validatedData.description) {
        await upsertTranslation(id, validatedData as EducationInsert, language);
      }

      // Optimistic update
      setEducation(prev =>
        prev.map(edu => edu.id === id ? { ...edu, ...validatedData, ...data } : edu)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update education record';
      console.error('Error updating education:', err);
      throw new Error(message);
    }
  };

  /**
   * Deletes an education record
   * @param {string} id - UUID of the education record to delete
   * @returns {Promise<void>}
   * @throws {Error} If Supabase operation fails
   */
  const deleteEducation = async (id: string) => {
    try {
      const { error: supabaseError } = await supabase
        .from('education')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setEducation(prev => prev.filter(edu => edu.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete education record';
      console.error('Error deleting education:', err);
      throw new Error(message);
    }
  };

  useEffect(() => {
    loadEducation();
  }, [loadEducation]);

  return {
    education,
    isLoading,
    error,
    createEducation,
    updateEducation,
    deleteEducation,
    refetch: loadEducation
  };
}
