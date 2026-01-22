import { useState } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { useSkillService } from '../../lib/services/useSkillService';
import { Skill, SkillInsert } from '../../types/database.types';
import { skillSchema } from '../../lib/schemas/skillSchema';
import { getIcon } from '../../utils/iconMap';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';
import { useAdminCrudForm } from '../../hooks/useAdminCrudForm';

interface SkillsAdminProps {
  onClose: () => void;
}

export function SkillsAdmin({ onClose }: SkillsAdminProps) {
  const { t, language } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState(language);
  const { skills, isLoading, createSkill, updateSkill, deleteSkill } = useSkillService({
    language: activeLanguage,
  });

  const {
    showEditor,
    setShowEditor,
    editingItem: editingSkill,
    formData,
    setFormData,
    errors,
    handleSubmit,
    handleEdit,
    handleDelete,
    resetForm
  } = useAdminCrudForm<Skill, SkillInsert>({
    items: skills,
    isLoading,
    createItem: createSkill,
    updateItem: updateSkill,
    deleteItem: deleteSkill,
    schema: skillSchema,
    initialFormData: {
      title: '',
      description: '',
      icon: 'Code2',
      level: 0,
      order_index: 0
    },
    language: activeLanguage,
    confirmDeleteKey: 'admin.skills.confirm.delete',
    deleteErrorKey: 'admin.skills.error.deleteFailed',
    t
  });

  const iconOptions = [
    'Code2', 'GitBranch', 'Workflow', 'Kanban', 'Database',
    'Bug', 'Globe', 'Lightbulb', 'Smartphone', 'Table'
  ];

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
          <TranslationText translationKey="admin.skills.title" as="span" shimmerWidth="180px" />
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
            <label className="form-label">{t('admin.common.language')}</label>
            <select
              value={activeLanguage}
              onChange={(e) => setActiveLanguage(e.target.value as typeof activeLanguage)}
              className="field"
            >
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="am">Armenian</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">
                {t('admin.skills.form.title')}
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
                {t('admin.skills.form.icon')}
              </label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full admin-select"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
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
              required
            />
            {errors.description && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">
                {t('admin.skills.form.level')}
              </label>
              <input
                type="number"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) || 0 })}
                className={`field ${
                  errors.level ? 'border-red-500' : 'border-[var(--border)]'
                }`}
                min="0"
                max="100"
                required
              />
              {errors.level && (
                <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.level}</p>
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

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-secondary"
            >
              {t('admin.common.cancel')}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Plus className="h-4 w-4" />
              {editingSkill ? t('admin.skills.button.update') : t('admin.skills.button.create')}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{t('admin.skills.titleCount')} ({skills.length})</h3>
            <div className="flex items-center gap-3">
              <select
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value as typeof activeLanguage)}
                className="field"
              >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="am">Armenian</option>
              </select>
              <button
                onClick={() => setShowEditor(true)}
                className="inline-flex items-center gap-2 btn btn-primary"
              >
                <Plus className="h-4 w-4" />
                {t('admin.skills.addSkill')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <div key={skill.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-[var(--radius-md)] bg-accent/10 text-accent">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{skill.title}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleEdit(skill)}
                        className="p-1 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleDelete(skill.id)}
                        className="p-1 text-[var(--text-muted)] hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-3">{skill.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[length:var(--font-100)]">
                      <span className="text-[var(--text-muted)]">{t('admin.skills.card.proficiency')}</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-[var(--surface-strong)] rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-[length:var(--font-100)] text-[var(--text-muted)] mt-2">
                    {t('admin.experience.orderLabel')} {skill.order_index} | {t('admin.experience.createdLabel')} {new Date(skill.created_at).toLocaleDateString()}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}


