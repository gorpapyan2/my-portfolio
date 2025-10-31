import { supabase } from '../lib/supabase';
import fs from 'fs';
import path from 'path';

/**
 * Uploads CV file to Supabase Storage
 * Creates/updates the CV in the 'documents' bucket
 */
export async function uploadCV(filePath: string): Promise<void> {
  try {
    console.log('Starting CV upload...');

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`CV file not found: ${filePath}`);
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = 'Gor_Papyan_CV.pdf'; // Standardized filename

    console.log(`Uploading: ${fileName}`);
    console.log(`File size: ${(fileBuffer.length / 1024).toFixed(2)} KB`);

    // First, ensure the 'documents' bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const documentsExists = buckets?.some(b => b.name === 'documents');

    if (!documentsExists) {
      console.log('Creating documents bucket...');
      const { error: bucketError } = await supabase.storage.createBucket('documents', {
        public: true,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ['application/pdf']
      });

      if (bucketError) {
        console.error('Error creating bucket:', bucketError);
        throw bucketError;
      }
      console.log('Documents bucket created successfully');
    }

    // Upload to Supabase Storage (overwrites if exists)
    const { data, error } = await supabase.storage
      .from('documents')
      .upload(fileName, fileBuffer, {
        cacheControl: '3600',
        upsert: true, // Overwrite if exists
        contentType: 'application/pdf'
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('documents')
      .getPublicUrl(data.path);

    console.log('✅ CV uploaded successfully!');
    console.log('Public URL:', publicUrl);
    console.log('Path:', data.path);
    console.log('\nUpdate your .env file:');
    console.log(`VITE_CV_URL=${publicUrl}`);
  } catch (err) {
    console.error('❌ Error uploading CV:', err);
    throw err;
  }
}

// CLI usage
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Please provide the path to the CV file');
    console.error('Usage: npm run upload:cv <path-to-cv.pdf>');
    console.error('Example: npm run upload:cv ./Gor_Papyan_CV.pdf');
    process.exit(1);
  }
  
  uploadCV(filePath);
}

