import Plus from 'lucide-react/dist/esm/icons/plus';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { TranslationText } from '../../components/shared/TranslationText';
import { useLanguage, type Language } from '../../context/LanguageContext';
import { getIcon } from '../../utils/iconMap';
import { useTechnologyAdmin } from '../../hooks/useTechnologyAdmin';

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
    return (
      <div className="flex items-center justify-center py-8">
        <TranslationText translationKey="admin.common.loading" as="div" shimmerWidth="120px" className="text-[var(--text)]" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="technologies.title" as="span" shimmerWidth="220px" />
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          X
        </button>
      </div>

      {errorMessage && (
        <div className="text-red-400 text-[length:var(--font-100)] mb-4">{errorMessage}</div>
      )}

      {showEditor ? (
        <form onSubmit={handleSubmitWithAlert} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">{t('admin.common.language')}</label>
              <select
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value as Language)}
                className="field"
              >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="am">Armenian</option>
              </select>
            </div>
            <div>
              <label className="form-label">Slug</label>
              <input
                type="text"
                value={formData.slug ?? ''}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className={`field ${errors.slug ? 'border-red-500' : 'border-[var(--border)]'}`}
                required
              />
              {errors.slug && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.slug}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Title</label>
              <input
                type="text"
                value={formData.title ?? ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`field ${errors.title ? 'border-red-500' : 'border-[var(--border)]'}`}
                required
              />
              {errors.title && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="form-label">Category</label>
              <input
                type="text"
                value={formData.category ?? ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className={`field ${errors.category ? 'border-red-500' : 'border-[var(--border)]'}`}
                required
              />
              {errors.category && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.category}</p>}
            </div>
          </div>

          <div>
            <label className="form-label">{t('admin.common.description')}</label>
            <textarea
              value={formData.description ?? ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className={`field ${errors.description ? 'border-red-500' : 'border-[var(--border)]'}`}
              required
            />
            {errors.description && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Icon</label>
              <select
                value={formData.icon_name ?? 'Code2'}
                onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                className="admin-select w-full"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Level</label>
              <input
                type="number"
                value={formData.level ?? 0}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value, 10) || 0 })}
                className={`field ${errors.level ? 'border-red-500' : 'border-[var(--border)]'}`}
                min="0"
                max="100"
                required
              />
              {errors.level && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{errors.level}</p>}
            </div>
          </div>

          <div>
            <label className="form-label">Detailed description (one per line)</label>
            <textarea
              value={detailText}
              onChange={(e) => {
                setDetailText(e.target.value);
                setDetailData((prev) => ({
                  ...prev,
                  detailed_description: parseLines(e.target.value)
                }));
              }}
              rows={4}
              className={`field ${detailErrors.detailed_description ? 'border-red-500' : 'border-[var(--border)]'}`}
              required
            />
            {detailErrors.detailed_description && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{detailErrors.detailed_description}</p>
            )}
          </div>

          <div>
            <label className="form-label">Tags (comma or line separated)</label>
            <textarea
              value={tagsText}
              onChange={(e) => {
                setTagsText(e.target.value);
                setDetailData((prev) => ({
                  ...prev,
                  tags: parseTags(e.target.value)
                }));
              }}
              rows={2}
              className={`field ${detailErrors.tags ? 'border-red-500' : 'border-[var(--border)]'}`}
              required
            />
            {detailErrors.tags && <p className="text-red-400 text-[length:var(--font-100)] mt-1">{detailErrors.tags}</p>}
          </div>

          <div>
            <label className="form-label">Real world example</label>
            <textarea
              value={detailData.real_world_example}
              onChange={(e) => setDetailData((prev) => ({ ...prev, real_world_example: e.target.value }))}
              rows={3}
              className={`field ${detailErrors.real_world_example ? 'border-red-500' : 'border-[var(--border)]'}`}
              required
            />
            {detailErrors.real_world_example && (
              <p className="text-red-400 text-[length:var(--font-100)] mt-1">{detailErrors.real_world_example}</p>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowEditor(false);
                resetForm();
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
              {editingTechnology ? t('admin.common.save') : t('admin.common.add')}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
              {t('technologies.title')} ({technologies.length})
            </h3>
            <div className="flex items-center gap-3">
              <select
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value as Language)}
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
                {t('admin.common.add')}
              </button>
            </div>
          </div>

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
