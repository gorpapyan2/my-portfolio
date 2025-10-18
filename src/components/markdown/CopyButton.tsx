import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  code: string;
}

/**
 * Copy button for code blocks with visual feedback
 * Displays a copy icon that changes to a checkmark on successful copy
 */
export function CopyButton({ code }: CopyButtonProps) {
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
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
      className="code-copy-button absolute top-2 right-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 text-gray-400 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#edfc3a] focus:ring-offset-2 focus:ring-offset-gray-900"
      title={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-400" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

