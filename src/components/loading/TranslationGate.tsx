import { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationLoadingScreen } from './TranslationLoadingScreen';
import { ErrorScreen } from './ErrorScreen';

interface TranslationGateProps {
  children: ReactNode;
}

/**
 * TranslationGate - Gates the application until translations are loaded
 *
 * Separates UI rendering concerns from the LanguageContext provider.
 * Shows loading/error screens while translations are being fetched.
 *
 * @example
 * ```tsx
 * <LanguageProvider>
 *   <TranslationGate>
 *     <App />
 *   </TranslationGate>
 * </LanguageProvider>
 * ```
 */
export function TranslationGate({ children }: TranslationGateProps) {
  const { isLoading, error, language } = useLanguage();

  // Show loading screen while translations are being fetched
  if (isLoading) {
    return <TranslationLoadingScreen />;
  }

  // Show error screen if translations failed to load
  if (error) {
    // Use fallback translations directly since translation service failed
    const fallbackTitle = language === 'ru'
      ? 'Не удалось загрузить язык'
      : language === 'am'
      ? 'Լեզուն բեռնել չհաջողվեց'
      : 'Unable to Load Your Language';

    const fallbackMessage = language === 'ru'
      ? 'Мы не смогли загрузить настройки вашего языка. Это может быть временной проблемой.'
      : language === 'am'
      ? 'Ձեր նախընտրած լեզվի կարգավորումները բեռնել չհաջողվեց: Սա կարող է լինել ժամանակավոր խնդիր:'
      : "We couldn't load your preferred language settings. This might be a temporary issue.";

    const fallbackRetry = language === 'ru' ? 'Попробовать снова' : language === 'am' ? 'Փորձել կրկին' : 'Try Again';

    return (
      <ErrorScreen
        title={fallbackTitle}
        message={fallbackMessage}
        onRetry={() => window.location.reload()}
        retryText={fallbackRetry}
      />
    );
  }

  // Translations loaded successfully - render the application
  return <>{children}</>;
}
