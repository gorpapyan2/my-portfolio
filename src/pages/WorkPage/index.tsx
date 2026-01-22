import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ProjectGrid } from './ProjectGrid';
import { ProjectSkeleton } from '../../components/skeletons/ProjectSkeleton';
import { useLanguage } from '../../context/LanguageContext';
import { useProjectService } from '../../lib/services/useProjectService';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { TranslationText } from '../../components/shared/TranslationText';

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
            <Briefcase className="h-[var(--space-64)] w-[var(--space-64)] text-[var(--text-muted)] mx-auto mb-[var(--space-16)]" />
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
              <TranslationText translationKey="pages.sectionUnavailable.title" as="span" shimmerWidth="200px" />
            </h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-200)]">
              <TranslationText translationKey="pages.sectionUnavailable.message" as="span" shimmerWidth="350px" />
            </p>
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
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">{t('error')}</h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-200)]">{error}</p>
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
        title={<TranslationText translationKey="pages.work.title" shimmerWidth="150px" />}
        subtitle={<TranslationText translationKey="pages.work.subtitle" as="span" shimmerWidth="400px" />}
      />
      
      {isLoading ? <ProjectSkeleton /> : <ProjectGrid projects={projects} />}
    </PageLayout>
  );
}
