import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabase';
import { aboutGroupSchema, aboutInsertSchema, aboutUpdateSchema, AboutGroup } from '../schemas/aboutContentSchema';
import { translationInsertSchema, translationUpdateSchema } from '../schemas/translationSchema';

export interface AboutService {
  summary: string[];
  keyResults: string[];
  languages: string[];
  isLoading: boolean;
  error: string | null;
  addItem: (group: AboutGroup, value: string, index?: number) => Promise<void>;
  updateItem: (group: AboutGroup, index: number, value: string) => Promise<void>;
  deleteItem: (group: AboutGroup, index: number) => Promise<void>;
  refetch: () => Promise<void>;
}

type TranslationRow = {
  id: string;
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
};

function extractIndex(key: string): number | null {
  const match = key.match(/^about\.(summary|keyResults|languages)\.(\d+)$/);
  return match ? Number(match[2]) : null;
}

export function useAboutService(): AboutService {
  const [rows, setRows] = useState<TranslationRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data, error: supabaseError } = await supabase
        .from('translations')
        .select('id, key, language, value, category')
        .like('key', 'about.%')
        .eq('category', 'about');
      if (supabaseError) throw supabaseError;
      setRows((data || []) as TranslationRow[]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load about content';
      console.error('Error loading about content:', err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const grouped = useMemo(() => {
    const summary: string[] = [];
    const keyResults: string[] = [];
    const languages: string[] = [];

    for (const r of rows) {
      const idx = extractIndex(r.key);
      if (idx === null) continue;
      if (r.key.startsWith('about.summary.')) summary[idx - 1] = r.value;
      else if (r.key.startsWith('about.keyResults.')) keyResults[idx - 1] = r.value;
      else if (r.key.startsWith('about.languages.')) languages[idx - 1] = r.value;
    }

    // Compact arrays to remove empty holes while keeping order by index
    return {
      summary: summary.filter(v => typeof v === 'string' && v.length > 0),
      keyResults: keyResults.filter(v => typeof v === 'string' && v.length > 0),
      languages: languages.filter(v => typeof v === 'string' && v.length > 0)
    };
  }, [rows]);

  const addItem = useCallback(async (group: AboutGroup, value: string, index?: number) => {
    const validatedGroup = aboutGroupSchema.parse(group);
    const safeValue = aboutInsertSchema.shape.value.parse(value);

    // Determine next index if not provided
    const current = grouped[validatedGroup];
    const nextIndex = index ?? current.length + 1;
    const key = `about.${validatedGroup}.${nextIndex}`;

    const insert = translationInsertSchema.parse({
      key,
      language: 'en',
      value: safeValue,
      category: 'about'
    });

    const { data, error: supabaseError } = await supabase
      .from('translations')
      .insert(insert)
      .select('id, key, language, value, category')
      .single();

    if (supabaseError) throw supabaseError;

    setRows(prev => [...prev, data as TranslationRow]);
  }, [grouped]);

  const updateItem = useCallback(async (group: AboutGroup, index: number, value: string) => {
    const validatedGroup = aboutGroupSchema.parse(group);
    const safeValue = aboutUpdateSchema.shape.value.parse(value);
    const key = `about.${validatedGroup}.${index}`;

    // Find row id for EN record with this key
    const row = rows.find(r => r.key === key && r.language === 'en');
    if (!row) throw new Error('Item not found');

    const update = translationUpdateSchema.parse({ value: safeValue });

    const { data, error: supabaseError } = await supabase
      .from('translations')
      .update(update)
      .eq('id', row.id)
      .select('id, key, language, value, category')
      .single();
    if (supabaseError) throw supabaseError;

    setRows(prev => prev.map(r => (r.id === row.id ? (data as TranslationRow) : r)));
  }, [rows]);

  const deleteItem = useCallback(async (group: AboutGroup, index: number) => {
    const validatedGroup = aboutGroupSchema.parse(group);
    const key = `about.${validatedGroup}.${index}`;
    const row = rows.find(r => r.key === key && r.language === 'en');
    if (!row) return;

    const { error: supabaseError } = await supabase
      .from('translations')
      .delete()
      .eq('id', row.id);
    if (supabaseError) throw supabaseError;

    setRows(prev => prev.filter(r => r.id !== row.id));
  }, [rows]);

  return {
    summary: grouped.summary,
    keyResults: grouped.keyResults,
    languages: grouped.languages,
    isLoading,
    error,
    addItem,
    updateItem,
    deleteItem,
    refetch: load
  };
}


