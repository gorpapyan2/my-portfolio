import { useState } from 'react';
import X from 'lucide-react/dist/esm/icons/x';
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

interface ValidationPanelProps {
  translations: Record<string, Record<string, string>>;
  onClose: () => void;
}

export function ValidationPanel({ translations, onClose }: ValidationPanelProps) {
  const { t } = useLanguage();
  const [validationResults, setValidationResults] = useState<{
    missingTranslations: string[];
    emptyValues: string[];
  }>({ missingTranslations: [], emptyValues: [] });

  const validateTranslations = () => {
    const allKeys = new Set<string>();
    const languages = ['en', 'ru', 'am'] as const;
    
    // Collect all keys from all languages
    languages.forEach(lang => {
      Object.keys(translations[lang] || {}).forEach(key => allKeys.add(key));
    });

    const missingTranslations: string[] = [];
    const emptyValues: string[] = [];

    // Check for missing translations and empty values
    allKeys.forEach(key => {
      languages.forEach(lang => {
        const value = translations[lang]?.[key];
        if (!value) {
          missingTranslations.push(`${key} (${lang})`);
        } else if (value.trim() === '') {
          emptyValues.push(`${key} (${lang})`);
        }
      });
    });

    setValidationResults({ missingTranslations, emptyValues });
  };

  // Run validation on mount
  useState(() => {
    validateTranslations();
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {t('settings.validation')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Missing Translations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-medium text-white">
                {t('settings.missingTranslations')}
              </h3>
              <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded text-sm">
                {validationResults.missingTranslations.length}
              </span>
            </div>
            
            {validationResults.missingTranslations.length === 0 ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  <TranslationText translationKey="settings.validation.allPresent" as="span" shimmerWidth="220px" />
                </span>
              </div>
            ) : (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {validationResults.missingTranslations.map((item, index) => (
                  <div key={index} className="px-3 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded text-sm text-yellow-300">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Empty Values */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <h3 className="text-lg font-medium text-white">
                {t('settings.emptyValues')}
              </h3>
              <span className="px-2 py-1 bg-red-400/20 text-red-400 rounded text-sm">
                {validationResults.emptyValues.length}
              </span>
            </div>
            
            {validationResults.emptyValues.length === 0 ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  <TranslationText translationKey="settings.validation.noEmpty" as="span" shimmerWidth="180px" />
                </span>
              </div>
            ) : (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {validationResults.emptyValues.map((item, index) => (
                  <div key={index} className="px-3 py-2 bg-red-400/10 border border-red-400/20 rounded text-sm text-red-300">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {t('settings.validation.totalIssues')}: {validationResults.missingTranslations.length + validationResults.emptyValues.length}
              </div>
              <button
                onClick={validateTranslations}
                className="px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                {t('settings.validation.revalidate')}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            {t('close')}
          </button>
        </div>
      </Card>
    </div>
  );
}
