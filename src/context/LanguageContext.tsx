import React, { createContext, useContext, useState } from 'react';
import { translations, TranslationKey } from '../translations';
import { useTranslationService } from '../lib/services/useTranslationService';

export type Language = 'en' | 'ru' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isLoading: boolean;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  // Always call the hook, but handle errors gracefully
  const translationService = useTranslationService();

  const t = (key: TranslationKey): string => {
    // Try Supabase translations first, then fallback to static translations
    const supabaseTranslations = translationService.translations[language];
    if (supabaseTranslations && supabaseTranslations[key]) {
      return supabaseTranslations[key];
    }
    
    // Fallback to static translations
    return translations[language][key] || translations['en'][key] || key;
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