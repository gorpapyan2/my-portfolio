import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { FeatureFlag, FeatureFlagInsert, FeatureFlagUpdate } from '../../types/database.types';
import { featureFlagInsertSchema, featureFlagUpdateSchema } from '../schemas/featureFlagSchema';

export interface FeatureFlagService {
  featureFlags: FeatureFlag[];
  isLoading: boolean;
  error: string | null;
  createFeatureFlag: (flag: FeatureFlagInsert) => Promise<void>;
  updateFeatureFlag: (id: string, updates: FeatureFlagUpdate) => Promise<void>;
  deleteFeatureFlag: (id: string) => Promise<void>;
  refreshFeatureFlags: () => Promise<void>;
  isFeatureEnabled: (flagKey: string) => boolean;
}

export function useFeatureFlagService(): FeatureFlagService {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load feature flags from Supabase
  const loadFeatureFlags = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('feature_flags')
        .select('*')
        .order('flag_key', { ascending: true });

      if (supabaseError) {
        throw supabaseError;
      }

      setFeatureFlags(data || []);
    } catch (err) {
      console.error('Error loading feature flags:', err);
      setError(err instanceof Error ? err.message : 'Failed to load feature flags');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // CRUD operations with optimistic updates
  const createFeatureFlag = useCallback(async (flag: FeatureFlagInsert) => {
    try {
      // Validate input
      const validatedData = featureFlagInsertSchema.parse(flag);
      
      // Optimistic update
      const tempId = `temp-${Date.now()}`;
      const tempFlag: FeatureFlag = {
        id: tempId,
        ...validatedData,
        content_id: validatedData.content_id ?? null,
        enabled: validatedData.enabled ?? true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setFeatureFlags(prev => [...prev, tempFlag]);

      const { data, error } = await supabase
        .from('feature_flags')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Replace temp with real data
      setFeatureFlags(prev => prev.map(flag => 
        flag.id === tempId ? data : flag
      ));
    } catch (err) {
      // Revert optimistic update
      setFeatureFlags(prev => prev.filter(flag => !flag.id.startsWith('temp-')));
      console.error('Error creating feature flag:', err);
      throw err;
    }
  }, []);

  const updateFeatureFlag = useCallback(async (id: string, updates: FeatureFlagUpdate) => {
    try {
      // Validate input
      const validatedData = featureFlagUpdateSchema.parse(updates);
      
      // Optimistic update
      setFeatureFlags(prev => prev.map(flag => 
        flag.id === id ? { ...flag, ...validatedData } : flag
      ));

      const { data, error } = await supabase
        .from('feature_flags')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update with real data
      setFeatureFlags(prev => prev.map(flag => 
        flag.id === id ? data : flag
      ));
    } catch (err) {
      // Revert optimistic update
      await loadFeatureFlags();
      console.error('Error updating feature flag:', err);
      throw err;
    }
  }, [loadFeatureFlags]);

  const deleteFeatureFlag = useCallback(async (id: string) => {
    try {
      // Optimistic update
      setFeatureFlags(prev => prev.filter(flag => flag.id !== id));

      const { error } = await supabase
        .from('feature_flags')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      // Revert optimistic update by reloading
      await loadFeatureFlags();
      console.error('Error deleting feature flag:', err);
      throw err;
    }
  }, [loadFeatureFlags]);

  const refreshFeatureFlags = useCallback(async () => {
    await loadFeatureFlags();
  }, [loadFeatureFlags]);

  // Utility function to check if a feature is enabled
  const isFeatureEnabled = useCallback((flagKey: string): boolean => {
    const flag = featureFlags.find(f => f.flag_key === flagKey);
    return flag?.enabled ?? false;
  }, [featureFlags]);

  // Load feature flags on mount
  useEffect(() => {
    loadFeatureFlags();
  }, [loadFeatureFlags]);

  return {
    featureFlags,
    isLoading,
    error,
    createFeatureFlag,
    updateFeatureFlag,
    deleteFeatureFlag,
    refreshFeatureFlags,
    isFeatureEnabled
  };
}
