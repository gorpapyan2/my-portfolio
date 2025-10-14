import { Briefcase } from 'lucide-react';
import { ExperienceList } from './ExperienceList';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          icon={Briefcase}
          title={t('about.experience.title')}
          subtitle={t('about.experience.subtitle')}
        />
        <ExperienceList />
      </div>
    </section>
  );
}