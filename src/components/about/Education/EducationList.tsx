import { EducationCard } from './EducationCard';

const educationData = [
  {
    degree: "B.Sc. in Information Technology",
    school: "National Polytechnic University of Armenia",
    year: "Graduated May 2024",
    description: "Bachelor of Science in Information Technology"
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