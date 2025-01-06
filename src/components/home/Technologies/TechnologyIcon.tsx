import { LucideIcon } from 'lucide-react';
import { AnimationWrapper } from '../../animations/AnimationWrapper';

interface TechnologyIconProps {
  icon: LucideIcon;
  delay?: number;
}

export function TechnologyIcon({ icon: Icon, delay = 0 }: TechnologyIconProps) {
  return (
    <AnimationWrapper animation="scaleIn" delay={delay}>
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 blur-md rounded-full opacity-30" />
        <div className="relative p-4 bg-gray-800 rounded-xl">
          <Icon className="h-10 w-10 text-yellow-400"  />
        </div>
      </div>
    </AnimationWrapper>
  );
}
