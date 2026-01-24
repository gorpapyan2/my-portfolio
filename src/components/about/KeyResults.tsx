import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
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
      <SectionHeader
        icon={CheckCircle2}
        title={<TranslationText translationKey="about.keyResults.title" shimmerWidth="180px" />}
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl overflow-hidden group"
      >
        {/* Ambient Gradient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />

        <div className="relative z-10">
          {isLoading ? (
            <div className="space-y-4">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="h-6 bg-white/5 rounded w-3/4 animate-pulse" />
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {(keyResults.length > 0 ? keyResults : fallbackKeyResults.length > 0 ? fallbackKeyResults : [{ summary: emptySummary }]).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                  className="flex items-start gap-4 group/item"
                >
                  <span className="mt-1 flex-shrink-0 text-accent group-hover/item:text-white transition-colors duration-300 bg-white/5 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div className="flex-1 text-[var(--text-muted)] group-hover/item:text-[var(--text)] transition-colors duration-300 text-base leading-relaxed">
                    <MarkdownRenderer content={item.summary} className="mb-0 text-inherit" />
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </section>
  );
}
