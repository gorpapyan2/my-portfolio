import { SkeletonBase } from './SkeletonBase';

interface SkeletonCardProps {
  imageHeight?: string | number;
  titleWidth?: string | number;
  descriptionLines?: number;
  tagCount?: number;
}

export function SkeletonCard({
  imageHeight = '12rem',
  titleWidth = '75%',
  descriptionLines = 2,
  tagCount = 3,
}: SkeletonCardProps) {
  return (
    <div className="space-y-4">
      {/* Image placeholder */}
      <SkeletonBase
        width="100%"
        height={imageHeight}
        rounded="lg"
        aria-label="Loading image"
      />

      {/* Title placeholder */}
      <SkeletonBase
        width={titleWidth}
        height="2rem"
        rounded="md"
        aria-label="Loading title"
      />

      {/* Description placeholder */}
      <div className="space-y-2">
        {Array.from({ length: descriptionLines }).map((_, i) => (
          <SkeletonBase
            key={i}
            width={i === descriptionLines - 1 ? '80%' : '100%'}
            height="1rem"
            rounded="sm"
            aria-label={`Loading description line ${i + 1}`}
          />
        ))}
      </div>

      {/* Tags placeholder */}
      <div className="flex gap-2">
        {Array.from({ length: tagCount }).map((_, i) => (
          <SkeletonBase
            key={i}
            width={`${(i % 2 === 0 ? 16 : 20)}ch`}
            height="1.5rem"
            rounded="full"
            aria-label="Loading tag"
          />
        ))}
      </div>
    </div>
  );
}
