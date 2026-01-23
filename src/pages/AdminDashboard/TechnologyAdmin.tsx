import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';
import { getIcon } from '../../utils/iconMap';
import { useTechnologyAdmin } from '../../hooks/useTechnologyAdmin';
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

interface TechnologyAdminProps {
  onClose: () => void;
}

const iconOptions = [
  'Code2', 'GitBranch', 'Workflow', 'Kanban', 'Database',
  'Bug', 'Globe', 'Lightbulb', 'Smartphone', 'Table'
];

const parseLines = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const parseTags = (value: string) =>
  value
    .split(/[,\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

export function TechnologyAdmin({ onClose }: TechnologyAdminProps) {
  const { t, language } = useLanguage();
  const {
    activeLanguage,
    setActiveLanguage,
    technologies,
    isLoading,
    errorMessage,
    showEditor,
    setShowEditor,
    editingTechnology,
    formData,
    setFormData,
    detailText,
    setDetailText,
    tagsText,
    setTagsText,
    detailData,
    setDetailData,
    errors,
    detailErrors,
    technologiesWithDetails,
    handleEdit,
    handleDelete,
    handleSubmit,
    resetForm,
  } = useTechnologyAdmin(language);

  const handleDeleteWithAlert = async (id: string) => {
    try {
      await handleDelete(id, t('admin.common.confirmDelete'));
    } catch {
      alert(t('admin.error.deleteFailed'));
    }
  };

  const handleSubmitWithAlert = async (event: React.FormEvent) => {
    try {
      await handleSubmit(event);
    } catch {
      alert(t('admin.error.saveFailed'));
    }
  };

  if (isLoading) {
    return <AdminLoadingState shimmerWidth="120px" />;
  }

  return (
    <div>
      <AdminHeader
        title={<TranslationText translationKey="technologies.title" as="span" shimmerWidth="220px" />}
        onClose={onClose}
      />

      {errorMessage && (
        <div className="text-red-400 text-[length:var(--font-100)] mb-4">{errorMessage}</div>
      )}

      {showEditor ? (
        <form onSubmit={handleSubmitWithAlert} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LanguageSelector
              value={activeLanguage}
              onChange={setActiveLanguage}
              label={t('admin.common.language')}
            />

            <FormField
              label="Slug"
              value={formData.slug ?? ''}
              onChange={(value) => setFormData({ ...formData, slug: value })}
              error={errors.slug}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Title"
              value={formData.title ?? ''}
              onChange={(value) => setFormData({ ...formData, title: value })}
              error={errors.title}
              required
            />

            <FormField
              label="Category"
              value={formData.category ?? ''}
              onChange={(value) => setFormData({ ...formData, category: value })}
              error={errors.category}
              required
            />
          </div>

          <TextareaField
            label={t('admin.common.description')}
            value={formData.description ?? ''}
            onChange={(value) => setFormData({ ...formData, description: value })}
            error={errors.description}
            rows={3}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              label="Icon"
              value={formData.icon_name ?? 'Code2'}
              onChange={(value) => setFormData({ ...formData, icon_name: value })}
              options={iconOptions.map((icon) => ({ value: icon, label: icon }))}
            />

            <FormField
              type="number"
              label="Level"
              value={formData.level ?? 0}
              onChange={(value) => setFormData({ ...formData, level: parseInt(value, 10) || 0 })}
              error={errors.level}
              min={0}
              max={100}
              required
            />
          </div>

          <TextareaField
            label="Detailed description (one per line)"
            value={detailText}
            onChange={(value) => {
              setDetailText(value);
              setDetailData((prev) => ({
                ...prev,
                detailed_description: parseLines(value)
              }));
            }}
            error={detailErrors.detailed_description}
            rows={4}
            required
          />

          <TextareaField
            label="Tags (comma or line separated)"
            value={tagsText}
            onChange={(value) => {
              setTagsText(value);
              setDetailData((prev) => ({
                ...prev,
                tags: parseTags(value)
              }));
            }}
            error={detailErrors.tags}
            rows={2}
            required
          />

          <TextareaField
            label="Real world example"
            value={detailData.real_world_example}
            onChange={(value) => setDetailData((prev) => ({ ...prev, real_world_example: value }))}
            error={detailErrors.real_world_example}
            rows={3}
            required
          />

          <FormActions
            onCancel={() => {
              setShowEditor(false);
              resetForm();
            }}
            submitLabel={editingTechnology ? t('admin.common.save') : t('admin.common.add')}
            cancelLabel={t('admin.common.cancel')}
          />
        </form>
      ) : (
        <>
          <AdminToolbar
            title={t('technologies.title')}
            itemCount={technologies.length}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onAdd={() => setShowEditor(true)}
            addButtonLabel={t('admin.common.add')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologiesWithDetails.map(({ technology, detail }) => {
              const IconComponent = getIcon(technology.icon_name ?? '');
              return (
                <div key={technology.id} className="p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-[var(--radius-md)] bg-accent/10 text-accent">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">{technology.title}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleEdit(technology)}
                        className="p-1 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleDeleteWithAlert(technology.id)}
                        className="p-1 text-[var(--text-muted)] hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-3">{technology.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {(detail?.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="px-[var(--space-8)] py-[var(--space-4)] bg-[var(--surface-strong)] text-[var(--text)] text-[length:var(--font-100)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                    {t('proficiency')} {technology.level}% · {technology.category}
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
