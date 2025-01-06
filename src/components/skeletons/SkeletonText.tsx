import { cn } from '../../utils/cn';
import { SkeletonBase } from './SkeletonBase';

interface SkeletonTextProps {
  lines?: number;
  width?: string | number;
  lineSpacing?: string;
  lineRounded?: string;
  className?: string;
}

export function SkeletonText({
  lines = 3,
  width = '100%',
  lineSpacing = '0.5rem',
  lineRounded = 'sm',
  className = '',
}: SkeletonTextProps) {
  return (
    <div className={cn(`space-y-${lineSpacing}`, className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBase
          key={i}
          width={i === lines - 1 ? '70%' : width}
          height="1rem"
          rounded={lineRounded}
          aria-label={`Loading text line ${i + 1}`}
        />
      ))}
    </div>
  );
}
