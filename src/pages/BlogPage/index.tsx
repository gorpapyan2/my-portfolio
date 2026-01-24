import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import { PageLayout } from '../../components/shared/PageLayout';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useBlogService } from '../../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion } from 'framer-motion';

export function BlogPage() {
  const { t, language } = useLanguage();
  const { blogPosts, isLoading, error } = useBlogService(language);
  const { isFeatureEnabled } = usePublicFeatureFlags();

  // Check if blog section is enabled
  if (!isFeatureEnabled('blog_section')) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="h-[var(--space-64)] w-[var(--space-64)] text-[var(--text-muted)] mx-auto mb-[var(--space-16)]" />
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
              <TranslationText translationKey="blog.unavailableTitle" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-200)]">
              <TranslationText translationKey="blog.unavailableBody" as="span" shimmerWidth="300px" />
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">{t('error')}</h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-200)]">{error}</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="!overflow-visible">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-violet-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Custom Glass-Style Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300"
          >
            <BookOpen className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text)] mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60"
          >
            <TranslationText translationKey="pages.blog.title" shimmerWidth="200px" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto"
          >
            <TranslationText translationKey="pages.blog.subtitle" as="span" shimmerWidth="400px" />
          </motion.p>
        </div>

        <BlogGrid blogPosts={blogPosts} />
      </div>
    </PageLayout>
  );
}
