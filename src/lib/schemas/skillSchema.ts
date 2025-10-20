import { z } from 'zod';

export const skillSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters'),
  icon: z.string().min(1, 'Icon is required').max(50, 'Icon must be less than 50 characters'),
  category: z.string().min(1, 'Category is required').default('General'),
  level: z.number().int().min(0, 'Level must be at least 0').max(100, 'Level must be at most 100'),
  order_index: z.number().int().min(0).optional().default(0)
});

export type SkillFormData = z.infer<typeof skillSchema>;
