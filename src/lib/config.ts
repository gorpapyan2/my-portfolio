/**
 * Centralized configuration for the portfolio application
 * All environment variables and external URLs are managed here
 */

// Environment helper for both browser and Node.js contexts
const getEnvVar = (key: string, fallback: string): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env?.[key]) {
    return import.meta.env[key];
  }
  if (typeof process !== 'undefined' && process.env?.[key]) {
    return process.env[key];
  }
  return fallback;
};

/**
 * Supabase configuration
 */
export const supabaseConfig = {
  url: getEnvVar('VITE_SUPABASE_URL', 'https://ocsoqppieozakfmjrrsh.supabase.co'),
  anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY', ''),
} as const;

/**
 * Asset URLs configuration
 * All external asset URLs centralized here for easy maintenance
 */
export const assetUrls = {
  cv: getEnvVar(
    'VITE_CV_URL',
    'https://ocsoqppieozakfmjrrsh.supabase.co/storage/v1/object/public/documents/Gor_Papyan_CV.pdf'
  ),
  portrait: getEnvVar(
    'VITE_PORTRAIT_URL',
    'https://ocsoqppieozakfmjrrsh.supabase.co/storage/v1/object/public/images/portrait/portrait.png'
  ),
} as const;

/**
 * Application metadata
 */
export const appMetadata = {
  name: 'Gor Papyan Portfolio',
  description: 'Quality Assurance Engineer Portfolio',
  email: 'gorpapyan2@gmail.com',
  github: 'https://github.com/gorpapyan2',
} as const;

/**
 * Type-safe configuration object
 */
export const config = {
  supabase: supabaseConfig,
  assets: assetUrls,
  app: appMetadata,
} as const;

export default config;

