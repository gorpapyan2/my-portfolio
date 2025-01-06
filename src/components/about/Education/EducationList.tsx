import { EducationCard } from './EducationCard';

const educationData = [
  {
    degree: "Master's in Computer Science",
    school: "Stanford University",
    year: "2018 - 2020",
    description: "Specialized in Software Engineering and Quality Assurance"
  },
  {
    degree: "Bachelor's in Software Engineering",
    school: "University of California, Berkeley",
    year: "2014 - 2018",
    description: "Focus on Software Development and Testing Methodologies"
  }
];

export function EducationList() {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
}