import React, { useEffect, useState } from "react";
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import FileDown from 'lucide-react/dist/esm/icons/file-down';
import Languages from 'lucide-react/dist/esm/icons/languages';
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage, Language } from "../../context/LanguageContext";
import { usePublicFeatureFlags } from "../../lib/services/usePublicFeatureFlags";
import { TranslationText } from "../shared/TranslationText";

const languages: { code: Language; labelKey: string }[] = [
  { code: "en", labelKey: "language.en" },
  { code: "ru", labelKey: "language.ru" },
  { code: "am", labelKey: "language.am" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const showWorkSection = isFeatureEnabled("work_section");
  const showBlogSection = isFeatureEnabled("blog_section");
  const showLanguageSelector = isFeatureEnabled("language_selector");

  const navItems = [
    { to: "/about", labelKey: "nav.about" },
    ...(showWorkSection ? [{ to: "/work", labelKey: "nav.work" }] : []),
    ...(showBlogSection ? [{ to: "/blog", labelKey: "nav.blog" }] : []),
    { to: "/contact", labelKey: "nav.contact" },
  ];

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Handle ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleDownloadCV = async () => {
    const { downloadCV } = await import("../../lib/utils/downloadCV");
    await downloadCV();
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(true)}
        className={`p-[var(--space-8)] rounded-full border border-transparent text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] hover:border-[var(--border)] transition-[color,background-color,border-color] duration-300 group ${
          isOpen ? "bg-[var(--surface-strong)] text-[var(--text)] border-[var(--border)]" : ""
        }`}
        aria-label={t("aria.openMenu")}
        aria-expanded={isOpen}
        aria-controls="mobile-dropdown"
      >
        <Menu className="h-[var(--space-24)] w-[var(--space-24)] transition-transform duration-300 group-hover:scale-105" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div
            id="mobile-dropdown"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-dropdown-title"
            className="absolute top-full right-0 z-[1001] mt-[var(--space-8)] w-64 bg-[var(--bg-elevated)] backdrop-blur-md rounded-[var(--radius-md)] shadow-[0_24px_70px_rgba(7,10,18,0.55)] border border-[var(--border)] overflow-hidden animate-in slide-in-from-top-2 fade-in duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-[var(--space-16)] py-[var(--space-12)] border-b border-[var(--border)]">
              <h2 id="mobile-dropdown-title" className="text-[length:var(--font-100)] font-medium text-[var(--text)]">
                <TranslationText translationKey="mobile.menu" shimmerWidth="50px" />
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-[var(--space-4)] rounded-[var(--radius-sm)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300 group"
                aria-label={t("aria.closeMenu")}
              >
                <X className="h-[var(--space-20)] w-[var(--space-20)] transition-transform duration-300 group-hover:scale-105" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-[var(--space-8)] py-[var(--space-8)]">
              <ul className="stack [--stack-space:var(--space-4)]">
                {navItems.map(({ to, labelKey }) => (
                  <li key={to}>
                    <MobileNavLink to={to} onClick={() => setIsOpen(false)}>
                      <TranslationText translationKey={labelKey} shimmerWidth="60px" />
                    </MobileNavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Selector */}
            {showLanguageSelector && (
              <div className="px-[var(--space-16)] py-[var(--space-12)] border-t border-[var(--border)]">
                <div className="stack [--stack-space:var(--space-8)]">
                  <div className="flex items-center gap-[var(--space-8)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                    <Languages className="h-[var(--space-16)] w-[var(--space-16)]" />
                    <span>Language</span>
                  </div>
                  <div className="grid grid-cols-1 gap-[var(--space-4)]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-md)] text-[length:var(--font-100)] transition-colors duration-200 ${
                          language === lang.code
                            ? "text-accent bg-[var(--surface-strong)] border border-[var(--border)]"
                            : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
                        }`}
                      >
                        <div className={`w-[var(--space-8)] h-[var(--space-8)] rounded-full transition-colors duration-200 ${
                          language === lang.code ? "bg-accent" : "bg-[var(--text-muted)]"
                        }`} />
                        <span>
                          <TranslationText translationKey={lang.labelKey} shimmerWidth="80px" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CV Download Button */}
            <div className="px-[var(--space-16)] py-[var(--space-12)] border-t border-[var(--border)]">
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center gap-[var(--space-8)] px-[var(--space-16)] py-[var(--space-8)] rounded-[var(--radius-md)] bg-accent text-accent-ink font-medium hover:bg-accent-strong transition-colors duration-200 group"
              >
                <FileDown className="h-[var(--space-16)] w-[var(--space-16)]" />
                <span>
                  <TranslationText translationKey="hero.downloadCV" shimmerWidth="100px" />
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ to, children, onClick }: MobileNavLinkProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block rounded-[var(--radius-md)] px-[var(--space-12)] py-[var(--space-8)] text-[length:var(--font-100)] transition-colors duration-300 relative group ${
          isActive
            ? "text-accent bg-[var(--surface-strong)] border border-[var(--border)]"
            : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Simple active indicator */}
          {isActive && (
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-md" />
          )}
        </>
      )}
    </NavLink>
  );
}
