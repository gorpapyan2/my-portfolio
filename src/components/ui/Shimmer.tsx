interface ShimmerProps {
  className?: string;
}

/**
 * Hover shimmer effect component for interactive elements
 * Uses the same shimmer animation as loading states but as a hover overlay
 */
export function Shimmer({ className = '' }: ShimmerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
