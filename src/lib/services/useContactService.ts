import { useState, useCallback } from 'react';
import { supabase } from '../supabase';
import { ContactSubmissionInsert } from '../../types/database.types';
import { contactSubmissionSchema } from '../schemas/contactSchema';

export interface ContactService {
  isLoading: boolean;
  error: string | null;
  createSubmission: (submission: ContactSubmissionInsert) => Promise<void>;
}

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
