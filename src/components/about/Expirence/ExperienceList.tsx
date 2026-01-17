import { ExperienceCard } from './ExperienceCard';
import { useExperienceService } from '../../../lib/services/useExperienceService';

export function ExperienceList() {
  const { experiences, isLoading, error } = useExperienceService();
  const content = isLoading ? (
    [0, 1].map((idx) => (
      <div key={idx} className="h-40 rounded-xl bg-[var(--surface-strong)] animate-pulse" />
    ))
  ) : error ? (
    <div className="text-[var(--text-muted)] text-sm">Failed to load experience. Please refresh and try again.</div>
  ) : (
    (experiences.length > 0 ? experiences : [{
      company: "Experience",
      role: "Details coming soon",
      period: "YYYY - YYYY",
      description: "Experience entries will appear here once published.",
      achievements: [],
      id: "placeholder"
    }]).map((experience, idx) => (
      <ExperienceCard
        key={`${experience.company}-${experience.role}-${idx}`}
        role={experience.role}
        company={experience.company}
        period={experience.period ?? "YYYY - YYYY"}
        description={experience.description ?? "Experience details coming soon."}
        achievements={experience.achievements ?? []}
      />
    ))
  );

  return (
    <div className="space-y-8">
      {content}
    </div>
  );
}
