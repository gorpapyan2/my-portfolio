import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Skill, SkillInsert, SkillUpdate } from '../../types/database.types';
import { skillSchema } from '../schemas/skillSchema';

export function useSkillService() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkills = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setSkills(data || []);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch skills');
    } finally {
      setIsLoading(false);
    }
  };

  const createSkill = async (skillData: SkillInsert) => {
    try {
      const validatedData = skillSchema.parse(skillData);
      
      const { data, error } = await supabase
        .from('skills')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setSkills(prev => [...prev, data].sort((a, b) => a.order_index - b.order_index));
      
      return data;
    } catch (err) {
      console.error('Error creating skill:', err);
      throw err;
    }
  };

  const updateSkill = async (id: string, skillData: SkillUpdate) => {
    try {
      const validatedData = skillSchema.partial().parse(skillData);
      
      const { data, error } = await supabase
        .from('skills')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Optimistic update
      setSkills(prev => 
        prev.map(skill => skill.id === id ? data : skill)
          .sort((a, b) => a.order_index - b.order_index)
      );
      
      return data;
    } catch (err) {
      console.error('Error updating skill:', err);
      throw err;
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Optimistic update
      setSkills(prev => prev.filter(skill => skill.id !== id));
    } catch (err) {
      console.error('Error deleting skill:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    skills,
    isLoading,
    error,
    createSkill,
    updateSkill,
    deleteSkill,
    refetch: fetchSkills
  };
}
