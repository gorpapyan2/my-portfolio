import { Card } from '../../shared/Card';

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export function EducationCard({ degree, school, year, description }: EducationCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white">{degree}</h3>
      <div className="mt-2 text-[#edfc3a] font-medium">{school}</div>
      <div className="mt-1 text-gray-400">{year}</div>
      <p className="mt-2 text-gray-300">{description}</p>
    </Card>
  );
}