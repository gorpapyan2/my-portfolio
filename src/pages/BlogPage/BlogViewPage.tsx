import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, BookOpen, RotateCw, Share2, Info } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { MarkdownRenderer } from '../../components/markdown/MarkdownRenderer';
import { Toc } from '../../components/markdown/Toc';
import { BlogCard } from './BlogCard';
import { ReadingProgress } from '../../components/ReadingProgress';
import { ShareButton } from '../../components/ShareButton';
import { useBlogService, type LocalizedBlogPost } from '../../lib/services/useBlogService';
import { useToc } from '../../hooks/useToc';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Formats a date string to readable format with error handling
 */
function formatDate(dateString: string, t: (key: string) => string, language: string): string {
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) {
    return t('blog.dateUnavailable');
  }

  try {
    const locale = language === 'am' ? 'hy-AM' : language;
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(parsed);
  } catch {
    return t('blog.dateUnavailable');
  }
}

/**
 * Gets related posts excluding current post, limited to 3
 */
function getRelatedPosts(currentPostId: string, allPosts: LocalizedBlogPost[], limit: number = 3) {
  return allPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
}

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function BlogViewPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const { blogPosts, isLoading, error, refreshBlogPosts } = useBlogService(language);
  const [isRetrying, setIsRetrying] = useState(false);

  // Scroll parallax for hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.slug === slug);

  // Extract TOC from post content
  const { headings } = useToc(blogPost?.content || '');

  if (!slug) {
    return <Navigate to=".." relative="path" replace />;
  }

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

  // Post not found and no error (shouldn't happen, but safeguard)
  if (!blogPost) {
    return <Navigate to=".." relative="path" replace />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const relatedPosts = getRelatedPosts(blogPost.id, blogPosts);
  const formattedDate = formatDate(blogPost.created_at, t, language);
  const hasImage = Boolean(blogPost.image);
  const hasContent = Boolean(blogPost.content);

  return (
    <PageLayout className="!overflow-visible">
      {/* Design System: Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-violet-500/5 to-transparent pointer-events-none" />
      <ReadingProgress />

      {/* Modern Header Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to=".."
            relative="path"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors group px-4 py-2 rounded-full hover:bg-white/5"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <TranslationText translationKey="blog.back" shimmerWidth="100px" />
          </Link>
        </motion.div>

        {/* Title & Excerpt */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text)] mb-6 leading-tight tracking-tight"
          >
            {blogPost.title}
          </motion.h1>
          <motion.div variants={fadeInUp} className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
            <p>{blogPost.excerpt}</p>
          </motion.div>
        </motion.div>

        {/* Bento Grid Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {/* Metadata Card: Date */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors">
            <Calendar className="h-5 w-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
              <TranslationText translationKey="blog.publishedOn" shimmerWidth="80px" />
            </span>
            <span className="font-semibold text-sm">{formattedDate}</span>
          </div>

          {/* Metadata Card: Read Time */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors">
            <Clock className="h-5 w-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
              <TranslationText translationKey="blog.readTime" shimmerWidth="60px" />
            </span>
            <span className="font-semibold text-sm">{blogPost.read_time}</span>
          </div>

          {/* Metadata Card: Author */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors">
            <User className="h-5 w-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Author</span>
            <TranslationText translationKey="author.name" as="span" className="font-semibold text-sm" shimmerWidth="100px" />
          </div>

          {/* Metadata Card: Share */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors relative">
            <ShareButton
              title={blogPost.title}
              url={currentUrl}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="pointer-events-none flex flex-col items-center">
              <Share2 className="h-5 w-5 text-accent mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Share</span>
              <span className="font-semibold text-sm">Article</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image Parallax */}
        {hasImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-16 group"
          >
            <motion.div style={{ y, opacity }} className="absolute inset-0">
              <img
                src={blogPost.image || ''}
                alt={blogPost.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="prose prose-invert prose-lg max-w-none mb-16">
            {hasContent ? (
              <MarkdownRenderer
                content={blogPost.content || ''}
                className="
                  prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight 
                  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-[var(--text-muted)] prose-p:leading-relaxed
                  prose-li:text-[var(--text-muted)]
                  prose-strong:text-[var(--text)] prose-strong:font-semibold
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-code:text-accent prose-code:bg-white/5 prose-code:px-1 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
                  prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-lg
                  prose-blockquote:border-l-accent prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-white/5
                "
              />
            ) : (
              <div className="text-center py-[var(--space-64)] bg-white/5 rounded-3xl border border-white/10">
                <BookOpen className="h-16 w-16 text-[var(--text-muted)] mx-auto mb-4 opacity-50" />
                <p className="text-[var(--text-muted)] text-lg">
                  <TranslationText translationKey="blog.noContent" as="span" shimmerWidth="200px" />
                </p>
              </div>
            )}
          </article>

          {/* Footer Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 mt-16 border-t border-white/10">
            <Link
              to=".."
              relative="path"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors group font-medium"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <TranslationText translationKey="blog.back" shimmerWidth="100px" />
            </Link>

            <div className="text-sm text-[var(--text-muted)] flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Info className="h-4 w-4" />
              <TranslationText translationKey="blog.publishedOn" shimmerWidth="120px" /> {formattedDate}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 hidden lg:block" aria-label="Table of contents sidebar">
          <div className="sticky top-28 self-start">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Table of Contents
              </h3>
              {headings.length > 0 ? (
                <Toc headings={headings} />
              ) : (
                <p className="text-sm text-[var(--text-muted)] italic">No table of contents available.</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[var(--text)] mb-4 font-display">
              <TranslationText translationKey="blog.related.title" as="span" shimmerWidth="200px" />
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--text-muted)] text-lg">
              <TranslationText translationKey="blog.related.subtitle" as="span" shimmerWidth="250px" />
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <BlogCard
                  id={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  content={post.content}
                  image={post.image}
                  created_at={post.created_at}
                  read_time={post.read_time}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </PageLayout>
  );
}
