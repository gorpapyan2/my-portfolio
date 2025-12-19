import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import { useLoading } from './useLoading';

export function useRouteLoading() {
  const navigation = useNavigation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (navigation.state === 'loading') {
      startLoading('Navigating to your destination...');
    } else {
      stopLoading();
    }
  }, [navigation.state, startLoading, stopLoading]);
}