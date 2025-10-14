import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useImageUploadService } from '../../lib/services/useImageUploadService';

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (imageUrl: string) => void;
  folder?: string;
  className?: string;
}

export function ImageUpload({ 
  currentImage, 
  onImageChange, 
  folder = 'general',
  className = ''
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageService = useImageUploadService();

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Generate unique filename
      const timestamp = Date.now();
      const extension = file.name.split('.').pop();
      const filename = `${folder}/${timestamp}.${extension}`;

      // Upload to Supabase
      const imageUrl = await imageService.uploadImage(file, filename);
      onImageChange(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      setPreview(currentImage || null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onImageChange('');
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-300">
        Image
      </label>
      
      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border border-white/10"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div
          className={`w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-colors ${
            isDragging 
              ? 'border-[#edfc3a] bg-[#edfc3a]/10' 
              : 'border-white/20 hover:border-white/40'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <ImageIcon className="h-12 w-12 text-gray-400 mb-2" />
          <p className="text-gray-400 text-sm mb-2">
            Drag and drop an image here, or click to select
          </p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
          >
            <Upload className="h-4 w-4" />
            Choose Image
          </button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {imageService.error && (
        <p className="text-red-400 text-sm">{imageService.error}</p>
      )}
    </div>
  );
}
