import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Shimmer } from '../ui/Shimmer';

const languages: { code: Language; label: string; }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'am', label: 'Հայերեն' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none bg-transparent pl-8 pr-4 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <Languages className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-primary" />
      <Shimmer className="absolute inset-0" />
    </div>
  );
}