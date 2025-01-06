import { cn } from '../../utils/cn';

interface SkeletonBaseProps {
  className?: string;
  'aria-label'?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string;
  animation?: 'pulse' | 'shimmer' | 'none';
}

export function SkeletonBase({
  className,
  'aria-label': ariaLabel,
  width = '100%',
  height = '1rem',
  rounded = 'md',
  animation = 'pulse',
}: SkeletonBaseProps) {
  const animations = {
    pulse: 'animate-pulse',
    shimmer: 'before:animate-[shimmer_2s_infinite]',
    none: '',
  };

  return (
    <div
      className={cn(
        `bg-white/5 relative overflow-hidden ${animations[animation]}`,
        animation === 'shimmer' &&
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
        `w-${width} h-${height} rounded-${rounded}`,
        className
      )}
      style={{ width, height }}
      aria-hidden="true"
      aria-label={ariaLabel}
    />
  );
}
