import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ProjectGrid } from './ProjectGrid';
import { ProjectSkeleton } from '../../components/skeletons/ProjectSkeleton';

export function WorkPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <PageHeader
        icon={Briefcase}
        title="My Work"
        subtitle="A showcase of test automation frameworks and quality assurance projects"
      />
      
      {isLoading ? <ProjectSkeleton /> : <ProjectGrid />}
    </PageLayout>
  );
}