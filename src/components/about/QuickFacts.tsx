import { MapPin, Calendar, Target, Briefcase } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '../shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../shared/TranslationText';

interface QuickFactsProps {
  className?: string;
}

export function QuickFacts({ className }: QuickFactsProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const facts = [
    {
      icon: MapPin,
      label: t('about.quickFacts.location') || 'Location',
      value: 'Armenia, Yerevan',
    },
    {
      icon: Briefcase,
      label: t('about.quickFacts.experience') || 'Experience',
      value: '5+ years',
    },
    {
      icon: Target,
      label: t('about.quickFacts.focus') || 'Focus',
      value: 'QA Automation',
    },
    {
      icon: Calendar,
      label: t('about.quickFacts.availability') || 'Availability',
      value: t('about.quickFacts.availabilityStatus') || 'Open to opportunities',
    },
  ];

  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
        <TranslationText translationKey="about.quickFacts.title" shimmerWidth="120px" />
      </h3>
      <div className="space-y-3">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.4 + index * 0.05,
              }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                  {fact.label}
                </div>
                <div className="text-sm text-[var(--text)] font-medium">
                  {fact.value}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}
