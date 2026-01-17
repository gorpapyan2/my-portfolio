import { jsPDF } from "jspdf";
import { mapAboutToCV } from "../../content/cv.map";
import { renderCvMarkdown } from "./renderCvMarkdown";

export function downloadDynamicCVPdf(): void {
  const cv = mapAboutToCV();
  const markdown = renderCvMarkdown(cv);

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  doc.setFont("courier", "normal");
  doc.setFontSize(11);

  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - margin * 2;
  const lineHeight = 14;

  let y = margin;
  const lines = markdown.split("\n");

  for (const line of lines) {
    const wrapped = doc.splitTextToSize(line || " ", maxWidth) as string[];
    for (const textLine of wrapped) {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(textLine, margin, y);
      y += lineHeight;
    }
  }

  doc.save("CV.pdf");
}
