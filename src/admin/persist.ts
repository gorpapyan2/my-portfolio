import type { AboutData } from "../data/cv.schema";

const DEV_ENDPOINT = "http://localhost:5656";

export async function saveAboutData(data: AboutData) {
  if (!import.meta.env.DEV) {
    return { ok: false, message: "Save disabled in production. Export JSON instead." };
  }

  const response = await fetch(`${DEV_ENDPOINT}/about-data`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data, null, 2)
  });

  return {
    ok: response.ok,
    message: response.ok ? "Saved to src/content/about.data.json" : "Save failed"
  };
}

export async function rebuildCv() {
  if (!import.meta.env.DEV) {
    return { ok: false, message: "Run `npm run build:cv` in CI or locally." };
  }

  const response = await fetch(`${DEV_ENDPOINT}/rebuild-cv`, { method: "POST" });
  return {
    ok: response.ok,
    message: response.ok ? "CV rebuild started." : "CV rebuild failed."
  };
}

export function exportAboutData(data: AboutData) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "about.data.json";
  link.click();
  URL.revokeObjectURL(url);
}

export async function copyAboutData(data: AboutData) {
  await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
}

export function importAboutData(
  file: File,
  onLoad: (data: AboutData) => void,
  onError: (message: string) => void
) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      onLoad(parsed as AboutData);
    } catch (error) {
      onError(error instanceof Error ? error.message : "Invalid JSON file.");
    }
  };
  reader.onerror = () => onError("Failed to read file.");
  reader.readAsText(file);
}
