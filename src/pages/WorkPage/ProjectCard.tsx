import { ExternalLink, Github } from 'lucide-react';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion } from 'framer-motion';

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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-[var(--surface-strong)] flex items-center justify-center" aria-hidden="true">
            <span className="text-4xl font-bold opacity-10">Project</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-bold text-[var(--text)] font-display mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-accent rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-white/10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors group/link"
            >
              <ExternalLink className="h-4 w-4 text-accent group-hover/link:scale-110 transition-transform" aria-hidden="true" />
              <TranslationText translationKey="projects.liveDemo" shimmerWidth="80px" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors group/link"
            >
              <Github className="h-4 w-4 text-accent group-hover/link:scale-110 transition-transform" aria-hidden="true" />
              <TranslationText translationKey="projects.sourceCode" shimmerWidth="100px" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
