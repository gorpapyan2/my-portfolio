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
function formatDate(dateString: string, t: (key: string) => string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return t('blog.dateUnavailable');
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
            <BookOpen className="h-[var(--space-64)] w-[var(--space-64)] text-[var(--text-muted)] mx-auto mb-[var(--space-16)]" />
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
              <TranslationText translationKey="blog.notFound.title" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-[var(--text-muted)] mb-[var(--space-24)] text-[length:var(--font-200)]">
              <TranslationText translationKey="blog.notFound.description" as="span" shimmerWidth="300px" />
            </p>
            <Link 
              to=".." 
              relative="path"
              className="btn btn-primary inline-flex items-center gap-[var(--space-8)]"
            >
              <ArrowLeft className="h-[var(--space-16)] w-[var(--space-16)]" />
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
            <div className="inline-flex items-center justify-center w-[var(--space-64)] h-[var(--space-64)] rounded-full bg-red-500/10 text-red-400 mb-[var(--space-16)]">
              <BookOpen className="h-[var(--space-32)] w-[var(--space-32)]" />
            </div>
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-8)]">
              <TranslationText translationKey="blog.error.title" as="span" shimmerWidth="150px" />
            </h2>
            <p className="text-[var(--text-muted)] mb-[var(--space-8)] text-[length:var(--font-100)]">{error}</p>
            <p className="text-[var(--text-muted)] mb-[var(--space-24)] text-[length:var(--font-100)]">
              <TranslationText translationKey="blog.error.description" as="span" shimmerWidth="300px" />
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-12)] justify-center">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="btn btn-primary inline-flex items-center gap-[var(--space-8)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCw className={`h-[var(--space-16)] w-[var(--space-16)] ${isRetrying ? 'animate-spin' : ''}`} />
                {isRetrying ? (
                  <TranslationText translationKey="blog.error.retrying" shimmerWidth="100px" />
                ) : (
                  <TranslationText translationKey="blog.error.retry" shimmerWidth="80px" />
                )}
              </button>
              <Link 
                to=".." 
                relative="path"
                className="btn btn-secondary inline-flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <ArrowLeft className="h-[var(--space-16)] w-[var(--space-16)]" />
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
  const formattedDate = formatDate(blogPost.created_at, t);
  const hasImage = Boolean(blogPost.image);
  // Use localized content from database
  const hasContent = Boolean(blogPost.content);

  return (
    <PageLayout className="!overflow-visible">
      <ReadingProgress />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      
      {/* Navigation */}
      <div className="mb-[var(--space-32)]">
        <Link 
          to=".." 
          relative="path"
          className="inline-flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors group"
        >
          <ArrowLeft className="h-[var(--space-16)] w-[var(--space-16)] group-hover:-translate-x-1 transition-transform" />
          <TranslationText translationKey="blog.back" shimmerWidth="100px" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[var(--space-32)]">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="text-center mb-[var(--space-48)]">
              <h1 className="text-[length:var(--font-800)] md:text-[length:var(--font-900)] font-semibold text-[var(--text)] mb-[var(--space-24)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]">
                {blogPost.title}
              </h1>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-[var(--space-24)] text-[var(--text-muted)] mb-[var(--space-32)]">
                <div className="flex items-center gap-[var(--space-8)]">
                  <Calendar className="h-[var(--space-16)] w-[var(--space-16)]" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-[var(--space-8)]">
                  <Clock className="h-[var(--space-16)] w-[var(--space-16)]" />
                  <span>{blogPost.read_time}</span>
                </div>
                <div className="flex items-center gap-[var(--space-8)]">
                  <User className="h-[var(--space-16)] w-[var(--space-16)]" />
                  <TranslationText translationKey="author.name" as="span" shimmerWidth="100px" />
                </div>
                <ShareButton 
                  title={blogPost.title}
                  url={currentUrl}
                />
              </div>

              {/* Featured Image */}
              {hasImage && (
                <div className="relative aspect-video overflow-hidden rounded-[var(--radius-xl)] mb-[var(--space-32)] shadow-[var(--shadow-md)]">
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
                <div className="text-[length:var(--font-400)] text-[var(--text-muted)] max-w-4xl mx-auto leading-[var(--leading-loose)]">
                <p>{blogPost.excerpt}</p>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none mb-[var(--space-32)]">
              {hasContent ? (
                <MarkdownRenderer 
                  content={blogPost.content || ''}
                  className="prose-headings:text-[var(--text)] prose-headings:font-semibold prose-headings:tracking-[var(--tracking-tight)] prose-p:text-[var(--text-muted)] prose-li:text-[var(--text-muted)] prose-strong:text-[var(--text)] prose-code:text-accent prose-pre:bg-white/5 prose-blockquote:border-accent leading-[var(--leading-loose)]"
                />
              ) : (
                <div className="text-center py-[var(--space-64)]">
                  <BookOpen className="h-[var(--space-64)] w-[var(--space-64)] text-[var(--text-muted)] mx-auto mb-[var(--space-16)]" />
                  <p className="text-[var(--text-muted)] text-[length:var(--font-300)]">
                    <TranslationText translationKey="blog.noContent" as="span" shimmerWidth="200px" />
                  </p>
                </div>
              )}
            </article>

            {/* Footer Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-[var(--space-16)] pt-[var(--space-48)] mt-[var(--space-64)] border-t border-white/10">
              <Link 
                to=".." 
                relative="path"
                className="inline-flex items-center gap-[var(--space-8)] text-accent hover:text-[var(--text)] transition-colors group"
              >
                <ArrowLeft className="h-[var(--space-16)] w-[var(--space-16)] group-hover:-translate-x-1 transition-transform" />
                <TranslationText translationKey="blog.back" shimmerWidth="100px" />
              </Link>
              
              <div className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                <TranslationText translationKey="blog.publishedOn" shimmerWidth="120px" /> {formattedDate}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Table of contents sidebar">
            <div className="sticky top-24 self-start stack [--stack-space:var(--space-24)]">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <Toc headings={headings} />
              )}
            </div>
          </aside>
        </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-[var(--space-64)]">
          <div className="text-center mb-[var(--space-48)]">
            <h2 className="text-[length:var(--font-700)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
              <TranslationText translationKey="blog.related.title" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-300)]">
              <TranslationText translationKey="blog.related.subtitle" as="span" shimmerWidth="250px" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-32)]">
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

