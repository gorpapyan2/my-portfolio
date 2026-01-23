import Languages from 'lucide-react/dist/esm/icons/languages';
import { useLanguage, Language } from '../../context/LanguageContext';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { Shimmer } from '../ui/Shimmer';

const languages: { code: Language; labelKey: string }[] = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'ru', labelKey: 'language.ru' },
  { code: 'am', labelKey: 'language.am' },
];

export function LanguageSelector() {
  const { t, language, setLanguage } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const showLanguageSelector = isFeatureEnabled('language_selector');

  if (!showLanguageSelector) {
    return null;
  }

  return (
    <div className="relative group">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none bg-transparent pl-8 pr-4 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {t(lang.labelKey)}
          </option>
        ))}
      </select>
      <Languages className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-primary" />
      <Shimmer className="absolute inset-0" />
    </div>
  );
}
