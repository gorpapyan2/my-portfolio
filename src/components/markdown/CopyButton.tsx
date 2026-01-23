import { useState } from 'react';
import Copy from 'lucide-react/dist/esm/icons/copy';
import Check from 'lucide-react/dist/esm/icons/check';
import { useLanguage } from '../../context/LanguageContext';

interface CopyButtonProps {
  code: string;
}

/**
 * Copy button for code blocks with visual feedback
 * Displays a copy icon that changes to a checkmark on successful copy
 */
export function CopyButton({ code }: CopyButtonProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? t('markdown.copied') : t('markdown.copyCode')}
      className="code-copy-button absolute top-[var(--space-8)] right-[var(--space-8)] p-[var(--space-8)] rounded-[var(--radius-md)] bg-[var(--surface-strong)] hover:bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)] transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
      title={copied ? t('markdown.copied') : t('markdown.copyCode')}
    >
      {copied ? (
        <Check className="h-[var(--space-16)] w-[var(--space-16)] text-green-400" aria-hidden="true" />
      ) : (
        <Copy className="h-[var(--space-16)] w-[var(--space-16)]" aria-hidden="true" />
      )}
    </button>
  );
}


