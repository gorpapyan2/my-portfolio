import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from '../../shared/Card';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  translationKey: string;
  value: number;
  suffix: string;
  index: number;
  description?: string;
  descriptionKey?: string;
}

export function StatCard({ 
  icon: Icon, 
  label, 
  translationKey,
  value, 
  suffix, 
  index,
  description,
  descriptionKey,
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let animationFrameId: number;
    let currentValue = 0;
    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      currentValue = Math.floor(easeOutQuad * value);
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col group-hover:bg-[var(--surface-strong)] transition-colors duration-500">
        {/* Icon Container */}
        <div className="mb-[var(--space-24)]">
          <div className="inline-flex p-[var(--space-16)] rounded-[var(--radius-md)] bg-accent/10 text-accent 
          group-hover:bg-accent/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
        </div>

        {/* Value with animation */}
        <div className="mb-[var(--space-16)]">
          <h3 className="text-[length:var(--font-800)] md:text-[length:var(--font-900)] font-bold text-accent group-hover:text-white transition-colors duration-300">
            {displayValue}
            <span className="text-[length:var(--font-500)] md:text-[length:var(--font-600)] ml-[var(--space-4)]">{suffix}</span>
          </h3>
        </div>

        {/* Label */}
        <h4 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] group-hover:text-accent transition-colors duration-300 mb-[var(--space-12)]">
          {label}
        </h4>

        {/* Description - optional */}
        {description && (
          <p className="text-[length:var(--font-200)] text-[var(--text-muted)] group-hover:text-gray-300 transition-colors duration-300 flex-1">
            {description}
          </p>
        )}

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-accent/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </motion.div>
  );
}

