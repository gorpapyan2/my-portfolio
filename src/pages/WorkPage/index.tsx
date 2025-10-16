import { Briefcase } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ProjectGrid } from './ProjectGrid';
import { ProjectSkeleton } from '../../components/skeletons/ProjectSkeleton';
import { useLanguage } from '../../context/LanguageContext';
import { useProjectService } from '../../lib/services/useProjectService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';

export function WorkPage() {
  const { t } = useLanguage();
  const { projects, isLoading, error } = useProjectService();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  // Check if work section is enabled
  if (!isFeatureEnabled('work_section')) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Section Unavailable</h2>
            <p className="text-gray-400">This section is currently unavailable.</p>
          </div>
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
        icon={Briefcase}
        title={t('pages.work.title')}
        subtitle={t('pages.work.subtitle')}
      />
      
      {isLoading ? <ProjectSkeleton /> : <ProjectGrid projects={projects} />}
    </PageLayout>
  );
}