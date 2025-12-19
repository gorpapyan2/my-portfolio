import { GraduationCap } from 'lucide-react';
import { EducationList } from './EducationList';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';
import { TranslationText } from '../../../components/shared/TranslationText';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education">
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