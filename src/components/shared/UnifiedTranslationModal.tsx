import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Translation {
  key: string;
  value: string;
  category: string;
}

interface UnifiedTranslationModalProps {
  mode: 'simple' | 'advanced';
  isOpen: boolean;
  language: 'en' | 'ru' | 'am';
  translation?: Translation | null;
  onClose: () => void;
  onSave: (translation: Translation) => Promise<void>;
}

export function UnifiedTranslationModal({
  mode,
  isOpen,
  language,
  translation,
  onClose,
  onSave,
}: UnifiedTranslationModalProps) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (translation) {
      setKey(translation.key);
      setValue(translation.value);
      setCategory(translation.category);
    } else {
      setKey('');
      setValue('');
      setCategory('');
    }
    setError('');
  }, [translation, isOpen]);

  const handleSave = async () => {
    if (!key.trim() || !value.trim() || !category.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      setIsSaving(true);
      setError('');
      await onSave({ key, value, category });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save translation');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-lg border border-white/10 p-6 max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">
            {translation ? 'Edit Translation' : 'Add Translation'}
          </h2>
          <button
            onClick={onClose}
            disabled={isSaving}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Language Display */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Language
            </label>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
              {language.toUpperCase()}
            </div>
          </div>

          {/* Key */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Key *
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={isSaving || !!translation}
              placeholder="e.g., hero.title"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent disabled:opacity-50"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isSaving}
              placeholder="e.g., hero"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent disabled:opacity-50"
            />
          </div>

          {/* Value */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Value *
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={isSaving}
              placeholder="Enter translation text"
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent resize-none disabled:opacity-50"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            disabled={isSaving}
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 px-4 py-2 rounded-lg bg-[#edfc3a] text-black font-medium hover:bg-[#f2ff4d] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
