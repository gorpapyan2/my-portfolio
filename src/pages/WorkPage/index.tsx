import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ProjectGrid } from './ProjectGrid';
import { ProjectSkeleton } from '../../components/skeletons/ProjectSkeleton';
import { useLanguage } from '../../context/LanguageContext';

export function WorkPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={Briefcase}
        title={t('pages.work.title')}
        subtitle={t('pages.work.subtitle')}
      />
      
      {isLoading ? <ProjectSkeleton /> : <ProjectGrid />}
    </PageLayout>
  );
}