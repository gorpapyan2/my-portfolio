import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';
import { useBlogService } from '../../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { TranslationText } from '../../components/shared/TranslationText';
import { PageState } from '../../components/shared/PageState';

export function BlogPage() {
  const { t, language } = useLanguage();
  const { blogPosts, isLoading, error } = useBlogService(language);
  const { isFeatureEnabled } = usePublicFeatureFlags();

  // Check if blog section is enabled
  if (!isFeatureEnabled('blog_section')) {
    return (
      <PageState
        icon={BookOpen}
        title={<TranslationText translationKey="blog.unavailableTitle" as="span" shimmerWidth="200px" />}
        message={<TranslationText translationKey="blog.unavailableBody" as="span" shimmerWidth="300px" />}
      />
    );
  }

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return <PageState title={t('error')} message={error} />;
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
