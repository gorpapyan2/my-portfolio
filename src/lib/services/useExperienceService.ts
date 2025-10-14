import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Experience, ExperienceInsert, ExperienceUpdate } from '../../types/database.types';
import { experienceSchema } from '../schemas/experienceSchema';

export function useExperienceService() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExperiences = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setExperiences(data || []);
    } catch (err) {
      console.error('Error fetching experiences:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch experiences');
    } finally {
      setIsLoading(false);
    }
  };

  const createExperience = async (experienceData: ExperienceInsert) => {
    try {
      const validatedData = experienceSchema.parse(experienceData);
      
      const { data, error } = await supabase
        .from('experiences')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setExperiences(prev => [...prev, data].sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      console.error('Error creating experience:', err);
      throw err;
    }
  };

  const updateExperience = async (id: string, experienceData: ExperienceUpdate) => {
    try {
      const validatedData = experienceSchema.partial().parse(experienceData);
      
      const { data, error } = await supabase
        .from('experiences')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setExperiences(prev => 
        prev.map(exp => exp.id === id ? data : exp)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      console.error('Error updating experience:', err);
      throw err;
    }
  };

  const deleteExperience = async (id: string) => {
    try {
      const { error } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Optimistic update
      setExperiences(prev => prev.filter(exp => exp.id !== id));
    } catch (err) {
      console.error('Error deleting experience:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return {
    experiences,
    isLoading,
    error,
    createExperience,
    updateExperience,
    deleteExperience,
    refetch: fetchExperiences
  };
}
