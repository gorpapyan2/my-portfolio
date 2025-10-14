import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useBlogService } from '../../lib/services/useBlogService';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';

export function BlogPage() {
  const { t } = useLanguage();
  const { blogPosts, isLoading, error } = useBlogService();

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
            <h2 className="text-2xl font-bold text-white mb-4">{t('error.title')}</h2>
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