import { cn } from "../../utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "glass-hover" | "ghost";
}

/**
 * Card component - Reusable card container with consistent styling
 *
 * Provides a glassmorphic card design with hover effects.
 * Used across the application for content grouping.
 */
export function Card({ className, children, variant = "glass", ...props }: CardProps) {
  const variants = {
    glass: "bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg",
    "glass-hover": "bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:bg-white/10 hover:shadow-xl transition-all duration-300",
    ghost: "bg-transparent border-none shadow-none",
  };

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] p-6 overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
