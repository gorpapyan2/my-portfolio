import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/database.types';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const { t } = useLanguage();
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <TranslationText translationKey="projects.none" as="span" shimmerWidth="150px" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id || index} title={project.title} description={project.description} image={project.image || ''} tags={project.tags} liveUrl={project.live_url || undefined} githubUrl={project.github_url || undefined} />
      ))}
    </div>
  );
}