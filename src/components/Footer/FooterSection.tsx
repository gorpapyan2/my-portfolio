import React from 'react';
import { Shimmer } from '../ui/Shimmer';

interface FooterSectionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="relative group">
      <div>
        <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-[var(--space-16)]">{title}</h3>
        {children}
      </div>
      <Shimmer className="absolute inset-0" />
    </div>
  );
}
