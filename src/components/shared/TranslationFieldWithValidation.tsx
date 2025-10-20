import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { FieldValidationState, LANGUAGE_HINTS } from '../../lib/utils/translationValidation';

type LanguageCode = 'en' | 'ru' | 'am';

interface TranslationFieldWithValidationProps {
  language: LanguageCode;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  validation: FieldValidationState;
  disabled?: boolean;
  autoFocus?: boolean;
}

/**
 * Textarea field for translation input with real-time validation
 * Shows character count, validation state, and language-specific hints
 * Only shows errors after field is focused/blurred
 */
export function TranslationFieldWithValidation({
  language,
  value,
  onChange,
  onBlur,
  validation,
  disabled = false,
  autoFocus = false,
}: TranslationFieldWithValidationProps) {
  const hints = LANGUAGE_HINTS[language];
  const hasError = !validation.isValid && !validation.isEmpty;

  return (
    <div className="space-y-2">
      {/* Language Label with Status Icon */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#edfc3a] text-black text-xs font-bold">
          {language.toUpperCase()}
        </span>
        <span className="text-sm font-medium text-white">{hints.name}</span>

        {/* Validation Status Icon */}
        {validation.isValid && !validation.isEmpty && (
          <CheckCircle className="h-4 w-4 text-green-400 ml-auto" />
        )}
        {validation.isEmpty && (
          <AlertCircle className="h-4 w-4 text-gray-400 ml-auto" />
        )}
        {validation.isWarning && (
          <AlertTriangle className="h-4 w-4 text-yellow-400 ml-auto" />
        )}
        {hasError && (
          <AlertCircle className="h-4 w-4 text-red-400 ml-auto" />
        )}
      </div>

      {/* Textarea Input */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={hints.placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        className={`
          w-full px-4 py-3 rounded-lg font-sans resize-none
          bg-white/5 border transition-all
          text-white placeholder-gray-500
          focus:outline-none focus:ring-1
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            hasError
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
              : validation.isWarning
                ? 'border-yellow-500/30 focus:border-yellow-500 focus:ring-yellow-500/20'
                : 'border-white/10 focus:border-[#edfc3a] focus:ring-[#edfc3a]/30'
          }
        `}
        rows={5}
        aria-label={`${language} translation`}
        aria-invalid={hasError}
        aria-describedby={`${language}-validation-message`}
      />

      {/* Validation Message */}
      <div className="flex items-start gap-2 min-h-6">
        {validation.error && (
          <div
            id={`${language}-validation-message`}
            className="flex items-start gap-2 text-sm text-red-400"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>{validation.error}</span>
          </div>
        )}
        {!validation.error && validation.message && (
          <div
            id={`${language}-validation-message`}
            className={`text-xs ${validation.isWarning ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            {validation.message}
          </div>
        )}
      </div>

      {/* Hint Text */}
      {hints.hint && (
        <p className="text-xs text-gray-500 italic">{hints.hint}</p>
      )}
    </div>
  );
}
