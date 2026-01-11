import { EducationCard } from './EducationCard';
import { useEducationService } from '../../../lib/services/useEducationService';
import { TranslationText } from '../../../components/shared/TranslationText';

export function EducationList() {
  const { education, isLoading, error } = useEducationService();

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-white/5 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">
          <TranslationText translationKey="error.loadFailed.education" as="span" shimmerWidth="180px" />: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <EducationCard 
          key={edu.id}
          degree={edu.degree}
          school={edu.school}
          year={edu.year}
          description={edu.description}
        />
      ))}
    </div>
  );
}