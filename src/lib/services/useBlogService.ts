import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { BlogPost, BlogPostInsert, BlogPostUpdate, BlogPostTranslationInsert, BlogPostTranslation } from '../../types/database.types';
import { blogPostInsertSchema, blogPostUpdateSchema } from '../schemas/blogSchema';

/**
 * LocalizedBlogPost - Blog post with localized content
 * Combines base blog_posts data with localized translation
 */
export interface LocalizedBlogPost extends Omit<BlogPost, 'title' | 'excerpt' | 'content'> {
  title: string;
  excerpt: string;
  content: string | null;
  language: 'en' | 'ru' | 'am';
}

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
 * Service hook for managing blog posts from Supabase with multi-language support
 * Provides full CRUD operations with optimistic updates and validation
 * Only fetches published blog posts for public display with localized content
 * 
 * @param {string} language - Language code ('en', 'ru', 'am') for localized content
 * 
 * @example
 * const { language } = useLanguage();
 * const { blogPosts, isLoading, error, createBlogPost, updateBlogPost, deleteBlogPost, refreshBlogPosts } = useBlogService(language);
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
export function useBlogService(language: 'en' | 'ru' | 'am' = 'en'): BlogService {
  const [blogPosts, setBlogPosts] = useState<LocalizedBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load blog posts from Supabase with translations
  const loadBlogPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch blog posts with their translations
      const { data: posts, error: postsError } = await supabase
        .from('blog_posts')
        .select('id, slug, image, read_time, published, created_at, updated_at, title, excerpt, content')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      if (!posts || posts.length === 0) {
        setBlogPosts([]);
        return;
      }

      // Type cast posts to BlogPost[]
      const typedPosts = posts as BlogPost[];

      // Fetch all translations for these posts in the requested language
      const postIds = typedPosts.map(p => p.id);
      const { data: translations, error: translationsError } = await supabase
        .from('blog_post_translations')
        .select('*')
        .in('blog_post_id', postIds)
        .eq('language', language);

      if (translationsError) throw translationsError;

      // Type cast translations
      const typedTranslations = (translations || []) as BlogPostTranslation[];

      // Create lookup map for translations
      const translationMap = new Map(
        typedTranslations.map(t => [t.blog_post_id, t])
      );

      // Combine posts with their translations
      // Falls back to English if translation not available for requested language
      const localizedPosts = await Promise.all(
        typedPosts.map(async (post) => {
          let translation = translationMap.get(post.id);
          
          // Fallback to English if translation not found
          if (!translation && language !== 'en') {
            const { data: enTranslation } = await supabase
              .from('blog_post_translations')
              .select('*')
              .eq('blog_post_id', post.id)
              .eq('language', 'en')
              .single();
            translation = (enTranslation as unknown as BlogPostTranslation) || undefined;
          }

          return {
            ...post,
            title: translation?.title || post.title || '',
            excerpt: translation?.excerpt || post.excerpt || '',
            content: translation?.content || post.content || null,
            language: translation?.language || language
          } as LocalizedBlogPost;
        })
      );

      setBlogPosts(localizedPosts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load blog posts');
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  // CRUD operations with optimistic updates
  const createBlogPost = useCallback(async (blogPost: BlogPostInsert, translations: BlogPostTranslationInsert[]) => {
    try {
      // Validate input
      const validatedData = blogPostInsertSchema.parse(blogPost);
      
      // Create blog post first
      const { data: newPost, error: postError } = await supabase
        .from('blog_posts')
        .insert(validatedData as any)
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
        .insert(translationsToInsert as any);

      if (translationsError) throw translationsError;

      // Refresh posts to include the new one
      await loadBlogPosts();
    } catch (err) {
      console.error('Error creating blog post:', err);
      throw err;
    }
  }, [loadBlogPosts]);

  const updateBlogPost = useCallback(async (id: string, updates: BlogPostUpdate) => {
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
      await loadBlogPosts();
    } catch (err) {
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
