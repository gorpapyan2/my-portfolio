import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { HeroButton } from './HeroButton';
import { TranslationText } from '../../shared/TranslationText';

export function HeroContent() {
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const showWorkSection = isFeatureEnabled('work_section');

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center">
      <motion.div 
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <TranslationText translationKey="hero.title" as="span" shimmerWidth="300px" />
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
          <TranslationText translationKey="hero.subtitle" as="span" shimmerWidth="500px" />
        </p>

        {/* Proof Points */}
        <div className="space-y-3 mb-12 max-w-2xl">
          {['hero.proof1', 'hero.proof2', 'hero.proof3'].map((key, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              className="flex items-start gap-3 text-sm md:text-base text-gray-300"
            >
              <span className="text-[#edfc3a] font-bold mt-1">✓</span>
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
  );
}