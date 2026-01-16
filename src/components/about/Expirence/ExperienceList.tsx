import { ExperienceCard } from './ExperienceCard';
import { useExperienceService } from '../../../lib/services/useExperienceService';
import { useLanguage } from '../../../context/LanguageContext';

export function ExperienceList() {
  const { experiences, isLoading, error } = useExperienceService();
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">{t('errors.experiencesLoadFailed')}: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {experiences.map((experience) => (
        <ExperienceCard 
          key={experience.id}
          role={experience.role}
          company={experience.company}
          period={experience.period}
          description={experience.description}
          achievements={experience.achievements}
          baseKey={`experience.${experience.company.toLowerCase().split(' ')[0] || 'entry'}`}
        />
      ))}
    </div>
  );
}
