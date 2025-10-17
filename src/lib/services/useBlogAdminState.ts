import { useState, useCallback } from 'react';
import { BlogPost, BlogPostInsert } from '../../types/database.types';
import { FieldErrors, mapZodErrors } from '../utils/zodErrorHandler';

/**
 * Initial empty form state for creating new blog posts
 */
export const INITIAL_FORM_STATE: Partial<BlogPostInsert> = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  image: '',
  read_time: '',
  published: true
};

/**
 * Hook for managing blog admin form state
 * Handles form data, editing state, validation errors, and form resets
 */
export function useBlogAdminState() {
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPostInsert>>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FieldErrors>({});

  /**
   * Completely resets form to initial state
   */
  const resetForm = useCallback(() => {
    setShowEditor(false);
    setEditingPost(null);
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
  }, []);

  /**
   * Prepares form for editing an existing post
   */
  const setEditingPostData = useCallback((post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content || '',
      image: post.image || '',
      read_time: post.read_time,
      published: post.published
    });
    setShowEditor(true);
    setErrors({});
  }, []);

  /**
   * Handles form field changes
   */
  const handleFormChange = useCallback((updates: Partial<BlogPostInsert>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  /**
   * Maps validation errors from Zod schema
   */
  const handleValidationError = useCallback((error: unknown) => {
    const fieldErrors = mapZodErrors(error);
    setErrors(fieldErrors);
  }, []);

  /**
   * Clears a specific field error
   */
  const clearFieldError = useCallback((fieldName: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  return {
    // State
    showEditor,
    editingPost,
    formData,
    errors,
    
    // Setters
    setShowEditor,
    setEditingPost,
    setFormData,
    setErrors,
    
    // Methods
    resetForm,
    setEditingPostData,
    handleFormChange,
    handleValidationError,
    clearFieldError,
    
    // Helpers
    isEditing: editingPost !== null
  };
}
