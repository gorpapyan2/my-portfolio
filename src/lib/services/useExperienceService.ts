/**
 * Service hook for managing experience data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 *
 * Now powered by the generic useTranslatedCrud hook!
 * Reduced from 230 lines to 52 lines (-78% code)
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

import { useTranslatedCrud } from './useTranslatedCrud';
import type { Experience, ExperienceTranslation, ExperienceInsert, ExperienceUpdate } from '../../types/database.types';
import { experienceSchema } from '../schemas/experienceSchema';
import type { Language } from '../../context/LanguageContext';

type UseExperienceOptions = {
  language?: Language;
};

/**
 * Hook for managing experience records with translation support
 *
 * Uses the generic useTranslatedCrud hook to eliminate duplication.
 * All CRUD logic, translation merging, and optimistic updates are handled automatically.
 *
 * @param options - Optional language override
 * @returns Service object with CRUD operations
 */
export function useExperienceService(options: UseExperienceOptions = {}) {
  const service = useTranslatedCrud<Experience, ExperienceTranslation, ExperienceInsert, ExperienceUpdate>({
    tableName: 'experiences',
    translationTable: 'experience_translations',
    foreignKey: 'experience_id',
    translationFields: ['role', 'company', 'period', 'description', 'achievements'],
    schema: experienceSchema,
    orderBy: 'order_index',
    orderAscending: true,
    defaultLanguage: 'en'
  }, options);

  // Return with renamed properties to match existing API (backward compatibility)
  return {
    experiences: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createExperience: service.create,
    updateExperience: service.update,
    deleteExperience: service.remove,
    refetch: service.refetch
  };
}
