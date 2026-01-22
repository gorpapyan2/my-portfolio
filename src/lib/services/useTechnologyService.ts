/**
 * Service hook for managing technologies data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 *
 * Uses the generic useSimpleCrud hook for standardized CRUD operations
 *
 * @example
 * const { technologies, isLoading, error, createTechnology, updateTechnology, deleteTechnology } = useTechnologyService();
 *
 * @returns {Object} Service object with technologies state and CRUD operations
 */

import { technologyInsertSchema } from '../schemas/technologySchema';
import type { Database } from '../../types/database.types';
import { useSimpleCrud } from './useSimpleCrud';

type Technology = Database['public']['Tables']['technologies']['Row'];
type TechnologyInsert = Database['public']['Tables']['technologies']['Insert'];
type TechnologyUpdate = Database['public']['Tables']['technologies']['Update'];

export interface TechnologyService {
  technologies: Technology[];
  isLoading: boolean;
  error: string | null;
  createTechnology: (technology: TechnologyInsert) => Promise<Technology>;
  updateTechnology: (id: string, updates: TechnologyUpdate) => Promise<Technology>;
  deleteTechnology: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export function useTechnologyService(): TechnologyService {
  const service = useSimpleCrud<Technology, TechnologyInsert, TechnologyUpdate>({
    tableName: 'technologies',
    schema: technologyInsertSchema,
    orderBy: 'created_at',
    orderAscending: true
  });

  // Return with renamed properties for backward compatibility
  return {
    technologies: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createTechnology: service.create,
    updateTechnology: service.update,
    deleteTechnology: service.remove,
    refetch: service.refetch
  };
}

