import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ProjectGrid } from './ProjectGrid';
import { ProjectSkeleton } from '../../components/skeletons/ProjectSkeleton';
import { useLanguage } from '../../context/LanguageContext';
import { useProjectService } from '../../lib/services/useProjectService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { TranslationText } from '../../components/shared/TranslationText';
import { PageState } from '../../components/shared/PageState';

export function WorkPage() {
  const { t } = useLanguage();
  const { projects, isLoading, error } = useProjectService();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  // Check if work section is enabled
  if (!isFeatureEnabled('work_section')) {
    return (
      <PageState
        icon={Briefcase}
        title={<TranslationText translationKey="pages.sectionUnavailable.title" as="span" shimmerWidth="200px" />}
        message={<TranslationText translationKey="pages.sectionUnavailable.message" as="span" shimmerWidth="350px" />}
      />
    );
  }

  if (error) {
    return <PageState title={t('error')} message={error} />;
  }

  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={Briefcase}
        title={<TranslationText translationKey="pages.work.title" shimmerWidth="150px" />}
        subtitle={<TranslationText translationKey="pages.work.subtitle" as="span" shimmerWidth="400px" />}
      />

      {isLoading ? <ProjectSkeleton /> : <ProjectGrid projects={projects} />}
    </PageLayout>
  );
}
