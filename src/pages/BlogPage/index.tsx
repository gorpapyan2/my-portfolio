import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';
import { useLanguage } from '../../context/LanguageContext';

export function BlogPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={BookOpen}
        title={t('pages.blog.title')}
        subtitle={t('pages.blog.subtitle')}
      />
      <BlogGrid />
    </PageLayout>
  );
}