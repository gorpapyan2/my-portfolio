import { useMemo, useState, useEffect } from 'react';
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

export function TranslationManager() {
  const { t } = useLanguage();
  const translationService = useTranslationService();
  const [page, setPage] = useState(1);
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
    setEditingTranslation,
    setShowImportExport,
    setShowValidation,
    handleAddTranslation,
    handleEditTranslation,
    handleDeleteTranslation,
    filteredTranslations,
    categories,
  } = useTranslationManager();

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory, selectedLanguage]);

  const totalTranslations = filteredTranslations.length;
  const totalPages = Math.max(1, Math.ceil(totalTranslations / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedTranslations = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredTranslations.slice(start, start + pageSize);
  }, [filteredTranslations, currentPage, pageSize]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.translations.title" as="span" shimmerWidth="250px" />
        </h2>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[var(--text-muted)] text-[length:var(--font-100)]">{t('admin.common.language')}</span>
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
      <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
        <TranslationTable
          translations={paginatedTranslations}
          onEdit={handleEditTranslation}
          onDelete={handleDeleteTranslation}
        />
      </div>

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



