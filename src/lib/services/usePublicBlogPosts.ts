import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { BlogPost, BlogPostTranslation } from '../../types/database.types';

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
 * PublicBlogPostsService interface - read-only blog service for public consumption
 */
export interface PublicBlogPostsService {
  blogPosts: LocalizedBlogPost[];
  isLoading: boolean;
  error: string | null;
  refreshBlogPosts: () => Promise<void>;
}

/**
 * Hook for fetching published blog posts with multi-language support
 * Read-only service for public-facing pages
 *
 * Features:
 * - Fetches only published blog posts
 * - Automatic translation loading with fallback to English
 * - Optimized for public consumption (no CRUD operations)
 *
 * @param {string} language - Language code ('en', 'ru', 'am') for localized content
 *
 * @example
 * ```tsx
 * const { language } = useLanguage();
 * const { blogPosts, isLoading, error } = usePublicBlogPosts(language);
 *
 * if (isLoading) return <LoadingSpinner />;
 * if (error) return <ErrorDisplay message={error} />;
 *
 * return <BlogGrid posts={blogPosts} />;
 * ```
 *
 * @returns {PublicBlogPostsService} Service object with blog posts and state
 */
export function usePublicBlogPosts(language: 'en' | 'ru' | 'am' = 'en'): PublicBlogPostsService {
  const [blogPosts, setBlogPosts] = useState<LocalizedBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load blog posts from Supabase with translations
  const loadBlogPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch published blog posts only
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
              .maybeSingle();
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

  const refreshBlogPosts = useCallback(async () => {
    await loadBlogPosts();
  }, [loadBlogPosts]);

  // Load blog posts on mount and when language changes
  useEffect(() => {
    loadBlogPosts();
  }, [loadBlogPosts]);

  return {
    blogPosts,
    isLoading,
    error,
    refreshBlogPosts
  };
}
