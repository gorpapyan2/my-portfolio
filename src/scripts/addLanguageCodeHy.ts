import { supabase } from '../lib/supabase';

/**
 * This script adds 'hy' (Armenian ISO 639-1) as a supported language
 * by copying all existing 'am' translations to 'hy'.
 *
 * Background:
 * - Database currently uses 'am' for Armenian
 * - ISO 639-1 standard code for Armenian is 'hy'
 * - This script migrates to the standard code
 */

async function migrateAmToHy() {
  try {
    console.log('Starting migration from am → hy language code...\n');

    // Step 1: Fetch all 'am' translations
    console.log('Step 1: Fetching all existing "am" translations...');
    const { data: amTranslations, error: fetchError } = await supabase
      .from('translations')
      .select('*')
      .eq('language', 'am');

    if (fetchError) {
      console.error('Error fetching am translations:', fetchError);
      throw fetchError;
    }

    if (!amTranslations || amTranslations.length === 0) {
      console.log('⚠️  No "am" translations found to migrate');
      return;
    }

    console.log(`✅ Found ${amTranslations.length} "am" translations\n`);

    // Step 2: Check if 'hy' translations already exist
    console.log('Step 2: Checking for existing "hy" translations...');
    const { data: hyTranslations, error: hyCheckError } = await supabase
      .from('translations')
      .select('key')
      .eq('language', 'hy');

    if (hyCheckError) {
      console.error('Error checking hy translations:', hyCheckError);
      throw hyCheckError;
    }

    const existingHyKeys = new Set((hyTranslations || []).map((t: { key: string }) => t.key));
    console.log(`Found ${existingHyKeys.size} existing "hy" translations\n`);

    // Step 3: Prepare new translations with 'hy' language code
    console.log('Step 3: Preparing new "hy" translations...');
    const hyTranslationsToInsert = amTranslations
      .filter(t => !existingHyKeys.has(t.key))
      .map(t => ({
        key: t.key,
        language: 'hy',
        value: t.value,
        category: t.category
      }));

    console.log(`Prepared ${hyTranslationsToInsert.length} new "hy" translations to insert\n`);

    if (hyTranslationsToInsert.length === 0) {
      console.log('✅ All "hy" translations already exist - nothing to do!');
      return;
    }

    // Step 4: Insert in batches
    console.log('Step 4: Inserting "hy" translations in batches...');
    const batchSize = 50;
    let inserted = 0;

    for (let i = 0; i < hyTranslationsToInsert.length; i += batchSize) {
      const batch = hyTranslationsToInsert.slice(i, i + batchSize);

      const { error: insertError } = await supabase
        .from('translations')
        .insert(batch);

      if (insertError) {
        console.error(`Error inserting batch ${Math.floor(i / batchSize) + 1}:`, insertError);
        throw insertError;
      }

      inserted += batch.length;
      const progress = ((inserted / hyTranslationsToInsert.length) * 100).toFixed(1);
      console.log(`  Progress: ${inserted}/${hyTranslationsToInsert.length} (${progress}%)`);
    }

    console.log(`\n✅ Successfully inserted ${inserted} "hy" translations!\n`);

    // Step 5: Verification
    console.log('Step 5: Verifying migration...');
    const { data: verifyHy, error: verifyError } = await supabase
      .from('translations')
      .select('key', { count: 'exact' })
      .eq('language', 'hy');

    if (verifyError) {
      console.error('Error during verification:', verifyError);
      throw verifyError;
    }

    const hyCount = verifyHy?.length || 0;
    const amCount = amTranslations.length;

    console.log('\n=== Migration Summary ===');
    console.log(`"am" translations: ${amCount}`);
    console.log(`"hy" translations: ${hyCount}`);
    console.log(`Match: ${hyCount === amCount ? '✅ Yes' : '⚠️  No'}`);

    if (hyCount === amCount) {
      console.log('\n✅ Migration completed successfully!');
      console.log('\nNext steps:');
      console.log('1. Update database schema to support "hy" language code');
      console.log('2. Update application code to use "hy" instead of "am"');
      console.log('3. Optionally deprecate "am" language code');
    } else {
      console.log(`\n⚠️  Warning: Count mismatch (expected ${amCount}, got ${hyCount})`);
    }

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    throw error;
  }
}

// Run the migration
migrateAmToHy()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Failed:', error);
    process.exit(1);
  });
