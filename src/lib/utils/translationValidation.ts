import { z } from 'zod';

// Validation constants
export const TRANSLATION_LIMITS = {
  MIN_LENGTH: 1,
  SOFT_LIMIT: 200,
  HARD_LIMIT: 500,
} as const;

export const LANGUAGE_HINTS = {
  en: {
    name: 'English',
    placeholder: 'Enter English translation',
    hint: 'Clear, concise English text',
  },
  ru: {
    name: 'Русский',
    placeholder: 'Введите русский перевод',
    hint: 'Ясный русский текст',
    direction: 'ltr',
  },
  am: {
    name: 'Հայերեն',
    placeholder: 'Մուտքագրեք հայերեն թարգմանությունը',
    hint: 'Հայերեն թարգմանություն',
    direction: 'ltr',
  },
} as const;

/**
 * Validation state for a single field
 */
export interface FieldValidationState {
  isValid: boolean;
  isEmpty: boolean;
  isWarning: boolean;
  error?: string;
  message?: string;
}

/**
 * Validates a single translation field value
 */
export const translationFieldSchema = z
  .string()
  .min(TRANSLATION_LIMITS.MIN_LENGTH, 'Translation cannot be empty')
  .max(TRANSLATION_LIMITS.HARD_LIMIT, `Translation cannot exceed ${TRANSLATION_LIMITS.HARD_LIMIT} characters`);

/**
 * Determines validation state for a translation field
 */
export function getFieldValidationState(value: string): FieldValidationState {
  if (!value || value.trim().length === 0) {
    return {
      isValid: false,
      isEmpty: true,
      isWarning: false,
      error: 'Translation cannot be empty',
    };
  }

  if (value.length > TRANSLATION_LIMITS.HARD_LIMIT) {
    return {
      isValid: false,
      isEmpty: false,
      isWarning: false,
      error: `Translation exceeds ${TRANSLATION_LIMITS.HARD_LIMIT} character limit`,
    };
  }

  if (value.length >= TRANSLATION_LIMITS.SOFT_LIMIT) {
    return {
      isValid: true,
      isEmpty: false,
      isWarning: true,
      message: `${value.length}/${TRANSLATION_LIMITS.HARD_LIMIT} characters (warning: approaching limit)`,
    };
  }

  return {
    isValid: true,
    isEmpty: false,
    isWarning: false,
    message: `${value.length}/${TRANSLATION_LIMITS.HARD_LIMIT} characters`,
  };
}

/**
 * Check if a value has changed from original
 */
export function hasChanged(original: string, current: string): boolean {
  return original.trim() !== current.trim();
}

/**
 * Get diff summary between original and current
 */
export function getDiffSummary(
  original: string,
  current: string
): { added: number; removed: number; changed: boolean } {
  const originalLength = original.length;
  const currentLength = current.length;
  const added = Math.max(0, currentLength - originalLength);
  const removed = Math.max(0, originalLength - currentLength);

  return {
    added,
    removed,
    changed: hasChanged(original, current),
  };
}
