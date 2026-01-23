import { ReactNode } from 'react';

interface AdminHeaderProps {
  title: ReactNode;
  onClose: () => void;
}

/**
 * Reusable admin panel header with title and close button
 */
export function AdminHeader({ title, onClose }: AdminHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
        {title}
      </h2>
      <button
        onClick={onClose}
        className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
