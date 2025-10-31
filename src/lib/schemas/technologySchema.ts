import { z } from 'zod';

// Technology validation schemas
export const technologySchema = z.object({
  slug: z.string().min(1, 'Slug is required').max(100, 'Slug too long'),
  language: z.enum(['en', 'ru', 'am'], {
    errorMap: () => ({ message: 'Language must be en, ru, or am' })
  }),
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description too long'),
  category: z.string().min(1, 'Category is required').max(100, 'Category too long'),
  level: z.number().int().min(0, 'Level must be at least 0').max(100, 'Level must be at most 100'),
  icon_name: z.string().optional()
});

export const technologyInsertSchema = technologySchema;
export const technologyUpdateSchema = technologySchema.partial();

// Technology details validation schemas
export const technologyDetailSchema = z.object({
  technology_id: z.string().uuid('Invalid UUID'),
  language: z.enum(['en', 'ru', 'am'], {
    errorMap: () => ({ message: 'Language must be en, ru, or am' })
  }),
  detailed_description: z.array(z.string()).min(1, 'At least one detailed description is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  real_world_example: z.string().min(1, 'Real world example is required').max(2000, 'Example too long')
});

export const technologyDetailInsertSchema = technologyDetailSchema;
export const technologyDetailUpdateSchema = technologyDetailSchema.partial();

export type TechnologyFormData = z.infer<typeof technologySchema>;
export type TechnologyDetailFormData = z.infer<typeof technologyDetailSchema>;

