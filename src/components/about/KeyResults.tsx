import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { TranslationText } from '../../components/shared/TranslationText';

type KeyResult = { summary: string };

type KeyResultsProps = {
  items: KeyResult[];
  isLoading?: boolean;
};

export function KeyResults({ items, isLoading = false }: KeyResultsProps) {
  const keyResults = items ?? [];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="key-results" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          icon={CheckCircle2}
          title={<TranslationText translationKey="about.keyResults.title" shimmerWidth="180px" />}
        />

        <div className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)] hover:border-accent/30 transition-colors">
          {isLoading ? (
            <div className="space-y-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="h-5 bg-[var(--surface-strong)] rounded animate-pulse" />
              ))}
            </div>
          ) : (
            <ul className="space-y-2">
              {(keyResults.length > 0 ? keyResults : [{ summary: "Key results coming soon." }]).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : idx * 0.03 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-0.5 text-accent"><CheckCircle2 className="w-5 h-5" aria-hidden="true" /></span>
                  <span className="text-[var(--text-muted)]">{item.summary}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}


