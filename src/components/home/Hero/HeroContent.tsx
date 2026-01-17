import { motion, useReducedMotion } from 'framer-motion';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { HeroButton } from './HeroButton';
import { TranslationText } from '../../shared/TranslationText';

export function HeroContent() {
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const showWorkSection = isFeatureEnabled('work_section');
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(100vh-5rem)] flex flex-col justify-center">
      <motion.div 
        className="max-w-3xl"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      >
        <h1 className="text-[length:var(--font-900)] md:text-[length:clamp(3rem,4.2vw,4.6rem)] font-semibold text-[var(--text)] mb-[var(--space-24)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]">
          <TranslationText translationKey="hero.title" as="span" shimmerWidth="300px" className="text-gradient-accent" />
        </h1>
        
        <p className="text-[length:var(--font-300)] text-[var(--text-muted)] mb-[var(--space-32)] max-w-2xl">
          <TranslationText translationKey="hero.subtitle" as="span" shimmerWidth="500px" />
        </p>

        {/* Proof Points */}
        <div className="stack mb-[var(--space-48)] max-w-2xl [--stack-space:var(--space-12)]">
          {['hero.proof1', 'hero.proof2', 'hero.proof3'].map((key, idx) => (
            <motion.div
              key={key}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 + idx * 0.1 }}
              className="flex items-start gap-[var(--space-12)] text-[length:var(--font-100)] md:text-[length:var(--font-200)] text-[var(--text-muted)]"
            >
              <span className="mt-[var(--space-8)] h-[var(--space-8)] w-[var(--space-8)] rounded-full bg-accent/80 shadow-[0_0_12px_rgba(var(--accent),0.45)]" aria-hidden="true" />
              <TranslationText translationKey={key} as="span" shimmerWidth="400px" />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-[var(--space-16)]">
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
  );
}
