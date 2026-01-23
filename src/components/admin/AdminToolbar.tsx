import { ReactNode } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';
import { Language } from '../../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface AdminToolbarProps {
  title: ReactNode;
  itemCount: number;
  activeLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onAdd: () => void;
  addButtonLabel: string;
}

/**
 * Reusable toolbar for admin list views with item count, language selector, and add button
 */
export function AdminToolbar({
  title,
  itemCount,
  activeLanguage,
  onLanguageChange,
  onAdd,
  addButtonLabel,
}: AdminToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h3 className="text-[length:var(--font-400)] font-medium text-[var(--text)]">
        {title} ({itemCount})
      </h3>
      <div className="flex items-center gap-3">
        <LanguageSelector
          value={activeLanguage}
          onChange={onLanguageChange}
        />
        <button
          onClick={onAdd}
          className="inline-flex items-center gap-2 btn btn-primary"
        >
          <Plus className="h-4 w-4" />
          {addButtonLabel}
        </button>
      </div>
    </div>
  );
}
