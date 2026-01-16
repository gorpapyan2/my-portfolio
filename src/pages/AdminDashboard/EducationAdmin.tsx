import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useEducationService } from '../../lib/services/useEducationService';
import { Education, EducationInsert } from '../../types/database.types';
import { educationSchema } from '../../lib/schemas/educationSchema';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';

interface EducationAdminProps {
  onClose: () => void;
}

export function EducationAdmin({ onClose }: EducationAdminProps) {
  const { t } = useLanguage();
  const { education, isLoading, createEducation, updateEducation, deleteEducation } = useEducationService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [formData, setFormData] = useState<Partial<EducationInsert>>({
    degree: '',
    school: '',
    year: '',
    description: '',
    order_index: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = educationSchema.parse(formData);
      
      if (editingEducation) {
        await updateEducation(editingEducation.id, validatedData);
      } else {
        await createEducation(validatedData);
      }
      
      setShowEditor(false);
      setEditingEducation(null);
      setFormData({
        degree: '',
        school: '',
        year: '',
        description: '',
        order_index: 0
      });
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

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    setFormData({
      degree: education.degree,
      school: education.school,
      year: education.year,
      description: education.description,
      order_index: education.order_index
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm(t('admin.confirm.deleteEducation'))) {
      try {
        await deleteEducation(id);
      } catch (error) {
        console.error('Error deleting education:', error);
        alert(t('admin.error.deleteFailed'));
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <TranslationText translationKey="admin.common.loading" as="div" shimmerWidth="100px" className="text-[var(--text)]" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.education.title" as="span" shimmerWidth="220px" />
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          ×
        </button>
      </div>

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="form-label">
              {t('admin.education.degree')}
            </label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className={`field ${
                errors.degree ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              placeholder={t('admin.education.degreePlaceholder')}
              required
            />
            {errors.degree && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.degree}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              {t('admin.education.school')}
            </label>
            <input
              type="text"
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              className={`field ${
                errors.school ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              placeholder={t('admin.education.schoolPlaceholder')}
              required
            />
            {errors.school && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.school}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              {t('admin.education.year')}
            </label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className={`field ${
                errors.year ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              placeholder={t('admin.education.yearPlaceholder')}
              required
            />
            {errors.year && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.year}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              {t('admin.common.description')}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className={`field ${
                errors.description ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              placeholder={t('admin.education.additionalDetails')}
              required
            />
            {errors.description && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.description}</p>
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

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowEditor(false);
                setEditingEducation(null);
                setFormData({
                  degree: '',
                  school: '',
                  year: '',
                  description: '',
                  order_index: 0
                });
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
              {editingEducation ? t('admin.education.updateEducation') : t('admin.education.createEducation')}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{t('admin.education.titleCount')} ({education.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {t('admin.education.addEducation')}
            </button>
          </div>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)] mb-2">{edu.degree}</h4>
                    <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-2">{edu.school}</p>
                    <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-2">{edu.year}</p>
                    <p className="text-[var(--text-muted)] mb-2">{edu.description}</p>
                    <div className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                      {t('admin.experience.orderLabel')} {edu.order_index} | {t('admin.experience.createdLabel')} {new Date(edu.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(edu)}
                      className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
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




