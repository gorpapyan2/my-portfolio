import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import { EducationList } from './EducationList';
import { SectionHeader } from '../../shared/SectionHeader';
import { TranslationText } from '../../../components/shared/TranslationText';

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          icon={GraduationCap}
          title={<TranslationText translationKey="about.education.title" shimmerWidth="180px" />}
          subtitle={<TranslationText translationKey="about.education.subtitle" as="span" shimmerWidth="300px" />}
        />
        <EducationList />
      </div>
    </section>
  );
}
