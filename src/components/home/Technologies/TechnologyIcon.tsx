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
        <div className="absolute inset-0 bg-[#dbe938] blur-lg rounded-circle opacity-50" />
        
        {/* Icon Container */}
        <div className="relative p-5 bg-black rounded-xl shadow-lg">
          <Icon className="h-12 w-12 text-[#dbe938]" />
        </div>
      </div>
    </AnimationWrapper>
  );
}
