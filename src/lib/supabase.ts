import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';
import { supabaseConfig } from './config';

/**
 * Supabase client instance
 * Configuration is centralized in lib/config.ts
 * 
 * @throws {Error} If VITE_SUPABASE_ANON_KEY is not provided
 */
if (!supabaseConfig.anonKey || supabaseConfig.anonKey.trim() === '') {
  const errorMessage = `
    ⚠️ Supabase configuration error: VITE_SUPABASE_ANON_KEY is required!
    
    Please create a .env file in the project root with:
    VITE_SUPABASE_URL=https://ocsoqppieozakfmjrrsh.supabase.co
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
    
    Get your key from: https://supabase.com/dashboard → Project Settings → API → anon public key
  `;
  console.error(errorMessage);
  throw new Error('VITE_SUPABASE_ANON_KEY is required. Please check your .env file.');
}

export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.anonKey
);
