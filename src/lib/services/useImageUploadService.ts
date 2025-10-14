import { useState, useCallback } from 'react';
import { supabase } from '../supabase';

export interface ImageUploadService {
  uploadImage: (file: File, path: string) => Promise<string>;
  deleteImage: (path: string) => Promise<void>;
  getImageUrl: (path: string) => string;
  isLoading: boolean;
  error: string | null;
}

export function useImageUploadService(): ImageUploadService {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = useCallback(async (file: File, path: string): Promise<string> => {
    try {
      setIsLoading(true);
      setError(null);

      // Upload file to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);

      return publicUrl;
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteImage = useCallback(async (path: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const { error: deleteError } = await supabase.storage
        .from('images')
        .remove([path]);

      if (deleteError) throw deleteError;
    } catch (err) {
      console.error('Error deleting image:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete image');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getImageUrl = useCallback((path: string): string => {
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(path);
    return publicUrl;
  }, []);

  return {
    uploadImage,
    deleteImage,
    getImageUrl,
    isLoading,
    error
  };
}
