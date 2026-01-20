import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

/**
 * Global container component for consistent max-width and padding across all sections.
 * Ensures everything snaps to the same horizontal grid system.
 *
 * Sizes:
 * - default: max-w-6xl (1152px) - for most sections
 * - narrow: max-w-4xl (896px) - for focused content
 * - wide: max-w-7xl (1280px) - for wide layouts
 */
export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-6xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
  };

  return (
    <div className={cn(
      'w-full mx-auto px-6 lg:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}
