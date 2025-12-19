import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { useAboutService } from '../../lib/services/useAboutService';
import { TranslationText } from '../../components/shared/TranslationText';

export function KeyResults() {
  const { t } = useLanguage();
  const { keyResults, isLoading, error } = useAboutService();

  return (
    <section id="key-results" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          icon={CheckCircle2}
          title={<TranslationText translationKey="about.keyResults.title" shimmerWidth="180px" />}
        />

        {isLoading && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="space-y-2">
              {[0,1,2].map(i => (
                <div key={i} className="h-5 bg-white/10 rounded animate-pulse" />
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#edfc3a]/30 transition-colors">
            <ul className="space-y-2">
              {keyResults.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-0.5 text-[#edfc3a]"><CheckCircle2 className="w-5 h-5" /></span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}


