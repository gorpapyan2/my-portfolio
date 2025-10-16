import { z } from 'zod';

export const featureFlagInsertSchema = z.object({
  flag_key: z.string().min(1, 'Flag key is required').max(100, 'Flag key must be less than 100 characters'),
  content_type: z.enum(['section', 'blog_post', 'project'], {
    errorMap: () => ({ message: 'Content type must be section, blog_post, or project' })
  }),
  content_id: z.string().uuid().nullable().optional(),
  enabled: z.boolean().default(true),
  description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters')
});

export const featureFlagUpdateSchema = z.object({
  flag_key: z.string().min(1, 'Flag key is required').max(100, 'Flag key must be less than 100 characters').optional(),
  content_type: z.enum(['section', 'blog_post', 'project'], {
    errorMap: () => ({ message: 'Content type must be section, blog_post, or project' })
  }).optional(),
  content_id: z.string().uuid().nullable().optional(),
  enabled: z.boolean().optional(),
  description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters').optional()
});

export type FeatureFlagInsertInput = z.infer<typeof featureFlagInsertSchema>;
export type FeatureFlagUpdateInput = z.infer<typeof featureFlagUpdateSchema>;
