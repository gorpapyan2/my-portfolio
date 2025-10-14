import { createContext, useState, useCallback } from 'react';
import { LoadingScreen } from '../components/loading/LoadingScreen';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  message: string;
  startLoading: (message?: string) => void;
  updateProgress: (progress: number) => void;
  stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const startLoading = useCallback((message = '') => {
    setIsLoading(true);
    setProgress(0);
    setMessage(message);
  }, []);

  const updateProgress = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const stopLoading = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
      setMessage('');
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