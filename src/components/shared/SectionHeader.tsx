import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ icon: Icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-8">
      <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
        <Icon className="h-6 w-6 text-[#edfc3a]" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        {subtitle && (
          <p className="text-md text-gray-400 max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
