import { useState } from 'react';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Star from 'lucide-react/dist/esm/icons/star';
import StarOff from 'lucide-react/dist/esm/icons/star-off';
import { Card } from '../../components/shared/Card';
import { ImageUpload } from '../../components/admin/ImageUpload';
import { useProjectService } from '../../lib/services/useProjectService';
import { Project, ProjectInsert } from '../../types/database.types';
import { projectSchema } from '../../lib/schemas/projectSchema';
import { mapZodErrors } from '../../lib/utils/zodErrorHandler';
import {
  FormField,
  TextareaField,
  FormActions,
} from '../../components/admin';

interface ProjectAdminProps {
  onClose: () => void;
}

export function ProjectAdmin({ onClose }: ProjectAdminProps) {
  const { projects, isLoading, createProject, updateProject, deleteProject } = useProjectService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Partial<ProjectInsert>>({
    title: '',
    description: '',
    image: '',
    tags: [],
    live_url: '',
    github_url: '',
    order_index: 0,
    featured: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = projectSchema.parse(formData);
      
      if (editingProject) {
        await updateProject(editingProject.id, validatedData);
      } else {
        await createProject(validatedData);
      }
      
      setShowEditor(false);
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        image: '',
        tags: [],
        live_url: '',
        github_url: '',
        order_index: 0,
        featured: false
      });
      setTagInput('');
    } catch (error) {
      setErrors(mapZodErrors(error));
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || '',
      tags: project.tags,
      live_url: project.live_url || '',
      github_url: project.github_url || '',
      order_index: project.order_index,
      featured: project.featured
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project');
      }
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter(tag => tag !== tagToRemove) || []
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="text-[var(--text)]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">Project Admin</h2>
          <button
            onClick={onClose}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            ×
          </button>
        </div>

        {showEditor ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Title"
                value={formData.title || ''}
                onChange={(value) => setFormData({ ...formData, title: value })}
                error={errors.title}
                required
              />

              <FormField
                type="number"
                label="Order Index"
                value={formData.order_index || 0}
                onChange={(value) => setFormData({ ...formData, order_index: parseInt(value) || 0 })}
                min={0}
              />
            </div>

            <TextareaField
              label="Description"
              value={formData.description || ''}
              onChange={(value) => setFormData({ ...formData, description: value })}
              error={errors.description}
              rows={4}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ImageUpload
                  currentImage={formData.image || ''}
                  onImageChange={(imageUrl) => setFormData({ ...formData, image: imageUrl })}
                  folder="projects"
                />
              </div>

              <FormField
                type="url"
                label="Live URL"
                value={formData.live_url || ''}
                onChange={(value) => setFormData({ ...formData, live_url: value })}
              />
            </div>

            <FormField
              type="url"
              label="GitHub URL"
              value={formData.github_url || ''}
              onChange={(value) => setFormData({ ...formData, github_url: value })}
            />

            <div>
              <label className="form-label">
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 field"
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--surface-strong)] text-[var(--text)] rounded-full text-[length:var(--font-100)]"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-[var(--text-muted)] hover:text-[var(--text)]"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              {errors.tags && (
                <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.tags}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="featured" className="text-[var(--text-muted)]">
                Featured Project
              </label>
            </div>

            <FormActions
              onCancel={() => {
                setShowEditor(false);
                setEditingProject(null);
                setFormData({
                  title: '',
                  description: '',
                  image: '',
                  tags: [],
                  live_url: '',
                  github_url: '',
                  order_index: 0,
                  featured: false
                });
                setTagInput('');
              }}
              submitLabel={editingProject ? 'Update Project' : 'Create Project'}
              cancelLabel="Cancel"
            />
          </form>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">Projects ({projects.length})</h3>
              <button
                onClick={() => setShowEditor(true)}
                className="inline-flex items-center gap-2 btn btn-primary"
              >
                <Plus className="h-4 w-4" />
                Add Project
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{project.title}</h4>
                        {project.featured ? (
                          <Star className="h-4 w-4 text-yellow-400" />
                        ) : (
                          <StarOff className="h-4 w-4 text-[var(--text-muted)]" />
                        )}
                      </div>
                      <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-2">{project.description}</p>
                      <div className="flex items-center gap-4 text-[length:var(--font-100)] text-[var(--text-muted)] mb-2">
                        <span>Order: {project.order_index}</span>
                        <span>Created: {new Date(project.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-[var(--surface-strong)] text-[var(--text)] rounded text-[length:var(--font-100)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-[var(--text-muted)] hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Card>
    </div>
  );
}


