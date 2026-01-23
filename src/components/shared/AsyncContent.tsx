import { ReactNode } from 'react';
import { LoadingSpinner } from '../loading/LoadingSpinner';

interface AsyncContentProps {
  isLoading: boolean;
  error: string | null;
  errorMessage?: string;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * AsyncContent - Handles async data loading states consistently
 *
 * Eliminates the repeated pattern of loading/error/content conditionals
 * throughout the application. Provides consistent UX for all async content.
 *
 * @example
 * ```tsx
 * <AsyncContent
 *   isLoading={projectsLoading}
 *   error={projectsError}
 *   errorMessage={t('errors.projectsLoadFailed')}
 * >
 *   <div className="grid">
 *     {projects.map(p => <ProjectCard key={p.id} {...p} />)}
 *   </div>
 * </AsyncContent>
 * ```
 */
export function AsyncContent({
  isLoading,
  error,
  errorMessage = 'Failed to load content',
  loadingComponent,
  errorComponent,
  children,
  className,
}: AsyncContentProps) {
  // Loading state
  if (isLoading) {
    return loadingComponent ?? (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Error state
  if (error) {
    return errorComponent ?? (
      <div className="text-center text-[var(--text-muted)] text-[length:var(--font-200)]">
        <p>{errorMessage}{error ? `: ${error}` : ''}</p>
      </div>
    );
  }

  // Success state - render content
  return <div className={className}>{children}</div>;
}
