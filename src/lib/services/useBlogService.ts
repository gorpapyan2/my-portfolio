/**
 * @deprecated This file is maintained for backward compatibility.
 * New code should use:
 * - usePublicBlogPosts() for read-only public access
 * - useBlogAdmin() for admin CRUD operations
 */

import { usePublicBlogPosts, type LocalizedBlogPost } from './usePublicBlogPosts';
import { useBlogAdmin } from './useBlogAdmin';
import type { BlogPostInsert, BlogPostUpdate, BlogPostTranslationInsert } from '../../types/database.types';

// Re-export types for backward compatibility
export type { LocalizedBlogPost };

/**
 * BlogService interface - defines the shape of the blog service
 * @interface BlogService
 * @property {LocalizedBlogPost[]} blogPosts - Array of published blog posts with localized content, sorted by newest first
 * @property {boolean} isLoading - Indicates if data is currently being fetched
 * @property {string|null} error - Error message if an operation fails, null if successful
 * @property {Function} createBlogPost - Creates a new blog post with translations
 * @property {Function} updateBlogPost - Updates an existing blog post
 * @property {Function} deleteBlogPost - Deletes a blog post
 * @property {Function} refreshBlogPosts - Manually refresh the blog posts list
 */
export interface BlogService {
  blogPosts: LocalizedBlogPost[];
  isLoading: boolean;
  error: string | null;
  createBlogPost: (blogPost: BlogPostInsert, translations: BlogPostTranslationInsert[]) => Promise<void>;
  updateBlogPost: (id: string, updates: BlogPostUpdate) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;
  refreshBlogPosts: () => Promise<void>;
}

/**
 * Facade hook for backward compatibility
 * Combines usePublicBlogPosts (for reading) and useBlogAdmin (for CRUD)
 *
 * @deprecated Prefer using usePublicBlogPosts() or useBlogAdmin() directly
 *
 * @param {string} language - Language code ('en', 'ru', 'am') for localized content
 *
 * @example
 * // Public pages (prefer usePublicBlogPosts)
 * const { language } = useLanguage();
 * const { blogPosts, isLoading, error } = useBlogService(language);
 *
 * // Admin pages (prefer useBlogAdmin)
 * const { blogPosts, isLoading, createBlogPost, updateBlogPost, deleteBlogPost } = useBlogService();
 *
 * @returns {BlogService} Service object with blog state and CRUD operations
 */
export function useBlogService(language: 'en' | 'ru' | 'am' = 'en'): BlogService {
  // For public consumption, use the public hook with language support
  const publicService = usePublicBlogPosts(language);

  // For admin operations, use the admin hook (English only for admin)
  const adminService = useBlogAdmin();

  // Combine both services
  // Use public service data (respects language parameter)
  // Use admin service CRUD operations
  return {
    blogPosts: publicService.blogPosts,
    isLoading: publicService.isLoading,
    error: publicService.error,
    refreshBlogPosts: publicService.refreshBlogPosts,
    createBlogPost: adminService.createBlogPost,
    updateBlogPost: adminService.updateBlogPost,
    deleteBlogPost: adminService.deleteBlogPost
  };
}
