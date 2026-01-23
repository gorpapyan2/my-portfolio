import { cn } from "../../utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Card component - Reusable card container with consistent styling
 *
 * Provides a glassmorphic card design with hover effects.
 * Used across the application for content grouping.
 */
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[var(--surface)] backdrop-blur-sm rounded-[var(--radius-lg)] p-6 border border-[var(--border)] shadow-[0_20px_50px_rgba(7,10,18,0.35)] transition-[color,background-color,box-shadow,transform] duration-300 hover:bg-[var(--surface-strong)] hover:shadow-[0_26px_70px_rgba(7,10,18,0.45)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
