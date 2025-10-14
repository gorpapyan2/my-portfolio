import { z } from 'zod';

export const experienceSchema = z.object({
  role: z.string().min(1, 'Role is required').max(100, 'Role must be less than 100 characters'),
  company: z.string().min(1, 'Company is required').max(100, 'Company must be less than 100 characters'),
  period: z.string().min(1, 'Period is required').max(50, 'Period must be less than 50 characters'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be less than 1000 characters'),
  achievements: z.array(z.string().min(1, 'Achievement cannot be empty')).optional().default([]),
  order_index: z.number().int().min(0).optional().default(0)
});

export type ExperienceFormData = z.infer<typeof experienceSchema>;
