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
import { Card } from "../components/shared/Card";
import AnimatedGridBackground from "../components/AnimatedGridBackground";
import ParticleBackground from "../components/ParticleBackground";

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

  return (
    <AnimatedGridBackground>
      <ParticleBackground />
      <div className="relative z-10 p-[var(--space-24)]">
        {!authorized ? (
          <div className="flex justify-center">
            <Card className="w-full max-w-xl">
              <div className="space-y-[var(--space-16)]">
                <div>
                  <h1 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
                    Admin Access
                  </h1>
                  <p className="text-[length:var(--font-200)] text-[var(--text-muted)]">
                    Configure <code>VITE_ADMIN_KEY</code> at build time. This gate is minimal and not secure for public
                    use.
                  </p>
                </div>
                <div>
                  <label className="form-label" htmlFor="admin-key">Admin key</label>
                  <input
                    id="admin-key"
                    type="password"
                    placeholder="Admin key"
                    value={adminKey}
                    onChange={(event) => setAdminKey(event.target.value)}
                    className="field"
                  />
                </div>
                <button
                  onClick={() => setAuthorized(adminKey === (import.meta.env.VITE_ADMIN_KEY ?? ""))}
                  className="btn btn-primary inline-flex items-center justify-center"
                >
                  Enter
                </button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-[var(--space-24)]">
            <div>
              <h1 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">About/CV Admin</h1>
              <p className="text-[length:var(--font-200)] text-[var(--text-muted)]">
                Edit canonical About data below. Use Export/Import for production updates.
              </p>
            </div>

            <Card className="space-y-[var(--space-12)]">
              <div>
                <label className="form-label" htmlFor="about-json">About data JSON</label>
                <textarea
                  id="about-json"
                  value={raw}
                  onChange={(event) => setRaw(event.target.value)}
                  rows={22}
                  className="field font-mono text-xs"
                />
              </div>
              {!validation.success && (
                <div className="rounded-[var(--radius-md)] border border-red-500/20 bg-red-500/10 p-[var(--space-12)] text-[length:var(--font-100)] text-red-400">
                  {validation.message}
                </div>
              )}
            </Card>

            <div className="flex flex-wrap gap-[var(--space-8)]">
              <button onClick={() => setRaw(DEFAULT_RAW)} className="btn btn-secondary">
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
                className="btn btn-primary"
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
                className="btn btn-primary"
              >
                Export JSON
              </button>
              <label className="btn btn-secondary cursor-pointer inline-flex items-center">
                Import JSON
                <input
                  type="file"
                  accept="application/json"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    importAboutData(
                      file,
                      (next) => {
                        setRaw(JSON.stringify(next, null, 2));
                        setStatus("Imported JSON.");
                      },
                      (message) => setStatus(message)
                    );
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
                className="btn btn-secondary"
              >
                Copy JSON
              </button>
              <button
                onClick={() => {
                  void rebuildCv().then((result) => setStatus(result.message));
                }}
                className="btn btn-primary"
              >
                Rebuild CV
              </button>
            </div>

            {status && <p className="text-[length:var(--font-100)] text-[var(--text-muted)]">{status}</p>}

            <Card className="text-[length:var(--font-200)] text-[var(--text-muted)] space-y-[var(--space-8)]">
              <p>Production workflow:</p>
              <ol className="list-decimal pl-[var(--space-20)] space-y-[var(--space-4)]">
                <li>Export JSON and commit to `src/content/about.data.json`.</li>
                <li>Run <code>npm run build:cv</code> in CI to regenerate `docs/CV.md`.</li>
              </ol>
            </Card>
          </div>
        )}
      </div>
    </AnimatedGridBackground>
  );
}
