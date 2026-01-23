import { useCallback } from 'react';
import { FeatureFlag, FeatureFlagInsert, FeatureFlagUpdate } from '../../types/database.types';
import { featureFlagInsertSchema } from '../schemas/featureFlagSchema';
import { useSimpleCrud } from './useSimpleCrud';

export interface FeatureFlagService {
  featureFlags: FeatureFlag[];
  isLoading: boolean;
  error: string | null;
  createFeatureFlag: (flag: FeatureFlagInsert) => Promise<FeatureFlag>;
  updateFeatureFlag: (id: string, updates: FeatureFlagUpdate) => Promise<FeatureFlag>;
  deleteFeatureFlag: (id: string) => Promise<void>;
  refreshFeatureFlags: () => Promise<void>;
  isFeatureEnabled: (flagKey: string) => boolean;
}

export function useFeatureFlagService(): FeatureFlagService {
  const service = useSimpleCrud<FeatureFlag, FeatureFlagInsert, FeatureFlagUpdate>({
    tableName: 'feature_flags',
    schema: featureFlagInsertSchema,
    orderBy: 'flag_key',
    orderAscending: true
  });

  // Utility function to check if a feature is enabled
  const isFeatureEnabled = useCallback(
    (flagKey: string): boolean => {
      const flag = service.data.find(f => f.flag_key === flagKey);
      return flag?.enabled ?? false;
    },
    [service.data]
  );

  // Return with renamed properties for backward compatibility
  return {
    featureFlags: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createFeatureFlag: service.create,
    updateFeatureFlag: service.update,
    deleteFeatureFlag: service.remove,
    refreshFeatureFlags: service.refetch,
    isFeatureEnabled
  };
}
