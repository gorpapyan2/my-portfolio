import { createClient } from '@supabase/supabase-js';

// Use the provided Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lfbemjnghstybysdemys.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYmVtam5naHN0eWJ5c2RlbXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Mzc4MTYsImV4cCI6MjA3NjAxMzgxNn0.1TVZjtk0-XI2HhMFUXB27PGMQg41AkILCxDxH8Z2cvg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types will be generated when Supabase is properly configured
export interface Database {
  public: {
    Tables: {
      translations: {
        Row: {
          id: string;
          key: string;
          language: 'en' | 'ru' | 'am';
          value: string;
          category: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          language: 'en' | 'ru' | 'am';
          value: string;
          category?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          language?: 'en' | 'ru' | 'am';
          value?: string;
          category?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
