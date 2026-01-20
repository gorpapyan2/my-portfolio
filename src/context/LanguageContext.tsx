/* eslint-disable react-refresh/only-export-components */
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
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('preferred-language');
    return (stored === 'en' || stored === 'ru' || stored === 'am') ? stored : 'en';
  });
  
  // Wrapper to persist language changes to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };
  
  // Always call the hook, but handle errors gracefully
  const translationService = useTranslationService();

  const t = (key: string): string => {
    const supabaseTranslations = translationService.translations[language];
    const value = supabaseTranslations ? supabaseTranslations[key] : undefined;
    if (value && value.length > 0) return value;
    if (import.meta && (import.meta as unknown as { env?: Record<string, unknown> }).env) {
      if ((import.meta as unknown as { env: Record<string, unknown> }).env.DEV) console.warn(`[i18n] Missing: ${key} (${language})`);
    }
    return `[missing:${key}]`;
  };

  // Provider only manages state - UI rendering is handled by TranslationGate
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
