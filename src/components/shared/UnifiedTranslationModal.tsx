import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Translation {
  key: string;
  value: string;
  category: string;
}

interface UnifiedTranslationModalProps {
  mode: 'simple' | 'advanced';
  isOpen: boolean;
  language: 'en' | 'ru' | 'am';
  translation?: Translation | null;
  onClose: () => void;
  onSave: (translation: Translation) => Promise<void>;
}

export function UnifiedTranslationModal({
  mode,
  isOpen,
  language,
  translation,
  onClose,
  onSave,
}: UnifiedTranslationModalProps) {
  const { t } = useLanguage();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (translation) {
      setKey(translation.key);
      setValue(translation.value);
      setCategory(translation.category);
    } else {
      setKey('');
      setValue('');
      setCategory('');
    }
    setError('');
  }, [translation, isOpen]);

  const handleSave = async () => {
    if (!key.trim() || !value.trim() || !category.trim()) {
      setError(t('admin.translations.allFieldsRequired'));
      return;
    }

    try {
      setIsSaving(true);
      setError('');
      await onSave({ key, value, category });
    } catch (err) {
      setError(err instanceof Error ? err.message : t('admin.translations.saveFailed'));
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-panel">
        {/* Header */}
        <div className="flex items-center justify-between mb-[var(--space-16)]">
          <h2 className="text-[length:var(--font-500)] font-semibold text-[var(--text)]">
            {translation ? t('admin.translations.editTranslation') : t('admin.translations.addTranslation')}
          </h2>
          <button
            onClick={onClose}
            disabled={isSaving}
            className="p-[var(--space-4)] hover:bg-white/10 rounded-[var(--radius-sm)] transition-colors disabled:opacity-50"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <div className="stack" style={{ ['--stack-space' as string]: 'var(--space-16)' }}>
          {/* Language Display */}
          <div>
            <label className="form-label">
              {t('admin.translations.language')}
            </label>
            <div className="field-static">
              {language.toUpperCase()}
            </div>
          </div>

          {/* Key */}
          <div>
            <label className="form-label">
              {t('admin.translations.key')}
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={isSaving || !!translation}
              placeholder={t('admin.translations.keyPlaceholder')}
              className="field"
            />
          </div>

          {/* Category */}
          <div>
            <label className="form-label">
              {t('admin.translations.category')}
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isSaving}
              placeholder={t('admin.translations.categoryPlaceholder')}
              className="field"
            />
          </div>

          {/* Value */}
          <div>
            <label className="form-label">
              {t('admin.translations.value')}
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={isSaving}
              placeholder={t('admin.translations.valuePlaceholder')}
              rows={5}
              className="field resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-[var(--space-12)] rounded-[var(--radius-md)] bg-red-500/10 border border-red-500/30 text-red-400 text-[length:var(--font-200)]">
              {error}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button
            onClick={onClose}
            disabled={isSaving}
            className="flex-1 px-[var(--space-16)] py-[var(--space-12)] min-h-[var(--size-tap)] rounded-[var(--radius-md)] bg-white/10 text-[var(--text)] text-[length:var(--font-200)] font-medium hover:bg-white/20 transition-colors disabled:opacity-50"
          >
            {t('admin.common.cancel')}
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 px-[var(--space-16)] py-[var(--space-12)] min-h-[var(--size-tap)] rounded-[var(--radius-md)] bg-accent text-black text-[length:var(--font-200)] font-medium hover:bg-accent-strong transition-colors disabled:opacity-50 flex items-center justify-center gap-[var(--space-8)]"
          >
            {isSaving ? t('admin.translations.saving') : t('admin.translations.save')}
          </button>
        </div>
      </div>
    </div>
  );
}

