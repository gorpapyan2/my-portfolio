import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useBlogService } from '../../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';

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
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">{t('blog.unavailableTitle')}</h2>
            <p className="text-gray-400">{t('blog.unavailableBody')}</p>
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
            <h2 className="text-2xl font-bold text-white mb-4">{t('error')}</h2>
            <p className="text-gray-400">{error}</p>
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
        title={t('pages.blog.title')}
        subtitle={t('pages.blog.subtitle')}
      />
      
      <BlogGrid blogPosts={blogPosts} />
    </PageLayout>
  );
}