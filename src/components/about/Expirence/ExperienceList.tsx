import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    role: 'Senior QA Engineer',
    company: 'Tech Innovations Inc',
    period: '2020 - Present',
    description: 'Led end-to-end testing strategies for enterprise applications, improving test coverage by 40%.',
    achievements: [
      'Implemented automated testing framework',
      'Reduced bug escape rate by 60%',
      'Mentored junior QA engineers',
    ],
  },
  {
    role: 'QA Engineer',
    company: 'Digital Solutions Ltd',
    period: '2018 - 2020',
    description: 'Managed testing lifecycle for mobile and web applications.',
    achievements: [
      'Developed test automation suite',
      'Improved deployment quality',
      'Streamlined QA processes',
    ],
  },
];

export function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
}