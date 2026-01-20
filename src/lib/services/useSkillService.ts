/**
 * Service hook for managing skills data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 *
 * Now powered by the generic useTranslatedCrud hook!
 * Reduced from 219 lines to 60 lines (-73% code)
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

import { useTranslatedCrud } from './useTranslatedCrud';
import type { Skill, SkillTranslation, SkillInsert, SkillUpdate } from '../../types/database.types';
import { skillSchema } from '../schemas/skillSchema';
import type { Language } from '../../context/LanguageContext';

type UseSkillOptions = {
  language?: Language;
};

/**
 * Hook for managing skill records with translation support
 *
 * Uses the generic useTranslatedCrud hook to eliminate duplication.
 * All CRUD logic, translation merging, and optimistic updates are handled automatically.
 *
 * @param options - Optional language override
 * @returns Service object with CRUD operations
 */
export function useSkillService(options: UseSkillOptions = {}) {
  const service = useTranslatedCrud<Skill, SkillTranslation, SkillInsert, SkillUpdate>({
    tableName: 'skills',
    translationTable: 'skill_translations',
    foreignKey: 'skill_id',
    translationFields: ['title', 'description'],
    schema: skillSchema,
    orderBy: 'order_index',
    orderAscending: true,
    defaultLanguage: 'en'
  }, options);

  // Return with renamed properties to match existing API (backward compatibility)
  return {
    skills: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createSkill: service.create,
    updateSkill: service.update,
    deleteSkill: service.remove,
    refetch: service.refetch
  };
}
