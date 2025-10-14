import { z } from 'zod';

// Translation validation schemas
export const translationSchema = z.object({
  key: z.string().min(1, 'Key is required').max(255, 'Key too long'),
  language: z.enum(['en', 'ru', 'am'], {
    errorMap: () => ({ message: 'Language must be en, ru, or am' })
  }),
  value: z.string().min(1, 'Value is required'),
  category: z.string().min(1, 'Category is required').max(50, 'Category too long').optional()
});

export const translationInsertSchema = translationSchema;
export const translationUpdateSchema = translationSchema.partial();

// Bulk import schema for translations
export const bulkTranslationSchema = z.object({
  en: z.record(z.string(), z.string()).optional(),
  ru: z.record(z.string(), z.string()).optional(),
  am: z.record(z.string(), z.string()).optional()
});

export type TranslationFormData = z.infer<typeof translationSchema>;
export type BulkTranslationData = z.infer<typeof bulkTranslationSchema>;
