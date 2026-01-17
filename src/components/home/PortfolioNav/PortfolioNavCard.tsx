import { motion, useReducedMotion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../shared/Card';
import { TranslationText } from '../../../components/shared/TranslationText';

export interface PortfolioNavCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
  translationKey?: string;
}

export function PortfolioNavCard({
  icon: Icon,
  title,
  description,
  href,
  index,
}: PortfolioNavCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={href} className="block h-full rounded-[var(--radius-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
        <Card className="h-full flex flex-col group-hover:bg-[var(--surface-strong)] transition-colors duration-500">
          {/* Icon Container */}
          <div className="mb-[var(--space-24)]">
            <div className="inline-flex p-[var(--space-16)] rounded-[var(--radius-md)] bg-accent/10 text-accent 
            group-hover:bg-accent/20 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] group-hover:text-accent transition-colors duration-300 mb-[var(--space-12)]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[length:var(--font-200)] text-[var(--text-muted)] group-hover:text-gray-300 transition-colors duration-300 flex-1 leading-[var(--leading-body)] mb-[var(--space-24)]">
            {description}
          </p>

          {/* CTA Arrow */}
          <div className="inline-flex items-center gap-[var(--space-8)] text-accent font-medium transition-[gap] duration-300 group-hover:gap-[var(--space-12)]">
            <span className="text-[length:var(--font-200)]">
              <TranslationText translationKey="portfolioNav.learnMore" shimmerWidth="100px" />
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">{'->'}</span>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-accent/5 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Card>
      </Link>
    </motion.div>
  );
}
