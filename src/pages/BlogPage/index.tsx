import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useBlogService } from '../../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { TranslationText } from '../../components/shared/TranslationText';

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
          <div className="text-center">
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">{t('error')}</h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-200)]">{error}</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={BookOpen}
        title={<TranslationText translationKey="pages.blog.title" shimmerWidth="100px" />}
        subtitle={<TranslationText translationKey="pages.blog.subtitle" as="span" shimmerWidth="400px" />}
      />
      
      <BlogGrid blogPosts={blogPosts} />
    </PageLayout>
  );
}
