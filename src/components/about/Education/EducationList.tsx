import { EducationCard } from './EducationCard';
import { useEducationService } from '../../../lib/services/useEducationService';

export function EducationList() {
  const { education, isLoading, error } = useEducationService();
  const content = isLoading ? (
    [0, 1].map((idx) => (
      <div key={idx} className="h-32 rounded-xl bg-[var(--surface-strong)] animate-pulse" />
    ))
  ) : error ? (
    <div className="text-[var(--text-muted)] text-sm">Failed to load education. Please refresh and try again.</div>
  ) : (
    (education.length > 0 ? education : [{
      degree: "Degree",
      school: "School",
      year: "YYYY",
      description: "Education details will appear here once published.",
      id: "placeholder"
    }]).map((edu, idx) => (
      <EducationCard 
        key={`${edu.school}-${edu.degree}-${idx}`}
        degree={edu.degree}
        school={edu.school}
        year={edu.year}
        description={edu.description}
      />
    ))
  );

  return (
    <div className="space-y-6">
      {content}
    </div>
  );
}
