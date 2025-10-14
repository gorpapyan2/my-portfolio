import { ExperienceCard } from './ExperienceCard';
import { useExperienceService } from '../../../lib/services/useExperienceService';

export function ExperienceList() {
  const { experiences, isLoading, error } = useExperienceService();

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-white/5 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Failed to load experiences: {error}</p>
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
        />
      ))}
    </div>
  );
}