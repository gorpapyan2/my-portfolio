import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col group-hover:bg-white/10 transition-all duration-500">
        {/* Icon Container */}
        <div className="mb-6">
          <div className="inline-flex p-4 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a] 
          group-hover:bg-[#edfc3a]/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7" />
          </div>
        </div>

        {/* Value with animation */}
        <div className="mb-4">
          <h3 className="text-4xl md:text-5xl font-bold text-[#edfc3a] group-hover:text-white transition-colors duration-300">
            {displayValue}
            <span className="text-2xl md:text-3xl ml-1">{suffix}</span>
          </h3>
        </div>

        {/* Label */}
        <h4 className="text-lg font-semibold text-white group-hover:text-[#edfc3a] transition-colors duration-300 mb-3">
          {label}
        </h4>

        {/* Description - optional */}
        {description && (
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-1">
            {description}
          </p>
        )}

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#edfc3a]/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </motion.div>
  );
}
