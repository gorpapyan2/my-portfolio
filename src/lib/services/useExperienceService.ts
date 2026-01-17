/**
 * Service hook for managing experience data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 * 
 * @example
 * const { experiences, isLoading, error, createExperience, updateExperience, deleteExperience, refetch } = useExperienceService();
 * 
 * @returns {Object} Service object with experiences state and CRUD operations
 * @returns {Experience[]} experiences - Array of experience records sorted by order_index
 * @returns {boolean} isLoading - Loading state during initial fetch or operations
 * @returns {string|null} error - Error message if operation fails, null if successful
 * @returns {Function} createExperience - Creates a new experience record with validation
 * @returns {Function} updateExperience - Updates an existing experience record
 * @returns {Function} deleteExperience - Deletes an experience record
 * @returns {Function} refetch - Manually refetch all experience records
 */

import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Experience, ExperienceInsert, ExperienceUpdate, ExperienceTranslationInsert } from '../../types/database.types';
import { experienceSchema } from '../schemas/experienceSchema';
import { useLanguage, type Language } from '../../context/LanguageContext';

const DEFAULT_LANGUAGE: Language = 'en';

type UseExperienceOptions = {
  language?: Language;
};

export function useExperienceService(options: UseExperienceOptions = {}) {
  const { language: contextLanguage } = useLanguage();
  const activeLanguage = options.language ?? contextLanguage;
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads experience records from Supabase, sorted by order_index
   * @private
   */
  const loadExperiences = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data: baseData, error: supabaseError } = await supabase
        .from('experiences')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) throw supabaseError;

      const { data: translationData, error: translationError } = await supabase
        .from('experience_translations')
        .select('*')
        .eq('language', activeLanguage);

      if (translationError) throw translationError;

      const translationMap = new Map(
        (translationData || []).map((row) => [row.experience_id, row])
      );

      const merged = (baseData || []).map((row) => {
        const translation = translationMap.get(row.id);
        return translation
          ? {
              ...row,
              role: translation.role,
              company: translation.company,
              period: translation.period,
              description: translation.description,
              achievements: translation.achievements ?? row.achievements,
            }
          : row;
      });

      setExperiences(merged);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load experience records';
      console.error('Error loading experiences:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Creates a new experience record
   * @param {ExperienceInsert} experienceData - Experience data to create (validated against experienceSchema)
   * @returns {Promise<Experience>} Created experience record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const upsertTranslation = async (experienceId: string, payload: ExperienceInsert, language: Language) => {
    const translation: ExperienceTranslationInsert = {
      experience_id: experienceId,
      language,
      role: payload.role,
      company: payload.company,
      period: payload.period,
      description: payload.description,
      achievements: payload.achievements ?? [],
    };

    const { error: translationError } = await supabase
      .from('experience_translations')
      .upsert(translation, { onConflict: 'experience_id,language' });

    if (translationError) throw translationError;
  };

  const createExperience = async (experienceData: ExperienceInsert, language: Language = activeLanguage) => {
    try {
      const validatedData = experienceSchema.parse(experienceData);
      
      const { data, error: supabaseError } = await supabase
        .from('experiences')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      await upsertTranslation(data.id, validatedData, language);

      // Optimistic update
      setExperiences(prev => [...prev, { ...data, ...validatedData }]
        .sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create experience record';
      console.error('Error creating experience:', err);
      throw new Error(message);
    }
  };

  /**
   * Updates an existing experience record
   * @param {string} id - UUID of the experience record to update
   * @param {ExperienceUpdate} experienceData - Partial experience data to update
   * @returns {Promise<Experience>} Updated experience record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const updateExperience = async (id: string, experienceData: ExperienceUpdate, language: Language = activeLanguage) => {
    try {
      const validatedData = experienceSchema.partial().parse(experienceData);
      
      const baseUpdate: ExperienceUpdate = {
        order_index: validatedData.order_index,
      };

      if (language === DEFAULT_LANGUAGE) {
        baseUpdate.role = validatedData.role;
        baseUpdate.company = validatedData.company;
        baseUpdate.period = validatedData.period;
        baseUpdate.description = validatedData.description;
        baseUpdate.achievements = validatedData.achievements;
      }

      const { data, error: supabaseError } = await supabase
        .from('experiences')
        .update(baseUpdate)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      if (
        validatedData.role &&
        validatedData.company &&
        validatedData.period &&
        validatedData.description
      ) {
        await upsertTranslation(id, validatedData as ExperienceInsert, language);
      }

      // Optimistic update
      setExperiences(prev =>
        prev.map(exp => exp.id === id ? { ...exp, ...validatedData, ...data } : exp)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update experience record';
      console.error('Error updating experience:', err);
      throw new Error(message);
    }
  };

  /**
   * Deletes an experience record
   * @param {string} id - UUID of the experience record to delete
   * @returns {Promise<void>}
   * @throws {Error} If Supabase operation fails
   */
  const deleteExperience = async (id: string) => {
    try {
      const { error: supabaseError } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setExperiences(prev => prev.filter(exp => exp.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete experience record';
      console.error('Error deleting experience:', err);
      throw new Error(message);
    }
  };

  useEffect(() => {
    loadExperiences();
  }, [activeLanguage]);

  return {
    experiences,
    isLoading,
    error,
    createExperience,
    updateExperience,
    deleteExperience,
    refetch: loadExperiences
  };
}
