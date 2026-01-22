import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';

interface TranslationItem {
  key: string;
  value: string;
  category: string;
}

interface TranslationTableProps {
  translations: TranslationItem[];
  onEdit: (translation: TranslationItem) => void;
  onDelete: (key: string) => void;
}

export function TranslationTable({ translations, onEdit, onDelete }: TranslationTableProps) {
  const { t } = useLanguage();

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                {t('settings.key')}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                {t('settings.value')}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                {t('settings.category')}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">
                {t('admin.translations.actions')}
              </th>
            </tr>
          </thead>
          <tbody>
            {translations.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-400">
                  {t('admin.translations.noTranslationsFound')}
                </td>
              </tr>
            ) : (
              translations.map((translation) => (
                <tr key={translation.key} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm text-white font-mono">
                    {translation.key}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-300">
                    {translation.value || <span className="text-gray-500 italic">{t('admin.translations.empty')}</span>}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-400">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">
                      {translation.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onEdit(translation)}
                        className="p-1 text-gray-400 hover:text-accent transition-colors"
                        title={t('settings.editTranslation')}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(translation.key)}
                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        title={t('settings.deleteTranslation')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

