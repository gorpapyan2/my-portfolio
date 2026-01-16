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
    <div className="stack [--stack-space:var(--space-12)]">
      {error && (
        <div className="p-[var(--space-12)] bg-red-500/10 border border-red-500/20 rounded-[var(--radius-md)] text-red-400 text-[length:var(--font-100)]">
          {error}
        </div>
      )}

      {preview && (
        <div className="relative inline-block">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs h-auto rounded-[var(--radius-md)] border border-[var(--border)]"
          />
          <button
            onClick={handleClear}
            disabled={isLoading}
            className="absolute top-[var(--space-8)] right-[var(--space-8)] p-[var(--space-8)] bg-red-500 hover:bg-red-600 text-white rounded-[var(--radius-sm)] transition-colors disabled:opacity-50"
            title={t('admin.imageUpload.removePreview')}
          >
            <X className="h-[var(--space-16)] w-[var(--space-16)]" />
          </button>
        </div>
      )}

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => !isLoading && fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-[var(--radius-md)] p-[var(--space-24)] text-center transition-colors cursor-pointer
          ${isLoading || disabled
            ? 'border-[var(--text-muted)]/50 bg-[var(--surface-strong)] cursor-not-allowed opacity-50'
            : 'border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-strong)] hover:border-[var(--border)]/70'
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

        <div className="flex flex-col items-center gap-[var(--space-8)]">
          {isLoading ? (
            <>
              <Loader className="h-[var(--space-32)] w-[var(--space-32)] text-accent animate-spin" />
              <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                <TranslationText translationKey="admin.imageUpload.uploading" as="span" shimmerWidth="100px" />
              </p>
            </>
          ) : (
            <>
              <Upload className="h-[var(--space-32)] w-[var(--space-32)] text-[var(--text-muted)]" />
              <p className="text-[length:var(--font-100)] text-[var(--text)] font-medium">
                <TranslationText translationKey="admin.imageUpload.dragDrop" as="span" shimmerWidth="250px" />
              </p>
              <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                <TranslationText translationKey="admin.imageUpload.fileTypes" as="span" shimmerWidth="250px" />
              </p>
            </>
          )}
        </div>
      </div>

      <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
        <TranslationText translationKey="admin.imageUpload.uploadInfo" as="span" shimmerWidth="400px" />
      </p>
    </div>
  );
}

