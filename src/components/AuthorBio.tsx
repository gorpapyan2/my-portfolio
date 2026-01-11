import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import { TranslationText } from './shared/TranslationText';

interface AuthorBioProps {
  className?: string;
}

export function AuthorBio({ className = "" }: AuthorBioProps) {
  return (
    <div className={`bg-white/5 rounded-lg border border-white/10 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#edfc3a] to-[#f2ff4d] flex items-center justify-center text-black font-bold text-xl">
          <TranslationText translationKey="author.initials" as="span" shimmerWidth="40px" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">
            <TranslationText translationKey="author.name" as="span" shimmerWidth="120px" />
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            <TranslationText translationKey="author.bio" as="span" shimmerWidth="500px" />
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              <TranslationText translationKey="author.role" as="span" shimmerWidth="100px" />
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <TranslationText translationKey="author.location" as="span" shimmerWidth="70px" />
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <TranslationText translationKey="author.experience" as="span" shimmerWidth="150px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
