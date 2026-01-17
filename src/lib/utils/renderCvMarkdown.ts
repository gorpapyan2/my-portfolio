import type { Cv } from "../../data/cv.schema";

export function renderCvMarkdown(cv: Cv): string {
  const links = Object.entries(cv.contact.links || {})
    .map(([label, url]) => `[${label}](${url})`)
    .join(" · ");

  const keyResults =
    cv.keyResults.length > 0
      ? cv.keyResults
          .map((kr) => {
            const metrics = kr.metrics
              ? ` (${Object.entries(kr.metrics)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(", ")})`
              : "";
            const year = kr.year ? ` (${kr.year})` : "";
            return `- ${kr.summary}${metrics}${year}`;
          })
          .join("\n")
      : "- TODO: Add measurable key results.";

  const experience = cv.experience
    .map((exp) => {
      const period = `${exp.start}–${exp.end}`;
      const location = exp.location ? ` · ${exp.location}` : "";
      const summary = exp.summary ? `${exp.summary}\n\n` : "";
      const bullets = exp.bullets.map((b) => `- ${b}`).join("\n");
      const tech = exp.tech.length ? `\n\n_Tech:_ ${exp.tech.join(", ")}` : "";
      return `**${exp.role}**, ${exp.company} — ${period}${location}\n\n${summary}${bullets}${tech}`;
    })
    .join("\n\n");

  const skills = Object.entries(cv.skills)
    .map(([category, items]) => `- **${category}:** ${items.join(", ")}`)
    .join("\n");

  const education = cv.education
    .map((ed) => {
      const years = ed.start || ed.end ? ` (${ed.start ?? ""}${ed.start && ed.end ? "–" : ""}${ed.end ?? ""})` : "";
      const details = ed.details?.length ? `\n  - ${ed.details.join("\n  - ")}` : "";
      return `- **${ed.degree}**, ${ed.school}${years}${details}`;
    })
    .join("\n");

  const languages = cv.languages
    .map((lang) => `- ${lang.name}${lang.level ? `: ${lang.level}` : ""}`)
    .join("\n");

  return `# ${cv.name}

**${cv.title}** · ${cv.contact.location} · ${cv.contact.email}

${links}

## Summary
${cv.summary.map((line) => `- ${line}`).join("\n")}

## Key Results
${keyResults}

## Experience
${experience || "- TODO: Add experience entries."}

## Skills
${skills || "- TODO: Add skills."}

## Education
${education || "- TODO: Add education."}

## Languages
${languages || "- TODO: Add languages."}
`;
}
