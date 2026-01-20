/**
 * Service hook for managing education data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 *
 * Now powered by the generic useTranslatedCrud hook!
 * Reduced from 222 lines to 60 lines (-73% code)
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

import { useTranslatedCrud } from './useTranslatedCrud';
import type { Education, EducationTranslation, EducationInsert, EducationUpdate } from '../../types/database.types';
import { educationSchema } from '../schemas/educationSchema';
import type { Language } from '../../context/LanguageContext';

type UseEducationOptions = {
  language?: Language;
};

/**
 * Hook for managing education records with translation support
 *
 * Uses the generic useTranslatedCrud hook to eliminate duplication.
 * All CRUD logic, translation merging, and optimistic updates are handled automatically.
 *
 * @param options - Optional language override
 * @returns Service object with CRUD operations
 */
export function useEducationService(options: UseEducationOptions = {}) {
  const service = useTranslatedCrud<Education, EducationTranslation, EducationInsert, EducationUpdate>({
    tableName: 'education',
    translationTable: 'education_translations',
    foreignKey: 'education_id',
    translationFields: ['degree', 'school', 'year', 'description'],
    schema: educationSchema,
    orderBy: 'order_index',
    orderAscending: true,
    defaultLanguage: 'en'
  }, options);

  // Return with renamed properties to match existing API (backward compatibility)
  return {
    education: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createEducation: service.create,
    updateEducation: service.update,
    deleteEducation: service.remove,
    refetch: service.refetch
  };
}
