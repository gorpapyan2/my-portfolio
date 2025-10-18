import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';
import { supabaseConfig } from './config';

/**
 * Supabase client instance
 * Configuration is centralized in lib/config.ts
 */
export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.anonKey
);
