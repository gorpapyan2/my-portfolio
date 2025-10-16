import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Initial feature flags data
const initialFeatureFlags = [
  {
    flag_key: 'blog_section',
    content_type: 'section',
    description: 'Controls visibility of the entire blog section',
    enabled: true
  },
  {
    flag_key: 'work_section',
    content_type: 'section',
    description: 'Controls visibility of the entire work/projects section',
    enabled: true
  },
  {
    flag_key: 'featured_projects_section',
    content_type: 'section',
    description: 'Controls visibility of featured projects on homepage',
    enabled: true
  },
  {
    flag_key: 'latest_articles_section',
    content_type: 'section',
    description: 'Controls visibility of latest articles on homepage',
    enabled: true
  }
];

async function seedFeatureFlags() {
  try {
    console.log('🌱 Starting feature flags seeding...');

    // Check if flags already exist
    const { data: existingFlags, error: checkError } = await supabase
      .from('feature_flags')
      .select('flag_key');

    if (checkError) {
      throw checkError;
    }

    const existingKeys = existingFlags?.map(flag => flag.flag_key) || [];
    const flagsToInsert = initialFeatureFlags.filter(
      flag => !existingKeys.includes(flag.flag_key)
    );

    if (flagsToInsert.length === 0) {
      console.log('✅ All feature flags already exist, skipping...');
      return;
    }

    // Insert new flags
    const { data, error } = await supabase
      .from('feature_flags')
      .insert(flagsToInsert)
      .select();

    if (error) {
      throw error;
    }

    console.log(`✅ Successfully seeded ${data.length} feature flags:`);
    data.forEach(flag => {
      console.log(`   - ${flag.flag_key}: ${flag.description}`);
    });

  } catch (error) {
    console.error('❌ Error seeding feature flags:', error);
    process.exit(1);
  }
}

// Run the seeding
seedFeatureFlags();
