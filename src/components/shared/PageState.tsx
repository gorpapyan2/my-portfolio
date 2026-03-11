import { ReactNode } from 'react';
import { PageLayout } from './PageLayout';
import { LucideIcon } from 'lucide-react';

interface PageStateProps {
    icon?: LucideIcon;
    title: ReactNode;
    message: ReactNode;
    action?: ReactNode;
}

/**
 * Standardized full-page generic state renderer used for 
 * empty/error/unavailable states across top-level routing pages.
 */
export function PageState({ icon: Icon, title, message, action }: PageStateProps) {
    return (
        <PageLayout>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
            <div className="min-h-[80vh] flex items-center justify-center relative z-10">
                <div className="text-center max-w-md mx-auto px-4">
                    {Icon && (
                        <Icon className="h-[var(--space-64)] w-[var(--space-64)] text-[var(--text-muted)] mx-auto mb-[var(--space-16)]" />
                    )}
                    <h2 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
                        {title}
                    </h2>
                    <p className="text-[var(--text-muted)] text-[length:var(--font-200)] mb-[var(--space-24)]">
                        {message}
                    </p>
                    {action && (
                        <div className="flex justify-center">
                            {action}
                        </div>
                    )}
                </div>
            </div>
        </PageLayout>
    );
}
