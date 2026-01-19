import type { SiteAsset } from '../../types/database.types';
import { supabase } from '../supabase';

const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map<string, { data: SiteAsset | null; fetchedAt: number }>();

export function clearSiteAssetCache(key?: string) {
  if (key) {
    cache.delete(key);
    return;
  }
  cache.clear();
}

export async function getSiteAsset(key: string): Promise<SiteAsset | null> {
  const now = Date.now();
  const cached = cache.get(key);
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.data;
  }

  const { data, error } = await supabase
    .from('site_assets')
    .select('*')
    .eq('key', key)
    .maybeSingle();

  if (error) {
    console.error(`getSiteAsset failed to load ${key}`, error);
    return null;
  }

  cache.set(key, { data: data ?? null, fetchedAt: now });
  return data ?? null;
}
