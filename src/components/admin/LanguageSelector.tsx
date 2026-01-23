import { Language } from '../../context/LanguageContext';

interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
  label?: string;
  className?: string;
}

/**
 * Reusable language selector component used across admin panels
 */
export function LanguageSelector({
  value,
  onChange,
  label,
  className = '',
}: LanguageSelectorProps) {
  return (
    <div className={className}>
      {label && <label className="form-label">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Language)}
        className="field"
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="am">Armenian</option>
      </select>
    </div>
  );
}
