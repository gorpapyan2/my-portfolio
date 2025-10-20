import { useState, useCallback } from 'react';
import { supabase } from '../supabase';
import { ContactSubmissionInsert } from '../../types/database.types';
import { contactSubmissionSchema } from '../schemas/contactSchema';

/**
 * ContactService interface - defines the shape of the contact submission service
 * @interface ContactService
 * @property {boolean} isLoading - Indicates if submission is being processed
 * @property {string|null} error - Error message if submission fails, null if successful
 * @property {Function} createSubmission - Creates a new contact form submission with validation
 */
export interface ContactService {
  isLoading: boolean;
  error: string | null;
  createSubmission: (submission: ContactSubmissionInsert) => Promise<void>;
}

/**
 * Service hook for managing contact form submissions to Supabase
 * Provides create-only operation for contact submissions with validation
 * Used by ContactForm component to log user inquiries
 * 
 * @example
 * const { isLoading, error, createSubmission } = useContactService();
 * 
 * const handleSubmit = async (formData) => {
 *   try {
 *     await createSubmission({
 *       from_name: formData.name,
 *       from_email: formData.email,
 *       message: formData.message,
 *       status: 'new'
 *     });
 *     alert('Thank you for contacting me!');
 *   } catch (err) {
 *     alert('Failed to send message: ' + error);
 *   }
 * };
 * 
 * @returns {ContactService} Service object with submission state and create operation
 */
export function useContactService(): ContactService {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create contact submission
  const createSubmission = useCallback(async (submission: ContactSubmissionInsert) => {
    try {
      setIsLoading(true);
      setError(null);

      // Validate input
      const validatedData = contactSubmissionSchema.parse(submission);

      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert(validatedData);

      if (supabaseError) {
        throw supabaseError;
      }
    } catch (err) {
      console.error('Error creating contact submission:', err);
      setError(err instanceof Error ? err.message : 'Failed to save contact submission');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    createSubmission
  };
}
