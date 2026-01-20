import { motion, useReducedMotion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";
import InfoCard from "./InfoCard";
import Sparkles from "./Sparkles";
import Typewriter from "./Typewriter";
import { useLanguage } from "../context/LanguageContext";
import { assetUrls } from "../lib/config";
import { TranslationText } from "./shared/TranslationText";
import { MarkdownRenderer } from "./markdown/MarkdownRenderer";
import { QuickFacts } from "./about/QuickFacts";
import { Languages } from "./about/Languages";

type LanguageItem = {
  name: string;
  level?: string | null;
};

type AboutMeProps = {
  professionalJourney: string[];
  philosophy: string[];
  toolbox: string[];
  languages: LanguageItem[];
  portraitUrl?: string;
  isLoading?: boolean;
};

export default function AboutMe({
  professionalJourney,
  philosophy,
  toolbox,
  languages,
  portraitUrl,
  isLoading = false,
}: AboutMeProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const journeyContent = professionalJourney.length > 0 ? professionalJourney.join('\n\n') : t('about.fallback.journey');
  const philosophyContent = philosophy.length > 0 ? philosophy.join('\n\n') : t('about.fallback.philosophy');
  const toolboxContent = toolbox.length > 0 ? toolbox.join('\n\n') : t('about.fallback.toolbox');
  const portraitSrc = portraitUrl || assetUrls.portrait;

  return (
    <section id="about" className="scroll-mt-24">
      {/* Hero Section: Portrait + Quick Info Side by Side */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 mb-8">
        {/* Portrait */}
        <div className="lg:col-span-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <HeroPortrait
              src={portraitSrc}
              alt={t('about.portraitAlt')}
            />
            <Sparkles />
          </motion.div>
        </div>

        {/* Quick Info Column */}
        <div className="lg:col-span-8 space-y-6 flex flex-col justify-center">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-slate-100 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent"
          >
            <Typewriter
              text={t('about.headline')}
              speed={30}
              delay={0.5}
            />
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            <QuickFacts />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.35 }}
            className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-6 border border-[var(--border)] hover:border-accent/30 transition-colors"
          >
            <Languages items={languages} isLoading={isLoading} />
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid: Professional Journey, Philosophy, Toolbox */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Professional Journey - Full Width on Top */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="lg:col-span-2"
        >
          <InfoCard
            title={<TranslationText translationKey="about.professionalJourney" shimmerWidth="200px" />}
            delay={0.20}
          >
            {isLoading ? (
              <div className="space-y-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className="h-4 bg-[var(--surface-strong)] rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <MarkdownRenderer content={journeyContent} className="text-[var(--text-muted)]" />
            )}
          </InfoCard>
        </motion.div>

        {/* Philosophy - Left Column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.26 }}
        >
          <InfoCard
            title={<TranslationText translationKey="about.philosophy" shimmerWidth="150px" />}
            delay={0.26}
          >
            {isLoading ? (
              <div className="space-y-2">
                {[0, 1].map(i => (
                  <div key={i} className="h-4 bg-[var(--surface-strong)] rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <MarkdownRenderer content={philosophyContent} className="text-[var(--text-muted)]" />
            )}
          </InfoCard>
        </motion.div>

        {/* Toolbox - Right Column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.32 }}
        >
          <InfoCard
            title={<TranslationText translationKey="about.toolbox" shimmerWidth="120px" />}
            delay={0.32}
          >
            {isLoading ? (
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3].map(i => (
                  <span
                    key={i}
                    className="h-6 w-16 rounded-full bg-[var(--surface-strong)] animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <MarkdownRenderer content={toolboxContent} className="text-[var(--text-muted)]" />
            )}
          </InfoCard>
        </motion.div>
      </div>
    </section>
  );
}
