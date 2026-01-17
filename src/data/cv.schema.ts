import { z } from "zod";

const MetricsSchema = z.record(z.string(), z.union([z.number(), z.string()]));

const KeyResultSchema = z.object({
  summary: z.string().min(1),
  metrics: MetricsSchema.optional(),
  year: z.union([z.number(), z.string()]).optional()
});

export const AboutDataSchema = z.object({
  header: z
    .object({
      titleKey: z.string().optional(),
      subtitleKey: z.string().optional()
    })
    .optional(),
  aboutMe: z.object({
    professionalJourney: z.array(z.string()).default([]),
    philosophy: z.array(z.string()).default([]),
    toolbox: z.array(z.string()).default([])
  }),
  keyResults: z.array(KeyResultSchema).default([]),
  languages: z
    .array(
      z.object({
        name: z.string().min(1),
        level: z.string().optional()
      })
    )
    .default([]),
  experience: z
    .array(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        start: z.string().min(1),
        end: z.string().min(1),
        location: z.string().optional(),
        summary: z.string().optional(),
        bullets: z.array(z.string()).default([]),
        tech: z.array(z.string()).default([])
      })
    )
    .default([]),
  education: z
    .array(
      z.object({
        school: z.string().min(1),
        degree: z.string().min(1),
        start: z.string().optional(),
        end: z.string().optional(),
        details: z.array(z.string()).optional()
      })
    )
    .default([]),
  skills: z
    .object({
      core: z.array(z.string()).default([]),
      platforms: z.array(z.string()).default([]),
      tooling: z.array(z.string()).default([]),
      soft: z.array(z.string()).default([])
    })
    .default({ core: [], platforms: [], tooling: [], soft: [] }),
  links: z.record(z.string(), z.string()).default({})
});

export type AboutData = z.infer<typeof AboutDataSchema>;

export const CvSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  contact: z.object({
    email: z.string().min(1),
    location: z.string().min(1),
    links: z.record(z.string(), z.string()).default({})
  }),
  summary: z.array(z.string()).default([]),
  keyResults: z.array(KeyResultSchema).default([]),
  experience: z
    .array(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        start: z.string().min(1),
        end: z.string().min(1),
        location: z.string().optional(),
        summary: z.string().optional(),
        bullets: z.array(z.string()).default([]),
        tech: z.array(z.string()).default([])
      })
    )
    .default([]),
  skills: z.record(z.string(), z.array(z.string())).default({}),
  education: z
    .array(
      z.object({
        school: z.string().min(1),
        degree: z.string().min(1),
        start: z.string().optional(),
        end: z.string().optional(),
        details: z.array(z.string()).optional()
      })
    )
    .default([]),
  languages: z
    .array(
      z.object({
        name: z.string().min(1),
        level: z.string().optional()
      })
    )
    .default([])
});

export type Cv = z.infer<typeof CvSchema>;
