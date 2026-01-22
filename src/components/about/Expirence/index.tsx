import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import { ExperienceList } from './ExperienceList';
import { SectionHeader } from '../../shared/SectionHeader';
import { TranslationText } from '../../../components/shared/TranslationText';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          icon={Briefcase}
          title={<TranslationText translationKey="about.experience.title" shimmerWidth="180px" />}
          subtitle={<TranslationText translationKey="about.experience.subtitle" as="span" shimmerWidth="300px" />}
        />
        <ExperienceList />
      </div>
    </section>
  );
}
