import type { Database } from '../../types/database.types';
import { supabase } from '../supabase';

export type AboutLanguage = {
  name: string;
  level?: string | null;
};

export type AboutKeyResult = {
  summary: string;
};

export type AboutContent = {
  professionalJourney: string[];
  philosophy: string[];
  toolbox: string[];
  keyResults: AboutKeyResult[];
  languages: AboutLanguage[];
};

type BaseRow = { id: string; order_index: number };
type LanguageTranslation = Database['public']['Tables']['about_language_translations']['Row'];

const DEFAULT_LANG = 'en';
const CACHE_TTL_MS = 5 * 60 * 1000;

const cache = new Map<string, { data: AboutContent; fetchedAt: number }>();

async function fetchBase(table: string): Promise<BaseRow[]> {
  const { data, error } = await supabase
    .from(table)
    .select('id,order_index')
    .order('order_index', { ascending: true });

  if (error) {
    console.error(`getAbout failed to load ${table}`);
    return [];
  }

  return (data ?? []) as BaseRow[];
}

async function fetchTranslations<T extends { language: string }>(
  table: string,
  language: string
): Promise<T[]> {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('language', language);

  if (error) {
    console.error(`getAbout failed to load ${table} translations`);
    return [];
  }

  return (data ?? []) as T[];
}

async function loadTextSection(
  baseTable: string,
  translationTable: string,
  foreignKey: string,
  valueKey: 'text' | 'label' | 'summary',
  language: string
): Promise<string[]> {
  const [baseRows, translations, fallbackTranslations] = await Promise.all([
    fetchBase(baseTable),
    fetchTranslations<Record<string, string>>(translationTable, language),
    language === DEFAULT_LANG
      ? Promise.resolve([])
      : fetchTranslations<Record<string, string>>(translationTable, DEFAULT_LANG),
  ]);

  const byId = new Map<string, string>();
  for (const row of fallbackTranslations) {
    const id = row[foreignKey];
    const value = row[valueKey];
    if (id && value) byId.set(id, value);
  }
  for (const row of translations) {
    const id = row[foreignKey];
    const value = row[valueKey];
    if (id && value) byId.set(id, value);
  }

  return baseRows
    .map(row => byId.get(row.id))
    .filter((value): value is string => Boolean(value));
}

async function loadLanguageSection(language: string): Promise<AboutLanguage[]> {
  const [baseRows, translations, fallbackTranslations] = await Promise.all([
    fetchBase('about_languages'),
    fetchTranslations<LanguageTranslation>('about_language_translations', language),
    language === DEFAULT_LANG
      ? Promise.resolve([])
      : fetchTranslations<LanguageTranslation>('about_language_translations', DEFAULT_LANG),
  ]);

  const byId = new Map<string, AboutLanguage>();
  for (const row of fallbackTranslations) {
    byId.set(row.about_language_id, { name: row.name, level: row.level });
  }
  for (const row of translations) {
    byId.set(row.about_language_id, { name: row.name, level: row.level });
  }

  return baseRows
    .map(row => byId.get(row.id))
    .filter((value): value is AboutLanguage => Boolean(value?.name));
}

export async function getAbout(language: string = DEFAULT_LANG): Promise<AboutContent> {
  const now = Date.now();
  const cached = cache.get(language);
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.data;
  }

  const [professionalJourney, philosophy, toolbox, keyResultsRaw, languages] = await Promise.all([
    loadTextSection('about_professional_journey', 'about_professional_journey_translations', 'journey_id', 'text', language),
    loadTextSection('about_philosophy', 'about_philosophy_translations', 'philosophy_id', 'text', language),
    loadTextSection('about_toolbox_items', 'about_toolbox_translations', 'toolbox_item_id', 'label', language),
    loadTextSection('about_key_results', 'about_key_result_translations', 'key_result_id', 'summary', language),
    loadLanguageSection(language),
  ]);

  const data: AboutContent = {
    professionalJourney,
    philosophy,
    toolbox,
    keyResults: keyResultsRaw.map(summary => ({ summary })),
    languages,
  };

  cache.set(language, { data, fetchedAt: now });
  return data;
}
