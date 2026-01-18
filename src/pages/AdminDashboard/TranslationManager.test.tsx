import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi } from 'vitest';
import { TranslationManager } from './TranslationManager';

const translations = {
  'admin.translations.title': 'Translation Management',
  'admin.translations.languageLabel': 'Language',
  'settings.missingTranslations': 'Missing Translations',
  'settings.searchPlaceholder': 'Search translations...',
  'settings.filterByCategory': 'Filter by Category',
  'settings.allCategories': 'All Categories',
  'settings.key': 'Key',
  'settings.value': 'Value',
  'settings.category': 'Category',
  'settings.addTranslation': 'Add Translation',
  'settings.importExport': 'Import / Export',
  'settings.validation': 'Validation',
  'admin.translations.empty.notFound': 'No results',
  'admin.translations.allFieldsRequired': 'All fields required',
  'admin.error.saveFailed': 'Save failed',
  'save': 'Save',
  'success': 'Success'
};

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key: string) => translations[key as keyof typeof translations] ?? key
  })
}));

vi.mock('../../lib/services/useTranslationManager', () => ({
  useTranslationManager: () => ({
    selectedLanguage: 'en',
    searchTerm: '',
    selectedCategory: 'all',
    showEditor: false,
    editingTranslation: null,
    showImportExport: false,
    showValidation: false,
    setSelectedLanguage: vi.fn(),
    setSearchTerm: vi.fn(),
    setSelectedCategory: vi.fn(),
    setShowEditor: vi.fn(),
    setShowImportExport: vi.fn(),
    setShowValidation: vi.fn(),
    handleAddTranslation: vi.fn(),
    handleEditTranslation: vi.fn(),
    handleDeleteTranslation: vi.fn(),
    filteredTranslations: [],
    categories: ['all', 'about']
  })
}));

vi.mock('../../lib/services/useTranslationService', () => ({
  useTranslationService: () => ({
    translations: {
      en: { 'about.fallback.error': 'x' },
      ru: {},
      am: {}
    },
    isLoading: false,
    error: null,
    createTranslation: vi.fn(),
    updateTranslation: vi.fn(),
    deleteTranslation: vi.fn(),
    bulkImport: vi.fn(),
    refreshTranslations: vi.fn()
  })
}));

vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        range: vi.fn(async () => ({ data: [], error: null }))
      }))
    }))
  }
}));

describe('TranslationManager', () => {
  it('renders tabs with correct aria state and switches to missing', async () => {
    const user = userEvent.setup();
    render(<TranslationManager />);

    const allTab = screen.getByRole('tab', { name: 'Translation Management' });
    const missingTab = screen.getByRole('tab', { name: 'Missing Translations' });

    expect(allTab).toHaveAttribute('aria-selected', 'true');
    expect(missingTab).toHaveAttribute('aria-selected', 'false');

    await user.click(missingTab);

    expect(missingTab).toHaveAttribute('aria-selected', 'true');
  });

  it('labels missing-language inputs and exposes live regions', async () => {
    const user = userEvent.setup();
    render(<TranslationManager />);

    await user.click(screen.getByRole('tab', { name: 'Missing Translations' }));

    expect(screen.getByLabelText('about.fallback.error RU Value')).toBeInTheDocument();
    expect(screen.getByLabelText('about.fallback.error AM Value')).toBeInTheDocument();
    expect(screen.getAllByRole('status').length).toBeGreaterThan(0);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
