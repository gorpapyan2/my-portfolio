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
  value,
  suffix,
  index,
  description,
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
  }, [value, shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
        {/* Ambient Hover Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Icon Container */}
        <div className="mb-6">
          <div className="inline-flex p-3 rounded-xl bg-white/5 text-accent border border-white/5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        {/* Value with animation */}
        <div className="mb-2">
          <h3 className="text-4xl font-bold font-display text-[var(--text)] group-hover:text-accent transition-colors duration-300">
            {displayValue}
            <span className="text-2xl ml-1 text-[var(--text-muted)]">{suffix}</span>
          </h3>
        </div>

        {/* Label */}
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          {label}
        </h4>

        {/* Description - optional */}
        {description && (
          <p className="text-sm text-[var(--text-muted)] leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
