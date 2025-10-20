import React, { createContext, useContext, useState } from 'react';
// DB-only i18n: no static fallback here
import { useTranslationService } from '../lib/services/useTranslationService';

export type Language = 'en' | 'ru' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  // Always call the hook, but handle errors gracefully
  const translationService = useTranslationService();

  const t = (key: string): string => {
    const supabaseTranslations = translationService.translations[language];
    const value = supabaseTranslations ? supabaseTranslations[key] : undefined;
    if (value && value.length > 0) return value;
    if (import.meta && (import.meta as unknown as { env?: Record<string, unknown> }).env) {
      // eslint-disable-next-line no-console
      if ((import.meta as unknown as { env: Record<string, unknown> }).env.DEV) console.warn(`[i18n] Missing: ${key} (${language})`);
    }
    return `[missing:${key}]`;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      isLoading: translationService.isLoading,
      error: translationService.error
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};