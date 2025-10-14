import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Download, Upload, AlertCircle } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslationService } from '../../lib/services/useTranslationService';
import { TranslationTable } from './TranslationTable';
import { TranslationEditor } from './TranslationEditor';
import { ImportExport } from './ImportExport';
import { ValidationPanel } from './ValidationPanel';

export function TranslationManager() {
  const { t, language } = useLanguage();
  const translationService = useTranslationService();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ru' | 'am'>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showEditor, setShowEditor] = useState(false);
  const [editingTranslation, setEditingTranslation] = useState<any>(null);
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

  const handleEditTranslation = (translation: any) => {
    setEditingTranslation(translation);
    setShowEditor(true);
  };

  const handleDeleteTranslation = async (key: string) => {
    if (confirm(t('settings.deleteTranslation'))) {
      try {
        // Find the translation ID from Supabase data
        // For now, we'll just remove from local state
        // In a real implementation, you'd call translationService.deleteTranslation(id)
        console.log('Delete translation:', key);
      } catch (error) {
        console.error('Error deleting translation:', error);
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
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="am">Հայերեն</option>
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
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
            >
              <option value="all">{t('settings.allCategories')}</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>
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
        selectedLanguage={selectedLanguage}
      />

      {/* Modals */}
      {showEditor && (
        <TranslationEditor
          translation={editingTranslation}
          language={selectedLanguage}
          onClose={() => setShowEditor(false)}
          onSave={(translation) => {
            console.log('Save translation:', translation);
            setShowEditor(false);
          }}
        />
      )}

      {showImportExport && (
        <ImportExport
          onClose={() => setShowImportExport(false)}
          onImport={(translations) => {
            console.log('Import translations:', translations);
            setShowImportExport(false);
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
