import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { HeroButton } from './HeroButton';

export function HeroContent() {
  const { t } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const showWorkSection = isFeatureEnabled('work_section');

  const proofPoints = [
    t('hero.proof1'),
    t('hero.proof2'),
    t('hero.proof3'),
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center">
      <motion.div 
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
          {t('hero.subtitle')}
        </p>

        {/* Proof Points */}
        <div className="space-y-3 mb-12 max-w-2xl">
          {proofPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              className="flex items-start gap-3 text-sm md:text-base text-gray-300"
            >
              <span className="text-[#edfc3a] font-bold mt-1">✓</span>
              <span>{point}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {showWorkSection && (
            <HeroButton variant="primary" href="work">
              See My Work
            </HeroButton>
          )}
          <HeroButton variant="secondary" href="contact">
            Contact Me
          </HeroButton>
        </div>
      </motion.div>
    </div>
  );
}