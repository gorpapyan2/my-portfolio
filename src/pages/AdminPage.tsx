import { useMemo, useState } from "react";
import aboutData from "../content/about.data.json";
import { AboutDataSchema, type AboutData } from "../data/cv.schema";
import {
  copyAboutData,
  exportAboutData,
  importAboutData,
  rebuildCv,
  saveAboutData
} from "../admin/persist";

const DEFAULT_RAW = JSON.stringify(aboutData, null, 2);

export function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [raw, setRaw] = useState(DEFAULT_RAW);
  const [status, setStatus] = useState<string | null>(null);

  const parseResult = useMemo(() => {
    try {
      return { ok: true, value: JSON.parse(raw) as AboutData };
    } catch (error) {
      return { ok: false, message: error instanceof Error ? error.message : "Invalid JSON" };
    }
  }, [raw]);

  const validation = useMemo(() => {
    if (!parseResult.ok) return { success: false, message: parseResult.message };
    const result = AboutDataSchema.safeParse(parseResult.value);
    return result.success
      ? { success: true, data: result.data }
      : { success: false, message: result.error.message };
  }, [parseResult]);

  if (!authorized) {
    return (
      <div className="max-w-xl mx-auto px-4 py-10 space-y-4">
        <h1 className="text-2xl font-semibold text-[var(--text)]">Admin Access</h1>
        <input
          type="password"
          placeholder="Admin key"
          value={adminKey}
          onChange={(event) => setAdminKey(event.target.value)}
          className="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text)]"
        />
        <button
          onClick={() => setAuthorized(adminKey === (import.meta.env.VITE_ADMIN_KEY ?? ""))}
          className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--text)]"
        >
          Enter
        </button>
        <p className="text-sm text-[var(--text-muted)]">
          Configure <code>VITE_ADMIN_KEY</code> at build time. This gate is minimal and not secure for public use.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text)]">About/CV Admin</h1>
        <p className="text-sm text-[var(--text-muted)]">
          Edit canonical About data below. Use Export/Import for production updates.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-[var(--text-muted)]">About data JSON</label>
        <textarea
          value={raw}
          onChange={(event) => setRaw(event.target.value)}
          rows={22}
          className="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] p-3 font-mono text-xs text-[var(--text)]"
        />
        {!validation.success && (
          <div className="rounded-md border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-300">
            {validation.message}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setRaw(DEFAULT_RAW)}
          className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)]"
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (!validation.success) {
              setStatus("Fix JSON errors before saving.");
              return;
            }
            void saveAboutData(validation.data).then((result) => setStatus(result.message));
          }}
          className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--text)]"
        >
          Save (Dev)
        </button>
        <button
          onClick={() => {
            if (!validation.success) {
              setStatus("Fix JSON errors before exporting.");
              return;
            }
            exportAboutData(validation.data);
            setStatus("Exported about.data.json");
          }}
          className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--text)]"
        >
          Export JSON
        </button>
        <label className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)] cursor-pointer">
          Import JSON
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              importAboutData(file, (next) => {
                setRaw(JSON.stringify(next, null, 2));
                setStatus("Imported JSON.");
              }, (message) => setStatus(message));
            }}
          />
        </label>
        <button
          onClick={() => {
            if (!validation.success) {
              setStatus("Fix JSON errors before copying.");
              return;
            }
            void copyAboutData(validation.data).then(() => setStatus("Copied JSON to clipboard."));
          }}
          className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)]"
        >
          Copy JSON
        </button>
        <button
          onClick={() => {
            void rebuildCv().then((result) => setStatus(result.message));
          }}
          className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--text)]"
        >
          Rebuild CV
        </button>
      </div>

      {status && <p className="text-sm text-[var(--text-muted)]">{status}</p>}

      <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--text-muted)] space-y-2">
        <p>Production workflow:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Export JSON and commit to `src/content/about.data.json`.</li>
          <li>Run <code>npm run build:cv</code> in CI to regenerate `docs/CV.md`.</li>
        </ol>
      </div>
    </div>
  );
}
