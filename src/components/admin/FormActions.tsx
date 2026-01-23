import { ReactNode } from 'react';
import Plus from 'lucide-react/dist/esm/icons/plus';

interface FormActionsProps {
  onCancel: () => void;
  onSubmit?: () => void;
  submitLabel: string;
  cancelLabel: string;
  isEditing?: boolean;
  submitIcon?: ReactNode;
}

/**
 * Reusable form action buttons (Cancel + Submit)
 */
export function FormActions({
  onCancel,
  submitLabel,
  cancelLabel,
  submitIcon,
}: FormActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3 pt-4">
      <button
        type="button"
        onClick={onCancel}
        className="btn btn-secondary"
      >
        {cancelLabel}
      </button>
      <button
        type="submit"
        className="inline-flex items-center gap-2 btn btn-primary"
      >
        {submitIcon || <Plus className="h-4 w-4" />}
        {submitLabel}
      </button>
    </div>
  );
}
