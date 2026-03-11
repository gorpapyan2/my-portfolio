import { Card } from '../../shared/Card';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { TranslationText } from '../../../components/shared/TranslationText';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  baseKey?: string; // translation base key like "experience.zealous"
}

export function ExperienceCard({ role, company, period, description, achievements, baseKey }: ExperienceCardProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const isMissing = (val: string) => val.startsWith('[missing:');
  const tv = (path: string, fallback: string) => {
    if (!baseKey) return fallback;
    const val = t(`${baseKey}.${path}`);
    return isMissing(val) ? fallback : val;
  };

  const translatedAchievements = baseKey
    ? Array.from({ length: 10 }, (_, i) => t(`${baseKey}.achievements.${i + 1}`))
        .filter((v) => !isMissing(v))
    : [];
  const achievementsToRender = translatedAchievements.length > 0 ? translatedAchievements : achievements;
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <Card className="group hover:bg-[var(--surface-strong)] transition-[background-color,border-color,box-shadow] duration-500">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-accent transition-colors duration-300">
              {tv('role', role)}
            </h3>
            <p className="text-accent font-medium text-sm mt-0.5">{tv('company', company)}</p>
          </div>
          <span className="text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap self-start">
            {tv('period', period)}
          </span>
        </div>

        <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{tv('description', description)}</p>

        {achievementsToRender.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">
              <TranslationText translationKey="experience.keyAchievements" shimmerWidth="150px" />
            </h4>
            <ul className="space-y-2">
              {achievementsToRender.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2.5 text-[var(--text-muted)] text-sm group-hover:text-[var(--text)] transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-accent rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <span className="leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
