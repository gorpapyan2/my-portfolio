import { useState } from 'react';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { useEducationService } from '../../lib/services/useEducationService';
import { Education, EducationInsert } from '../../types/database.types';
import { educationSchema } from '../../lib/schemas/educationSchema';
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

interface EducationAdminProps {
  onClose: () => void;
}

export function EducationAdmin({ onClose }: EducationAdminProps) {
  const { t, language } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState(language);
  const { education, isLoading, createEducation, updateEducation, deleteEducation } = useEducationService({
    language: activeLanguage,
  });

  const {
    showEditor,
    setShowEditor,
    editingItem: editingEducation,
    formData,
    setFormData,
    errors,
    handleSubmit,
    handleEdit,
    handleDelete,
    resetForm
  } = useAdminCrudForm<Education, EducationInsert>({
    items: education,
    isLoading,
    createItem: createEducation,
    updateItem: updateEducation,
    deleteItem: deleteEducation,
    schema: educationSchema,
    initialFormData: {
      degree: '',
      school: '',
      year: '',
      description: '',
      order_index: 0
    },
    language: activeLanguage,
    confirmDeleteKey: 'admin.education.confirm.delete',
    deleteErrorKey: 'admin.education.error.deleteFailed',
    t
  });

  if (isLoading) {
    return <AdminLoadingState />;
  }

  return (
    <div>
      <AdminHeader
        title={<TranslationText translationKey="admin.education.title" as="span" shimmerWidth="220px" />}
        onClose={onClose}
      />

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <LanguageSelector
            value={activeLanguage}
            onChange={setActiveLanguage}
            label={t('admin.common.language')}
          />

          <FormField
            label={t('admin.education.form.degree')}
            value={formData.degree}
            onChange={(value) => setFormData({ ...formData, degree: value })}
            error={errors.degree}
            placeholder={t('admin.education.degreePlaceholder')}
            required
          />

          <FormField
            label={t('admin.education.form.school')}
            value={formData.school}
            onChange={(value) => setFormData({ ...formData, school: value })}
            error={errors.school}
            placeholder={t('admin.education.schoolPlaceholder')}
            required
          />

          <FormField
            label={t('admin.education.form.year')}
            value={formData.year}
            onChange={(value) => setFormData({ ...formData, year: value })}
            error={errors.year}
            placeholder={t('admin.education.yearPlaceholder')}
            required
          />

          <TextareaField
            label={t('admin.common.description')}
            value={formData.description}
            onChange={(value) => setFormData({ ...formData, description: value })}
            error={errors.description}
            rows={3}
            placeholder={t('admin.education.additionalDetails')}
            required
          />

          <FormField
            type="number"
            label={t('admin.common.orderIndex')}
            value={formData.order_index}
            onChange={(value) => setFormData({ ...formData, order_index: parseInt(value) || 0 })}
            min={0}
          />

          <FormActions
            onCancel={resetForm}
            submitLabel={editingEducation ? t('admin.education.button.update') : t('admin.education.button.create')}
            cancelLabel={t('admin.common.cancel')}
          />
        </form>
      ) : (
        <>
          <AdminToolbar
            title={t('admin.education.titleCount')}
            itemCount={education.length}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onAdd={() => setShowEditor(true)}
            addButtonLabel={t('admin.education.addEducation')}
          />

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
                      {t('admin.education.card.order')} {edu.order_index} | {t('admin.education.card.created')} {new Date(edu.created_at).toLocaleDateString()}
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
