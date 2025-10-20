import { Users, Briefcase, BookOpen, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { usePublicFeatureFlags } from '../../../lib/services/usePublicFeatureFlags';
import { PortfolioNavCard } from './PortfolioNavCard';
import { Card } from '../../shared/Card';
import { LucideIcon } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col bg-gray-900/50 border-gray-700 opacity-60 cursor-not-allowed">
        {/* Icon Container */}
        <div className="mb-6">
          <div className="inline-flex p-4 rounded-lg bg-gray-700/20 text-gray-500">
            <Icon className="h-7 w-7" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-400 mb-3">
          {title}
        </h3>

        {/* TBD Status */}
        <p className="text-sm md:text-base text-gray-500 flex-1 leading-relaxed mb-6">
          TBD - Coming soon
        </p>

        {/* Lock Icon */}
        <div className="inline-flex items-center gap-2 text-gray-500">
          <Lock className="h-4 w-4" />
          <span className="text-sm">Disabled</span>
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
    <section className="relative overflow-hidden bg-[#0A0A0B] py-16 md:py-24">
      {/* Background Grid Pattern - matching Technologies */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Gradient Overlay - using lime accent like Technologies */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent pointer-events-none" />

      {/* Fade-out Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="mb-3 md:mb-4 text-3xl md:text-4xl font-bold text-white">
            {t('portfolioNav.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-400">
            {t('portfolioNav.subtitle')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6">
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
