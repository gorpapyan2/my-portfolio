import { ExperienceCard } from './ExperienceCard';
import { useExperienceService } from '../../../lib/services/useExperienceService';
import { useLanguage } from '../../../context/LanguageContext';

export function ExperienceList() {
  const { experiences, isLoading, error } = useExperienceService();
  const { t } = useLanguage();
  const content = isLoading ? (
    [0, 1].map((idx) => (
      <div key={idx} className="h-40 rounded-xl bg-[var(--surface-strong)] animate-pulse" />
    ))
  ) : error ? (
    <div className="text-[var(--text-muted)] text-sm" role="alert">{t('about.experience.error')}</div>
  ) : (
    (experiences.length > 0 ? experiences : [{
      company: "Experience",
      role: "Details coming soon",
      period: "YYYY - YYYY",
      description: t('about.experience.fallback'),
      achievements: [],
      id: "placeholder"
    }]).map((experience, idx) => (
      <ExperienceCard
        key={`${experience.company}-${experience.role}-${idx}`}
        role={experience.role}
        company={experience.company}
        period={experience.period ?? "YYYY - YYYY"}
        description={experience.description ?? t('about.experience.fallback')}
        achievements={experience.achievements ?? []}
      />
    ))
  );

  return (
    <div className="space-y-6">
      {content}
    </div>
  );
}
