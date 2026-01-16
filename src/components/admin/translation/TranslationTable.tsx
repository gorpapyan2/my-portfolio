import { Edit, Trash2 } from 'lucide-react';
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
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                {t('settings.key')}
              </th>
              <th className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                {t('settings.value')}
              </th>
              <th className="text-left py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                {t('settings.category')}
              </th>
              <th className="text-right py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] font-medium text-[var(--text-muted)]">
                {t('admin.translations.actions')}
              </th>
            </tr>
          </thead>
          <tbody>
            {translations.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-[var(--space-32)] text-[var(--text-muted)] text-[length:var(--font-100)]">
                  {t('admin.translations.noTranslationsFound')}
                </td>
              </tr>
            ) : (
              translations.map((translation) => (
                <tr key={translation.key} className="border-b border-[var(--border)]/40 hover:bg-[var(--surface-strong)]">
                  <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text)] font-mono">
                    {translation.key}
                  </td>
                  <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                    {translation.value || <span className="text-[var(--text-muted)] italic">{t('admin.translations.empty')}</span>}
                  </td>
                  <td className="py-[var(--space-12)] px-[var(--space-16)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                    <span className="px-[var(--space-8)] py-[var(--space-4)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] text-[length:var(--font-100)]">
                      {translation.category}
                    </span>
                  </td>
                  <td className="py-[var(--space-12)] px-[var(--space-16)] text-right">
                    <div className="flex items-center justify-end gap-[var(--space-8)]">
                      <button
                        onClick={() => onEdit(translation)}
                        className="p-[var(--space-4)] text-[var(--text-muted)] hover:text-accent transition-colors"
                        title={t('settings.editTranslation')}
                      >
                        <Edit className="h-[var(--space-16)] w-[var(--space-16)]" />
                      </button>
                      <button
                        onClick={() => onDelete(translation.key)}
                        className="p-[var(--space-4)] text-[var(--text-muted)] hover:text-red-400 transition-colors"
                        title={t('settings.deleteTranslation')}
                      >
                        <Trash2 className="h-[var(--space-16)] w-[var(--space-16)]" />
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

