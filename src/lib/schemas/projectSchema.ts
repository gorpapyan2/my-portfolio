import { z } from 'zod';

// Project validation schemas
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description too long'),
  image: z.string().url('Invalid image URL').optional().or(z.literal('')),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')).max(10, 'Too many tags'),
  live_url: z.string().url('Invalid live URL').optional().or(z.literal('')),
  github_url: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  order_index: z.number().int().min(0, 'Order must be non-negative').optional(),
  featured: z.boolean().optional()
});

export const projectInsertSchema = projectSchema;
export const projectUpdateSchema = projectSchema.partial();

export type ProjectFormData = z.infer<typeof projectSchema>;
