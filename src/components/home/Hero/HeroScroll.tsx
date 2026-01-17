import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TranslationText } from '../../shared/TranslationText';

export function HeroScroll() {
  return (
    <motion.div
      className="absolute bottom-[var(--space-32)] left-1/2 -translate-x-1/2 z-20 text-[var(--text-muted)]"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="flex flex-col items-center gap-[var(--space-8)] rounded-full px-[var(--space-16)] py-[var(--space-8)] bg-[var(--surface)] border border-[var(--border)] backdrop-blur-sm">
        <TranslationText translationKey="hero.scrollDown" as="span" className="text-[length:var(--font-100)] uppercase tracking-[var(--tracking-wide)]" shimmerWidth="100px" />
        <ChevronDown className="w-[var(--space-16)] h-[var(--space-16)] text-accent" />
      </div>
    </motion.div>
  );
}

