import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';

/**
 * PublicFeatureFlags interface - defines the shape of the public feature flags service
 * @interface PublicFeatureFlags
 * @property {Function} isFeatureEnabled - Checks if a feature flag is enabled
 * @property {boolean} isLoading - Indicates if flags are being loaded
 * @property {string|null} error - Error message if loading fails, null if successful
 */
export interface PublicFeatureFlags {
  isFeatureEnabled: (flagKey: string) => boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Service hook for reading public feature flags from Supabase
 * Provides read-only access to feature flags for controlling content visibility
 * Includes sensible defaults for all critical flags to prevent site breakage
 * 
 * Available flags:
 * - blog_section: Controls visibility of the blog section
 * - work_section: Controls visibility of the work/projects section
 * - featured_projects_section: Controls featured projects on homepage
 * - latest_articles_section: Controls latest articles on homepage
 * - language_selector: Controls visibility of language selector
 * 
 * @example
 * const { isFeatureEnabled, isLoading, error } = usePublicFeatureFlags();
 * 
 * if (isFeatureEnabled('blog_section')) {
 *   return <BlogSection />;
 * }
 * 
 * if (isFeatureEnabled('featured_projects_section')) {
 *   return <FeaturedProjects />;
 * }
 * 
 * @returns {PublicFeatureFlags} Service object with flag lookup and loading state
 */
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
