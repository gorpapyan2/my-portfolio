/**
 * Custom hook for managing About page content in the admin panel
 * Handles data loading, state management, and CRUD operations for:
 * - Professional journey items
 * - Philosophy items
 * - Toolbox items
 * - Key results
 * - Languages (spoken languages with proficiency levels)
 * - Portrait image asset
 *
 * @example
 * ```tsx
 * const {
 *   activeLanguage,
 *   setActiveLanguage,
 *   loading,
 *   error,
 *   portraitAsset,
 *   portraitError,
 *   portraitLoading,
 *   handlePortraitUpload,
 *   sectionConfig,
 *   handleAddText,
 *   handleSaveText,
 *   handleDeleteText,
 *   languagesState,
 *   setLanguagesState,
 *   handleAddLanguage,
 *   handleSaveLanguage,
 *   handleDeleteLanguage,
 *   newLanguageName,
 *   setNewLanguageName,
 *   newLanguageLevel,
 *   setNewLanguageLevel,
 * } = useAboutContentAdmin(language);
 * ```
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import { clearAboutCache } from '../lib/db/getAbout';
import { clearSiteAssetCache } from '../lib/db/getSiteAsset';
import type { Language } from '../context/LanguageContext';

type SiteAsset = {
  id: string;
  key: string;
  url: string;
  storage_path: string | null;
  created_at: string;
  updated_at: string;
};

type BaseRow = { id: string; order_index: number };

type TextItem = { id: string; order_index: number; value: string };
type LanguageItem = { id: string; order_index: number; name: string; level?: string | null };

export interface SectionConfig {
  id: string;
  label: string;
  base: string;
  translation: string;
  foreignKey: string;
  valueKey: string;
  items: TextItem[];
  setItems: React.Dispatch<React.SetStateAction<TextItem[]>>;
  newValue: string;
  setNewValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface AboutContentAdminData {
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
  loading: boolean;
  error: string | null;
  portraitAsset: SiteAsset | null;
  portraitError: string | null;
  portraitLoading: boolean;
  portraitSaving: boolean;
  handlePortraitUpload: (url: string, filename: string, storagePath?: string) => Promise<void>;
  sectionConfig: SectionConfig[];
  handleAddText: (config: SectionConfig) => Promise<void>;
  handleSaveText: (config: SectionConfig, item: TextItem) => Promise<void>;
  handleDeleteText: (config: SectionConfig, itemId: string) => Promise<void>;
  languagesState: LanguageItem[];
  setLanguagesState: React.Dispatch<React.SetStateAction<LanguageItem[]>>;
  handleAddLanguage: () => Promise<void>;
  handleSaveLanguage: (item: LanguageItem) => Promise<void>;
  handleDeleteLanguage: (itemId: string) => Promise<void>;
  newLanguageName: string;
  setNewLanguageName: React.Dispatch<React.SetStateAction<string>>;
  newLanguageLevel: string;
  setNewLanguageLevel: React.Dispatch<React.SetStateAction<string>>;
}

const PORTRAIT_ASSET_KEY = 'about_portrait';

async function fetchBase(table: string) {
  const { data, error } = await supabase
    .from(table)
    .select('id,order_index')
    .order('order_index', { ascending: true });
  if (error) throw error;
  return (data ?? []) as BaseRow[];
}

async function fetchTranslations(table: string, language: Language) {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('language', language);
  if (error) throw error;
  return data ?? [];
}

function mergeTextRows(
  baseRows: BaseRow[],
  translations: Array<Record<string, string>>,
  foreignKey: string,
  valueKey: string
): TextItem[] {
  const byId = new Map<string, string>();
  translations.forEach((row) => {
    const id = row[foreignKey];
    const value = row[valueKey];
    if (id && value) byId.set(id, value);
  });

  return baseRows.map((row) => ({
    id: row.id,
    order_index: row.order_index,
    value: byId.get(row.id) ?? '',
  }));
}

function mergeLanguageRows(
  baseRows: BaseRow[],
  translations: Array<{ about_language_id: string; name: string; level?: string | null }>
): LanguageItem[] {
  const byId = new Map<string, { name: string; level?: string | null }>();
  translations.forEach((row) => {
    if (row.about_language_id && row.name) {
      byId.set(row.about_language_id, { name: row.name, level: row.level });
    }
  });

  return baseRows.map((row) => ({
    id: row.id,
    order_index: row.order_index,
    name: byId.get(row.id)?.name ?? '',
    level: byId.get(row.id)?.level ?? '',
  }));
}

/**
 * Hook for managing About page admin content
 * @param initialLanguage - Initial language to load content for
 * @param translationFunction - Translation function from useLanguage context
 */
export function useAboutContentAdmin(
  initialLanguage: Language,
  translationFunction: (key: string) => string
): AboutContentAdminData {
  const [activeLanguage, setActiveLanguage] = useState<Language>(initialLanguage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [portraitAsset, setPortraitAsset] = useState<SiteAsset | null>(null);
  const [portraitError, setPortraitError] = useState<string | null>(null);
  const [portraitLoading, setPortraitLoading] = useState(true);
  const [portraitSaving, setPortraitSaving] = useState(false);

  const [journey, setJourney] = useState<TextItem[]>([]);
  const [philosophy, setPhilosophy] = useState<TextItem[]>([]);
  const [toolbox, setToolbox] = useState<TextItem[]>([]);
  const [keyResults, setKeyResults] = useState<TextItem[]>([]);
  const [languagesState, setLanguagesState] = useState<LanguageItem[]>([]);

  const [newJourney, setNewJourney] = useState('');
  const [newPhilosophy, setNewPhilosophy] = useState('');
  const [newToolbox, setNewToolbox] = useState('');
  const [newKeyResult, setNewKeyResult] = useState('');
  const [newLanguageName, setNewLanguageName] = useState('');
  const [newLanguageLevel, setNewLanguageLevel] = useState('');

  const sectionConfig = useMemo<SectionConfig[]>(() => ([
    {
      id: 'journey',
      label: translationFunction('about.professionalJourney'),
      base: 'about_professional_journey',
      translation: 'about_professional_journey_translations',
      foreignKey: 'journey_id',
      valueKey: 'text',
      items: journey,
      setItems: setJourney,
      newValue: newJourney,
      setNewValue: setNewJourney,
    },
    {
      id: 'philosophy',
      label: translationFunction('about.philosophy'),
      base: 'about_philosophy',
      translation: 'about_philosophy_translations',
      foreignKey: 'philosophy_id',
      valueKey: 'text',
      items: philosophy,
      setItems: setPhilosophy,
      newValue: newPhilosophy,
      setNewValue: setNewPhilosophy,
    },
    {
      id: 'toolbox',
      label: translationFunction('about.toolbox'),
      base: 'about_toolbox_items',
      translation: 'about_toolbox_translations',
      foreignKey: 'toolbox_item_id',
      valueKey: 'label',
      items: toolbox,
      setItems: setToolbox,
      newValue: newToolbox,
      setNewValue: setNewToolbox,
    },
    {
      id: 'keyResults',
      label: translationFunction('about.keyResults.title'),
      base: 'about_key_results',
      translation: 'about_key_result_translations',
      foreignKey: 'key_result_id',
      valueKey: 'summary',
      items: keyResults,
      setItems: setKeyResults,
      newValue: newKeyResult,
      setNewValue: setNewKeyResult,
    },
  ]), [journey, philosophy, toolbox, keyResults, newJourney, newPhilosophy, newToolbox, newKeyResult, translationFunction]);

  const loadPortrait = useCallback(async () => {
    try {
      setPortraitLoading(true);
      setPortraitError(null);
      const { data, error: assetError } = await supabase
        .from('site_assets')
        .select('*')
        .eq('key', PORTRAIT_ASSET_KEY)
        .maybeSingle();
      if (assetError) throw assetError;
      setPortraitAsset((data ?? null) as SiteAsset | null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load portrait asset';
      setPortraitError(message);
    } finally {
      setPortraitLoading(false);
    }
  }, []);

  const loadAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [
        journeyBase,
        journeyTranslations,
        philosophyBase,
        philosophyTranslations,
        toolboxBase,
        toolboxTranslations,
        keyResultBase,
        keyResultTranslations,
        languageBase,
        languageTranslations,
      ] = await Promise.all([
        fetchBase('about_professional_journey'),
        fetchTranslations('about_professional_journey_translations', activeLanguage),
        fetchBase('about_philosophy'),
        fetchTranslations('about_philosophy_translations', activeLanguage),
        fetchBase('about_toolbox_items'),
        fetchTranslations('about_toolbox_translations', activeLanguage),
        fetchBase('about_key_results'),
        fetchTranslations('about_key_result_translations', activeLanguage),
        fetchBase('about_languages'),
        fetchTranslations('about_language_translations', activeLanguage),
      ]);

      setJourney(mergeTextRows(journeyBase, journeyTranslations as Record<string, string>[], 'journey_id', 'text'));
      setPhilosophy(mergeTextRows(philosophyBase, philosophyTranslations as Record<string, string>[], 'philosophy_id', 'text'));
      setToolbox(mergeTextRows(toolboxBase, toolboxTranslations as Record<string, string>[], 'toolbox_item_id', 'label'));
      setKeyResults(mergeTextRows(keyResultBase, keyResultTranslations as Record<string, string>[], 'key_result_id', 'summary'));
      setLanguagesState(mergeLanguageRows(
        languageBase,
        languageTranslations as Array<{ about_language_id: string; name: string; level?: string | null }>
      ));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load About content';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [activeLanguage]);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  useEffect(() => {
    void loadPortrait();
  }, [loadPortrait]);

  const handlePortraitUpload = useCallback(async (url: string, _filename: string, storagePath?: string) => {
    try {
      setPortraitSaving(true);
      setPortraitError(null);
      const previousPath = portraitAsset?.storage_path ?? null;
      const nextPath = storagePath ?? previousPath;

      const { data, error: upsertError } = await supabase
        .from('site_assets')
        .upsert({
          key: PORTRAIT_ASSET_KEY,
          url,
          storage_path: nextPath,
        }, { onConflict: 'key' })
        .select('*')
        .single();

      if (upsertError) throw upsertError;

      setPortraitAsset(data as SiteAsset);
      clearSiteAssetCache(PORTRAIT_ASSET_KEY);

      if (previousPath && nextPath && previousPath !== nextPath) {
        await supabase.storage.from('images').remove([previousPath]);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update portrait asset';
      setPortraitError(message);
    } finally {
      setPortraitSaving(false);
    }
  }, [portraitAsset?.storage_path]);

  const handleAddText = useCallback(async (config: SectionConfig) => {
    if (!config.newValue.trim()) return;
    const { data: baseRow, error: baseError } = await supabase
      .from(config.base)
      .insert({ order_index: config.items.length + 1 })
      .select('id,order_index')
      .single();
    if (baseError) {
      setError(baseError.message);
      return;
    }

    const { error: translationError } = await supabase
      .from(config.translation)
      .insert({
        [config.foreignKey]: baseRow.id,
        language: activeLanguage,
        [config.valueKey]: config.newValue.trim(),
      });
    if (translationError) {
      setError(translationError.message);
      return;
    }

    config.setNewValue('');
    clearAboutCache();
    await loadAll();
  }, [activeLanguage, loadAll]);

  const handleSaveText = useCallback(async (config: SectionConfig, item: TextItem) => {
    const { error: translationError } = await supabase
      .from(config.translation)
      .upsert({
        [config.foreignKey]: item.id,
        language: activeLanguage,
        [config.valueKey]: item.value.trim(),
      }, { onConflict: `${config.foreignKey},language` });
    if (translationError) {
      setError(translationError.message);
      return;
    }
    clearAboutCache();
    await loadAll();
  }, [activeLanguage, loadAll]);

  const handleDeleteText = useCallback(async (config: SectionConfig, itemId: string) => {
    const { error: baseError } = await supabase
      .from(config.base)
      .delete()
      .eq('id', itemId);
    if (baseError) {
      setError(baseError.message);
      return;
    }
    clearAboutCache();
    await loadAll();
  }, [loadAll]);

  const handleAddLanguage = useCallback(async () => {
    if (!newLanguageName.trim()) return;
    const { data: baseRow, error: baseError } = await supabase
      .from('about_languages')
      .insert({ order_index: languagesState.length + 1 })
      .select('id,order_index')
      .single();
    if (baseError) {
      setError(baseError.message);
      return;
    }
    const { error: translationError } = await supabase
      .from('about_language_translations')
      .insert({
        about_language_id: baseRow.id,
        language: activeLanguage,
        name: newLanguageName.trim(),
        level: newLanguageLevel.trim() || null,
      });
    if (translationError) {
      setError(translationError.message);
      return;
    }
    setNewLanguageName('');
    setNewLanguageLevel('');
    clearAboutCache();
    await loadAll();
  }, [activeLanguage, languagesState.length, loadAll, newLanguageName, newLanguageLevel]);

  const handleSaveLanguage = useCallback(async (item: LanguageItem) => {
    const { error: translationError } = await supabase
      .from('about_language_translations')
      .upsert({
        about_language_id: item.id,
        language: activeLanguage,
        name: item.name.trim(),
        level: item.level?.trim() || null,
      }, { onConflict: 'about_language_id,language' });
    if (translationError) {
      setError(translationError.message);
      return;
    }
    clearAboutCache();
    await loadAll();
  }, [activeLanguage, loadAll]);

  const handleDeleteLanguage = useCallback(async (itemId: string) => {
    const { error: baseError } = await supabase
      .from('about_languages')
      .delete()
      .eq('id', itemId);
    if (baseError) {
      setError(baseError.message);
      return;
    }
    clearAboutCache();
    await loadAll();
  }, [loadAll]);

  return {
    activeLanguage,
    setActiveLanguage,
    loading,
    error,
    portraitAsset,
    portraitError,
    portraitLoading,
    portraitSaving,
    handlePortraitUpload,
    sectionConfig,
    handleAddText,
    handleSaveText,
    handleDeleteText,
    languagesState,
    setLanguagesState,
    handleAddLanguage,
    handleSaveLanguage,
    handleDeleteLanguage,
    newLanguageName,
    setNewLanguageName,
    newLanguageLevel,
    setNewLanguageLevel,
  };
}
