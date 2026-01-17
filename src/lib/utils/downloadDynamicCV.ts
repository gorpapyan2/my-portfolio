import { mapAboutToCV } from "../../content/cv.map";
import { renderCvMarkdown } from "./renderCvMarkdown";

export async function downloadDynamicCV(): Promise<void> {
  const cv = mapAboutToCV();
  const markdown = renderCvMarkdown(cv);
  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  try {
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    URL.revokeObjectURL(url);
  }
}
