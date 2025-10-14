import { supabase } from '../lib/supabase';
import fs from 'fs';
import path from 'path';

export async function uploadPortraitImage(imagePath: string): Promise<void> {
  try {
    console.log('Starting portrait image upload...');

    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image file not found: ${imagePath}`);
    }

    // Read the file
    const fileBuffer = fs.readFileSync(imagePath);
    const fileName = path.basename(imagePath);
    const fileExtension = path.extname(fileName);
    
    // Generate unique filename
    const timestamp = Date.now();
    const uniqueFileName = `portrait/${timestamp}${fileExtension}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('images')
      .upload(uniqueFileName, fileBuffer, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(data.path);

    console.log('Portrait image uploaded successfully!');
    console.log('Public URL:', publicUrl);
    console.log('Path:', data.path);
  } catch (err) {
    console.error('Error uploading portrait image:', err);
    throw err;
  }
}

// Example usage
if (require.main === module) {
  const imagePath = process.argv[2];
  if (!imagePath) {
    console.error('Please provide the path to the image file');
    console.error('Usage: npm run upload:portrait <path-to-image>');
    process.exit(1);
  }
  
  uploadPortraitImage(imagePath);
}
