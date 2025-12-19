import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
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
  const { t } = useLanguage();
  return (
    <Card>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-white/5 text-[#edfc3a] rounded-full border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#edfc3a] transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            <TranslationText translationKey="projects.liveDemo" shimmerWidth="100px" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#edfc3a] transition-colors"
          >
            <Github className="h-5 w-5" />
            <TranslationText translationKey="projects.sourceCode" shimmerWidth="120px" />
          </a>
        )}
      </div>
    </Card>
  );
}