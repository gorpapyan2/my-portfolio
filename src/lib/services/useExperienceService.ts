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
import { Experience, ExperienceInsert, ExperienceUpdate } from '../../types/database.types';
import { experienceSchema } from '../schemas/experienceSchema';

export function useExperienceService() {
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
      
      const { data, error: supabaseError } = await supabase
        .from('experiences')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) throw supabaseError;
      setExperiences(data || []);
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
  const createExperience = async (experienceData: ExperienceInsert) => {
    try {
      const validatedData = experienceSchema.parse(experienceData);
      
      const { data, error: supabaseError } = await supabase
        .from('experiences')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setExperiences(prev => [...prev, data].sort((a, b) => a.order_index - b.order_index));
      
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
  const updateExperience = async (id: string, experienceData: ExperienceUpdate) => {
    try {
      const validatedData = experienceSchema.partial().parse(experienceData);
      
      const { data, error: supabaseError } = await supabase
        .from('experiences')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setExperiences(prev => 
        prev.map(exp => exp.id === id ? data : exp)
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
  }, []);

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
