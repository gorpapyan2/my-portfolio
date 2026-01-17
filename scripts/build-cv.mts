import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CvSchema } from "../src/data/cv.schema";
import { mapAboutToCV } from "../src/content/cv.map";
import { renderCvMarkdown } from "../src/lib/utils/renderCvMarkdown";

const outDir = join(process.cwd(), "docs");
mkdirSync(outDir, { recursive: true });

const cv = mapAboutToCV();
const parsed = CvSchema.parse(cv);
const markdown = renderCvMarkdown(parsed);
const mdPath = join(outDir, "CV.md");

writeFileSync(mdPath, markdown, "utf8");
console.log(`Generated ${mdPath}`);

await maybeGeneratePdf(markdown, join(outDir, "CV.pdf"));


async function maybeGeneratePdf(markdown: string, outPath: string) {
  try {
    const puppeteer = await import("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = `<!doctype html><html><body><pre style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; white-space: pre-wrap;">${escapeHtml(markdown)}</pre></body></html>`;
    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({ path: outPath, format: "A4", printBackground: true });
    await browser.close();
    console.log(`Generated ${outPath}`);
  } catch (error) {
    if (error instanceof Error && /Cannot find module|ERR_MODULE_NOT_FOUND/.test(error.message)) {
      console.log("Puppeteer not installed; skipped PDF generation.");
      return;
    }
    console.log("PDF generation skipped:", error);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
