import { Briefcase } from 'lucide-react';
import { ExperienceList } from './ExperienceList';
import { SectionHeader } from '../../shared/SectionHeader';

export function Experience() {
  return (
    <section className="mb-20">
      <SectionHeader
        icon={Briefcase}
        title="Experience"
        subtitle="A journey through my professional career in software quality assurance"
      />
     <ExperienceList />
    </section>
  );
}