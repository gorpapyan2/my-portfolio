import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, BookOpen, RotateCw } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { MarkdownRenderer } from '../../components/markdown/MarkdownRenderer';
import { Toc } from '../../components/markdown/Toc';
import { BlogCard } from './BlogCard';
import { ReadingProgress } from '../../components/ReadingProgress';
import { ShareButton } from '../../components/ShareButton';
import { useBlogService } from '../../lib/services/useBlogService';
import { useToc } from '../../hooks/useToc';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

/**
 * Formats a date string to readable format with error handling
 */
function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return 'Date unavailable';
  }
}

/**
 * Gets related posts excluding current post, limited to 3
 */
function getRelatedPosts(currentPostId: string, allPosts: any[], limit: number = 3) {
  return allPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
}

export function BlogViewPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const { blogPosts, isLoading, error, refreshBlogPosts } = useBlogService(language);
  const [isRetrying, setIsRetrying] = useState(false);

  if (!slug) {
    return <Navigate to=".." relative="path" replace />;
  }

  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.slug === slug);

  // Extract TOC from post content
  const { headings } = useToc(blogPost?.content || '');

  // Handle loading state
  if (isLoading && !blogPost) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageLayout>
    );
  }

  // Handle not found state
  if (!isLoading && !blogPost) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              <TranslationText translationKey="blog.notFound.title" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-gray-400 mb-6">
              <TranslationText translationKey="blog.notFound.description" as="span" shimmerWidth="300px" />
            </p>
            <Link 
              to=".." 
              relative="path"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <TranslationText translationKey="blog.back" shimmerWidth="100px" />
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Handle error state
  if (error && !blogPost) {
    const handleRetry = async () => {
      setIsRetrying(true);
      try {
        await refreshBlogPosts();
      } finally {
        setIsRetrying(false);
      }
    };

    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-400 mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              <TranslationText translationKey="blog.error.title" as="span" shimmerWidth="150px" />
            </h2>
            <p className="text-gray-400 mb-2 text-sm">{error}</p>
            <p className="text-gray-500 mb-6 text-sm">
              <TranslationText translationKey="blog.error.description" as="span" shimmerWidth="300px" />
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCw className={`h-4 w-4 ${isRetrying ? 'animate-spin' : ''}`} />
                {isRetrying ? (
                  <TranslationText translationKey="blog.error.retrying" shimmerWidth="100px" />
                ) : (
                  <TranslationText translationKey="blog.error.retry" shimmerWidth="80px" />
                )}
              </button>
              <Link 
                to=".." 
                relative="path"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                <TranslationText translationKey="blog.back" shimmerWidth="100px" />
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Post not found and no error (shouldn't happen, but safeguard)
  if (!blogPost) {
    return <Navigate to=".." relative="path" replace />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const relatedPosts = getRelatedPosts(blogPost.id, blogPosts);
  const formattedDate = formatDate(blogPost.created_at);
  const hasImage = Boolean(blogPost.image);
  // Use localized content from database
  const hasContent = Boolean(blogPost.content);

  return (
    <PageLayout className="!overflow-visible">
      <ReadingProgress />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          to=".." 
          relative="path"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <TranslationText translationKey="blog.back" shimmerWidth="100px" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                {blogPost.title}
              </h1>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.read_time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <TranslationText translationKey="author.name" as="span" shimmerWidth="100px" />
                </div>
                <ShareButton 
                  title={blogPost.title}
                  url={currentUrl}
                />
              </div>

              {/* Featured Image */}
              {hasImage && (
                <div className="relative aspect-video overflow-hidden rounded-xl mb-8 shadow-2xl">
                  <img
                    src={blogPost.image || ''}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              {/* Excerpt */}
                <div className="text-xl text-gray-300 max-w-4xl mx-auto leading-[1.65]">
                <p>{blogPost.excerpt}</p>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none mb-8">
              {hasContent ? (
                <MarkdownRenderer 
                  content={blogPost.content || ''}
                  className="prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-code:text-[#edfc3a] prose-pre:bg-white/5 prose-blockquote:border-[#edfc3a] leading-[1.7]"
                />
              ) : (
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">
                    <TranslationText translationKey="blog.noContent" as="span" shimmerWidth="200px" />
                  </p>
                </div>
              )}
            </article>

            {/* Footer Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 mt-16 border-t border-white/10">
              <Link 
                to=".." 
                relative="path"
                className="inline-flex items-center gap-2 text-[#edfc3a] hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <TranslationText translationKey="blog.back" shimmerWidth="100px" />
              </Link>
              
              <div className="text-sm text-gray-400">
                <TranslationText translationKey="blog.publishedOn" shimmerWidth="120px" /> {formattedDate}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Table of contents sidebar">
            <div className="sticky top-24 self-start space-y-6">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <Toc headings={headings} />
              )}
            </div>
          </aside>
        </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <TranslationText translationKey="blog.related.title" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-gray-400 text-lg">
              <TranslationText translationKey="blog.related.subtitle" as="span" shimmerWidth="250px" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                content={post.content}
                image={post.image}
                created_at={post.created_at}
                read_time={post.read_time}
              />
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  );
}
