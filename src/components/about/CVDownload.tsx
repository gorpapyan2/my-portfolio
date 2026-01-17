import { useState } from "react";
import { downloadDynamicCV } from "../../lib/utils/downloadDynamicCV";
import { downloadDynamicCVPdf } from "../../lib/utils/downloadDynamicCVPdf";

export function CVDownload() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={async () => {
            try {
              await downloadDynamicCV();
              setStatus(null);
            } catch (error) {
              setStatus(error instanceof Error ? error.message : "Failed to generate CV.");
            }
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm text-[var(--text)] hover:border-accent/40 hover:bg-[var(--surface-strong)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          Download CV (Markdown)
        </button>
        <button
          type="button"
          onClick={() => {
            try {
              downloadDynamicCVPdf();
              setStatus(null);
            } catch (error) {
              setStatus(error instanceof Error ? error.message : "Failed to generate PDF.");
            }
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm text-[var(--text)] hover:border-accent/40 hover:bg-[var(--surface-strong)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          Download CV (PDF)
        </button>
      </div>
      {status ? (
        <span className="text-xs text-red-300" role="status" aria-live="polite">
          {status}
        </span>
      ) : null}
    </div>
  );
}
