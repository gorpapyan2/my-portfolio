import { z } from 'zod';

// Blog post validation schemas
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  slug: z.string().min(1, 'Slug is required').max(255, 'Slug too long')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().min(1, 'Excerpt is required').max(500, 'Excerpt too long'),
  content: z.string().optional(),
  image: z.string().url('Invalid image URL').optional().or(z.literal('')),
  read_time: z.string().min(1, 'Read time is required').max(50, 'Read time too long'),
  published: z.boolean().optional()
});

export const blogPostInsertSchema = blogPostSchema;
export const blogPostUpdateSchema = blogPostSchema.partial();

export type BlogPostFormData = z.infer<typeof blogPostSchema>;
