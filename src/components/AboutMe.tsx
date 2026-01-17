import { motion, useReducedMotion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";
import InfoCard from "./InfoCard";
import Sparkles from "./Sparkles";
import Typewriter from "./Typewriter";
import { useLanguage } from "../context/LanguageContext";
import { assetUrls } from "../lib/config";
import { TranslationText } from "./shared/TranslationText";

type AboutMeProps = {
  professionalJourney: string[];
  philosophy: string[];
  toolbox: string[];
  isLoading?: boolean;
};

export default function AboutMe({
  professionalJourney,
  philosophy,
  toolbox,
  isLoading = false,
}: AboutMeProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const journeyItems = professionalJourney.length > 0 ? professionalJourney : [t('about.fallback.journey')];
  const philosophyItems = philosophy.length > 0 ? philosophy : [t('about.fallback.philosophy')];
  const toolboxItems = toolbox.length > 0 ? toolbox : [t('about.fallback.toolbox')];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.1 }}
          className="sticky top-24"
        >
          <HeroPortrait
            src={assetUrls.portrait}
            alt={t('about.portraitAlt')}
          />
          <Sparkles />
        </motion.div>

        <div className="space-y-8">
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
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
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
                <ul className="space-y-2 text-[var(--text-muted)]">
                  {journeyItems.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">{line}</li>
                  ))}
                </ul>
              )}
            </InfoCard>
          </motion.div>

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
                <ul className="space-y-2 text-[var(--text-muted)]">
                  {philosophyItems.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">{line}</li>
                  ))}
                </ul>
              )}
            </InfoCard>
          </motion.div>

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
                <div className="flex flex-wrap gap-2">
                  {toolboxItems.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
