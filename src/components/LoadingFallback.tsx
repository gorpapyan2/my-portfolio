import { useEffect } from 'react';
import { useLoading } from '../hooks/useLoading';

/**
 * Loading fallback component for lazy-loaded routes
 * Triggers the global LoadingScreen while route code is being fetched
 */
export function LoadingFallback() {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading('Navigating to your destination...');
    return () => stopLoading();
  }, [startLoading, stopLoading]);

  return null;
}
