import { useMemo, useState, useEffect } from 'react';
import { Plus, Search, Filter, Download, AlertCircle } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { UnifiedTranslationModal } from '../../components/shared/UnifiedTranslationModal';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslationManager } from '../../lib/services/useTranslationManager';
import { supabase } from '../../lib/supabase';
import { useTranslationService } from '../../lib/services/useTranslationService';
import { TranslationTable } from './TranslationTable';
import { ImportExport } from './ImportExport';
import { ValidationPanel } from './ValidationPanel';

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
    setShowImportExport,
    setShowValidation,
    handleAddTranslation,
    handleEditTranslation,
    handleDeleteTranslation,
    filteredTranslations,
    categories,
  } = useTranslationManager(translationService);

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
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-300">
              {t('settings.selectLanguage')}:
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'ru' | 'am')}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent focus:border-transparent min-w-32"
            >
              <option value="en" className="bg-gray-800 text-white">English</option>
              <option value="ru" className="bg-gray-800 text-white">Русский</option>
              <option value="am" className="bg-gray-800 text-white">Հայերեն</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 flex-1 min-w-64">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('settings.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent focus:border-transparent min-w-40"
            >
              <option value="all" className="bg-gray-800 text-white">{t('settings.allCategories')}</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleAddTranslation}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-lg font-medium hover:bg-accent-strong transition-colors"
          >
            <Plus className="h-4 w-4" />
            {t('settings.addTranslation')}
          </button>

          <button
            onClick={() => setShowImportExport(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            <Download className="h-4 w-4" />
            {t('settings.importExport')}
          </button>

          <button
            onClick={() => setShowValidation(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            <AlertCircle className="h-4 w-4" />
            {t('settings.validation')}
          </button>
        </div>
      </Card>

      {/* Translation Table */}
      <TranslationTable
        translations={paginatedTranslations}
        onEdit={handleEditTranslation}
        onDelete={handleDeleteTranslation}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-400">
          Showing {totalTranslations === 0 ? 0 : (currentPage - 1) * pageSize + 1}-
          {Math.min(currentPage * pageSize, totalTranslations)} of {totalTranslations}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-sm text-gray-400">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
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
          translation={editingTranslation}
          language={selectedLanguage}
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
                  language: selectedLanguage,
                  value: translation.value,
                  category: translation.category
                });
              }
              setShowEditor(false);
            } catch (error) {
              console.error('Error saving translation:', error);
              alert(t('settings.saveError'));
            }
          }}
        />
      )}

      {showImportExport && (
        <ImportExport
          translations={translationService.translations}
          onClose={() => setShowImportExport(false)}
          onImport={async (translations: Record<string, Record<string, string>>) => {
            try {
              // Convert bulk format to TranslationInsert[]
              const translationInserts: TranslationInsert[] = [];
              Object.entries(translations).forEach(([language, langTranslations]) => {
                Object.entries(langTranslations).forEach(([key, value]) => {
                  translationInserts.push({
                    key,
                    language: language as 'en' | 'ru' | 'am',
                    value,
                    category: key.split('.')[0] || 'common'
                  });
                });
              });

              await translationService.bulkImport(translationInserts);
              setShowImportExport(false);
            } catch (error) {
              console.error('Error importing translations:', error);
              alert(t('settings.importError'));
            }
          }}
          onExport={() => {
            console.log('Export translations');
            setShowImportExport(false);
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

