import { GraduationCap } from 'lucide-react';
import { EducationList } from './EducationList';
import { SectionHeader } from '../../shared/SectionHeader';

export function Education() {
  return (
    <section className="mb-20">
      <SectionHeader
        icon={GraduationCap}
        title="Education"
        subtitle="My education has been a journey of continuous learning, building both technical skills and personal growth."
      />
      <EducationList />
    </section>
  )
}