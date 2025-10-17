import { User, Calendar, MapPin, Briefcase } from 'lucide-react';

interface AuthorBioProps {
  className?: string;
}

export function AuthorBio({ className = "" }: AuthorBioProps) {
  return (
    <div className={`bg-white/5 rounded-lg border border-white/10 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#edfc3a] to-[#f2ff4d] flex items-center justify-center text-black font-bold text-xl">
          GP
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">Gor Papyan</h3>
          <p className="text-gray-400 text-sm mb-3">
            Senior QA Engineer & Test Automation Specialist with expertise in Playwright, 
            Selenium, and modern testing frameworks. Passionate about creating robust, 
            maintainable test suites and sharing knowledge with the community.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              <span>QA Engineer</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Remote</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>5+ years experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
