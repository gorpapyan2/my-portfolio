import { useMemo, useState, useEffect, useCallback, useId } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Copy from 'lucide-react/dist/esm/icons/copy';
import Search from 'lucide-react/dist/esm/icons/search';
import Filter from 'lucide-react/dist/esm/icons/filter';
import Download from 'lucide-react/dist/esm/icons/download';
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import { VisuallyHidden } from '../../components/shared/VisuallyHidden';
import { useTranslationManager } from '../../lib/services/useTranslationManager';
import { UnifiedTranslationModal } from '../../components/shared/UnifiedTranslationModal';
import { supabase } from '../../lib/supabase';
import { useTranslationService } from '../../lib/services/useTranslationService';
import { TranslationTable } from '../SettingsPage/TranslationTable';
import { ImportExport } from '../SettingsPage/ImportExport';
import { ValidationPanel } from '../SettingsPage/ValidationPanel';

interface TranslationInsert {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

interface MissingTranslationItem {
  key: string;
  category: string;
  missingLanguages: Array<'en' | 'ru' | 'am'>;
}

interface TranslationKeyEntry {
  key: string;
  category: string;
}

const SUPPORTED_LANGUAGES = ['en', 'ru', 'am'] as const;

export function TranslationManager() {
  const { t } = useLanguage();
  const translationService = useTranslationService();
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'all' | 'missing'>('all');
  const [missingDrafts, setMissingDrafts] = useState<Record<string, Partial<Record<'en' | 'ru' | 'am', string>>>>({});
  const [savingMissing, setSavingMissing] = useState<Record<string, boolean>>({});
  const [translationKeys, setTranslationKeys] = useState<TranslationKeyEntry[]>([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const tabAllId = useId();
  const tabMissingId = useId();
  const panelAllId = useId();
  const panelMissingId = useId();
  const searchInputId = useId();
  const categorySelectId = useId();
  const languageGroupId = useId();
  const pageSize = 20;
  
  // Use centralized translation manager hook
  const {
    selectedLanguage,
    searchTerm,
    selectedCategory,
    showEditor,
    editingTranslation,
    showImportExport,
    showValidation,
    setSelectedLanguage,
    setSearchTerm,
    setSelectedCategory,
    setShowEditor,
    setShowImportExport,
    setShowValidation,
    handleAddTranslation,
    handleEditTranslation,
    handleDeleteTranslation,
    filteredTranslations,
    categories,
  } = useTranslationManager(translationService);

  const loadTranslationKeys = useCallback(async () => {
    const pageSize = 1000;
    let from = 0;
    let allKeys: TranslationKeyEntry[] = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { data, error } = await supabase
        .from('translation_keys')
        .select('key, category')
        .range(from, from + pageSize - 1);

      if (error) {
        console.error('Error loading translation keys:', error);
        return;
      }

      if (!data || data.length === 0) break;

      allKeys = allKeys.concat(data as TranslationKeyEntry[]);
      if (data.length < pageSize) break;
      from += pageSize;
    }

    setTranslationKeys(allKeys);
  }, []);

  useEffect(() => {
    loadTranslationKeys();
  }, [loadTranslationKeys]);

  useEffect(() => {
    if (!statusMessage) return;
    const timer = window.setTimeout(() => setStatusMessage(''), 4000);
    return () => window.clearTimeout(timer);
  }, [statusMessage]);

  useEffect(() => {
    if (!errorMessage) return;
    const timer = window.setTimeout(() => setErrorMessage(''), 6000);
    return () => window.clearTimeout(timer);
  }, [errorMessage]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory, selectedLanguage, activeTab]);

  const translationKeysMap = useMemo(() => {
    return new Map(translationKeys.map((entry) => [entry.key, entry.category]));
  }, [translationKeys]);

  const missingTranslations = useMemo(() => {
    const allKeys = new Set<string>();
    if (translationKeys.length > 0) {
      translationKeys.forEach(({ key }) => allKeys.add(key));
    } else {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        Object.keys(translationService.translations[lang] || {}).forEach((key) => {
          allKeys.add(key);
        });
      });
    }

    const entries = Array.from(allKeys)
      .map((key) => {
        const missingLanguages = SUPPORTED_LANGUAGES.filter((lang) => {
          const value = translationService.translations[lang]?.[key];
          return !value || value.trim() === '';
        });

        if (missingLanguages.length === 0) {
          return null;
        }

        return {
          key,
          category: translationKeysMap.get(key) ?? key.split('.')[0],
          missingLanguages
        } satisfies MissingTranslationItem;
      })
      .filter((entry): entry is MissingTranslationItem => Boolean(entry));

    return entries
      .filter(({ key }) => {
        const matchesSearch = key.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || key.startsWith(selectedCategory);
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.key.localeCompare(b.key));
  }, [searchTerm, selectedCategory, translationKeys, translationKeysMap, translationService.translations]);

  const totalTranslations = activeTab === 'all'
    ? filteredTranslations.length
    : missingTranslations.length;
  const totalPages = Math.max(1, Math.ceil(totalTranslations / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedTranslations = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredTranslations.slice(start, start + pageSize);
  }, [filteredTranslations, currentPage, pageSize]);
  const paginatedMissingTranslations = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return missingTranslations.slice(start, start + pageSize);
  }, [missingTranslations, currentPage, pageSize]);

  const handleSaveMissing = async (key: string, language: 'en' | 'ru' | 'am') => {
    const draftValue = missingDrafts[key]?.[language]?.trim() ?? '';
    if (!draftValue) {
      const message = t('admin.translations.allFieldsRequired');
      setErrorMessage(message);
      alert(message);
      return;
    }

    const category = translationKeysMap.get(key) ?? key.split('.')[0];
    const savingKey = `${key}::${language}`;
    setSavingMissing((prev) => ({ ...prev, [savingKey]: true }));

    try {
      const { data } = await supabase
        .from('translations')
        .select('id')
        .eq('key', key)
        .eq('language', language)
        .single();

      if (data) {
        await translationService.updateTranslation(data.id, {
          key,
          value: draftValue,
          category
        });
      } else {
        await translationService.createTranslation({
          key,
          value: draftValue,
          category,
          language
        });
      }

      setMissingDrafts((prev) => ({
        ...prev,
        [key]: {
          ...(prev[key] ?? {}),
          [language]: ''
        }
      }));
      await loadTranslationKeys();
      setStatusMessage(`${t('success')}: ${key} (${language.toUpperCase()})`);
    } catch (error) {
      console.error('Error saving translation:', error);
      const message = t('admin.error.saveFailed');
      setErrorMessage(message);
      alert(message);
    } finally {
      setSavingMissing((prev) => ({ ...prev, [savingKey]: false }));
    }
  };

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    if (typeof document === 'undefined') {
      return false;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);
    return copied;
  };

  const handleCopyMissing = async (item: MissingTranslationItem) => {
    const values = SUPPORTED_LANGUAGES.reduce((acc, lang) => {
      const draftValue = missingDrafts[item.key]?.[lang]?.trim();
      const existingValue = translationService.translations[lang]?.[item.key] ?? '';
      acc[lang] = draftValue && draftValue.length > 0 ? draftValue : existingValue;
      return acc;
    }, {} as Record<'en' | 'ru' | 'am', string>);

    try {
      const payload = { key: item.key, values };
      const copied = await copyToClipboard(JSON.stringify(payload, null, 2));
      if (!copied) {
        throw new Error('Copy failed');
      }
      setStatusMessage(`${t('success')}: ${item.key}`);
    } catch (error) {
      console.error('Error copying translation:', error);
      const message = t('admin.error.saveFailed');
      setErrorMessage(message);
      alert(message);
    }
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs: Array<'all' | 'missing'> = ['all', 'missing'];
    const currentIndex = tabs.indexOf(activeTab);
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveTab(tabs[(currentIndex + 1) % tabs.length]);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActiveTab(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      setActiveTab('all');
    }
    if (event.key === 'End') {
      event.preventDefault();
      setActiveTab('missing');
    }
  };

  const handleLanguageKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(selectedLanguage);
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setSelectedLanguage(SUPPORTED_LANGUAGES[(currentIndex + 1) % SUPPORTED_LANGUAGES.length]);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setSelectedLanguage(SUPPORTED_LANGUAGES[(currentIndex - 1 + SUPPORTED_LANGUAGES.length) % SUPPORTED_LANGUAGES.length]);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.translations.title" as="span" shimmerWidth="250px" />
        </h2>
      </div>

      <VisuallyHidden>
        <span role="status" aria-live="polite">
          {statusMessage}
        </span>
      </VisuallyHidden>
      <VisuallyHidden>
        <span role="alert">
          {errorMessage}
        </span>
      </VisuallyHidden>

      <div
        className="flex flex-wrap gap-[var(--space-8)] mb-6 border-b border-[var(--border)]"
        role="tablist"
        aria-label={t('settings.translations')}
        onKeyDown={handleTabKeyDown}
      >
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          role="tab"
          id={tabAllId}
          aria-controls={panelAllId}
          aria-selected={activeTab === 'all'}
          tabIndex={activeTab === 'all' ? 0 : -1}
          className={`pb-[var(--space-8)] px-[var(--space-4)] text-[length:var(--font-100)] font-medium border-b-2 transition-colors ${
            activeTab === 'all'
              ? 'border-accent text-[var(--text)]'
              : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
          }`}
        >
          {t('admin.translations.title')}
          <span className="ml-[var(--space-8)] text-[var(--text-muted)]">
            {filteredTranslations.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('missing')}
          role="tab"
          id={tabMissingId}
          aria-controls={panelMissingId}
          aria-selected={activeTab === 'missing'}
          tabIndex={activeTab === 'missing' ? 0 : -1}
          className={`pb-[var(--space-8)] px-[var(--space-4)] text-[length:var(--font-100)] font-medium border-b-2 transition-colors ${
            activeTab === 'missing'
              ? 'border-accent text-[var(--text)]'
              : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
          }`}
        >
          {t('settings.missingTranslations')}
          <span className="ml-[var(--space-8)] text-[var(--text-muted)]">
            {missingTranslations.length}
          </span>
        </button>
      </div>

      {/* Language Selection */}
      {activeTab === 'all' && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[var(--text-muted)] text-[length:var(--font-100)]">{t('admin.translations.languageLabel')}</span>
            <div
              className="flex gap-[var(--space-8)]"
              role="radiogroup"
              aria-labelledby={languageGroupId}
              onKeyDown={handleLanguageKeyDown}
            >
              <VisuallyHidden>
                <span id={languageGroupId}>{t('admin.translations.languageLabel')}</span>
              </VisuallyHidden>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  role="radio"
                  aria-checked={selectedLanguage === lang}
                  tabIndex={selectedLanguage === lang ? 0 : -1}
                  className={`px-[var(--space-12)] py-[var(--space-4)] rounded-[var(--radius-md)] text-[length:var(--font-100)] font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-accent text-black'
                      : 'bg-[var(--surface-strong)] text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-[var(--space-16)] mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search aria-hidden="true" className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
            <VisuallyHidden>
              <label htmlFor={searchInputId}>{t('settings.searchPlaceholder')}</label>
            </VisuallyHidden>
            <input
              type="text"
              id={searchInputId}
              placeholder={t('settings.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="field pl-[var(--space-32)] pr-[var(--space-16)]"
            />
          </div>
        </div>
        
        <div className="flex gap-[var(--space-8)]">
          <div className="relative">
            <Filter aria-hidden="true" className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
            <VisuallyHidden>
              <label htmlFor={categorySelectId}>{t('settings.filterByCategory')}</label>
            </VisuallyHidden>
            <select
              id={categorySelectId}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 admin-select appearance-none"
            >
              <option value="all">{t('settings.allCategories')}</option>
              {categories.slice(1).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-[var(--space-8)] mb-6">
        <button
          onClick={handleAddTranslation}
          className="btn btn-primary inline-flex items-center gap-[var(--space-8)]"
        >
          <Plus className="h-[var(--space-16)] w-[var(--space-16)]" />
          {t('settings.addTranslation')}
        </button>
        
        <button
          onClick={() => setShowImportExport(true)}
          className="btn btn-secondary inline-flex items-center gap-[var(--space-8)]"
        >
          <Download className="h-[var(--space-16)] w-[var(--space-16)]" />
          {t('settings.importExport')}
        </button>
        
        <button
          onClick={() => setShowValidation(true)}
          className="btn btn-secondary inline-flex items-center gap-[var(--space-8)]"
        >
          <AlertCircle aria-hidden="true" className="h-[var(--space-16)] w-[var(--space-16)]" />
          {t('settings.validation')}
        </button>
      </div>

      {/* Translation Table */}
      <div role="tabpanel" id={panelAllId} aria-labelledby={tabAllId} hidden={activeTab !== 'all'}>
        {activeTab === 'all' && (
          <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden" aria-busy={translationService.isLoading}>
            <TranslationTable
              translations={paginatedTranslations}
              onEdit={handleEditTranslation}
              onDelete={handleDeleteTranslation}
            />
          </div>
        )}
      </div>
      <div role="tabpanel" id={panelMissingId} aria-labelledby={tabMissingId} hidden={activeTab !== 'missing'}>
        {activeTab === 'missing' && (
          <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden" aria-busy={translationService.isLoading}>
              <table className="w-full table-fixed">
                <caption className="text-left px-[var(--space-16)] py-[var(--space-12)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                  {t('settings.missingTranslations')}
                </caption>
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th scope="col" className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                      {t('settings.key')}
                    </th>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <th
                        key={lang}
                        scope="col"
                        className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]"
                      >
                        {lang.toUpperCase()}
                      </th>
                    ))}
                    <th scope="col" className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                      {t('settings.category')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedMissingTranslations.length === 0 ? (
                    <tr>
                      <td colSpan={SUPPORTED_LANGUAGES.length + 2} className="text-center py-[var(--space-32)] text-[var(--text-muted)] text-[length:var(--font-100)]">
                        {t('admin.translations.empty.notFound')}
                      </td>
                    </tr>
                  ) : (
                    paginatedMissingTranslations.map((translation) => (
                      <tr key={translation.key} className="border-b border-[var(--border)]/40 hover:bg-[var(--surface-strong)]">
                        <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text)] font-mono">
                          <div className="flex flex-wrap items-start gap-[var(--space-8)]">
                            <span className="break-all">{translation.key}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyMissing(translation)}
                              className="btn btn-secondary inline-flex items-center gap-[var(--space-4)] text-[length:var(--font-100)]"
                              aria-label={`Copy ${translation.key}`}
                            >
                              <Copy aria-hidden="true" className="h-[var(--space-12)] w-[var(--space-12)]" />
                              <span>Copy</span>
                            </button>
                          </div>
                        </td>
                        {SUPPORTED_LANGUAGES.map((lang) => {
                          const value = translationService.translations[lang]?.[translation.key] ?? '';
                          const isMissing = !value || value.trim() === '';
                          const savingKey = `${translation.key}::${lang}`;
                          const inputLabel = `${translation.key} ${lang.toUpperCase()} ${t('settings.value')}`;

                          return (
                            <td
                              key={`${translation.key}-${lang}`}
                              className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)] align-top break-words"
                              aria-busy={savingMissing[savingKey]}
                            >
                              {isMissing ? (
                                <div className="flex flex-col gap-[var(--space-8)]">
                                  <VisuallyHidden>
                                    <label htmlFor={`${translation.key}-${lang}`}>{inputLabel}</label>
                                  </VisuallyHidden>
                                  <input
                                    id={`${translation.key}-${lang}`}
                                    type="text"
                                    value={missingDrafts[translation.key]?.[lang] ?? ''}
                                    onChange={(e) =>
                                      setMissingDrafts((prev) => ({
                                        ...prev,
                                        [translation.key]: {
                                          ...(prev[translation.key] ?? {}),
                                          [lang]: e.target.value
                                        }
                                      }))
                                    }
                                    placeholder={t('settings.value')}
                                    className="field w-full min-w-0"
                                    disabled={savingMissing[savingKey]}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleSaveMissing(translation.key, lang)}
                                    className="btn btn-secondary"
                                    disabled={savingMissing[savingKey]}
                                    aria-label={`${t('save')} ${translation.key} ${lang.toUpperCase()}`}
                                  >
                                    {t('save')}
                                  </button>
                                </div>
                              ) : (
                                <span className="text-[var(--text)] break-words whitespace-pre-wrap">
                                  {value}
                                </span>
                              )}
                            </td>
                          );
                        })}
                        <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)] break-words">
                          <span className="px-[var(--space-8)] py-[var(--space-4)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] text-[length:var(--font-100)]">
                            {translation.category}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-[var(--space-12)] mt-[var(--space-16)]">
        <p className="text-[length:var(--font-100)] text-[var(--text-muted)]" role="status" aria-live="polite">
          Showing {totalTranslations === 0 ? 0 : (currentPage - 1) * pageSize + 1}-
          {Math.min(currentPage * pageSize, totalTranslations)} of {totalTranslations}
        </p>
        <div className="flex items-center gap-[var(--space-8)]">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-[length:var(--font-100)] text-[var(--text-muted)]">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modals */}
      {showEditor && (
        <UnifiedTranslationModal
          mode="simple"
          isOpen={showEditor}
          language={selectedLanguage}
          translation={editingTranslation}
          onClose={() => setShowEditor(false)}
          onSave={async (translation) => {
            try {
              if (editingTranslation) {
                // Update existing translation
                const { data } = await supabase
                  .from('translations')
                  .select('id')
                  .eq('key', editingTranslation.key)
                  .eq('language', selectedLanguage)
                  .single();

                if (data) {
                  await translationService.updateTranslation(data.id, {
                    key: translation.key,
                    value: translation.value,
                    category: translation.category
                  });
                }
              } else {
                // Create new translation
                await translationService.createTranslation({
                  key: translation.key,
                  value: translation.value,
                  category: translation.category,
                  language: selectedLanguage
                });
              }
              setShowEditor(false);
            } catch (error) {
              console.error('Error saving translation:', error);
              alert(t('admin.error.saveFailed'));
            }
          }}
        />
      )}

      {showImportExport && (
        <ImportExport
          translations={translationService.translations}
          onClose={() => setShowImportExport(false)}
          onImport={async (translations) => {
            try {
              const translationInserts: TranslationInsert[] = [];
              for (const [lang, langTranslations] of Object.entries(translations)) {
                for (const [key, value] of Object.entries(langTranslations)) {
                  const category = key.split('.')[0];
                  translationInserts.push({
                    key,
                    value,
                    category,
                    language: lang as 'en' | 'ru' | 'am'
                  });
                }
              }
              await translationService.bulkImport(translationInserts);
              setShowImportExport(false);
            } catch (error) {
              console.error('Error importing translations:', error);
              alert(t('admin.error.importFailed'));
            }
          }}
          onExport={() => {
            console.log('Export translations');
          }}
        />
      )}

      {showValidation && (
        <ValidationPanel
          translations={translationService.translations}
          onClose={() => setShowValidation(false)}
        />
      )}
    </div>
  );
}
