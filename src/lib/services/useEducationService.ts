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

import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Education, EducationInsert, EducationUpdate } from '../../types/database.types';
import { educationSchema } from '../schemas/educationSchema';

export function useEducationService() {
  const [education, setEducation] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads education records from Supabase, sorted by order_index
   * @private
   */
  const loadEducation = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('education')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) throw supabaseError;
      setEducation(data || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load education records';
      console.error('Error loading education:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Creates a new education record
   * @param {EducationInsert} educationData - Education data to create (validated against educationSchema)
   * @returns {Promise<Education>} Created education record
   * @throws {Error} If validation fails or Supabase operation fails
   */
  const createEducation = async (educationData: EducationInsert) => {
    try {
      const validatedData = educationSchema.parse(educationData);
      
      const { data, error: supabaseError } = await supabase
        .from('education')
        .insert(validatedData)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setEducation(prev => [...prev, data].sort((a, b) => a.order_index - b.order_index));
      
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
  const updateEducation = async (id: string, educationData: EducationUpdate) => {
    try {
      const validatedData = educationSchema.partial().parse(educationData);
      
      const { data, error: supabaseError } = await supabase
        .from('education')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      // Optimistic update
      setEducation(prev => 
        prev.map(edu => edu.id === id ? data : edu)
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
  }, []);

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
