import { useEffect, useState } from "react";
import { User } from 'lucide-react';
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import AboutMe from "@/components/AboutMe";
import { KeyResults } from "@/components/about/KeyResults";
import { Languages } from "@/components/about/Languages";
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

export function AboutPage() {
  const [soundEnabled] = useState(false);
  const [motionEnabled, ] = useState(true);
  const [performanceMonitoring, setPerformanceMonitoring] = useState(false);
  const { t, language } = useLanguage();
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    professionalJourney: [],
    philosophy: [],
    toolbox: [],
    keyResults: [],
    languages: [],
  });
  const [aboutLoading, setAboutLoading] = useState(true);
  const [aboutError, setAboutError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    setAboutLoading(true);
    setAboutError(null);

    getAbout(language)
      .then(data => {
        if (!isActive) return;
        setAboutContent(data);
      })
      .catch(() => {
        if (!isActive) return;
        setAboutError(t('about.fallback.error'));
      })
      .finally(() => {
        if (!isActive) return;
        setAboutLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [language, t]);

  return (
    <>
      <SoundEffects enabled={soundEnabled} />
      <ParticleBackground />
      <SectionNavigation />
      
      <PageLayout ariaLabel={t('pages.about.ariaLabel')}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
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
            isLoading={aboutLoading}
          />
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-[var(--space-32)] mb-[var(--space-64)]">
            <KeyResults items={aboutContent.keyResults} isLoading={aboutLoading} />
            <Languages items={aboutContent.languages} isLoading={aboutLoading} />
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          
          {/* Philosophy Narrative Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
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
          <CVDownload />
        </div>
      </PageLayout>
      
      <ScrollIndicator />
      <FloatingActions />
      <PerformanceMonitor enabled={performanceMonitoring} />
      {aboutError && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-2 rounded-full text-[length:var(--font-100)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          {aboutError}
        </div>
      )}

      
      {/* Motion preference could be used to disable animations */}
      {!motionEnabled && (
        <style>{`
          * { animation-duration: 0s !important; transition-duration: 0s !important; }
        `}</style>
      )}
      
      {/* Development mode - double-click to enable performance monitoring */}
      {import.meta.env.DEV && (
        <div 
          className="fixed top-0 left-0 w-4 h-4 z-50"
          onDoubleClick={() => setPerformanceMonitoring(!performanceMonitoring)}
          title="Double-click to toggle performance monitoring"
        />
      )}
    </>
  );
}

