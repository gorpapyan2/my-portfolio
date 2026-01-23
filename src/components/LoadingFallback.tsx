/**
 * Loading fallback component for lazy-loaded routes
 * Shows a visible loading indicator while route code is being fetched
 */
export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-[var(--border)] border-t-accent rounded-full animate-spin"></div>
        <div className="text-[var(--text-muted)] text-[length:var(--font-200)]">Loading...</div>
      </div>
    </div>
  );
}
