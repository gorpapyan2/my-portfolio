import { type LucideIcon } from 'lucide-react';
import { type ReactNode } from 'react';

interface HeaderBlockProps {
    icon: LucideIcon;
    title: ReactNode;
    subtitle?: ReactNode;
    /**
     * "page"    → h1, larger icon (p-4 / h-8 w-8), wider gap, larger bottom margin
     * "section" → h2, smaller icon (p-3 / h-6 w-6), tighter gap, smaller bottom margin
     */
    variant?: 'page' | 'section';
}

/**
 * Unified header block used for both page-level (h1) and section-level (h2) headings.
 * Replaces the near-identical PageHeader and SectionHeader components.
 */
export function HeaderBlock({
    icon: Icon,
    title,
    subtitle,
    variant = 'page',
}: HeaderBlockProps) {
    const isPage = variant === 'page';

    return (
        <div
            className={`flex flex-col items-center justify-center ${isPage ? 'gap-4 mb-12' : 'gap-3 mb-8'
                }`}
        >
            <div
                className={`${isPage ? 'relative p-4' : 'p-3'
                    } bg-[var(--surface)] rounded-full backdrop-blur-sm border border-[var(--border)]`}
            >
                <Icon
                    className={isPage ? 'h-8 w-8 text-accent' : 'h-6 w-6 text-accent'}
                    aria-hidden="true"
                />
            </div>

            <div className="text-center">
                {isPage ? (
                    <h1 className="text-[length:var(--font-800)] md:text-[length:var(--font-900)] font-bold text-[var(--text)] font-display mb-2 text-balance">
                        {title}
                    </h1>
                ) : (
                    <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display text-balance">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p
                        className={`text-[var(--text-muted)] max-w-2xl mx-auto ${isPage
                                ? 'text-[length:var(--font-300)]'
                                : 'text-[length:var(--font-200)] max-w-xl'
                            }`}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}

/**
 * Convenience re-exports so existing imports keep working without a mass rename.
 * Existing callers of PageHeader / SectionHeader will continue to compile.
 */
export const PageHeader = (props: Omit<HeaderBlockProps, 'variant'>) => (
    <HeaderBlock {...props} variant="page" />
);

export const SectionHeader = (props: Omit<HeaderBlockProps, 'variant'>) => (
    <HeaderBlock {...props} variant="section" />
);
