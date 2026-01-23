import { useState } from 'react';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { useExperienceService } from '../../lib/services/useExperienceService';
import { Experience, ExperienceInsert } from '../../types/database.types';
import { experienceSchema } from '../../lib/schemas/experienceSchema';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';
import { useAdminCrudForm } from '../../hooks/useAdminCrudForm';
import {
  FormField,
  TextareaField,
  LanguageSelector,
  AdminHeader,
  FormActions,
  AdminLoadingState,
  AdminToolbar,
} from '../../components/admin';

interface ExperienceAdminProps {
  onClose: () => void;
}

export function ExperienceAdmin({ onClose }: ExperienceAdminProps) {
  const { t, language } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState(language);
  const { experiences, isLoading, createExperience, updateExperience, deleteExperience } = useExperienceService({
    language: activeLanguage,
  });

  const {
    showEditor,
    setShowEditor,
    editingItem: editingExperience,
    formData,
    setFormData,
    errors,
    handleSubmit,
    handleEdit,
    handleDelete,
    resetForm
  } = useAdminCrudForm<Experience, ExperienceInsert>({
    items: experiences,
    isLoading,
    createItem: createExperience,
    updateItem: updateExperience,
    deleteItem: deleteExperience,
    schema: experienceSchema,
    initialFormData: {
      role: '',
      company: '',
      period: '',
      description: '',
      achievements: [],
      order_index: 0
    },
    language: activeLanguage,
    confirmDeleteKey: 'admin.experience.confirm.delete',
    deleteErrorKey: 'admin.experience.error.deleteFailed',
    t
  });

  // Custom state for achievements array management
  const [achievementInput, setAchievementInput] = useState('');

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

  const handleCancel = () => {
    resetForm();
    setAchievementInput('');
  };

  if (isLoading) {
    return <AdminLoadingState />;
  }

  return (
    <div>
      <AdminHeader
        title={<TranslationText translationKey="admin.experience.title" as="span" shimmerWidth="230px" />}
        onClose={onClose}
      />

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <LanguageSelector
            value={activeLanguage}
            onChange={setActiveLanguage}
            label={t('admin.common.language')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label={t('admin.experience.form.role')}
              value={formData.role}
              onChange={(value) => setFormData({ ...formData, role: value })}
              error={errors.role}
              required
            />

            <FormField
              label={t('admin.experience.form.company')}
              value={formData.company}
              onChange={(value) => setFormData({ ...formData, company: value })}
              error={errors.company}
              required
            />
          </div>

          <FormField
            label={t('admin.experience.form.period')}
            value={formData.period}
            onChange={(value) => setFormData({ ...formData, period: value })}
            error={errors.period}
            placeholder={t('admin.experience.periodPlaceholder')}
            required
          />

          <TextareaField
            label={t('admin.common.description')}
            value={formData.description}
            onChange={(value) => setFormData({ ...formData, description: value })}
            error={errors.description}
            rows={3}
            required
          />

          <div>
            <label className="form-label">
              {t('admin.experience.form.achievements')}
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                className="flex-1 field"
                placeholder={t('admin.experience.form.achievementPlaceholder')}
              />
              <button
                type="button"
                onClick={addAchievement}
                className="btn btn-primary"
              >
                {t('admin.common.add')}
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

          <FormField
            type="number"
            label={t('admin.common.orderIndex')}
            value={formData.order_index}
            onChange={(value) => setFormData({ ...formData, order_index: parseInt(value) || 0 })}
            min={0}
          />

          <FormActions
            onCancel={handleCancel}
            submitLabel={editingExperience ? t('admin.experience.button.update') : t('admin.experience.button.create')}
            cancelLabel={t('admin.common.cancel')}
          />
        </form>
      ) : (
        <>
          <AdminToolbar
            title={t('admin.experience.titleCount')}
            itemCount={experiences.length}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onAdd={() => setShowEditor(true)}
            addButtonLabel={t('admin.experience.addExperience')}
          />

          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)] mb-2">
                      {experience.role} {t('admin.experience.card.at')} {experience.company}
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
                      {t('admin.experience.card.order')} {experience.order_index} | {t('admin.experience.card.created')} {new Date(experience.created_at).toLocaleDateString()}
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
