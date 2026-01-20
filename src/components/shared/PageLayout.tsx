interface PageLayoutProps {
  children: React.ReactNode;
  className?: string; // For optional customization of the outer section
  ariaLabel?: string; // To set an accessible label for the main section
}

export function PageLayout({ children, className = "", ariaLabel = "Page layout" }: PageLayoutProps) {
  return (
    <section
      className={`relative min-h-screen bg-[var(--bg)] pt-[calc(var(--space-64)+var(--space-48))] pb-[var(--space-64)] overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
