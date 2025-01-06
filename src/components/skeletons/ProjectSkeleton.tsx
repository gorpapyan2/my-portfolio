import { SkeletonCard } from './SkeletonCard';

interface ProjectSkeletonProps {
  cardCount?: number;
  gridCols?: number;
}

export function ProjectSkeleton({
  cardCount = 4,
  gridCols = 2,
}: ProjectSkeletonProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-8`}>
      {Array.from({ length: cardCount }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
