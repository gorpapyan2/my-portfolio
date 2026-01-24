import { cn } from "../../utils/cn";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string; // For optional customization of the outer section
  ariaLabel?: string; // To set an accessible label for the main section
  gradient?: "blue" | "purple" | "emerald" | "none"; // Optional ambient gradient preset
}

export function PageLayout({ children, className = "", ariaLabel = "Page layout", gradient = "none" }: PageLayoutProps) {
  const gradientMap = {
    blue: "from-blue-500/5 via-cyan-500/5 to-transparent",
    purple: "from-purple-500/5 via-fuchsia-500/5 to-transparent",
    emerald: "from-emerald-500/5 via-teal-500/5 to-transparent",
    none: "",
  };

  return (
    <section
      className={cn(
        "relative min-h-screen bg-[var(--bg)] pt-[calc(var(--space-64)+var(--space-48))] pb-[var(--space-64)] overflow-hidden",
        className
      )}
      aria-label={ariaLabel}
    >
      {/* Ambient Gradient Wrapper */}
      {gradient !== "none" && (
        <div className={`absolute inset-0 bg-gradient-to-b ${gradientMap[gradient]} pointer-events-none`} aria-hidden="true" />
      )}

      {/* Softer Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
