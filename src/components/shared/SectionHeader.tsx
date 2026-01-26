import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function SectionHeader({ icon: Icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-8">
      <div className="p-3 bg-[var(--surface)] rounded-full backdrop-blur-sm border border-[var(--border)]">
        <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
      </div>
      <div className="text-center">
        <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[length:var(--font-200)] text-[var(--text-muted)] max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

