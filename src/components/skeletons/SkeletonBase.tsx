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
  animation = 'shimmer', // Changed default to shimmer
}: SkeletonBaseProps) {
  const roundedClass = rounded ? `rounded-${rounded}` : 'rounded-md';
  
  return (
    <div
      className={cn(
        'bg-white/5 relative overflow-hidden',
        animation === 'pulse' && 'animate-pulse',
        animation === 'shimmer' && 'shimmer',
        roundedClass,
        className
      )}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width, 
        height: typeof height === 'number' ? `${height}px` : height 
      }}
      aria-hidden="true"
      aria-label={ariaLabel}
    />
  );
}
