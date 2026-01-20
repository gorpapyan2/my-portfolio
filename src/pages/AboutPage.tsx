import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { User } from 'lucide-react';
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/shared/Card";
import AboutMe from "@/components/AboutMe";
import { KeyResults } from "@/components/about/KeyResults";
import ScrollIndicator from "@/components/ScrollIndicator";
import FloatingActions from "@/components/FloatingActions";
import ParticleBackground from "@/components/ParticleBackground";
import SoundEffects from "@/components/SoundEffects";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Experience } from "@/components/about/Expirence";
import { Education } from "@/components/about/Education";
import { Skills } from "@/components/about/Skills";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationText } from "@/components/shared/TranslationText";
import { CVDownload } from "@/components/about/CVDownload";
import { getAbout, type AboutContent } from "@/lib/db/getAbout";
import { getSiteAsset } from "@/lib/db/getSiteAsset";
import { assetUrls } from "@/lib/config";

export function AboutPage() {
  const soundEnabled = false;
  const shouldReduceMotion = useReducedMotion();
  const motionEnabled = !shouldReduceMotion;
  const [performanceMonitoring, setPerformanceMonitoring] = useState(false);
  const { t, language } = useLanguage();
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    professionalJourney: [],
    philosophy: [],
    toolbox: [],
    keyResults: [],
    languages: [],
  });
  const [portraitUrl, setPortraitUrl] = useState<string | null>(assetUrls.portrait);
  const [aboutLoading, setAboutLoading] = useState(true);
  const [aboutErrorKey, setAboutErrorKey] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    setAboutLoading(true);
    setAboutErrorKey(null);

    void getAbout(language)
      .then(data => {
        if (!isActive) return;
        setAboutContent(data);
      })
      .catch(() => {
        if (!isActive) return;
        setAboutErrorKey('about.fallback.error');
      })
      .finally(() => {
        if (!isActive) return;
        setAboutLoading(false);
      });

    void getSiteAsset('about_portrait')
      .then(asset => {
        if (!isActive) return;
        setPortraitUrl(asset?.url ?? assetUrls.portrait);
      })
      .catch(() => {
        if (!isActive) return;
        setPortraitUrl(assetUrls.portrait);
      });

    return () => {
      isActive = false;
    };
  }, [language]);

  return (
    <>
      <SoundEffects enabled={soundEnabled} />
      <ParticleBackground />
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
          
          {/* Philosophy Narrative Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-accent/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.philosophy')}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('pages.about.philosophy')}
              </p>
            </div>
          </motion.div> */}

          <Experience />
          <Education />
          <Skills />
          <Card className="flex flex-col items-center gap-[var(--space-16)] text-center">
            <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] font-display text-balance">
              <TranslationText translationKey="hero.downloadCV" shimmerWidth="140px" />
            </h2>
            <CVDownload />
          </Card>
        </div>
      </PageLayout>
      
      <ScrollIndicator />
      <FloatingActions />
      <PerformanceMonitor enabled={performanceMonitoring} />
      {aboutErrorKey ? (
        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-2 rounded-full text-[length:var(--font-100)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          role="status"
          aria-live="polite"
        >
          {t(aboutErrorKey)}
        </div>
      ) : null}

      
      {/* Motion preference could be used to disable animations */}
      {!motionEnabled ? (
        <style>{`
          * { animation-duration: 0s !important; transition-duration: 0s !important; }
        `}</style>
      ) : null}
      
      {/* Development mode - double-click to enable performance monitoring */}
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
