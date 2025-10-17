import { ZodError } from 'zod';

export interface FieldErrors {
  [key: string]: string;
}

/**
 * Maps Zod validation errors to field-specific error messages
 * @param error - The error from form validation
 * @returns Object mapping field names to error messages
 */
export function mapZodErrors(error: unknown): FieldErrors {
  if (error instanceof ZodError) {
    const fieldErrors: FieldErrors = {};
    error.issues.forEach((issue) => {
      const fieldPath = issue.path[0]?.toString() || 'root';
      fieldErrors[fieldPath] = issue.message;
    });
    return fieldErrors;
  }
  
  // Fallback for non-Zod errors
  if (error instanceof Error) {
    return { root: error.message };
  }
  
  return { root: 'An unexpected error occurred during validation' };
}

/**
 * Type guard to check if error is a ZodError
 */
export function isZodError(error: unknown): error is ZodError {
  return error instanceof ZodError;
}
