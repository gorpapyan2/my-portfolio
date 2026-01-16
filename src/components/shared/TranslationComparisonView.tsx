import { ChevronDown, ChevronUp } from 'lucide-react';
import { getDiffSummary, LANGUAGE_HINTS } from '../../lib/utils/translationValidation';

type LanguageCode = 'en' | 'ru' | 'am';

interface TranslationComparisonViewProps {
  language: LanguageCode;
  original: string;
  current: string;
  isExpanded: boolean;
  onToggle: () => void;
}

/**
 * Shows original and current translation values side-by-side
 * Displays diff summary and highlights changed content
 */
export function TranslationComparisonView({
  language,
  original,
  current,
  isExpanded,
  onToggle,
}: TranslationComparisonViewProps) {
  const diff = getDiffSummary(original, current);
  const hints = LANGUAGE_HINTS[language];

  return (
    <div className="border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--surface)] overflow-hidden">
      {/* Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full px-[var(--space-16)] py-[var(--space-12)] flex items-center justify-between hover:bg-[var(--surface-strong)] transition-colors"
        aria-expanded={isExpanded}
        aria-label={`Compare ${language} translation`}
      >
        <div className="flex items-center gap-[var(--space-12)] flex-1 text-left">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-black text-[length:var(--font-100)] font-bold">
            {language.toUpperCase()}
          </span>
          <div className="flex-1">
            <p className="text-[length:var(--font-200)] font-medium text-[var(--text)]">{hints.name}</p>
            <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">
              {diff.changed ? (
                <>
                  <span className="text-green-400">+{diff.added}</span>
                  <span className="mx-2">/</span>
                  <span className="text-red-400">-{diff.removed}</span>
                </>
              ) : (
                <span className="text-gray-500">No changes</span>
              )}
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-[var(--border)] px-[var(--space-16)] py-[var(--space-16)] stack" style={{ ['--stack-space' as string]: 'var(--space-16)' }}>
          {/* Original Value */}
          <div className="stack" style={{ ['--stack-space' as string]: 'var(--space-8)' }}>
            <p className="text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
              Original
            </p>
            <div className="px-[var(--space-12)] py-[var(--space-8)] bg-black/30 rounded-[var(--radius-sm)] border border-white/5 min-h-24">
              <p className="text-[length:var(--font-200)] text-gray-300 whitespace-pre-wrap break-words font-mono">
                {original || (
                  <span className="text-gray-600 italic">Empty</span>
                )}
              </p>
            </div>
          </div>

          {/* Current Value */}
          <div className="stack" style={{ ['--stack-space' as string]: 'var(--space-8)' }}>
            <p className="text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
              Current
            </p>
            <div className={`px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-sm)] border min-h-24 ${
              diff.changed
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-black/30 border-white/5'
            }`}>
              <p className={`text-[length:var(--font-200)] whitespace-pre-wrap break-words font-mono ${
                diff.changed ? 'text-green-200' : 'text-gray-300'
              }`}>
                {current || (
                  <span className="text-gray-600 italic">Empty</span>
                )}
              </p>
            </div>
          </div>

          {/* Diff Summary */}
          {diff.changed && (
            <div className="px-[var(--space-12)] py-[var(--space-8)] bg-blue-500/10 rounded-[var(--radius-sm)] border border-blue-500/20 text-[length:var(--font-100)] text-blue-300">
              {diff.added > 0 && (
                <p>
                  <span className="text-green-400">+{diff.added} characters added</span>
                </p>
              )}
              {diff.removed > 0 && (
                <p>
                  <span className="text-red-400">-{diff.removed} characters removed</span>
                </p>
              )}
              {diff.added === 0 && diff.removed === 0 && (
                <p className="text-gray-400">Characters rearranged</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

