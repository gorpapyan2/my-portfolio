import { useState, useCallback, useMemo } from 'react';
import { getFieldValidationState } from '../utils/translationValidation';

export type LanguageCode = 'en' | 'ru' | 'am';

interface FieldValidationState {
  isValid: boolean;
  isEmpty: boolean;
  isWarning: boolean;
  error?: string;
  message?: string;
}

interface UseTranslationFieldValidationReturn {
  validationStates: Record<LanguageCode, FieldValidationState>;
  allValid: boolean;
  hasWarnings: boolean;
  touched: Record<LanguageCode, boolean>;
  setFieldValue: (language: LanguageCode, value: string) => void;
  setFieldTouched: (language: LanguageCode, touched: boolean) => void;
  reset: () => void;
}

/**
 * Hook for managing validation state across all language fields
 * Provides real-time validation feedback without blocking save
 * Only shows errors for fields that have been touched/focused
 */
export function useTranslationFieldValidation(
  initialValues: Record<LanguageCode, string>
): UseTranslationFieldValidationReturn {
  const [values, setValues] = useState<Record<LanguageCode, string>>(initialValues);
  const [touched, setTouched] = useState<Record<LanguageCode, boolean>>({
    en: false,
    ru: false,
    am: false,
  });

  const validationStates = useMemo(() => {
    const states = {
      en: getFieldValidationState(values.en),
      ru: getFieldValidationState(values.ru),
      am: getFieldValidationState(values.am),
    } as Record<LanguageCode, FieldValidationState>;

    // Only show errors for touched fields
    return {
      en: touched.en ? states.en : { ...states.en, error: undefined, isValid: true },
      ru: touched.ru ? states.ru : { ...states.ru, error: undefined, isValid: true },
      am: touched.am ? states.am : { ...states.am, error: undefined, isValid: true },
    };
  }, [values, touched]);

  const allValid = useMemo(
    () => Object.values(validationStates).every((state) => state.isValid),
    [validationStates]
  );

  const hasWarnings = useMemo(
    () => Object.values(validationStates).some((state) => state.isWarning),
    [validationStates]
  );

  const setFieldValue = useCallback((language: LanguageCode, value: string) => {
    setValues((prev) => ({ ...prev, [language]: value }));
  }, []);

  const setFieldTouched = useCallback((language: LanguageCode, isTouched: boolean) => {
    setTouched((prev) => ({ ...prev, [language]: isTouched }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({ en: false, ru: false, am: false });
  }, [initialValues]);

  return {
    validationStates,
    allValid,
    hasWarnings,
    touched,
    setFieldValue,
    setFieldTouched,
    reset,
  };
}
