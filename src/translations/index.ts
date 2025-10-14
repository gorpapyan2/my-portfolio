import { en } from './en';
import { ru } from './ru';
import { am } from './am';

export type TranslationKey = keyof typeof en;

export const translations: Record<'en' | 'ru' | 'am', Record<TranslationKey, string>> = {
  en,
  ru,
  am,
};