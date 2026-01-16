import { Award, Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { StatCard } from './StatCard';
import { LucideIcon } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-[var(--bg-elevated)] py-[var(--space-48)] md:py-[var(--space-64)]">
      {/* Background Grid Pattern - matching Technologies */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Gradient Overlay - using lime accent like Technologies */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      {/* Fade-out Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[var(--space-48)] md:mb-[var(--space-64)]"
        >
          <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] mb-[var(--space-16)] font-display">
            <TranslationText translationKey="statistics.title" as="span" shimmerWidth="200px" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
