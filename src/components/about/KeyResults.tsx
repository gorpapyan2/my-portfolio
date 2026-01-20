import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { TranslationText } from '../../components/shared/TranslationText';
import { MarkdownRenderer } from '../markdown/MarkdownRenderer';
import { useLanguage } from '../../context/LanguageContext';

type KeyResult = { summary: string };

type KeyResultsProps = {
  items: KeyResult[];
  isLoading?: boolean;
};

const MAX_FALLBACK_RESULTS = 12;
const MISSING_PREFIX = '[missing:';

function resolveFallbackKeyResults(t: (key: string) => string): KeyResult[] {
  const results: KeyResult[] = [];
  for (let i = 1; i <= MAX_FALLBACK_RESULTS; i += 1) {
    const value = t(`about.keyResults.${i}`);
    if (!value || value.startsWith(MISSING_PREFIX)) continue;
    results.push({ summary: value });
  }
  return results;
}

export function KeyResults({ items, isLoading = false }: KeyResultsProps) {
  const { t } = useLanguage();
  const keyResults = (items ?? []).filter(item => item.summary.trim().length > 0);
  const fallbackKeyResults = keyResults.length > 0 ? [] : resolveFallbackKeyResults(t);
  const emptyLabel = t('about.keyResults.empty');
  const emptySummary = emptyLabel.startsWith(MISSING_PREFIX) ? 'Key results coming soon.' : emptyLabel;
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
              {(keyResults.length > 0 ? keyResults : fallbackKeyResults.length > 0 ? fallbackKeyResults : [{ summary: emptySummary }]).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : idx * 0.03 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-0.5 text-accent"><CheckCircle2 className="w-5 h-5" aria-hidden="true" /></span>
                  <div className="flex-1 text-[var(--text-muted)] text-sm">
                    <MarkdownRenderer content={item.summary} className="mb-0 text-[var(--text-muted)] text-sm" />
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
