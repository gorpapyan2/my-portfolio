/**
 * Loading fallback component for lazy-loaded routes
 * Shows a simple loading indicator while route code is being fetched
 */
export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-[var(--text-muted)]">Loading...</div>
    </div>
  );
}
