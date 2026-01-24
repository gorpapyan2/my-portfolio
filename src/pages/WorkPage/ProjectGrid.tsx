import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/database.types';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-[var(--text-muted)] text-[length:var(--font-300)] py-[var(--space-64)] bg-white/5 rounded-3xl border border-white/10">
        <TranslationText translationKey="projects.none" as="span" shimmerWidth="150px" />
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          title={project.title}
          description={project.description}
          image={project.image || ''}
          tags={project.tags}
          liveUrl={project.live_url || undefined}
          githubUrl={project.github_url || undefined}
        />
      ))}
    </motion.div>
  );
}
