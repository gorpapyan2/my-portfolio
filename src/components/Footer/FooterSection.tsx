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
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
      <Shimmer className="absolute inset-0" />
    </div>
  );
}