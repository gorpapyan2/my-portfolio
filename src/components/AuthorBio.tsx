import Calendar from 'lucide-react/dist/esm/icons/calendar';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import { TranslationText } from './shared/TranslationText';

interface AuthorBioProps {
  className?: string;
}

export function AuthorBio({ className = "" }: AuthorBioProps) {
  return (
    <div className={`bg-[var(--surface)] rounded-[var(--radius-lg)] border border-[var(--border)] p-[var(--space-24)] ${className}`}>
      <div className="flex items-start gap-[var(--space-16)]">
        <div className="w-[var(--space-64)] h-[var(--space-64)] rounded-full bg-gradient-to-br from-accent to-accent-strong flex items-center justify-center text-accent-ink font-semibold text-[length:var(--font-400)]">
          <TranslationText translationKey="author.initials" as="span" shimmerWidth="40px" />
        </div>
        <div className="flex-1">
          <h3 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] mb-[var(--space-8)]">
            <TranslationText translationKey="author.name" as="span" shimmerWidth="120px" />
          </h3>
          <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-[var(--space-12)]">
            <TranslationText translationKey="author.bio" as="span" shimmerWidth="500px" />
          </p>
          <div className="flex flex-wrap items-center gap-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)]">
            <div className="flex items-center gap-[var(--space-4)]">
              <Briefcase className="h-[var(--space-12)] w-[var(--space-12)]" />
              <TranslationText translationKey="author.role" as="span" shimmerWidth="100px" />
            </div>
            <div className="flex items-center gap-[var(--space-4)]">
              <MapPin className="h-[var(--space-12)] w-[var(--space-12)]" />
              <TranslationText translationKey="author.location" as="span" shimmerWidth="70px" />
            </div>
            <div className="flex items-center gap-[var(--space-4)]">
              <Calendar className="h-[var(--space-12)] w-[var(--space-12)]" />
              <TranslationText translationKey="author.experience" as="span" shimmerWidth="150px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

