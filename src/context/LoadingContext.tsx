import { useState, useCallback, useRef, useEffect } from 'react';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { LoadingContext } from './LoadingContextValue';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current !== null) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const startLoading = useCallback((message = '') => {
    if (hideTimeoutRef.current !== null) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setIsLoading(true);
    setProgress(0);
    setMessage(message);
  }, []);

  const updateProgress = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const stopLoading = useCallback(() => {
    setProgress(100);
    if (hideTimeoutRef.current !== null) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
      setMessage('');
      hideTimeoutRef.current = null;
    }, 500);
  }, []);

  return (
    <LoadingContext.Provider value={{
      isLoading,
      progress,
      message,
      startLoading,
      updateProgress,
      stopLoading
    }}>
      {children}
      {isLoading && <LoadingScreen progress={progress} message={message} />}
    </LoadingContext.Provider>
  );
}
