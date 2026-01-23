import { useState } from 'react';
import { useSkillService } from '../../lib/services/useSkillService';
import { Skill, SkillInsert } from '../../types/database.types';
import { skillSchema } from '../../lib/schemas/skillSchema';
import { getIcon } from '../../utils/iconMap';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';
import { useAdminCrudForm } from '../../hooks/useAdminCrudForm';
import {
  FormField,
  TextareaField,
  SelectField,
  LanguageSelector,
  AdminHeader,
  FormActions,
  AdminLoadingState,
  AdminToolbar,
} from '../../components/admin';

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
    return <AdminLoadingState />;
  }

  return (
    <div>
      <AdminHeader
        title={<TranslationText translationKey="admin.skills.title" as="span" shimmerWidth="180px" />}
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
              label={t('admin.skills.form.title')}
              value={formData.title}
              onChange={(value) => setFormData({ ...formData, title: value })}
              error={errors.title}
              required
            />

            <SelectField
              label={t('admin.skills.form.icon')}
              value={formData.icon}
              onChange={(value) => setFormData({ ...formData, icon: value })}
              options={iconOptions.map((icon) => ({ value: icon, label: icon }))}
            />
          </div>

          <TextareaField
            label={t('admin.common.description')}
            value={formData.description}
            onChange={(value) => setFormData({ ...formData, description: value })}
            error={errors.description}
            rows={3}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="number"
              label={t('admin.skills.form.level')}
              value={formData.level}
              onChange={(value) => setFormData({ ...formData, level: parseInt(value) || 0 })}
              error={errors.level}
              min={0}
              max={100}
              required
            />

            <FormField
              type="number"
              label={t('admin.common.orderIndex')}
              value={formData.order_index}
              onChange={(value) => setFormData({ ...formData, order_index: parseInt(value) || 0 })}
              min={0}
            />
          </div>

          <FormActions
            onCancel={resetForm}
            submitLabel={editingSkill ? t('admin.skills.button.update') : t('admin.skills.button.create')}
            cancelLabel={t('admin.common.cancel')}
          />
        </form>
      ) : (
        <>
          <AdminToolbar
            title={t('admin.skills.titleCount')}
            itemCount={skills.length}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onAdd={() => setShowEditor(true)}
            addButtonLabel={t('admin.skills.addSkill')}
          />

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


