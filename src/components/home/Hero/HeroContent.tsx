import { motion, useReducedMotion } from 'framer-motion';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { HeroButton } from './HeroButton';
import { TranslationText } from '../../shared/TranslationText';
import { HeroScroll } from './HeroScroll';

export function HeroContent() {
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const showWorkSection = isFeatureEnabled('work_section');
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[calc(100vh-5rem)] flex flex-col pt-24 pb-12">
      <div className="flex-grow flex flex-col justify-center">
        <motion.div
          className="max-w-5xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <h1 className="text-[length:var(--font-900)] md:text-[length:clamp(2.5rem,4vw,3.5rem)] font-bold font-display text-[var(--text)] mb-4 leading-[var(--leading-tight)] tracking-tight">
            <TranslationText translationKey="hero.title" as="span" shimmerWidth="300px" className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent" />
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-6 max-w-3xl leading-relaxed">
            <TranslationText translationKey="hero.subtitle" as="span" shimmerWidth="500px" />
          </p>

          {/* Proof Points */}
          <div className="flex flex-col gap-2 mb-8 max-w-2xl">
            {['hero.proof1', 'hero.proof2', 'hero.proof3'].map((key, idx) => (
              <motion.div
                key={key}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 + idx * 0.1 }}
                className="flex items-center gap-3 text-base md:text-lg text-[var(--text-muted)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <TranslationText translationKey={key} as="span" shimmerWidth="400px" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {showWorkSection && (
              <HeroButton variant="primary" href="work">
                <TranslationText translationKey="hero.ctaWork" shimmerWidth="120px" />
              </HeroButton>
            )}
            <HeroButton variant="secondary" href="contact">
              <TranslationText translationKey="hero.ctaContact" shimmerWidth="130px" />
            </HeroButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - now part of the flow */}
      <div className="flex justify-center w-full">
        <HeroScroll />
      </div>
    </div>
  );
}
