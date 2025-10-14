import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/database.types';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id || index} {...project} />
      ))}
    </div>
  );
}