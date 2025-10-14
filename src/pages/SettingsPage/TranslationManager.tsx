import { useState } from 'react';
import { Plus, Search, Filter, Download, AlertCircle } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslationService } from '../../lib/services/useTranslationService';
import { supabase } from '../../lib/supabase';
import { TranslationTable } from './TranslationTable';
import { TranslationEditor } from './TranslationEditor';
import { ImportExport } from './ImportExport';
import { ValidationPanel } from './ValidationPanel';

export function TranslationManager() {
  const { t } = useLanguage();
  const translationService = useTranslationService();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ru' | 'am'>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showEditor, setShowEditor] = useState(false);
  const [editingTranslation, setEditingTranslation] = useState<{ key: string; value: string; category: string } | null>(null);
  const [showImportExport, setShowImportExport] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  // Get unique categories from translations
  const categories = ['all', 'nav', 'hero', 'pages', 'about', 'skills', 'contact', 'footer', 'settings', 'technologies'];

  const filteredTranslations = Object.entries(translationService.translations[selectedLanguage] || {})
    .filter(([key, value]) => {
      const matchesSearch = key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           value.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || key.startsWith(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .map(([key, value]) => ({ key, value, category: key.split('.')[0] }));

  const handleAddTranslation = () => {
    setEditingTranslation(null);
    setShowEditor(true);
  };

  const handleEditTranslation = (translation: { key: string; value: string; category: string }) => {
    setEditingTranslation(translation);
    setShowEditor(true);
  };

  const handleDeleteTranslation = async (key: string) => {
    if (confirm(t('settings.deleteTranslation'))) {
      try {
        // Find the translation ID from Supabase data
        const { data } = await supabase
          .from('translations')
          .select('id')
          .eq('key', key)
          .eq('language', selectedLanguage)
          .single();

        if (data) {
          await translationService.deleteTranslation(data.id);
        }
      } catch (error) {
        console.error('Error deleting translation:', error);
        alert(t('settings.deleteError'));
      }
    }
  };

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
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent min-w-32"
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
              className="flex-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent min-w-40"
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
            {t('settings.validation')}
          </button>
        </div>
      </Card>

      {/* Translation Table */}
      <TranslationTable
        translations={filteredTranslations}
        onEdit={handleEditTranslation}
        onDelete={handleDeleteTranslation}
      />

      {/* Modals */}
      {showEditor && (
        <TranslationEditor
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
