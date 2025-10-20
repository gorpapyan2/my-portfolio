import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { BlogPost, BlogPostInsert, BlogPostUpdate } from '../../types/database.types';
import { blogPostInsertSchema, blogPostUpdateSchema } from '../schemas/blogSchema';

/**
 * BlogService interface - defines the shape of the blog service
 * @interface BlogService
 * @property {BlogPost[]} blogPosts - Array of published blog posts, sorted by newest first
 * @property {boolean} isLoading - Indicates if data is currently being fetched
 * @property {string|null} error - Error message if an operation fails, null if successful
 * @property {Function} createBlogPost - Creates a new blog post with optimistic updates
 * @property {Function} updateBlogPost - Updates an existing blog post
 * @property {Function} deleteBlogPost - Deletes a blog post
 * @property {Function} refreshBlogPosts - Manually refresh the blog posts list
 */
export interface BlogService {
  blogPosts: BlogPost[];
  isLoading: boolean;
  error: string | null;
  createBlogPost: (blogPost: BlogPostInsert) => Promise<void>;
  updateBlogPost: (id: string, updates: BlogPostUpdate) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;
  refreshBlogPosts: () => Promise<void>;
}

/**
 * Service hook for managing blog posts from Supabase
 * Provides full CRUD operations with optimistic updates and validation
 * Only fetches published blog posts for public display
 * 
 * @example
 * const { blogPosts, isLoading, error, createBlogPost, updateBlogPost, deleteBlogPost, refreshBlogPosts } = useBlogService();
 * 
 * if (isLoading) return <LoadingSpinner />;
 * if (error) return <ErrorDisplay message={error} />;
 * 
 * return (
 *   <>
 *     {blogPosts.map(post => <BlogCard key={post.id} post={post} />)}
 *   </>
 * );
 * 
 * @returns {BlogService} Service object with blog state and CRUD operations
 */
export function useBlogService(): BlogService {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load blog posts from Supabase
  const loadBlogPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load blog posts');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // CRUD operations with optimistic updates
  const createBlogPost = useCallback(async (blogPost: BlogPostInsert) => {
    try {
      // Validate input
      const validatedData = blogPostInsertSchema.parse(blogPost);
      
      // Optimistic update
      const tempId = `temp-${Date.now()}`;
      const tempBlogPost: BlogPost = {
        id: tempId,
        ...validatedData,
        published: validatedData.published ?? true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setBlogPosts(prev => [tempBlogPost, ...prev]);

      const { data, error } = await supabase
        .from('blog_posts')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Replace temp with real data
      setBlogPosts(prev => prev.map(post => 
        post.id === tempId ? data : post
      ));
    } catch (err) {
      // Revert optimistic update
      setBlogPosts(prev => prev.filter(post => !post.id.startsWith('temp-')));
      console.error('Error creating blog post:', err);
      throw err;
    }
  }, []);

  const updateBlogPost = useCallback(async (id: string, updates: BlogPostUpdate) => {
    try {
      // Validate input
      const validatedData = blogPostUpdateSchema.parse(updates);
      
      // Optimistic update
      setBlogPosts(prev => prev.map(post => 
        post.id === id ? { ...post, ...validatedData } : post
      ));

      const { data, error } = await supabase
        .from('blog_posts')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update with real data
      setBlogPosts(prev => prev.map(post => 
        post.id === id ? data : post
      ));
    } catch (err) {
      // Revert optimistic update
      await loadBlogPosts();
      console.error('Error updating blog post:', err);
      throw err;
    }
  }, [loadBlogPosts]);

  const deleteBlogPost = useCallback(async (id: string) => {
    try {
      // Optimistic update
      setBlogPosts(prev => prev.filter(post => post.id !== id));

      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      // Revert optimistic update by reloading
      await loadBlogPosts();
      console.error('Error deleting blog post:', err);
      throw err;
    }
  }, [loadBlogPosts]);

  const refreshBlogPosts = useCallback(async () => {
    await loadBlogPosts();
  }, [loadBlogPosts]);

  // Load blog posts on mount
  useEffect(() => {
    loadBlogPosts();
  }, [loadBlogPosts]);

  return {
    blogPosts,
    isLoading,
    error,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    refreshBlogPosts
  };
}
