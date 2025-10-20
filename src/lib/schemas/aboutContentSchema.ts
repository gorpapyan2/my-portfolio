import { z } from 'zod';

// Valid groups for about page lists
export const aboutGroupSchema = z.enum(['summary', 'keyResults', 'languages']);

// Key format: about.<group>.<index>
export const aboutKeySchema = z
  .string()
  .regex(/^about\.(summary|keyResults|languages)\.(\d+)$/, {
    message: 'Key must be in format about.<group>.<index>'
  });

export const aboutItemValueSchema = z
  .string()
  .min(1, 'Value is required')
  .max(1000, 'Value is too long');

export const aboutInsertSchema = z.object({
  key: aboutKeySchema,
  language: z.enum(['en', 'ru', 'am']),
  value: aboutItemValueSchema,
  category: z.literal('about')
});

export const aboutUpdateSchema = z.object({
  value: aboutItemValueSchema.optional(),
  key: aboutKeySchema.optional(),
  language: z.enum(['en', 'ru', 'am']).optional(),
  category: z.literal('about').optional()
});

export type AboutGroup = z.infer<typeof aboutGroupSchema>;

