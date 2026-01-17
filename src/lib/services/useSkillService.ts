/**
 * Service hook for managing skills data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 * 
 * @example
 * const { skills, isLoading, error, createSkill, updateSkill, deleteSkill, refetch } = useSkillService();
 * 
 * @returns {Object} Service object with skills state and CRUD operations
 * @returns {Skill[]} skills - Array of skill records sorted by order_index
 * @returns {boolean} isLoading - Loading state during initial fetch or operations
 * @returns {string|null} error - Error message if operation fails, null if successful
 * @returns {Function} createSkill - Creates a new skill record with validation
 * @returns {Function} updateSkill - Updates an existing skill record
 * @returns {Function} deleteSkill - Deletes a skill record
 * @returns {Function} refetch - Manually refetch all skill records
 */

import { useCallback, useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Skill, SkillInsert, SkillUpdate, SkillTranslationInsert } from '../../types/database.types';
import { skillSchema } from '../schemas/skillSchema';
import { useLanguage, type Language } from '../../context/LanguageContext';

const DEFAULT_LANGUAGE: Language = 'en';

type UseSkillOptions = {
  language?: Language;
};

export function useSkillService(options: UseSkillOptions = {}) {
  const { language: contextLanguage } = useLanguage();
  const activeLanguage = options.language ?? contextLanguage;
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads skill records from Supabase, sorted by order_index
   * @private
   */
  const loadSkills = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data: baseData, error: supabaseError } = await supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) throw supabaseError;

      const { data: translationData, error: translationError } = await supabase
        .from('skill_translations')
        .select('*')
        .eq('language', activeLanguage);

      if (translationError) throw translationError;

      const translationMap = new Map(
        (translationData || []).map((row) => [row.skill_id, row])
      );

      const merged = (baseData || []).map((row) => {
        const translation = translationMap.get(row.id);
        return translation
          ? {
              ...row,
              title: translation.title,
              description: translation.description,
            }
          : row;
      });

      setSkills(merged);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load skills';
      console.error('Error loading skills:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [activeLanguage]);

  /**
   * Creates a new skill record
   * @param {SkillInsert} skillData - Skill data to create (validated against skillSchema)
   * @returns {Promise<Skill>} Created skill record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const upsertTranslation = async (skillId: string, payload: SkillInsert, language: Language) => {
    const translation: SkillTranslationInsert = {
      skill_id: skillId,
      language,
      title: payload.title,
      description: payload.description,
    };

    const { error: translationError } = await supabase
      .from('skill_translations')
      .upsert(translation, { onConflict: 'skill_id,language' });

    if (translationError) throw translationError;
  };

  const createSkill = async (skillData: SkillInsert, language: Language = activeLanguage) => {
    try {
      const validatedData = skillSchema.parse(skillData);
      
      const { data, error: supabaseError } = await supabase
        .from('skills')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      await upsertTranslation(data.id, validatedData, language);

      // Optimistic update
      setSkills(prev => [...prev, { ...data, ...validatedData }]
        .sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create skill record';
      console.error('Error creating skill:', err);
      throw new Error(message);
    }
  };

  /**
   * Updates an existing skill record
   * @param {string} id - UUID of the skill record to update
   * @param {SkillUpdate} skillData - Partial skill data to update
   * @returns {Promise<Skill>} Updated skill record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const updateSkill = async (id: string, skillData: SkillUpdate, language: Language = activeLanguage) => {
    try {
      const validatedData = skillSchema.partial().parse(skillData);
      
      const baseUpdate: SkillUpdate = {
        icon: validatedData.icon,
        level: validatedData.level,
        order_index: validatedData.order_index,
        category: validatedData.category,
      };

      if (language === DEFAULT_LANGUAGE) {
        baseUpdate.title = validatedData.title;
        baseUpdate.description = validatedData.description;
      }

      const { data, error: supabaseError } = await supabase
        .from('skills')
        .update(baseUpdate)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      if (validatedData.title && validatedData.description) {
        await upsertTranslation(id, validatedData as SkillInsert, language);
      }

      // Optimistic update
      setSkills(prev =>
        prev.map(skill => skill.id === id ? { ...skill, ...validatedData, ...data } : skill)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update skill record';
      console.error('Error updating skill:', err);
      throw new Error(message);
    }
  };

  /**
   * Deletes a skill record
   * @param {string} id - UUID of the skill record to delete
   * @returns {Promise<void>}
   * @throws {Error} If Supabase operation fails
   */
  const deleteSkill = async (id: string) => {
    try {
      const { error: supabaseError } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setSkills(prev => prev.filter(skill => skill.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete skill record';
      console.error('Error deleting skill:', err);
      throw new Error(message);
    }
  };

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  return {
    skills,
    isLoading,
    error,
    createSkill,
    updateSkill,
    deleteSkill,
    refetch: loadSkills
  };
}
