import { ExternalLink } from "lucide-react";
import { Technology } from ".";
import { Card, CardContent } from "../../shared/Card";

export const TechnologyCard = ({ technology }: { technology: Technology }) => {
  const { icon: Icon, title, description, level, detailedDescription, realWorldExample } = technology;
  
  return (
    <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#dbe938]/20 blur-xl rounded-full" />
              <div className="relative p-4 rounded-lg bg-[#dbe938]/10">
                <Icon className="w-8 h-8 text-[#dbe938]" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-400">{description}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Proficiency</span>
                <span className="text-[#dbe938]">{level}%</span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#dbe938] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>

            <div className="text-gray-400">
              <h4 className="text-white font-semibold mb-2">Real World Impact</h4>
              <p>{realWorldExample}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Detailed Overview
              </h4>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                {detailedDescription.map((desc, index) => (
                  <li key={index} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {technology.ctaLink && (
              <a
                href={technology.ctaLink}
                className="inline-flex items-center gap-2 text-[#dbe938] hover:text-[#d6e836] transition-colors"
              >
                View Related Work
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
