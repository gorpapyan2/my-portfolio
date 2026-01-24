import { lazy, Suspense } from 'react';
import User from 'lucide-react/dist/esm/icons/user';
import { PageLayout } from "@/components/shared/PageLayout";
import AboutMe from "@/components/AboutMe";
import { KeyResults } from "@/components/about/KeyResults";
import ScrollIndicator from "@/components/ScrollIndicator";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Skills } from "@/components/about/Skills";
import { TranslationText } from "@/components/shared/TranslationText";
import { useAboutPageData } from "@/hooks/useAboutPageData";
import { motion } from "framer-motion";

// Lazy load heavy/utility components to reduce initial bundle
const CVDownload = lazy(() => import("@/components/about/CVDownload").then(m => ({ default: m.CVDownload })));
const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));
const Experience = lazy(() => import("@/components/about/Expirence").then(m => ({ default: m.Experience })));
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
    motionEnabled,
    performanceMonitoring,
    setPerformanceMonitoring,
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

      <PageLayout ariaLabel={t('pages.about.ariaLabel')} className="!overflow-visible">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Custom Glass-Style Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <motion.div
              initial={motionEnabled ? { opacity: 0, scale: 0.5 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300"
            >
              <User className="w-10 h-10 text-accent" />
            </motion.div>

            <motion.h1
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text)] mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60"
            >
              <TranslationText translationKey="pages.about.title" shimmerWidth="200px" />
            </motion.h1>

            <motion.p
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto"
            >
              <TranslationText translationKey="pages.about.subtitle" as="span" shimmerWidth="400px" />
            </motion.p>
          </div>

          <div className="space-y-[var(--space-64)] relative z-10">
            <AboutMe
              professionalJourney={aboutContent.professionalJourney}
              philosophy={aboutContent.philosophy}
              toolbox={aboutContent.toolbox}
              languages={aboutContent.languages}
              portraitUrl={portraitUrl ?? undefined}
              isLoading={aboutLoading}
            />

            <KeyResults items={aboutContent.keyResults} isLoading={aboutLoading} />

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Experience />
            <Education />
            <Skills />

            <motion.div
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-[var(--text)] font-display mb-8">
                <TranslationText translationKey="hero.downloadCV" shimmerWidth="140px" />
              </h2>
              <CVDownload />
            </motion.div>
          </div>
        </div>
      </PageLayout>

      <ScrollIndicator />
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

      {/* Motion preference */}
      {!motionEnabled ? (
        <style>{`
          * { animation-duration: 0s !important; transition-duration: 0s !important; }
        `}</style>
      ) : null}

      {/* Development mode monitor toggle */}
      {import.meta.env.DEV ? (
        <button
          type="button"
          className="fixed top-0 left-0 w-4 h-4 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          onDoubleClick={() => setPerformanceMonitoring((prev) => !prev)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setPerformanceMonitoring((prev) => !prev);
            }
          }}
          title="Double-click to toggle performance monitoring"
          aria-label="Toggle performance monitoring"
        />
      ) : null}
    </>
  );
}
