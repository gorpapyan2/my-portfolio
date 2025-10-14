import { z } from 'zod';

// Contact form validation schemas
export const contactFormSchema = z.object({
  from_name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  from_email: z.string().email('Invalid email address').max(255, 'Email too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long')
});

export const contactSubmissionSchema = contactFormSchema.extend({
  status: z.enum(['new', 'read', 'replied', 'archived']).optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactSubmissionData = z.infer<typeof contactSubmissionSchema>;
