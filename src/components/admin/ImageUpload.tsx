import { useState, useRef } from 'react';
import { Upload, X, Loader } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../shared/TranslationText';

interface ImageUploadProps {
  onUpload: (url: string, filename: string) => void;
  disabled?: boolean;
}

const BUCKET_NAME = 'images';
const FOLDER_PATH = 'blog-images';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

/**
 * Image upload component with drag-and-drop support
 * Uploads to Supabase Storage and returns public URL
 */
export function ImageUpload({ onUpload, disabled = false }: ImageUploadProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return `File type must be JPEG, PNG, GIF, or WebP. Got ${file.type}`;
    }

    if (file.size > MAX_FILE_SIZE) {
      return `File size must be less than 5MB. Got ${(file.size / 1024 / 1024).toFixed(2)}MB`;
    }

    return null;
  };

  const uploadFile = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);

      // Validate file
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      // Generate unique filename
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 8);
      const ext = file.name.split('.').pop() || 'jpg';
      const filename = `${timestamp}-${random}.${ext}`;
      const filepath = `${FOLDER_PATH}/${filename}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filepath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        setError(`Upload failed: ${uploadError.message}`);
        return;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filepath);

      if (!urlData?.publicUrl) {
        setError('Failed to get public URL');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Callback with URL and original filename (for alt text)
      onUpload(urlData.publicUrl, file.name.replace(/\.[^/.]+$/, ''));
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const handleClear = () => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {preview && (
        <div className="relative inline-block">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs h-auto rounded-lg border border-white/10"
          />
          <button
            onClick={handleClear}
            disabled={isLoading}
            className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors disabled:opacity-50"
            title={t('admin.imageUpload.removePreview')}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => !isLoading && fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
          ${isLoading || disabled
            ? 'border-gray-500 bg-gray-500/5 cursor-not-allowed opacity-50'
            : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={ALLOWED_TYPES.join(',')}
          onChange={handleFileSelect}
          disabled={isLoading || disabled}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-2">
          {isLoading ? (
            <>
              <Loader className="h-8 w-8 text-[#edfc3a] animate-spin" />
              <p className="text-sm text-gray-400">
                <TranslationText translationKey="admin.imageUpload.uploading" as="span" shimmerWidth="100px" />
              </p>
            </>
          ) : (
            <>
              <Upload className="h-8 w-8 text-gray-400" />
              <p className="text-sm text-white font-medium">
                <TranslationText translationKey="admin.imageUpload.dragDrop" as="span" shimmerWidth="250px" />
              </p>
              <p className="text-xs text-gray-500">
                <TranslationText translationKey="admin.imageUpload.fileTypes" as="span" shimmerWidth="250px" />
              </p>
            </>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-500">
        <TranslationText translationKey="admin.imageUpload.uploadInfo" as="span" shimmerWidth="400px" />
      </p>
    </div>
  );
}
