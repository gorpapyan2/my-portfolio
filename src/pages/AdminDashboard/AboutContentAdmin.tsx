import Plus from 'lucide-react/dist/esm/icons/plus';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Save from 'lucide-react/dist/esm/icons/save';
import { useLanguage, type Language } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import { ImageUpload } from '../../components/admin/ImageUpload';
import { useAboutContentAdmin } from '../../hooks/useAboutContentAdmin';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Russian' },
  { code: 'am', label: 'Armenian' },
];

export function AboutContentAdmin() {
  const { t, language } = useLanguage();
  const {
    activeLanguage,
    setActiveLanguage,
    loading,
    error,
    portraitAsset,
    portraitError,
    portraitLoading,
    portraitSaving,
    handlePortraitUpload,
    sectionConfig,
    handleAddText,
    handleSaveText,
    handleDeleteText,
    languagesState,
    setLanguagesState,
    handleAddLanguage,
    handleSaveLanguage,
    handleDeleteLanguage,
    newLanguageName,
    setNewLanguageName,
    newLanguageLevel,
    setNewLanguageLevel,
  } = useAboutContentAdmin(language, t);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <TranslationText translationKey="admin.common.loading" as="div" shimmerWidth="120px" className="text-[var(--text)]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.about.title" as="span" shimmerWidth="200px" />
        </h2>
        <select
          value={activeLanguage}
          onChange={(e) => setActiveLanguage(e.target.value as Language)}
          className="field"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>

      {error && (
        <div className="text-red-400 text-[length:var(--font-100)]">{error}</div>
      )}

      <p className="text-[var(--text-muted)] text-[length:var(--font-100)]">
        {t('admin.about.markdownHint')}
      </p>

      <div className="space-y-3">
        <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
          Portrait Image
        </h3>
        {portraitError && (
          <div className="text-red-400 text-[length:var(--font-100)]">{portraitError}</div>
        )}
        {portraitLoading ? (
          <div className="text-[var(--text)]">
            <TranslationText translationKey="admin.common.loading" as="span" shimmerWidth="120px" />
          </div>
        ) : (
          <div className="space-y-2">
            <ImageUpload
              currentImage={portraitAsset?.url ?? ''}
              onUpload={handlePortraitUpload}
              folder="portrait"
              disabled={portraitSaving}
            />
            {portraitAsset?.url ? (
              <div className="text-[length:var(--font-100)] text-[var(--text-muted)] break-all">
                Current URL: {portraitAsset.url}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {sectionConfig.map((section) => (
        <div key={section.id} className="space-y-3">
          <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
            {section.label}
          </h3>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
                <textarea
                  value={item.value}
                  onChange={(e) => section.setItems((prev) => prev.map((row) => row.id === item.id ? { ...row, value: e.target.value } : row))}
                  className="field flex-1"
                  rows={2}
                />
                <button
                  type="button"
                  onClick={() => handleSaveText(section, item)}
                  className="btn btn-primary"
                >
                  <Save className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteText(section, item.id)}
                  className="btn btn-secondary"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2">
            <textarea
              value={section.newValue}
              onChange={(e) => section.setNewValue(e.target.value)}
              className="field flex-1"
              rows={2}
              placeholder={t('admin.common.addNew')}
            />
            <button
              type="button"
              onClick={() => handleAddText(section)}
              className="btn btn-primary"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      <div className="space-y-3">
        <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
          <TranslationText translationKey="about.languages.title" as="span" shimmerWidth="160px" />
        </h3>
        <div className="space-y-2">
          {languagesState.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto_auto] gap-2 items-start">
              <input
                value={item.name}
                onChange={(e) => setLanguagesState((prev) => prev.map((row) => row.id === item.id ? { ...row, name: e.target.value } : row))}
                className="field"
                placeholder={t('admin.about.languageName')}
              />
              <input
                value={item.level ?? ''}
                onChange={(e) => setLanguagesState((prev) => prev.map((row) => row.id === item.id ? { ...row, level: e.target.value } : row))}
                className="field"
                placeholder={t('admin.about.languageLevel')}
              />
              <button
                type="button"
                onClick={() => handleSaveLanguage(item)}
                className="btn btn-primary"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteLanguage(item.id)}
                className="btn btn-secondary"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto] gap-2 items-start">
          <input
            value={newLanguageName}
            onChange={(e) => setNewLanguageName(e.target.value)}
            className="field"
            placeholder={t('admin.about.languageName')}
          />
          <input
            value={newLanguageLevel}
            onChange={(e) => setNewLanguageLevel(e.target.value)}
            className="field"
            placeholder={t('admin.about.languageLevel')}
          />
          <button
            type="button"
            onClick={handleAddLanguage}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
