import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Education, EducationInsert, EducationUpdate } from '../../types/database.types';
import { educationSchema } from '../schemas/educationSchema';

export function useEducationService() {
  const [education, setEducation] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEducation = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setEducation(data || []);
    } catch (err) {
      console.error('Error fetching education:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch education');
    } finally {
      setIsLoading(false);
    }
  };

  const createEducation = async (educationData: EducationInsert) => {
    try {
      const validatedData = educationSchema.parse(educationData);
      
      const { data, error } = await supabase
        .from('education')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setEducation(prev => [...prev, data].sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      console.error('Error creating education:', err);
      throw err;
    }
  };

  const updateEducation = async (id: string, educationData: EducationUpdate) => {
    try {
      const validatedData = educationSchema.partial().parse(educationData);
      
      const { data, error } = await supabase
        .from('education')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setEducation(prev => 
        prev.map(edu => edu.id === id ? data : edu)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      console.error('Error updating education:', err);
      throw err;
    }
  };

  const deleteEducation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('education')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Optimistic update
      setEducation(prev => prev.filter(edu => edu.id !== id));
    } catch (err) {
      console.error('Error deleting education:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return {
    education,
    isLoading,
    error,
    createEducation,
    updateEducation,
    deleteEducation,
    refetch: fetchEducation
  };
}
