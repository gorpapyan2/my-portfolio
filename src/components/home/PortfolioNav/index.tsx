import { Users, Briefcase, BookOpen, Mail, Lock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { PortfolioNavCard } from './PortfolioNavCard';
import { Card } from '../../shared/Card';
import { LucideIcon } from 'lucide-react';
import { TranslationText } from '../../../components/shared/TranslationText';

interface NavCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  translationKey: string;
}

interface DisabledCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
}

function DisabledCard({ icon: Icon, title, index }: DisabledCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col bg-gray-900/50 border-gray-700 opacity-60 cursor-not-allowed">
        {/* Icon Container */}
        <div className="mb-[var(--space-24)]">
          <div className="inline-flex p-[var(--space-16)] rounded-[var(--radius-md)] bg-gray-700/20 text-gray-500">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[length:var(--font-500)] font-semibold text-gray-400 mb-[var(--space-12)]">
          {title}
        </h3>

        {/* TBD Status */}
        <p className="text-[length:var(--font-200)] text-gray-500 flex-1 leading-[var(--leading-body)] mb-[var(--space-24)]">
          TBD - Coming soon
        </p>

        {/* Lock Icon */}
        <div className="inline-flex items-center gap-[var(--space-8)] text-gray-500 text-[length:var(--font-200)]">
          <Lock className="h-4 w-4" aria-hidden="true" />
          <span>Disabled</span>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-700/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </motion.div>
  );
}

export function PortfolioNav() {
  const { t } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const shouldReduceMotion = useReducedMotion();

  const allCards: NavCard[] = [
    {
      icon: Users,
      title: t('portfolioNav.aboutTitle'),
      description: t('portfolioNav.aboutDesc'),
      href: '/about',
      translationKey: 'portfolioNav.aboutTitle',
    },
    {
      icon: Briefcase,
      title: t('portfolioNav.workTitle'),
      description: t('portfolioNav.workDesc'),
      href: '/work',
      translationKey: 'portfolioNav.workTitle',
    },
    {
      icon: BookOpen,
      title: t('portfolioNav.blogTitle'),
      description: t('portfolioNav.blogDesc'),
      href: '/blog',
      translationKey: 'portfolioNav.blogTitle',
    },
    {
      icon: Mail,
      title: t('portfolioNav.contactTitle'),
      description: t('portfolioNav.contactDesc'),
      href: '/contact',
      translationKey: 'portfolioNav.contactTitle',
    },
  ];

  const showWorkSection = isFeatureEnabled('work_section');
  const showBlogSection = isFeatureEnabled('blog_section');

  return (
    <section className="py-[var(--space-48)] md:py-[var(--space-64)] section-surface">
      <div className="mx-auto max-w-7xl px-4 section-inner">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="mb-[var(--space-48)] md:mb-[var(--space-64)] text-center"
        >
          <h2 className="mb-[var(--space-12)] md:mb-[var(--space-16)] text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display">
            <TranslationText translationKey="portfolioNav.title" as="span" shimmerWidth="250px" className="text-gradient-accent" />
          </h2>
          <p className="mx-auto max-w-2xl text-[length:var(--font-300)] text-[var(--text-muted)]">
            <TranslationText translationKey="portfolioNav.subtitle" as="span" shimmerWidth="400px" />
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-24)]">
          {allCards.map((card, index) => {
            // Show disabled TBD card for Work if section is disabled
            if (card.href === '/work' && !showWorkSection) {
              return (
                <DisabledCard
                  key={card.href}
                  icon={card.icon}
                  title={card.title}
                  index={index}
                />
              );
            }
            // Show disabled TBD card for Blog if section is disabled
            if (card.href === '/blog' && !showBlogSection) {
              return (
                <DisabledCard
                  key={card.href}
                  icon={card.icon}
                  title={card.title}
                  index={index}
                />
              );
            }
            // Show enabled card normally
            return (
              <PortfolioNavCard
                key={card.href}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
                index={index}
                translationKey={card.translationKey}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
