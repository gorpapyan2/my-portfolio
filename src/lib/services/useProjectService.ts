import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { Project, ProjectInsert, ProjectUpdate } from '../../types/database.types';
import { projectInsertSchema, projectUpdateSchema } from '../schemas/projectSchema';

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
  createProject: (project: ProjectInsert) => Promise<void>;
  updateProject: (id: string, updates: ProjectUpdate) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

/**
 * Service hook for managing portfolio projects from Supabase
 * Provides full CRUD operations with optimistic updates and validation
 * Projects are displayed on the Work page and featured projects on home page
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load projects from Supabase
  const loadProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

      if (supabaseError) {
        throw supabaseError;
      }

      setProjects(data || []);
    } catch (err) {
      console.error('Error loading projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // CRUD operations with optimistic updates
  const createProject = useCallback(async (project: ProjectInsert) => {
    try {
      // Validate input
      const validatedData = projectInsertSchema.parse(project);
      
      // Optimistic update
      const tempId = `temp-${Date.now()}`;
      const tempProject: Project = {
        id: tempId,
        ...validatedData,
        tags: validatedData.tags ?? [],
        order_index: validatedData.order_index ?? 0,
        featured: validatedData.featured ?? false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setProjects(prev => [...prev, tempProject]);

      const { data, error } = await supabase
        .from('projects')
        .insert(validatedData)
        .select()
        .single();

      if (error) throw error;

      // Replace temp with real data
      setProjects(prev => prev.map(project => 
        project.id === tempId ? data : project
      ));
    } catch (err) {
      // Revert optimistic update
      setProjects(prev => prev.filter(project => !project.id.startsWith('temp-')));
      console.error('Error creating project:', err);
      throw err;
    }
  }, []);

  const updateProject = useCallback(async (id: string, updates: ProjectUpdate) => {
    try {
      // Validate input
      const validatedData = projectUpdateSchema.parse(updates);
      
      // Optimistic update
      setProjects(prev => prev.map(project => 
        project.id === id ? { ...project, ...validatedData } : project
      ));

      const { data, error } = await supabase
        .from('projects')
        .update(validatedData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Update with real data
      setProjects(prev => prev.map(project => 
        project.id === id ? data : project
      ));
    } catch (err) {
      // Revert optimistic update
      await loadProjects();
      console.error('Error updating project:', err);
      throw err;
    }
  }, [loadProjects]);

  const deleteProject = useCallback(async (id: string) => {
    try {
      // Optimistic update
      setProjects(prev => prev.filter(project => project.id !== id));

      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      // Revert optimistic update by reloading
      await loadProjects();
      console.error('Error deleting project:', err);
      throw err;
    }
  }, [loadProjects]);

  const refreshProjects = useCallback(async () => {
    await loadProjects();
  }, [loadProjects]);

  // Load projects on mount
  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return {
    projects,
    isLoading,
    error,
    createProject,
    updateProject,
    deleteProject,
    refreshProjects
  };
}
