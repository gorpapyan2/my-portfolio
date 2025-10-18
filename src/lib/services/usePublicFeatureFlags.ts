import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';

export interface PublicFeatureFlags {
  isFeatureEnabled: (flagKey: string) => boolean;
  isLoading: boolean;
  error: string | null;
}

export function usePublicFeatureFlags(): PublicFeatureFlags {
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load feature flags from Supabase
  const loadFlags = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('feature_flags')
        .select('flag_key, enabled');

      if (supabaseError) {
        throw supabaseError;
      }

      // Convert array to object for faster lookups
      const flagsMap = (data || []).reduce((acc, flag) => {
        acc[(flag as { flag_key: string; enabled: boolean }).flag_key] = (flag as { enabled: boolean }).enabled;
        return acc;
      }, {} as Record<string, boolean>);

      setFlags(flagsMap);
    } catch (err) {
      console.error('Error loading feature flags:', err);
      setError(err instanceof Error ? err.message : 'Failed to load feature flags');
      // Set default values for critical flags to prevent breaking the site
      setFlags({
        blog_section: true,
        work_section: true,
        featured_projects_section: true,
        latest_articles_section: true,
        language_selector: true
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check if a feature is enabled
  const isFeatureEnabled = useCallback((flagKey: string): boolean => {
    return flags[flagKey] ?? false;
  }, [flags]);

  // Load flags on mount
  useEffect(() => {
    loadFlags();
  }, [loadFlags]);

  return {
    isFeatureEnabled,
    isLoading,
    error
  };
}
