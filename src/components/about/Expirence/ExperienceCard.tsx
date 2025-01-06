import { Card } from '../../shared/Card';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export function ExperienceCard({ role, company, period, description, achievements }: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-[#edfc3a]">{company}</p>
        </div>
        <span className="text-gray-400">{period}</span>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <span className="w-1.5 h-1.5 bg-[#edfc3a] rounded-full" />
            {achievement}
          </li>
        ))}
      </ul>
    </Card>
  );
}