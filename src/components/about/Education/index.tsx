import { GraduationCap } from 'lucide-react';
import { EducationList } from './EducationList';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          icon={GraduationCap}
          title={t('about.education.title')}
          subtitle={t('about.education.subtitle')}
        />
        <EducationList />
      </div>
    </section>
  );
}