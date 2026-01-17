import aboutData from "./about.data.json";
import { AboutDataSchema, type Cv } from "../data/cv.schema";

const data = AboutDataSchema.parse(aboutData);

const ensureArray = (items: string[], fallback: string) =>
  items.length > 0 ? items : [fallback];

export function mapAboutToCV(overrides?: Partial<Cv>): Cv {
  const summary = [
    ...data.aboutMe.professionalJourney,
    ...data.aboutMe.philosophy
  ].filter(Boolean);

  return {
    name: overrides?.name ?? "<Full Name>",
    title: overrides?.title ?? "Senior Software Engineer",
    contact: overrides?.contact ?? {
      email: "<email@domain>",
      location: "<City, Country>",
      links: data.links ?? {}
    },
    summary: ensureArray(
      summary,
      "TODO: Add a senior summary emphasizing scope, leadership, and impact."
    ),
    keyResults: data.keyResults,
    experience: (data.experience ?? []).map((exp) => ({
      ...exp,
      bullets: ensureArray(
        exp.bullets ?? [],
        "TODO: Add impact bullet with metrics (e.g., reduced p95 latency by 42%)."
      )
    })),
    skills: data.skills ?? {},
    education: data.education ?? [],
    languages: data.languages ?? []
  };
}
