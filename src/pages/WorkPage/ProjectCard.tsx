import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Github from 'lucide-react/dist/esm/icons/github';
import { Card } from '../../components/shared/Card';
import { TranslationText } from '../../components/shared/TranslationText';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  const hasImage = Boolean(image);

  return (
    <Card className="group">
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] mb-[var(--space-16)]">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[var(--surface-strong)]" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] mb-[var(--space-8)]">{title}</h3>
      <p className="text-[var(--text-muted)] text-[length:var(--font-200)] mb-[var(--space-16)]">{description}</p>
      
      <div className="flex flex-wrap gap-[var(--space-8)] mb-[var(--space-16)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-[var(--space-12)] py-[var(--space-4)] text-[length:var(--font-100)] bg-[var(--surface)] text-accent rounded-full border border-[var(--border)]"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-[var(--space-16)]">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[var(--space-8)] text-[var(--text)] hover:text-accent transition-colors text-[length:var(--font-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-full"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <TranslationText translationKey="projects.liveDemo" shimmerWidth="100px" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[var(--space-8)] text-[var(--text)] hover:text-accent transition-colors text-[length:var(--font-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-full"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <TranslationText translationKey="projects.sourceCode" shimmerWidth="120px" />
          </a>
        )}
      </div>
    </Card>
  );
}
