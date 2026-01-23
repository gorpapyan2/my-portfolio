import { ReactNode } from 'react';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';

interface AdminCardProps {
  children: ReactNode;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

/**
 * Reusable card component for admin item display with edit/delete actions
 */
export function AdminCard({
  children,
  onEdit,
  onDelete,
  className = '',
}: AdminCardProps) {
  return (
    <div className={`p-4 bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">{children}</div>
        <div className="flex items-center gap-1 ml-2">
          <button
            onClick={onEdit}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Edit"
          >
            <Edit className="h-3 w-3" />
          </button>
          <button
            onClick={onDelete}
            className="p-1 text-[var(--text-muted)] hover:text-red-400 transition-colors"
            aria-label="Delete"
          >
            <Trash2 className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
