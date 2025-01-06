import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';

export function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        icon={BookOpen}
        title="Blog"
        subtitle="Insights and thoughts on software testing and quality assurance"
      />
      <BlogGrid />
    </PageLayout>
  );
}