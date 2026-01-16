import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { useAboutService } from '../../lib/services/useAboutService';
import { TranslationText } from '../../components/shared/TranslationText';

export function ProfessionalSummary() {
  const { t } = useLanguage();
  const { summary, isLoading, error } = useAboutService();

  function emphasize(text: string) {
    const parts = text.split(/(\b\d+(?:\.\d+)?%?\b)/g);
    return parts.map((part, i) => {
      if (/^\d+(?:\.\d+)?%?$/.test(part)) {
        return (
          <span key={i} className="text-accent font-semibold">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }

  return (
    <section id="professional-summary" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          icon={BookOpen}
          title={<TranslationText translationKey="about.summary.title" shimmerWidth="200px" />}
        />

        {isLoading && (
          <div className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)]">
            <div className="space-y-2">
              {[0,1,2].map(i => (
                <div key={i} className="h-5 bg-[var(--surface-strong)] rounded animate-pulse" />
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)] hover:border-accent/30 transition-colors">
            <div className="space-y-3">
              {summary.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="text-[var(--text-muted)] leading-relaxed text-[length:var(--font-300)]"
                >
                  {emphasize(para)}
                </motion.p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



