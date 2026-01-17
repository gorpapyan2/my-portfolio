import { useEffect, useState, useCallback } from 'react';
import { FileText, Calendar, Clock, Globe, Eye, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { BlogPostInsert } from '../../types/database.types';
import { FieldErrors } from '../../lib/utils/zodErrorHandler';
import { ImageUpload } from './ImageUpload';
import { MarkdownEditor } from './MarkdownEditor';
import { useMarkdownService } from '../../lib/services/useMarkdownService';
import { useBlogAdminService } from '../../lib/services/useBlogAdminService';
import { useLanguage } from '../../context/LanguageContext';

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
  const { t } = useLanguage();
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
        setSlugValidation({ isValid: false, isChecking: false, message: t('admin.blog.slugRequired') });
        return;
      }

      // Check format
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      if (!slugRegex.test(slug)) {
        setSlugValidation({ 
          isValid: false, 
          isChecking: false, 
          message: t('admin.blog.slugFormatError')
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
          message: isUnique ? t('admin.blog.slugAvailable') : t('admin.blog.slugExists')
        });
      } catch {
        setSlugValidation({ 
          isValid: null, 
          isChecking: false, 
          message: t('admin.blog.slugValidationError')
        });
      }
    },
    [editingPostId, validateSlugUniqueness, t]
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

  const handleFeaturedImageUpload = (url: string) => {
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
    <form onSubmit={handleFormSubmit} className="stack [--stack-space:var(--space-24)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-[length:var(--font-500)] font-semibold text-[var(--text)]">
              {isEditing ? t('admin.blog.editPostTitle') : t('admin.blog.createPostTitle')}
            </h2>
            <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
              {isEditing ? t('admin.blog.editPostSubtitle') : t('admin.blog.createPostSubtitle')}
            </p>
          </div>
        </div>
        
        {/* Autosave Status */}
        <div className="flex items-center gap-2">
          {autoSaveStatus === 'saving' && (
            <div className="flex items-center gap-1 text-[length:var(--font-100)] text-yellow-400">
              <Zap className="h-3 w-3 animate-pulse" />
              {t('admin.blog.saving')}
            </div>
          )}
          {autoSaveStatus === 'saved' && (
            <div className="flex items-center gap-1 text-[length:var(--font-100)] text-green-400">
              <CheckCircle className="h-3 w-3" />
              {t('admin.blog.saved')}
              {lastSavedTime && `${t('admin.blog.savedAt')}${lastSavedTime}`}
            </div>
          )}
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] border border-[var(--border)]">
        <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-[var(--space-16)] flex items-center gap-2">
          <FileText className="h-5 w-5 text-accent" />
          {t('admin.blog.basicInformation')}
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label className="form-label">
              {t('admin.blog.titleLabel')}
            </label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={`field ${errors.title ? 'border-red-500' : 'border-[var(--border)]'}`}
              placeholder={t('admin.blog.titlePlaceholder')}
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
            <label className="form-label">
              {t('admin.blog.slugLabel')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-[var(--space-12)] flex items-center pointer-events-none">
                <Globe className="h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
              </div>
              <input
                type="text"
                value={formData.slug || ''}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className={`field pl-[var(--space-32)] pr-[var(--space-32)] ${
                  errors.slug ? 'border-red-500' : 
                  slugValidation.isValid === true ? 'border-green-500' :
                  slugValidation.isValid === false && slugValidation.isChecking === false ? 'border-red-500' :
                  'border-[var(--border)]'
                }`}
                placeholder={t('admin.blog.slugPlaceholder')}
                required
                disabled={isSubmitting}
              />
              <div className="absolute inset-y-0 right-0 pr-[var(--space-12)] flex items-center pointer-events-none">
                {slugValidation.isChecking && (
                  <div className="animate-spin">
                    <Clock className="h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
                  </div>
                )}
                {slugValidation.isValid === true && (
                  <CheckCircle className="h-[var(--space-16)] w-[var(--space-16)] text-green-400" />
                )}
                {slugValidation.isValid === false && (
                  <AlertCircle className="h-[var(--space-16)] w-[var(--space-16)] text-red-400" />
                )}
              </div>
            </div>
            {slugValidation.message && (
              <p className={`text-[length:var(--font-100)] flex items-center gap-[var(--space-4)] ${
                slugValidation.isValid === true ? 'text-green-400' : 'text-red-400'
              }`}>
                <span className="w-[var(--space-4)] h-[var(--space-4)] bg-current rounded-full" />
                {slugValidation.message}
              </p>
            )}
            {errors.slug && (
              <p className="text-red-400 text-[length:var(--font-100)] flex items-center gap-[var(--space-4)]">
                <span className="w-[var(--space-4)] h-[var(--space-4)] bg-red-400 rounded-full" />
                {errors.slug}
              </p>
            )}
          </div>
        </div>

        {/* Excerpt Field */}
        <div className="mt-6 space-y-2">
          <label className="form-label">
            {t('admin.blog.excerptLabel')}
          </label>
          <textarea
            value={formData.excerpt || ''}
            onChange={(e) => handleInputChange('excerpt', e.target.value)}
            rows={3}
            className={`field resize-none ${errors.excerpt ? 'border-red-500' : 'border-[var(--border)]'}`}
            placeholder={t('admin.blog.excerptPlaceholder')}
            required
            disabled={isSubmitting}
          />
          {errors.excerpt && (
          <p className="text-red-400 text-[length:var(--font-100)] flex items-center gap-[var(--space-4)]">
            <span className="w-[var(--space-4)] h-[var(--space-4)] bg-red-400 rounded-full" />
            {errors.excerpt}
          </p>
        )}
      </div>
      </div>

      {/* Content Section */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] border border-[var(--border)]">
        <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-[var(--space-16)] flex items-center gap-2">
          <FileText className="h-5 w-5 text-accent" />
          {t('admin.blog.contentSectionTitle')}
        </h3>
        <MarkdownEditor
          value={formData.content || ''}
          onChange={(content) => handleInputChange('content', content)}
          placeholder={t('admin.blog.contentPlaceholder')}
          rows={10}
          onImageUpload={handleImageUpload}
        />
        
        {/* Word Count and Stats */}
        <div className="mt-[var(--space-16)] flex items-center justify-between text-[length:var(--font-100)] text-[var(--text-muted)] p-[var(--space-12)] bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
          <div className="flex gap-[var(--space-24)]">
            <span>{t('admin.blog.words')} <span className="text-[var(--text)] font-medium">{wordCount}</span></span>
            <span>{t('admin.blog.characters')} <span className="text-[var(--text)] font-medium">{charCount}</span></span>
          </div>
          <div className="text-accent font-medium">
            {t('admin.blog.readingTime')} {autoReadingTime}
          </div>
        </div>
        
        {errors.content && (
          <p className="text-red-400 text-[length:var(--font-100)] flex items-center gap-[var(--space-4)] mt-[var(--space-8)]">
            <span className="w-[var(--space-4)] h-[var(--space-4)] bg-red-400 rounded-full" />
            {errors.content}
          </p>
        )}
      </div>

      {/* Media & Settings Section */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] border border-[var(--border)]">
        <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-[var(--space-16)] flex items-center gap-2">
          <FileText className="h-5 w-5 text-accent" />
          {t('admin.blog.mediaSettingsSectionTitle')}
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="form-label">
              {t('admin.blog.featuredImage')}
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
                <label className="form-label">
                  {t('admin.blog.readTimeLabel')}
                </label>
                <button
                  type="button"
                  onClick={() => setReadingTimeOverride(!readingTimeOverride)}
                  className="text-[length:var(--font-100)] px-[var(--space-8)] py-[var(--space-4)] rounded-[var(--radius-sm)] bg-[var(--surface-strong)] text-[var(--text-muted)] hover:bg-[var(--surface)] transition-colors"
                >
                  {readingTimeOverride ? t('admin.blog.readTimeUsingCustom') : t('admin.blog.readTimeAutoOverride')}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-[var(--space-12)] flex items-center pointer-events-none">
                  <Clock className="h-[var(--space-16)] w-[var(--space-16)] text-[var(--text-muted)]" />
                </div>
                <input
                  type="text"
                  value={readingTimeOverride ? (formData.read_time || '') : autoReadingTime}
                  onChange={(e) => {
                    setReadingTimeOverride(true);
                    handleInputChange('read_time', e.target.value);
                  }}
                  className={`field pl-[var(--space-32)] pr-[var(--space-16)] ${
                    errors.read_time ? 'border-red-500' : 'border-[var(--border)]'
                  }`}
                  placeholder={t('admin.blog.readTimePlaceholder')}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {errors.read_time && (
                <p className="text-red-400 text-[length:var(--font-100)] flex items-center gap-[var(--space-4)]">
                  <span className="w-[var(--space-4)] h-[var(--space-4)] bg-red-400 rounded-full" />
                  {errors.read_time}
                </p>
              )}
            </div>

            {/* Publication Status */}
            <div className="space-y-3">
              <label className="form-label">
                {t('admin.blog.publicationStatusLabel')}
              </label>
              <div className="flex items-center gap-[var(--space-12)] p-[var(--space-12)] rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published || false}
                  onChange={(e) => handleInputChange('published', e.target.checked)}
                  className="w-[var(--space-16)] h-[var(--space-16)] text-accent bg-[var(--surface)] border-[var(--border)] rounded focus:ring-accent focus:ring-2"
                  disabled={isSubmitting}
                />
                <div className="flex items-center gap-[var(--space-8)]">
                  <label htmlFor="published" className="text-[var(--text-muted)] cursor-pointer">
                    {t('admin.blog.publishImmediately')}
                  </label>
                  <div className="flex items-center gap-[var(--space-4)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                    <Eye className="h-[var(--space-12)] w-[var(--space-12)]" />
                    <span>{t('admin.blog.public')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-[var(--space-16)] pt-[var(--space-24)] border-t border-[var(--border)]">
        <div className="flex items-center gap-2 text-[length:var(--font-100)] text-[var(--text-muted)]">
          <Calendar className="h-[var(--space-16)] w-[var(--space-16)]" />
          <span>
            {isEditing ? t('admin.blog.lastUpdated') : t('admin.blog.created')}{t('admin.blog.createdOn')}{new Date().toLocaleDateString()}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button type="button" onClick={onCancel} className="btn btn-secondary inline-flex items-center gap-[var(--space-8)] disabled:opacity-50" disabled={isSubmitting}>
            {t('admin.common.cancel')}
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
            className="btn btn-primary inline-flex items-center gap-[var(--space-8)] shadow-[var(--shadow-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t('admin.blog.saving') : isEditing ? t('admin.blog.updatePost') : t('admin.blog.createPost')}
          </button>
        </div>
      </div>
    </form>
  );
}
