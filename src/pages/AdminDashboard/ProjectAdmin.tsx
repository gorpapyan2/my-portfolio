import { useState } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Star from 'lucide-react/dist/esm/icons/star';
import StarOff from 'lucide-react/dist/esm/icons/star-off';
import { ImageUpload } from '../../components/admin/ImageUpload';
import { useProjectService } from '../../lib/services/useProjectService';
import { Project, ProjectInsert } from '../../types/database.types';
import { projectSchema } from '../../lib/schemas/projectSchema';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectAdminProps {
  onClose: () => void;
}

export function ProjectAdmin({ onClose }: ProjectAdminProps) {
  const { t } = useLanguage();
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
      if (error instanceof Error && 'issues' in error) {
        const fieldErrors: Record<string, string> = {};
        (error as { issues: Array<{ path: string[]; message: string }> }).issues.forEach((issue) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
      }
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
    if (confirm(t('admin.projects.confirm.delete'))) {
      try {
        await deleteProject(id);
      } catch (error) {
        console.error('Error deleting project:', error);
        alert(t('admin.projects.error.deleteFailed'));
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
      <div className="flex items-center justify-center py-8">
        <div className="text-[var(--text)]">
          <TranslationText translationKey="admin.common.loading" as="span" shimmerWidth="100px" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.projects.title" as="span" shimmerWidth="200px" />
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          aria-label={t('admin.common.close')}
        >
          ×
        </button>
      </div>

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">
                {t('admin.common.title')}
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`field ${
                  errors.title ? 'border-red-500' : 'border-[var(--border)]'
                }`}
                required
              />
              {errors.title && (
                <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="form-label">
                {t('admin.common.orderIndex')}
              </label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) || 0 })}
                className="field"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="form-label">
              {t('admin.common.description')}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className={`field ${
                errors.description ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              required
            />
            {errors.description && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ImageUpload
                currentImage={formData.image || ''}
                onImageChange={(imageUrl) => setFormData({ ...formData, image: imageUrl })}
                folder="projects"
              />
            </div>

            <div>
              <label className="form-label">
                {t('admin.projects.form.liveUrl')}
              </label>
              <input
                type="url"
                value={formData.live_url || ''}
                onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                className="field"
              />
            </div>
          </div>

          <div>
            <label className="form-label">
              {t('admin.projects.form.githubUrl')}
            </label>
            <input
              type="url"
              value={formData.github_url || ''}
              onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
              className="field"
            />
          </div>

          <div>
            <label className="form-label">
              {t('admin.projects.form.tags')}
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 field"
                placeholder={t('admin.projects.form.tagPlaceholder')}
              />
              <button
                type="button"
                onClick={addTag}
                className="btn btn-primary"
              >
                {t('admin.common.add')}
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
              {t('admin.projects.form.featured')}
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
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
              className="btn btn-secondary"
            >
              {t('admin.common.cancel')}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {editingProject ? t('admin.projects.button.update') : t('admin.projects.button.create')}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{t('admin.projects.section.title')} ({projects.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {t('admin.projects.button.add')}
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
                      <span>{t('admin.projects.card.order')} {project.order_index}</span>
                      <span>{t('admin.projects.card.created')} {new Date(project.created_at).toLocaleDateString()}</span>
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
    </div>
  );
}



