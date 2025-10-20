import { useState, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslationService } from './useTranslationService';
import { supabase } from '../supabase';

export interface TranslationManagerState {
  selectedLanguage: 'en' | 'ru' | 'am';
  searchTerm: string;
  selectedCategory: string;
  showEditor: boolean;
  editingTranslation: { key: string; value: string; category: string } | null;
  showImportExport: boolean;
  showValidation: boolean;
}

export interface TranslationManagerActions {
  setSelectedLanguage: (lang: 'en' | 'ru' | 'am') => void;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (cat: string) => void;
  setShowEditor: (show: boolean) => void;
  setEditingTranslation: (translation: { key: string; value: string; category: string } | null) => void;
  setShowImportExport: (show: boolean) => void;
  setShowValidation: (show: boolean) => void;
  handleAddTranslation: () => void;
  handleEditTranslation: (translation: { key: string; value: string; category: string }) => void;
  handleDeleteTranslation: (key: string) => Promise<void>;
  filteredTranslations: Array<{ key: string; value: string; category: string }>;
  categories: string[];
}

/**
 * Custom hook for managing translation manager state and operations
 * Consolidates logic used in both AdminDashboard and SettingsPage
 * @returns {TranslationManagerState & TranslationManagerActions} Manager state and action handlers
 */
export function useTranslationManager(): TranslationManagerState & TranslationManagerActions {
  const { t } = useLanguage();
  const translationService = useTranslationService();

  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ru' | 'am'>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showEditor, setShowEditor] = useState(false);
  const [editingTranslation, setEditingTranslation] = useState<{ key: string; value: string; category: string } | null>(null);
  const [showImportExport, setShowImportExport] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const categories = ['all', 'nav', 'hero', 'pages', 'about', 'skills', 'contact', 'footer', 'settings', 'technologies'];
  // Include newly used categories for auditing
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _auditCategories = ['blog', 'portfolioNav', 'statistics', 'projects', 'language', 'errors'];

  const filteredTranslations = Object.entries(translationService.translations[selectedLanguage] || {})
    .filter(([key, value]) => {
      const matchesSearch = key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           value.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || key.startsWith(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .map(([key, value]) => ({ key, value, category: key.split('.')[0] }));

  const handleAddTranslation = useCallback(() => {
    setEditingTranslation(null);
    setShowEditor(true);
  }, []);

  const handleEditTranslation = useCallback((translation: { key: string; value: string; category: string }) => {
    setEditingTranslation(translation);
    setShowEditor(true);
  }, []);

  const handleDeleteTranslation = useCallback(async (key: string) => {
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
  }, [selectedLanguage, translationService, t]);

  return {
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
  };
}
