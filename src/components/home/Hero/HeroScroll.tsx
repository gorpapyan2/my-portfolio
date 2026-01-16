import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TranslationText } from '../../shared/TranslationText';

export function HeroScroll() {
  return (
    <motion.div
      className="absolute bottom-[var(--space-32)] left-1/2 -translate-x-1/2 z-20 text-accent"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="flex flex-col items-center gap-[var(--space-8)]">
        <TranslationText translationKey="hero.scrollDown" as="span" className="text-[length:var(--font-100)]" shimmerWidth="100px" />
        <ChevronDown className="w-[var(--space-16)] h-[var(--space-16)]" />
      </div>
    </motion.div>
  );
}

