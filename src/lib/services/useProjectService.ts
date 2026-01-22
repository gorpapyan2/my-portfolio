import { Project, ProjectInsert, ProjectUpdate } from '../../types/database.types';
import { projectInsertSchema } from '../schemas/projectSchema';
import { useSimpleCrud } from './useSimpleCrud';

/**
 * ProjectService interface - defines the shape of the project service
 * @interface ProjectService
 * @property {Project[]} projects - Array of all projects, sorted by order_index
 * @property {boolean} isLoading - Indicates if data is currently being fetched
 * @property {string|null} error - Error message if an operation fails, null if successful
 * @property {Function} createProject - Creates a new project with optimistic updates
 * @property {Function} updateProject - Updates an existing project
 * @property {Function} deleteProject - Deletes a project
 * @property {Function} refreshProjects - Manually refresh the projects list
 */
export interface ProjectService {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  createProject: (project: ProjectInsert) => Promise<Project>;
  updateProject: (id: string, updates: ProjectUpdate) => Promise<Project>;
  deleteProject: (id: string) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

/**
 * Service hook for managing portfolio projects from Supabase
 * Provides full CRUD operations with optimistic updates and validation
 * Projects are displayed on the Work page and featured projects on home page
 *
 * Uses the generic useSimpleCrud hook for standardized CRUD operations
 *
 * @example
 * const { projects, isLoading, error, createProject, updateProject, deleteProject, refreshProjects } = useProjectService();
 *
 * if (isLoading) return <ProjectSkeleton />;
 * if (error) return <ErrorDisplay message={error} />;
 *
 * const featuredProjects = projects.filter(p => p.featured);
 *
 * return (
 *   <>
 *     {projects.map(project => <ProjectCard key={project.id} project={project} />)}
 *   </>
 * );
 *
 * @returns {ProjectService} Service object with project state and CRUD operations
 */
export function useProjectService(): ProjectService {
  const service = useSimpleCrud<Project, ProjectInsert, ProjectUpdate>({
    tableName: 'projects',
    schema: projectInsertSchema,
    orderBy: 'order_index',
    orderAscending: true
  });

  // Return with renamed properties for backward compatibility
  return {
    projects: service.data,
    isLoading: service.isLoading,
    error: service.error,
    createProject: service.create,
    updateProject: service.update,
    deleteProject: service.remove,
    refreshProjects: service.refetch
  };
}
