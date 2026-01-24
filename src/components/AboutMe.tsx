import { motion, useReducedMotion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";

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

// Reusable Bento Card Component
const BentoCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : delay }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}

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
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

        {/* 1. Intro / Headline (Full width on mobile, 8 cols on desktop) */}
        <BentoCard className="md:col-span-6 lg:col-span-8 p-8 flex flex-col justify-center min-h-[300px] relative group" delay={0}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-700" />
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[var(--text)] mb-6 leading-tight relative z-10"
          >
            <div className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              <Typewriter
                text={t('about.headline')}
                speed={30}
                delay={0.5}
              />
            </div>
          </motion.h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl relative z-10">
            <TranslationText translationKey="about.professionalJourney" shimmerWidth="200px" />
          </p>
        </BentoCard>

        {/* 2. Portrait (4 cols on desktop) */}
        <BentoCard className="md:col-span-6 lg:col-span-4 relative group" delay={0.1}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opactiy-60" />
          <div className="w-full h-full min-h-[300px]">
            <HeroPortrait
              src={portraitSrc}
              alt={t('about.portraitAlt')}
            />
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <Sparkles />
          </div>
        </BentoCard>

        {/* 3. Quick Facts (4 Cols) */}
        <BentoCard className="md:col-span-3 lg:col-span-4 p-6" delay={0.2}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-muted)]">Quick Facts</span>
          </h3>
          <QuickFacts />
        </BentoCard>

        {/* 4. Philosophy (4 Cols) */}
        <BentoCard className="md:col-span-3 lg:col-span-4 p-6" delay={0.3}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-muted)]">
              <TranslationText translationKey="about.philosophy" shimmerWidth="100px" />
            </span>
          </h3>
          <div className="text-sm text-[var(--text-muted)] leading-relaxed h-[200px] overflow-y-auto pr-2 custom-scrollbar">
            {isLoading ? (
              <div className="space-y-2">
                {[0, 1, 2].map(i => <div key={i} className="h-3 bg-white/5 rounded w-full animate-pulse" />)}
              </div>
            ) : (
              <MarkdownRenderer content={philosophyContent} className="text-sm" />
            )}
          </div>
        </BentoCard>

        {/* 5. Languages (4 Cols) */}
        <BentoCard className="md:col-span-6 lg:col-span-4 p-6" delay={0.4}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-muted)]">Languages</span>
          </h3>
          <Languages items={languages} isLoading={isLoading} />
        </BentoCard>

        {/* 6. Professional Journey Detail (8 Cols) */}
        <BentoCard className="md:col-span-6 lg:col-span-8 p-8" delay={0.5}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-muted)]">In Detail</span>
          </h3>
          <div className="prose prose-invert prose-sm max-w-none text-[var(--text-muted)]">
            {isLoading ? (
              <div className="space-y-3">
                {[0, 1, 2, 3].map(i => <div key={i} className="h-4 bg-white/5 rounded w-full animate-pulse" />)}
              </div>
            ) : (
              <MarkdownRenderer content={journeyContent} />
            )}
          </div>
        </BentoCard>

        {/* 7. Toolbox (4 Cols) */}
        <BentoCard className="md:col-span-6 lg:col-span-4 p-6" delay={0.6}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-muted)]">
              <TranslationText translationKey="about.toolbox" shimmerWidth="80px" />
            </span>
          </h3>
          <div className="text-sm text-[var(--text-muted)] h-full">
            {isLoading ? (
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3].map(i => <div key={i} className="h-6 w-16 bg-white/5 rounded-full animate-pulse" />)}
              </div>
            ) : (
              <MarkdownRenderer content={toolboxContent} />
            )}
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
