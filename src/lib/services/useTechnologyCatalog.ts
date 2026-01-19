import { useCallback, useEffect, useState } from 'react';
import type { ElementType } from 'react';
import { supabase } from '../supabase';
import { getIcon } from '../../utils/iconMap';
import type { Database } from '../../types/database.types';
import type { Language } from '../../context/LanguageContext';

type TechnologyRow = Database['public']['Tables']['technologies']['Row'];
type TechnologyDetailRow = Database['public']['Tables']['technology_details']['Row'];

export interface TechnologyItem {
  id: string;
  slug: string;
  icon: ElementType;
  title: string;
  description: string;
  detailedDescription: string[];
  realWorldExample: string;
  level: number;
  category: string;
  tags: string[];
}

export interface TechnologyCatalog {
  technologies: TechnologyItem[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useTechnologyCatalog(language: Language): TechnologyCatalog {
  const [technologies, setTechnologies] = useState<TechnologyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTechnologies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [techResult, detailResult] = await Promise.all([
        supabase
          .from('technologies')
          .select('*')
          .eq('language', language)
          .order('created_at', { ascending: true }),
        supabase
          .from('technology_details')
          .select('*')
          .eq('language', language)
      ]);

      if (techResult.error) throw techResult.error;
      if (detailResult.error) throw detailResult.error;

      const detailMap = new Map<string, TechnologyDetailRow>();
      (detailResult.data || []).forEach((detail) => {
        detailMap.set(detail.technology_id, detail);
      });

      const items = (techResult.data || []).map((tech: TechnologyRow) => {
        const detail = detailMap.get(tech.id);
        return {
          id: tech.id,
          slug: tech.slug,
          icon: getIcon(tech.icon_name ?? ''),
          title: tech.title,
          description: tech.description,
          detailedDescription: (detail?.detailed_description || []) as string[],
          realWorldExample: detail?.real_world_example ?? '',
          level: tech.level,
          category: tech.category,
          tags: (detail?.tags || []) as string[]
        } satisfies TechnologyItem;
      });

      setTechnologies(items);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load technologies';
      console.error('Error loading technologies:', err);
      setError(message);
      setTechnologies([]);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  useEffect(() => {
    loadTechnologies();
  }, [loadTechnologies]);

  return {
    technologies,
    isLoading,
    error,
    refetch: loadTechnologies
  };
}
