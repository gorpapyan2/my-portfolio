import { TranslationText } from '../shared/TranslationText';

interface AdminLoadingStateProps {
  translationKey?: string;
  shimmerWidth?: string;
}

/**
 * Reusable loading state for admin panels
 */
export function AdminLoadingState({
  translationKey = 'admin.common.loading',
  shimmerWidth = '100px',
}: AdminLoadingStateProps) {
  return (
    <div className="flex items-center justify-center py-8">
      <TranslationText
        translationKey={translationKey}
        as="div"
        shimmerWidth={shimmerWidth}
        className="text-[var(--text)]"
      />
    </div>
  );
}
