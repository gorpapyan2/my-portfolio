import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { translationSchema } from '../../lib/schemas/translationSchema';

interface TranslationEditorProps {
  translation?: { key: string; value: string; category: string } | null;
  language: string;
  onClose: () => void;
  onSave: (translation: { key: string; value: string; category: string }) => void;
}

export function TranslationEditor({ translation, language, onClose, onSave }: TranslationEditorProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    key: translation?.key || '',
    value: translation?.value || '',
    category: translation?.category || 'common'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = translationSchema.parse({
        ...formData,
        language
      });
      
      onSave(validatedData);
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const fieldErrors: Record<string, string> = {};
        (error as { issues: Array<{ path: string[]; message: string }> }).issues.forEach((issue) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {translation ? t('settings.editTranslation') : t('settings.addTranslation')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('settings.key')}
            </label>
            <input
              type="text"
              value={formData.key}
              onChange={(e) => setFormData({ ...formData, key: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.key ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="e.g., nav.about"
              required
            />
            {errors.key && (
              <p className="text-red-400 text-sm mt-1">{errors.key}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('settings.value')}
            </label>
            <textarea
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              rows={3}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.value ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="Translation text"
              required
            />
            {errors.value && (
              <p className="text-red-400 text-sm mt-1">{errors.value}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('settings.category')}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.category ? 'border-red-500' : 'border-white/10'
              }`}
            >
              <option value="common">Common</option>
              <option value="nav">Navigation</option>
              <option value="hero">Hero</option>
              <option value="pages">Pages</option>
              <option value="about">About</option>
              <option value="skills">Skills</option>
              <option value="contact">Contact</option>
              <option value="footer">Footer</option>
              <option value="settings">Settings</option>
              <option value="technologies">Technologies</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <Save className="h-4 w-4" />
              {t('save')}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
