// Test Supabase connection
// Run this in your browser console at http://localhost:5173/my-portfolio/

import { supabase } from './src/lib/supabase.js';

async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    const { data, error } = await supabase
      .from('translations')
      .select('*')
      .limit(5);
    
    if (error) {
      console.error('Connection failed:', error);
    } else {
      console.log('✅ Connection successful!');
      console.log('Sample translations:', data);
    }
  } catch (err) {
    console.error('Test failed:', err);
  }
}

testConnection();
