import { useLanguage } from '../context/LanguageContext';

/**
 * Hook that returns translation with shimmer detection
 * Use this when you need the raw value but want to handle missing state
 */
export function useTranslationText(key: string) {
  const { t, isLoading } = useLanguage();
  const translation = t(key);
  const isMissing = translation.startsWith('[missing:');
  
  return {
    text: translation,
    isMissing,
    isLoading,
    showShimmer: isMissing || isLoading,
  };
}

