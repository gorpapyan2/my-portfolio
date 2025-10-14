import { z } from 'zod';

export const educationSchema = z.object({
  degree: z.string().min(1, 'Degree is required').max(200, 'Degree must be less than 200 characters'),
  school: z.string().min(1, 'School is required').max(200, 'School must be less than 200 characters'),
  year: z.string().min(1, 'Year is required').max(50, 'Year must be less than 50 characters'),
  description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters'),
  order_index: z.number().int().min(0).optional().default(0)
});

export type EducationFormData = z.infer<typeof educationSchema>;
