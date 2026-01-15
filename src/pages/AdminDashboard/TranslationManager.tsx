import { useState } from 'react';
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

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">
          <TranslationText translationKey="admin.translations.title" as="span" shimmerWidth="250px" />
        </h2>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-300">{t('admin.translations.languageLabel')}</span>
          <div className="flex gap-2">
            {(['en', 'ru', 'am'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedLanguage === lang
                    ? 'bg-[#edfc3a] text-black'
                    : 'bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('settings.searchTranslations')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={handleAddTranslation}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
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
          {t('settings.validate')}
        </button>
      </div>

      {/* Translation Table */}
      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <TranslationTable
          translations={filteredTranslations}
          onEdit={handleEditTranslation}
          onDelete={handleDeleteTranslation}
        />
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
              alert('Failed to save translation');
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
              alert('Failed to import translations');
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
