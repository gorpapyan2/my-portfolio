interface PageLayoutProps {
  children: React.ReactNode;
  className?: string; // For optional customization of the outer section
  ariaLabel?: string; // To set an accessible label for the main section
}

export function PageLayout({ children, className = "", ariaLabel = "Page layout" }: PageLayoutProps) {
  return (
    <section
      className={`relative min-h-screen bg-[#0A0A0B] pt-32 pb-20 overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent" />

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}
