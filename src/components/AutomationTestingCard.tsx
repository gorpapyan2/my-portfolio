import { useId } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "../utils/cn";
import type { AutomationTestingDetailItem } from "../types/testing";

type DetailInput = AutomationTestingDetailItem | string;

export interface AutomationTestingCardProps {
  icon: ElementType;
  category: string;
  title: string;
  description: string;
  tags: string[];
  proficiency: number;
  details: DetailInput[];
  impactDescription: string;
  proficiencyLabel?: ReactNode;
  proficiencyLabelText?: string;
  detailsTitle?: ReactNode;
  impactTitle?: ReactNode;
  panelId?: string;
  className?: string;
  testId?: string;
}

const clampPercent = (value: number) => Math.min(100, Math.max(0, value));

const normalizeDetail = (detail: DetailInput, fallbackIndex: number): AutomationTestingDetailItem => {
  if (typeof detail !== "string") {
    return detail;
  }

  const [rawTitle, ...rest] = detail.split(":");
  const title = rest.length ? rawTitle.trim() : `Detail ${fallbackIndex + 1}`;
  const description = rest.length ? rest.join(":").trim() : detail.trim();

  return { title, description };
};

export function AutomationTestingCard({
  icon: Icon,
  category,
  title,
  description,
  tags,
  proficiency,
  details,
  impactDescription,
  proficiencyLabel = "Proficiency level",
  proficiencyLabelText = "Proficiency level",
  detailsTitle = "Detailed Overview",
  impactTitle = "Real World Impact",
  panelId,
  className,
  testId = "automation-testing-card",
}: AutomationTestingCardProps) {
  const id = useId();
  const headingId = `${id}-title`;
  const progressLabelId = `${id}-progress-label`;
  const outputId = `${id}-progress-value`;
  const detailsHeadingId = `${id}-details-title`;
  const safeProficiency = clampPercent(proficiency);
  const normalizedDetails = details.map(normalizeDetail);

  return (
    <article
      id={panelId}
      aria-labelledby={headingId}
      data-testid={testId}
      className={cn(
        "card min-h-[40rem] sm:min-h-[38rem] md:min-h-[36rem] lg:min-h-[32rem] p-4 md:p-6 border border-[var(--border)] bg-[var(--color-bg-card)]",
        "motion-safe:transition-colors motion-safe:duration-200 motion-reduce:transition-none",
        className
      )}
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[var(--border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text)]">
              {category}
            </span>
          </div>

          <div className="space-y-2">
            <h3
              id={headingId}
              className="text-[clamp(1.75rem,1.55rem+0.8vw,2rem)] font-semibold leading-tight text-[var(--color-text)]"
            >
              {title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">{description}</p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label="Tools and technologies">
            {tags.map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-[var(--border)]",
                    "px-3 text-[0.8125rem] font-medium leading-[1.4] text-[var(--color-text)]",
                    "bg-[var(--color-surface)] min-h-[2.5rem] min-w-[2.5rem]",
                    "motion-safe:transition-colors motion-safe:duration-200 motion-reduce:transition-none",
                    "hover:bg-[var(--surface-strong)] focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-[var(--color-bg-card)]"
                  )}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span
                id={progressLabelId}
                className="text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]"
              >
                {proficiencyLabel}
              </span>
              <output id={outputId} className="text-sm font-semibold text-[var(--color-text)]">
                {safeProficiency}%
              </output>
            </div>
            <div
              role="progressbar"
              aria-label={proficiencyLabelText}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={safeProficiency}
              aria-describedby={outputId}
              className="h-2 w-full overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-strong)]"
            >
              <div
                className="h-full rounded-full bg-[var(--color-accent)]"
                style={{ width: `${safeProficiency}%` }}
              />
            </div>
          </div>

          <section className="rounded-xl border border-[var(--border)] bg-[var(--color-surface)] p-4">
            <h4 className="text-base font-semibold text-[var(--color-text)]">{impactTitle}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {impactDescription}
            </p>
          </section>
        </div>

        <aside
          aria-labelledby={detailsHeadingId}
          className="space-y-4 border-t border-[var(--border)] pt-4 lg:border-t-0 lg:border-l lg:pl-6"
        >
          <h4 id={detailsHeadingId} className="text-lg font-semibold text-[var(--color-text)]">
            {detailsTitle}
          </h4>
          <div className="space-y-3">
            {normalizedDetails.map((detail, index) => (
              <section
                key={`${detail.title}-${index}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--color-surface)] p-3"
              >
                <h5 className="text-sm font-semibold text-[var(--color-text)]">{detail.title}</h5>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                  {detail.description}
                </p>
              </section>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
