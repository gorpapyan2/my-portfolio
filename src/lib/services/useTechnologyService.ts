/**
 * Service hook for managing technologies data from Supabase
 * Handles CRUD operations with optimistic updates and validation
 * Supports multi-language translations for technologies
 * 
 * @example
 * const { technologies, isLoading, error, createTechnology, updateTechnology, deleteTechnology } = useTechnologyService();
 * 
 * @returns {Object} Service object with technologies state and CRUD operations
 */

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { technologyInsertSchema, technologyUpdateSchema } from '../schemas/technologySchema';
import type { Database } from '../../types/database.types';

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
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads technology records from Supabase
   * @private
   */
  const loadTechnologies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('technologies')
        .select('*')
        .order('created_at', { ascending: true });

      if (supabaseError) throw supabaseError;
      setTechnologies(data || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load technologies';
      console.error('Error loading technologies:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Creates a new technology record
   * @param {TechnologyInsert} technologyData - Technology data to create
   * @returns {Promise<Technology>} Created technology record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const createTechnology = useCallback(async (technologyData: TechnologyInsert): Promise<Technology> => {
    try {
      const validatedData = technologyInsertSchema.parse(technologyData);
      
      const { data, error: supabaseError } = await supabase
        .from('technologies')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setTechnologies(prev => [...prev, data]);
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create technology record';
      console.error('Error creating technology:', err);
      throw new Error(message);
    }
  }, []);

  /**
   * Updates an existing technology record
   * @param {string} id - UUID of the technology record to update
   * @param {TechnologyUpdate} technologyData - Partial technology data to update
   * @returns {Promise<Technology>} Updated technology record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const updateTechnology = useCallback(async (id: string, technologyData: TechnologyUpdate): Promise<Technology> => {
    try {
      const validatedData = technologyUpdateSchema.parse(technologyData);
      
      const { data, error: supabaseError } = await supabase
        .from('technologies')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setTechnologies(prev => prev.map(tech => tech.id === id ? data : tech));
      
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update technology record';
      console.error('Error updating technology:', err);
      throw new Error(message);
    }
  }, []);

  /**
   * Deletes a technology record
   * @param {string} id - UUID of the technology record to delete
   * @returns {Promise<void>}
   * @throws {Error} If Supabase operation fails
   */
  const deleteTechnology = useCallback(async (id: string): Promise<void> => {
    try {
      const { error: supabaseError } = await supabase
        .from('technologies')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setTechnologies(prev => prev.filter(tech => tech.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete technology record';
      console.error('Error deleting technology:', err);
      throw new Error(message);
    }
  }, []);

  useEffect(() => {
    loadTechnologies();
  }, [loadTechnologies]);

  return {
    technologies,
    isLoading,
    error,
    createTechnology,
    updateTechnology,
    deleteTechnology,
    refetch: loadTechnologies
  };
}

