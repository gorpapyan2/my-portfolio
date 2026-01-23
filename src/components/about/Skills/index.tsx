import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import { SectionHeader } from "../../shared/SectionHeader";
import { TranslationText } from "../../../components/shared/TranslationText";
import { useSkillService } from "../../../lib/services/useSkillService";

export function Skills() {
  const { skills, isLoading, error } = useSkillService();

  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    const key = skill.category || "core";
    if (!acc[key]) acc[key] = [];
    acc[key].push(skill.title);
    return acc;
  }, {});

  const entries = Object.entries(grouped);
  const content = isLoading ? (
    <div className="space-y-4">
      {[0, 1].map(i => (
        <div key={i} className="h-10 rounded-lg bg-[var(--surface-strong)] animate-pulse" />
      ))}
    </div>
  ) : error ? (
    <div className="text-[var(--text-muted)] text-sm">Failed to load skills. Please refresh and try again.</div>
  ) : (
    <div className="space-y-8">
      {(entries.length > 0 ? entries : [["core", ["Skills coming soon."]]]).map(
        ([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-[var(--text)] capitalize">{category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {(items as string[]).map((skill, idx) => (
                <span
                  key={`${category}-${idx}`}
                  className="text-xs px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          icon={Lightbulb}
          title={<TranslationText translationKey="about.skills.title" shimmerWidth="120px" />}
          subtitle={<TranslationText translationKey="about.skills.subtitle" as="span" shimmerWidth="300px" />}
        />

        {content}
      </div>
    </section>
  );
}
