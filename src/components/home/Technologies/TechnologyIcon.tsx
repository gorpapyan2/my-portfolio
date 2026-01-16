import React from 'react';
import { AnimationWrapper } from '../../animations/AnimationWrapper';

interface TechnologyIconProps {
  icon: React.ElementType;
  delay?: number;
}

export function TechnologyIcon({ icon: Icon, delay = 0 }: TechnologyIconProps) {
  return (
    <AnimationWrapper animation="scaleIn" delay={delay}>
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-[color:rgb(var(--accent))] blur-xl rounded-full opacity-40" />
        
        {/* Icon Container */}
        <div className="relative p-[var(--space-24)] bg-[var(--surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]">
          <Icon className="h-[var(--space-48)] w-[var(--space-48)] text-accent" />
        </div>
      </div>
    </AnimationWrapper>
  );
}
