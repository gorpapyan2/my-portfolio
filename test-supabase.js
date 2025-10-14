import { supabase } from './src/lib/supabase';

async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase.from('translations').select('count');
    
    if (error) {
      console.log('Connection test failed (expected if table doesn\'t exist):', error.message);
      
      // Try to create the table
      console.log('Attempting to create translations table...');
      
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS translations (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          key TEXT NOT NULL,
          language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
          value TEXT NOT NULL,
          category TEXT NOT NULL DEFAULT 'common',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          UNIQUE(key, language)
        );
        
        CREATE INDEX IF NOT EXISTS idx_translations_key ON translations(key);
        CREATE INDEX IF NOT EXISTS idx_translations_language ON translations(language);
        CREATE INDEX IF NOT EXISTS idx_translations_category ON translations(category);
        
        ALTER TABLE translations ENABLE ROW LEVEL SECURITY;
        
        CREATE POLICY "Public read access for translations" ON translations
          FOR SELECT USING (true);
        
        CREATE POLICY "Authenticated write access for translations" ON translations
          FOR ALL USING (auth.role() = 'authenticated');
        
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
        END;
        $$ language 'plpgsql';
        
        CREATE TRIGGER update_translations_updated_at 
          BEFORE UPDATE ON translations 
          FOR EACH ROW 
          EXECUTE FUNCTION update_updated_at_column();
      `;
      
      const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableQuery });
      
      if (createError) {
        console.error('Failed to create table:', createError);
        console.log('You may need to create the table manually in the Supabase dashboard');
        console.log('SQL to run:');
        console.log(createTableQuery);
      } else {
        console.log('Table created successfully!');
      }
    } else {
      console.log('Connection successful! Translations table exists.');
    }
    
  } catch (err) {
    console.error('Connection test failed:', err);
  }
}

testSupabaseConnection();
