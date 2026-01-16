import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useExperienceService } from '../../lib/services/useExperienceService';
import { Experience, ExperienceInsert } from '../../types/database.types';
import { experienceSchema } from '../../lib/schemas/experienceSchema';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';

interface ExperienceAdminProps {
  onClose: () => void;
}

export function ExperienceAdmin({ onClose }: ExperienceAdminProps) {
  const { t } = useLanguage();
  const { experiences, isLoading, createExperience, updateExperience, deleteExperience } = useExperienceService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [formData, setFormData] = useState<Partial<ExperienceInsert>>({
    role: '',
    company: '',
    period: '',
    description: '',
    achievements: [],
    order_index: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [achievementInput, setAchievementInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = experienceSchema.parse(formData);
      
      if (editingExperience) {
        await updateExperience(editingExperience.id, validatedData);
      } else {
        await createExperience(validatedData);
      }
      
      setShowEditor(false);
      setEditingExperience(null);
      setFormData({
        role: '',
        company: '',
        period: '',
        description: '',
        achievements: [],
        order_index: 0
      });
      setAchievementInput('');
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

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setFormData({
      role: experience.role,
      company: experience.company,
      period: experience.period,
      description: experience.description,
      achievements: experience.achievements,
      order_index: experience.order_index
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm(t('admin.confirm.deleteExperience'))) {
      try {
        await deleteExperience(id);
      } catch (error) {
        console.error('Error deleting experience:', error);
        alert(t('admin.error.deleteFailed'));
      }
    }
  };

  const addAchievement = () => {
    if (achievementInput.trim() && !formData.achievements?.includes(achievementInput.trim())) {
      setFormData({
        ...formData,
        achievements: [...(formData.achievements || []), achievementInput.trim()]
      });
      setAchievementInput('');
    }
  };

  const removeAchievement = (achievementToRemove: string) => {
    setFormData({
      ...formData,
      achievements: formData.achievements?.filter(achievement => achievement !== achievementToRemove) || []
    });
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
          <TranslationText translationKey="admin.experience.title" as="span" shimmerWidth="230px" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className={`field ${
                  errors.role ? 'border-red-500' : 'border-[var(--border)]'
                }`}
                required
              />
              {errors.role && (
                <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.role}</p>
              )}
            </div>

            <div>
              <label className="form-label">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={`field ${
                  errors.company ? 'border-red-500' : 'border-[var(--border)]'
                }`}
                required
              />
              {errors.company && (
                <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div>
            <label className="form-label">
              Period
            </label>
            <input
              type="text"
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              className={`field ${
                errors.period ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              placeholder={t('admin.experience.periodPlaceholder')}
              required
            />
            {errors.period && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.period}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className={`field ${
                errors.description ? 'border-red-500' : 'border-[var(--border)]'
              }`}
              required
            />
            {errors.description && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              Achievements
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                className="flex-1 field"
                placeholder={t('admin.experience.addAchievement')}
              />
              <button
                type="button"
                onClick={addAchievement}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.achievements?.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-[var(--surface)] rounded-[var(--radius-md)]"
                >
                  <span className="text-[var(--text)] text-[length:var(--font-100)]">{achievement}</span>
                  <button
                    type="button"
                    onClick={() => removeAchievement(achievement)}
                    className="text-[var(--text-muted)] hover:text-red-400"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label">
              Order Index
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
                setEditingExperience(null);
                setFormData({
                  role: '',
                  company: '',
                  period: '',
                  description: '',
                  achievements: [],
                  order_index: 0
                });
                setAchievementInput('');
              }}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {editingExperience ? t('admin.experience.updateExperience') : t('admin.experience.createExperience')}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{t('admin.experience.titleCount')} ({experiences.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {t('admin.experience.addExperience')}
            </button>
          </div>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)] mb-2">
                      {experience.role} at {experience.company}
                    </h4>
                    <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-2">{experience.period}</p>
                    <p className="text-[var(--text-muted)] mb-3">{experience.description}</p>
                    <div className="space-y-1">
                      {experience.achievements.map((achievement, index) => (
                        <div key={index} className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                    <div className="text-[length:var(--font-100)] text-[var(--text-muted)] mt-2">
                      {t('admin.experience.orderLabel')} {experience.order_index} | {t('admin.experience.createdLabel')} {new Date(experience.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(experience)}
                      className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(experience.id)}
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




