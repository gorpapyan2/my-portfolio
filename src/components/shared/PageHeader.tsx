import { LucideIcon, ReactNode } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function PageHeader({ icon: Icon, title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-12">
      <div className="relative p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
        <Icon className="h-8 w-8 text-[#edfc3a]" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}