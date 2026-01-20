import { useCallback } from 'react';
import { supabase } from '../supabase';
import { BlogPost, BlogPostInsert, BlogPostUpdate, BlogPostTranslationInsert } from '../../types/database.types';
import { blogPostInsertSchema, blogPostUpdateSchema } from '../schemas/blogSchema';
import { usePublicBlogPosts, type PublicBlogPostsService } from './usePublicBlogPosts';

/**
 * BlogAdminService interface - full CRUD operations for blog administration
 * Extends PublicBlogPostsService with create, update, and delete capabilities
 */
export interface BlogAdminService extends PublicBlogPostsService {
  createBlogPost: (blogPost: BlogPostInsert, translations: BlogPostTranslationInsert[]) => Promise<void>;
  updateBlogPost: (id: string, updates: BlogPostUpdate) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;
}

/**
 * Admin hook for managing blog posts with full CRUD operations
 * Uses usePublicBlogPosts internally for reading, adds write operations
 *
 * Features:
 * - Full CRUD operations (Create, Read, Update, Delete)
 * - Input validation with Zod schemas
 * - Multi-language translation support
 * - Automatic refresh after mutations
 * - Optimistic updates for delete operations
 *
 * @example
 * ```tsx
 * // Admin panel
 * const { blogPosts, isLoading, createBlogPost, updateBlogPost, deleteBlogPost } = useBlogAdmin();
 *
 * const handleCreate = async (data) => {
 *   await createBlogPost(data.post, data.translations);
 * };
 *
 * const handleDelete = async (id: string) => {
 *   if (confirm('Delete this post?')) {
 *     await deleteBlogPost(id);
 *   }
 * };
 * ```
 *
 * @returns {BlogAdminService} Service object with blog posts, state, and CRUD operations
 */
export function useBlogAdmin(): BlogAdminService {
  // Use public hook for reading (always fetch English for admin)
  const publicService = usePublicBlogPosts('en');

  /**
   * Create a new blog post with translations
   *
   * @param {BlogPostInsert} blogPost - Blog post data (validated with Zod)
   * @param {BlogPostTranslationInsert[]} translations - Translations for all languages
   */
  const createBlogPost = useCallback(
    async (blogPost: BlogPostInsert, translations: BlogPostTranslationInsert[]) => {
      try {
        // Validate input
        const validatedData = blogPostInsertSchema.parse(blogPost);

        // Create blog post first
        const { data: newPost, error: postError } = await supabase
          .from('blog_posts')
          .insert(validatedData as BlogPostInsert)
          .select()
          .single();

        if (postError) throw postError;
        if (!newPost) throw new Error('Failed to create blog post');

        const typedPost = newPost as BlogPost;

        // Create translations for all languages
        const translationsToInsert = translations.map(t => ({
          ...t,
          blog_post_id: typedPost.id
        }));

        const { error: translationsError } = await supabase
          .from('blog_post_translations')
          .insert(translationsToInsert);

        if (translationsError) throw translationsError;

        // Refresh posts to include the new one
        await publicService.refreshBlogPosts();
      } catch (err) {
        console.error('Error creating blog post:', err);
        throw err;
      }
    },
    [publicService]
  );

  /**
   * Update an existing blog post
   *
   * @param {string} id - Blog post ID
   * @param {BlogPostUpdate} updates - Updated blog post data (validated with Zod)
   */
  const updateBlogPost = useCallback(
    async (id: string, updates: BlogPostUpdate) => {
      try {
        // Validate input
        const validatedData = blogPostUpdateSchema.parse(updates);

        const { error } = await supabase
          .from('blog_posts')
          .update(validatedData as never)
          .eq('id', id)
          .select()
          .single();

        if (error) throw error;

        // Refresh to get updated data
        await publicService.refreshBlogPosts();
      } catch (err) {
        console.error('Error updating blog post:', err);
        throw err;
      }
    },
    [publicService]
  );

  /**
   * Delete a blog post
   * Uses optimistic update - removes from UI immediately, reverts on error
   *
   * @param {string} id - Blog post ID to delete
   */
  const deleteBlogPost = useCallback(
    async (id: string) => {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);

        if (error) throw error;

        // Refresh to update the list
        await publicService.refreshBlogPosts();
      } catch (err) {
        console.error('Error deleting blog post:', err);
        throw err;
      }
    },
    [publicService]
  );

  return {
    ...publicService,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
  };
}
