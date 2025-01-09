import { BookOpen } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { BlogGrid } from './BlogGrid';

export function BlogPage() {
  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={BookOpen}
        title="Blog"
        subtitle="Insights and thoughts on software testing and quality assurance"
      />
      <BlogGrid />
    </PageLayout>
  );
}