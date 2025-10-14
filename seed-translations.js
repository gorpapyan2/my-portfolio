// Seed all translations to Supabase
// Run this in your browser console at http://localhost:5173/my-portfolio/

import { supabase } from './src/lib/supabase.js';
import { translations as staticTranslations } from './src/translations/index.js';

async function seedAllTranslations() {
  try {
    console.log('🌱 Starting to seed all translations...');
    
    const translationsToSeed = [];
    
    // Convert static translations to Supabase format
    Object.entries(staticTranslations).forEach(([language, langTranslations]) => {
      Object.entries(langTranslations).forEach(([key, value]) => {
        const category = key.split('.')[0] || 'common';
        translationsToSeed.push({
          key,
          language: language,
          value,
          category
        });
      });
    });

    console.log(`📊 Prepared ${translationsToSeed.length} translations for seeding`);

    // Insert translations in batches
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < translationsToSeed.length; i += batchSize) {
      const batch = translationsToSeed.slice(i, i + batchSize);
      const batchNumber = Math.floor(i / batchSize) + 1;
      const totalBatches = Math.ceil(translationsToSeed.length / batchSize);
      
      console.log(`📦 Processing batch ${batchNumber}/${totalBatches} (${batch.length} translations)...`);
      
      const { error } = await supabase
        .from('translations')
        .upsert(batch, { onConflict: 'key,language' });

      if (error) {
        console.error(`❌ Error seeding batch ${batchNumber}:`, error);
        errorCount += batch.length;
      } else {
        successCount += batch.length;
        console.log(`✅ Batch ${batchNumber} completed successfully`);
      }
    }

    console.log(`🎉 Seeding completed!`);
    console.log(`✅ Successfully uploaded: ${successCount} translations`);
    if (errorCount > 0) {
      console.log(`❌ Failed to upload: ${errorCount} translations`);
    }
    
    // Verify the data
    console.log('🔍 Verifying database...');
    const { data, error } = await supabase
      .from('translations')
      .select('count');
    
    if (!error) {
      console.log(`📈 Database now contains ${data.length} translation records`);
    }
    
    // Show sample data
    const { data: sampleData } = await supabase
      .from('translations')
      .select('*')
      .limit(3);
    
    if (sampleData) {
      console.log('📋 Sample translations:', sampleData);
    }
    
  } catch (error) {
    console.error('💥 Seeding failed:', error);
  }
}

// Run the seeding
seedAllTranslations();
