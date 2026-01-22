import { useState } from 'react';
import X from 'lucide-react/dist/esm/icons/x';
import Download from 'lucide-react/dist/esm/icons/download';
import Upload from 'lucide-react/dist/esm/icons/upload';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { bulkTranslationSchema } from '../../lib/schemas/translationSchema';

interface ImportExportProps {
  onClose: () => void;
  onImport: (translations: Record<string, Record<string, string>>) => void;
  onExport: () => void;
  translations: Record<string, Record<string, string>>;
}

export function ImportExport({ onClose, onImport, onExport, translations }: ImportExportProps) {
  const { t } = useLanguage();
  const [importFile, setImportFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  const handleExport = () => {
    const dataStr = JSON.stringify(translations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'translations.json';
    link.click();
    URL.revokeObjectURL(url);
    onExport();
  };

  const handleDownloadTemplate = () => {
    const template = {
      en: {
        'example.key': 'Example translation',
        'example.another': 'Another example'
      },
      ru: {
        'example.key': 'Пример перевода',
        'example.another': 'Другой пример'
      },
      am: {
        'example.key': 'Օրինակ թարգմանություն',
        'example.another': 'Մեկ այլ օրինակ'
      }
    };
    
    const dataStr = JSON.stringify(template, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'translations-template.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImportFile(file);
    }
  };

  const handleImport = () => {
    if (!importFile) return;

    setIsImporting(true);
    setImportError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const translations = JSON.parse(e.target?.result as string);
        
        // Validate the imported data
        const validatedData = bulkTranslationSchema.parse(translations);
        
        onImport(validatedData);
        setIsImporting(false);
      } catch (error) {
        console.error('Import validation error:', error);
        
        // Provide specific error messages based on error type
        let userMessage = t('settings.importFailed');
        
        if (error instanceof Error) {
          const errorMsg = error.message.toLowerCase();
          
          // Detect specific validation errors
          if (errorMsg.includes('duplicate') || errorMsg.includes('unique')) {
            userMessage = t('settings.importDuplicate');
          } else if (errorMsg.includes('json')) {
            userMessage = t('settings.importInvalidJson');
          } else if (errorMsg.includes('validation') || errorMsg.includes('parse')) {
            userMessage = t('settings.importValidationFailed');
          }
        }
        
        setImportError(userMessage);
        setIsImporting(false);
      }
    };
    reader.onerror = () => {
      setImportError(t('settings.importFailed'));
      setIsImporting(false);
    };
    reader.readAsText(importFile);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {t('settings.importExport')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Export Section */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">{t('settings.export')}</h3>
            <div className="space-y-3">
              <button
                onClick={handleExport}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent-strong transition-colors"
              >
                <Download className="h-5 w-5" />
                {t('settings.exportTranslations')}
              </button>
              
              <button
                onClick={handleDownloadTemplate}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                <FileText className="h-5 w-5" />
                {t('settings.downloadTemplate')}
              </button>
            </div>
          </div>

          {/* Import Section */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">{t('settings.import')}</h3>
            <div className="space-y-3">
              <div>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-accent file:text-black file:text-sm file:font-medium"
                />
              </div>
              
              <button
                onClick={handleImport}
                disabled={!importFile || isImporting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload className="h-5 w-5" />
                {isImporting ? t('settings.importing') : t('settings.importTranslations')}
              </button>
              
              {importError && (
                <p className="text-red-400 text-sm">{importError}</p>
              )}
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

