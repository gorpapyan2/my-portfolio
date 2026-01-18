import { useCallback, useEffect, useMemo, useState } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Save from 'lucide-react/dist/esm/icons/save';
import { supabase } from '../../lib/supabase';
import { useLanguage, type Language } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

type BaseRow = { id: string; order_index: number };

type TextItem = { id: string; order_index: number; value: string };
type LanguageItem = { id: string; order_index: number; name: string; level?: string | null };

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Russian' },
  { code: 'am', label: 'Armenian' },
];

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

export function AboutContentAdmin() {
  const { t, language } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState<Language>(language);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const sectionConfig = useMemo(() => ([
    {
      id: 'journey',
      label: t('about.professionalJourney'),
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
      label: t('about.philosophy'),
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
      label: t('about.toolbox'),
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
      label: t('about.keyResults.title'),
      base: 'about_key_results',
      translation: 'about_key_result_translations',
      foreignKey: 'key_result_id',
      valueKey: 'summary',
      items: keyResults,
      setItems: setKeyResults,
      newValue: newKeyResult,
      setNewValue: setNewKeyResult,
    },
  ]), [journey, philosophy, toolbox, keyResults, newJourney, newPhilosophy, newToolbox, newKeyResult, t]);

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

  const handleAddText = async (config: typeof sectionConfig[number]) => {
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
    await loadAll();
  };

  const handleSaveText = async (config: typeof sectionConfig[number], item: TextItem) => {
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
    await loadAll();
  };

  const handleDeleteText = async (config: typeof sectionConfig[number], itemId: string) => {
    const { error: baseError } = await supabase
      .from(config.base)
      .delete()
      .eq('id', itemId);
    if (baseError) {
      setError(baseError.message);
      return;
    }
    await loadAll();
  };

  const handleAddLanguage = async () => {
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
    await loadAll();
  };

  const handleSaveLanguage = async (item: LanguageItem) => {
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
    await loadAll();
  };

  const handleDeleteLanguage = async (itemId: string) => {
    const { error: baseError } = await supabase
      .from('about_languages')
      .delete()
      .eq('id', itemId);
    if (baseError) {
      setError(baseError.message);
      return;
    }
    await loadAll();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <TranslationText translationKey="admin.common.loading" as="div" shimmerWidth="120px" className="text-[var(--text)]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
          <TranslationText translationKey="admin.about.title" as="span" shimmerWidth="200px" />
        </h2>
        <select
          value={activeLanguage}
          onChange={(e) => setActiveLanguage(e.target.value as Language)}
          className="field"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>

      {error && (
        <div className="text-red-400 text-[length:var(--font-100)]">{error}</div>
      )}

      {sectionConfig.map((section) => (
        <div key={section.id} className="space-y-3">
          <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
            {section.label}
          </h3>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
                <textarea
                  value={item.value}
                  onChange={(e) => section.setItems((prev) => prev.map((row) => row.id === item.id ? { ...row, value: e.target.value } : row))}
                  className="field flex-1"
                  rows={2}
                />
                <button
                  type="button"
                  onClick={() => handleSaveText(section, item)}
                  className="btn btn-primary"
                >
                  <Save className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteText(section, item.id)}
                  className="btn btn-secondary"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2">
            <textarea
              value={section.newValue}
              onChange={(e) => section.setNewValue(e.target.value)}
              className="field flex-1"
              rows={2}
              placeholder={t('admin.common.addNew')}
            />
            <button
              type="button"
              onClick={() => handleAddText(section)}
              className="btn btn-primary"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      <div className="space-y-3">
        <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
          <TranslationText translationKey="about.languages.title" as="span" shimmerWidth="160px" />
        </h3>
        <div className="space-y-2">
          {languagesState.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto_auto] gap-2 items-start">
              <input
                value={item.name}
                onChange={(e) => setLanguagesState((prev) => prev.map((row) => row.id === item.id ? { ...row, name: e.target.value } : row))}
                className="field"
                placeholder={t('admin.about.languageName')}
              />
              <input
                value={item.level ?? ''}
                onChange={(e) => setLanguagesState((prev) => prev.map((row) => row.id === item.id ? { ...row, level: e.target.value } : row))}
                className="field"
                placeholder={t('admin.about.languageLevel')}
              />
              <button
                type="button"
                onClick={() => handleSaveLanguage(item)}
                className="btn btn-primary"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteLanguage(item.id)}
                className="btn btn-secondary"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto] gap-2 items-start">
          <input
            value={newLanguageName}
            onChange={(e) => setNewLanguageName(e.target.value)}
            className="field"
            placeholder={t('admin.about.languageName')}
          />
          <input
            value={newLanguageLevel}
            onChange={(e) => setNewLanguageLevel(e.target.value)}
            className="field"
            placeholder={t('admin.about.languageLevel')}
          />
          <button
            type="button"
            onClick={handleAddLanguage}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
