import { assetUrls } from '../config';

/**
 * Downloads the CV file from Supabase storage
 * Handles blob conversion for proper file downloading
 * Falls back to opening in new tab if download fails
 * 
 * @throws Error if both download and fallback fail
 */
export async function downloadCV(): Promise<void> {
  try {
    // Fetch the file as a blob to enable proper downloading
    const response = await fetch(assetUrls.cv);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CV: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    
    // Create a temporary object URL
    const blobUrl = URL.createObjectURL(blob);
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Gor_Papyan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Failed to download CV:', error);
    
    // Fallback: open in new tab if download fails
    window.open(assetUrls.cv, '_blank');
  }
}

