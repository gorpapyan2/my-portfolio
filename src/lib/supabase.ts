import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';

// Use the provided Supabase project credentials
// Handle both browser (import.meta.env) and Node.js (process.env) environments
const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 
                    (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_URL) || 
                    'https://lfbemjnghstybysdemys.supabase.co';

const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || 
                       (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_ANON_KEY) || 
                       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYmVtam5naHN0eWJ5c2RlbXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Mzc4MTYsImV4cCI6MjA3NjAxMzgxNn0.1TVZjtk0-XI2HhMFUXB27PGMQg41AkILCxDxH8Z2cvg';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
