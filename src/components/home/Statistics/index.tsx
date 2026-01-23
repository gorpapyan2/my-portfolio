import Award from 'lucide-react/dist/esm/icons/award';
import Target from 'lucide-react/dist/esm/icons/target';
import Zap from 'lucide-react/dist/esm/icons/zap';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { StatCard } from './StatCard';
import LucideIcon from 'lucide-react/dist/esm/icons/lucide-icon';
import { TranslationText } from '../../../components/shared/TranslationText';

interface Stat {
  icon: LucideIcon;
  label: string;
  translationKey: string;
  value: number;
  suffix: string;
  description?: string;
  descriptionKey?: string;
}

export function Statistics() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const stats: Stat[] = [
    {
      icon: Award,
      label: t('statistics.experience'),
      translationKey: 'statistics.experience',
      value: 3,
      suffix: '+',
      description: t('statistics.experienceDescription'),
      descriptionKey: 'statistics.experienceDescription',
    },
    {
      icon: Target,
      label: t('statistics.projects'),
      translationKey: 'statistics.projects',
      value: 10,
      suffix: '+',
      description: t('statistics.projectsDescription'),
      descriptionKey: 'statistics.projectsDescription',
    },
    {
      icon: Zap,
      label: t('statistics.tests'),
      translationKey: 'statistics.tests',
      value: 5,
      suffix: '',
      description: t('statistics.testsDescription'),
      descriptionKey: 'statistics.testsDescription',
    },
    {
      icon: TrendingUp,
      label: t('statistics.expertise'),
      translationKey: 'statistics.expertise',
      value: 3,
      suffix: '',
      description: t('statistics.expertiseDescription'),
      descriptionKey: 'statistics.expertiseDescription',
    },
  ];

  return (
    <section className="py-[var(--space-48)] md:py-[var(--space-64)] section-surface">
      <div className="mx-auto max-w-7xl px-4 section-inner">
        {/* Section Title */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[var(--space-48)] md:mb-[var(--space-64)]"
        >
          <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] mb-[var(--space-16)] font-display">
            <TranslationText translationKey="statistics.title" as="span" shimmerWidth="200px" className="text-gradient-accent" />
          </h2>
          <p className="text-[var(--text-muted)] text-[length:var(--font-300)]">
            <TranslationText translationKey="statistics.subtitle" as="span" shimmerWidth="300px" />
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-24)] mb-[var(--space-48)]">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              translationKey={stat.translationKey}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              descriptionKey={stat.descriptionKey}
              index={index}
            />
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center"
        >
          <p className="mb-[var(--space-24)] text-[length:var(--font-200)] text-[var(--text-muted)]">
            <TranslationText translationKey="statistics.areas" as="span" shimmerWidth="200px" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
