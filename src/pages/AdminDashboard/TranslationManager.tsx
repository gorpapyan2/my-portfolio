import { useMemo, useState, useEffect, useCallback } from 'react';
import { Plus, Search, Filter, Download, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
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
  } = useTranslationManager();

  const loadTranslationKeys = useCallback(async () => {
    const pageSize = 1000;
    let from = 0;
    let allKeys: TranslationKeyEntry[] = [];

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
      alert(t('admin.translations.allFieldsRequired'));
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
    } catch (error) {
      console.error('Error saving translation:', error);
      alert(t('admin.error.saveFailed'));
    } finally {
      setSavingMissing((prev) => ({ ...prev, [savingKey]: false }));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.translations.title" as="span" shimmerWidth="250px" />
        </h2>
      </div>

      <div className="flex flex-wrap gap-[var(--space-8)] mb-6 border-b border-[var(--border)]">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
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
          <div className="flex gap-[var(--space-8)]">
            {(['en', 'ru', 'am'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
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
            <Search className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder={t('settings.searchTranslations')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="field pl-[var(--space-32)] pr-[var(--space-16)]"
            />
          </div>
        </div>
        
        <div className="flex gap-[var(--space-8)]">
          <div className="relative">
            <Filter className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
            <select
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
          <AlertCircle className="h-[var(--space-16)] w-[var(--space-16)]" />
          {t('settings.validate')}
        </button>
      </div>

      {/* Translation Table */}
      {activeTab === 'all' ? (
        <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
          <TranslationTable
            translations={paginatedTranslations}
            onEdit={handleEditTranslation}
            onDelete={handleDeleteTranslation}
          />
        </div>
      ) : (
        <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                    {t('settings.key')}
                  </th>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <th
                      key={lang}
                      className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]"
                    >
                      {lang.toUpperCase()}
                    </th>
                  ))}
                  <th className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
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
                        {translation.key}
                      </td>
                      {SUPPORTED_LANGUAGES.map((lang) => {
                        const value = translationService.translations[lang]?.[translation.key] ?? '';
                        const isMissing = !value || value.trim() === '';
                        const savingKey = `${translation.key}::${lang}`;

                        return (
                          <td
                            key={`${translation.key}-${lang}`}
                            className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)] align-top"
                          >
                            {isMissing ? (
                              <div className="flex flex-col gap-[var(--space-8)]">
                                <input
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
                                  className="field min-w-[220px]"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleSaveMissing(translation.key, lang)}
                                  className="btn btn-secondary"
                                  disabled={savingMissing[savingKey]}
                                >
                                  {t('save')}
                                </button>
                              </div>
                            ) : (
                              <span className="text-[var(--text)]">
                                {value}
                              </span>
                            )}
                          </td>
                        );
                      })}
                      <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)]">
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
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-[var(--space-12)] mt-[var(--space-16)]">
        <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
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
          onClose={() => setShowValidation(false)}
        />
      )}
    </div>
  );
}
