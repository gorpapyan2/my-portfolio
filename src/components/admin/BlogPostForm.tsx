import { useEffect, useState, useCallback } from 'react';
import { FileText, Calendar, Clock, Globe, Eye, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { BlogPostInsert } from '../../types/database.types';
import { FieldErrors } from '../../lib/utils/zodErrorHandler';
import { ImageUpload } from './ImageUpload';
import { MarkdownEditor } from './MarkdownEditor';
import { useMarkdownService } from '../../lib/services/useMarkdownService';
import { useBlogAdminService } from '../../lib/services/useBlogAdminService';

interface BlogPostFormProps {
  isEditing: boolean;
  editingPostId?: string;
  formData: Partial<BlogPostInsert>;
  errors: FieldErrors;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (updates: Partial<BlogPostInsert>) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

/**
 * Reusable form component for creating/editing blog posts
 * Handles all form UI and user interactions, with state managed by parent
 * Features: slug validation, autosave, reading time calc, image upload
 */
export function BlogPostForm({
  isEditing,
  editingPostId,
  formData,
  errors,
  onSubmit,
  onChange,
  onCancel,
  isSubmitting = false
}: BlogPostFormProps) {
  const { generateSlug, calculateReadingTime, validateSlugUniqueness } = useMarkdownService();
  const { autosaveDraft, clearDraft, getLastSavedTime } = useBlogAdminService();
  
  const [slugValidation, setSlugValidation] = useState<{
    isValid: boolean | null;
    isChecking: boolean;
    message: string | null;
  }>({ isValid: null, isChecking: false, message: null });
  
  const [autoSaveStatus, setAutoSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [autoReadingTime, setAutoReadingTime] = useState<string>('1 min read');
  const [readingTimeOverride, setReadingTimeOverride] = useState(false);

  // Calculate word and character count
  useEffect(() => {
    const text = formData.content || '';
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    setWordCount(words);
    setCharCount(chars);
    
    // Auto-calculate reading time
    const readTime = calculateReadingTime(text);
    setAutoReadingTime(readTime);
  }, [formData.content, calculateReadingTime]);

  // Autosave to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setAutoSaveStatus('saving');
        autosaveDraft(editingPostId || null, formData);
        setAutoSaveStatus('saved');
        setLastSavedTime(getLastSavedTime(editingPostId || null));
        
        // Reset to idle after 2 seconds
        setTimeout(() => setAutoSaveStatus('idle'), 2000);
      } catch (err) {
        console.error('Autosave error:', err);
        setAutoSaveStatus('error');
      }
    }, 3000); // Wait 3 seconds after changes before saving

    return () => clearTimeout(timer);
  }, [formData, editingPostId, autosaveDraft, getLastSavedTime]);

  // Validate slug uniqueness with debounce
  const validateSlug = useCallback(
    async (slug: string) => {
      if (!slug) {
        setSlugValidation({ isValid: false, isChecking: false, message: 'Slug is required' });
        return;
      }

      // Check format
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      if (!slugRegex.test(slug)) {
        setSlugValidation({ 
          isValid: false, 
          isChecking: false, 
          message: 'Slug must be lowercase alphanumeric with hyphens' 
        });
        return;
      }

      // Check uniqueness
      setSlugValidation({ isValid: null, isChecking: true, message: null });
      try {
        const isUnique = await validateSlugUniqueness(slug, editingPostId);
        setSlugValidation({
          isValid: isUnique,
          isChecking: false,
          message: isUnique ? 'Slug is available' : 'Slug already exists'
        });
      } catch (err) {
        setSlugValidation({ 
          isValid: null, 
          isChecking: false, 
          message: 'Could not validate slug' 
        });
      }
    },
    [editingPostId, validateSlugUniqueness]
  );

  // Debounce slug validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.slug && formData.slug.length > 0) {
        validateSlug(formData.slug);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.slug, validateSlug]);

  const handleTitleChange = (title: string) => {
    const newSlug = generateSlug(title);
    onChange({
      ...formData,
      title,
      slug: newSlug
    });
  };

  const handleInputChange = (field: keyof BlogPostInsert, value: unknown) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const handleImageUpload = (url: string, alt: string) => {
    // Insert image markdown into content at current cursor position
    const imageMarkdown = `![${alt}](${url})`;
    
    // Get current content
    const currentContent = formData.content || '';
    
    // For now, append to the end of content (could be enhanced to insert at cursor position)
    const newContent = currentContent + (currentContent ? '\n\n' : '') + imageMarkdown;
    
    // Update both image field and content
    onChange({
      ...formData,
      image: url, // Set as featured image
      content: newContent // Insert into content
    });
  };

  const handleFeaturedImageUpload = (url: string, _filename: string) => {
    // For featured image upload, just set the image field
    handleInputChange('image', url);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Apply auto-calculated reading time if not overridden
      if (!readingTimeOverride) {
        onChange({
          ...formData,
          read_time: autoReadingTime
        });
      }
      
      await onSubmit(e);
      
      // Clear draft on successful submission
      clearDraft(editingPostId || null);
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <p className="text-sm text-gray-400">
              {isEditing ? 'Update your blog post content and settings' : 'Write and publish a new blog post'}
            </p>
          </div>
        </div>
        
        {/* Autosave Status */}
        <div className="flex items-center gap-2">
          {autoSaveStatus === 'saving' && (
            <div className="flex items-center gap-1 text-xs text-yellow-400">
              <Zap className="h-3 w-3 animate-pulse" />
              Saving...
            </div>
          )}
          {autoSaveStatus === 'saved' && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <CheckCircle className="h-3 w-3" />
              Saved
              {lastSavedTime && ` at ${lastSavedTime}`}
            </div>
          )}
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#edfc3a]" />
          Basic Information
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Title *
            </label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all ${
                errors.title ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="Enter blog post title..."
              required
              disabled={isSubmitting}
            />
            {errors.title && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-400 rounded-full" />
                {errors.title}
              </p>
            )}
          </div>

          {/* Slug Field with Validation */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              URL Slug *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Globe className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={formData.slug || ''}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className={`w-full pl-10 pr-10 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all ${
                  errors.slug ? 'border-red-500' : 
                  slugValidation.isValid === true ? 'border-green-500' :
                  slugValidation.isValid === false && slugValidation.isChecking === false ? 'border-red-500' :
                  'border-white/10'
                }`}
                placeholder="url-friendly-slug"
                required
                disabled={isSubmitting}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {slugValidation.isChecking && (
                  <div className="animate-spin">
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                )}
                {slugValidation.isValid === true && (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                )}
                {slugValidation.isValid === false && (
                  <AlertCircle className="h-4 w-4 text-red-400" />
                )}
              </div>
            </div>
            {slugValidation.message && (
              <p className={`text-sm flex items-center gap-1 ${
                slugValidation.isValid === true ? 'text-green-400' : 'text-red-400'
              }`}>
                <span className="w-1 h-1 bg-current rounded-full" />
                {slugValidation.message}
              </p>
            )}
            {errors.slug && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-400 rounded-full" />
                {errors.slug}
              </p>
            )}
          </div>
        </div>

        {/* Excerpt Field */}
        <div className="mt-6 space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Excerpt *
          </label>
          <textarea
            value={formData.excerpt || ''}
            onChange={(e) => handleInputChange('excerpt', e.target.value)}
            rows={3}
            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all resize-none ${
              errors.excerpt ? 'border-red-500' : 'border-white/10'
            }`}
            placeholder="Write a brief description of your blog post..."
            required
            disabled={isSubmitting}
          />
          {errors.excerpt && (
            <p className="text-red-400 text-sm flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#edfc3a]" />
          Content
        </h3>
        <MarkdownEditor
          value={formData.content || ''}
          onChange={(content) => handleInputChange('content', content)}
          placeholder="Write your blog post content here... Use markdown formatting for better presentation."
          rows={10}
          onImageUpload={handleImageUpload}
        />
        
        {/* Word Count and Stats */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex gap-6">
            <span>Words: <span className="text-white font-medium">{wordCount}</span></span>
            <span>Characters: <span className="text-white font-medium">{charCount}</span></span>
          </div>
          <div className="text-[#edfc3a] font-medium">
            Reading time: {autoReadingTime}
          </div>
        </div>
        
        {errors.content && (
          <p className="text-red-400 text-sm flex items-center gap-1 mt-2">
            <span className="w-1 h-1 bg-red-400 rounded-full" />
            {errors.content}
          </p>
        )}
      </div>

      {/* Media & Settings Section */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#edfc3a]" />
          Media & Settings
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Featured Image
            </label>
            <ImageUpload
              onUpload={handleFeaturedImageUpload}
              disabled={isSubmitting}
            />
          </div>

          {/* Read Time and Publication Status */}
          <div className="space-y-4">
            {/* Read Time Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-300">
                  Read Time *
                </label>
                <button
                  type="button"
                  onClick={() => setReadingTimeOverride(!readingTimeOverride)}
                  className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                >
                  {readingTimeOverride ? 'Using Custom' : 'Auto (Click to override)'}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={readingTimeOverride ? (formData.read_time || '') : autoReadingTime}
                  onChange={(e) => {
                    setReadingTimeOverride(true);
                    handleInputChange('read_time', e.target.value);
                  }}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all ${
                    errors.read_time ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="e.g., 5 min read"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {errors.read_time && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-400 rounded-full" />
                  {errors.read_time}
                </p>
              )}
            </div>

            {/* Publication Status */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-300">
                Publication Status
              </label>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published || false}
                  onChange={(e) => handleInputChange('published', e.target.checked)}
                  className="w-4 h-4 text-[#edfc3a] bg-white/5 border-white/20 rounded focus:ring-[#edfc3a] focus:ring-2"
                  disabled={isSubmitting}
                />
                <div className="flex items-center gap-2">
                  <label htmlFor="published" className="text-gray-300 cursor-pointer">
                    Publish immediately
                  </label>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Eye className="h-3 w-3" />
                    <span>Public</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>
            {isEditing ? 'Last updated' : 'Created'} on {new Date().toLocaleDateString()}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Debug info - remove this after fixing */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>Title: {formData.title ? '✓' : '✗'}</div>
            <div>Slug: {formData.slug ? '✓' : '✗'} (valid: {slugValidation.isValid === null ? 'checking' : slugValidation.isValid ? 'yes' : 'no'})</div>
            <div>Excerpt: {formData.excerpt ? '✓' : '✗'}</div>
            <div>Read Time: {formData.read_time ? '✓' : '✗'}</div>
            <div>Checking: {slugValidation.isChecking ? 'yes' : 'no'}</div>
          </div>
          
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-2 disabled:opacity-50"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={
              isSubmitting || 
              slugValidation.isValid === false || 
              slugValidation.isChecking ||
              !formData.title?.trim() ||
              !formData.slug?.trim() ||
              !formData.excerpt?.trim() ||
              !formData.read_time?.trim()
            }
            className="px-6 py-3 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </div>
    </form>
  );
}
