import { LucideIcon, ReactNode } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function PageHeader({ icon: Icon, title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-12">
      <div className="relative p-4 bg-[var(--surface)] rounded-full backdrop-blur-sm border border-[var(--border)]">
        <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
      </div>
      <div className="text-center">
        <h1 className="text-[length:var(--font-800)] md:text-[length:var(--font-900)] font-bold text-[var(--text)] font-display mb-2 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[length:var(--font-300)] text-[var(--text-muted)] max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

