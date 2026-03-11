import { lazy, Suspense } from 'react';
import User from 'lucide-react/dist/esm/icons/user';
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/shared/Card";
import AboutMe from "@/components/AboutMe";
import { KeyResults } from "@/components/about/KeyResults";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Skills } from "@/components/about/Skills";
import { TranslationText } from "@/components/shared/TranslationText";
import { useAboutPageData } from "@/hooks/useAboutPageData";

// Lazy load heavy/utility components to reduce initial bundle
const CVDownload = lazy(() => import("@/components/about/CVDownload").then(m => ({ default: m.CVDownload })));
const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));
const Experience = lazy(() => import("@/components/about/Experience").then(m => ({ default: m.Experience })));
const Education = lazy(() => import("@/components/about/Education").then(m => ({ default: m.Education })));
const FloatingActions = lazy(() => import("@/components/FloatingActions"));
const SoundEffects = lazy(() => import("@/components/SoundEffects"));
const PerformanceMonitor = lazy(() => import("@/components/PerformanceMonitor"));

export function AboutPage() {
  const {
    aboutContent,
    portraitUrl,
    isLoading: aboutLoading,
    errorKey: aboutErrorKey,
    soundEnabled,
    performanceMonitoring,
    t,
  } = useAboutPageData();

  return (
    <>
      <Suspense fallback={null}>
        <SoundEffects enabled={soundEnabled} />
      </Suspense>
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <SectionNavigation />

      <PageLayout ariaLabel={t('pages.about.ariaLabel')}>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <PageHeader
          icon={User}
          title={
            <TranslationText
              translationKey="pages.about.title"
              shimmerWidth="150px"
            />
          }
          subtitle={
            <TranslationText
              translationKey="pages.about.subtitle"
              as="span"
              shimmerWidth="400px"
            />
          }
        />

        <div className="space-y-[var(--space-64)]">
          <AboutMe
            professionalJourney={aboutContent.professionalJourney}
            philosophy={aboutContent.philosophy}
            toolbox={aboutContent.toolbox}
            languages={aboutContent.languages}
            portraitUrl={portraitUrl ?? undefined}
            isLoading={aboutLoading}
          />
          <KeyResults items={aboutContent.keyResults} isLoading={aboutLoading} />
          <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Suspense fallback={null}>
            <Education />
          </Suspense>
          <Skills />
          <Card className="flex flex-col items-center gap-[var(--space-16)] text-center">
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] font-display text-balance">
              <TranslationText translationKey="hero.downloadCV" shimmerWidth="140px" />
            </h2>
            <Suspense fallback={null}>
              <CVDownload />
            </Suspense>
          </Card>
        </div>
      </PageLayout>

      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>
      <Suspense fallback={null}>
        <PerformanceMonitor enabled={performanceMonitoring} />
      </Suspense>
      {aboutErrorKey ? (
        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-2 rounded-full text-[length:var(--font-100)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          role="status"
          aria-live="polite"
        >
          {t(aboutErrorKey)}
        </div>
      ) : null}
    </>
  );
}
