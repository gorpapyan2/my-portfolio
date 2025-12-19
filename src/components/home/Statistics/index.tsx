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
    <section className="relative overflow-hidden bg-[#0A0A0B] py-16 md:py-24">
      {/* Background Grid Pattern - matching Technologies */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Gradient Overlay - using lime accent like Technologies */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent pointer-events-none" />

      {/* Fade-out Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TranslationText translationKey="statistics.title" as="span" shimmerWidth="200px" />
          </h2>
          <p className="text-gray-400 text-lg">
            <TranslationText translationKey="statistics.subtitle" as="span" shimmerWidth="300px" />
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6 mb-12">
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
          <p className="mb-6 text-sm md:text-base text-gray-400">
            <TranslationText translationKey="statistics.areas" as="span" shimmerWidth="200px" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
