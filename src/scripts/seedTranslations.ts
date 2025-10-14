import { supabase } from '../lib/supabase';
import { translations as staticTranslations } from '../translations';

export interface TranslationSeed {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

export async function seedTranslations(): Promise<void> {
  try {
    console.log('Starting translation seeding...');
    
    const translationsToSeed: TranslationSeed[] = [];
    
    // Convert static translations to Supabase format
    Object.entries(staticTranslations).forEach(([language, langTranslations]) => {
      Object.entries(langTranslations).forEach(([key, value]) => {
        const category = key.split('.')[0] || 'common';
        translationsToSeed.push({
          key,
          language: language as 'en' | 'ru' | 'am',
          value,
          category
        });
      });
    });

    console.log(`Prepared ${translationsToSeed.length} translations for seeding`);

    // Insert translations in batches to avoid overwhelming the database
    const batchSize = 50;
    for (let i = 0; i < translationsToSeed.length; i += batchSize) {
      const batch = translationsToSeed.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('translations')
        .upsert(batch, { onConflict: 'key,language' });

      if (error) {
        console.error(`Error seeding batch ${Math.floor(i / batchSize) + 1}:`, error);
        throw error;
      }

      console.log(`Seeded batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(translationsToSeed.length / batchSize)}`);
    }

    console.log('Translation seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding translations:', error);
    throw error;
  }
}

export async function clearTranslations(): Promise<void> {
  try {
    console.log('Clearing existing translations...');
    
    const { error } = await supabase
      .from('translations')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows

    if (error) {
      console.error('Error clearing translations:', error);
      throw error;
    }

    console.log('Translations cleared successfully!');
  } catch (error) {
    console.error('Error clearing translations:', error);
    throw error;
  }
}

export async function resetTranslations(): Promise<void> {
  try {
    await clearTranslations();
    await seedTranslations();
    console.log('Translation reset completed successfully!');
  } catch (error) {
    console.error('Error resetting translations:', error);
    throw error;
  }
}

// Utility function to export current translations to JSON
export function exportTranslationsToJSON(translations: Record<string, Record<string, string>>): string {
  return JSON.stringify(translations, null, 2);
}

// Utility function to import translations from JSON
export function parseTranslationsFromJSON(jsonString: string): Record<string, Record<string, string>> {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
}
