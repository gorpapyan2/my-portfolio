import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.key && formData.value) {
      onSave(formData);
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
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
              placeholder="e.g., nav.about"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('settings.value')}
            </label>
            <textarea
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
              placeholder="Translation text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('settings.category')}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
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
