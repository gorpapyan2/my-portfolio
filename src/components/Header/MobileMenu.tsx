import React, { useEffect, useState } from "react";
import { Menu, X, FileDown, Languages } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage, Language } from "../../context/LanguageContext";
import { usePublicFeatureFlags } from "../../lib/services/usePublicFeatureFlags";
import { TranslationText } from "../shared/TranslationText";

const languages: { code: Language; label: string; }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'am', label: 'Հայերեն' },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();
  
  const showWorkSection = isFeatureEnabled('work_section');
  const showBlogSection = isFeatureEnabled('blog_section');
  const showLanguageSelector = isFeatureEnabled('language_selector');
  
  const navItems = [
    { to: "/about", label: "About" },
    ...(showWorkSection ? [{ to: "/work", label: "Work" }] : []),
    ...(showBlogSection ? [{ to: "/blog", label: "Blog" }] : []),
    { to: "/contact", label: "Contact" },
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
    const { downloadCV } = await import('../../lib/utils/downloadCV');
    await downloadCV();
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-300 hover:text-[#edfc3a] transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-90 group"
        aria-label={t('aria.openMenu')}
        aria-expanded={isOpen}
        aria-controls="mobile-dropdown"
      >
        <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
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
            className="absolute top-full right-0 z-[1001] mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <h2 id="mobile-dropdown-title" className="text-sm font-medium text-white">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-gray-300 hover:text-[#edfc3a] transition-all duration-300 hover:rotate-90 hover:scale-110 group"
                aria-label={t('aria.closeMenu')}
              >
                <X className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-2 py-2">
              <ul className="space-y-1">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <MobileNavLink to={to} onClick={() => setIsOpen(false)}>
                      {label}
                    </MobileNavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Selector */}
            {showLanguageSelector && (
              <div className="px-4 py-3 border-t border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Languages className="h-4 w-4" />
                    <span>Language</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                          language === lang.code
                            ? 'text-[#edfc3a] bg-[#edfc3a]/10 border border-[#edfc3a]/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          language === lang.code ? 'bg-[#edfc3a]' : 'bg-gray-500'
                        }`} />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CV Download Button */}
            <div className="px-4 py-3 border-t border-white/10">
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#edfc3a] text-black font-medium hover:bg-[#c4cf2b] transition-colors duration-200 group"
              >
                <FileDown className="h-4 w-4" />
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
        `block rounded-md px-3 py-2 text-sm transition-colors duration-300 relative group ${
          isActive
            ? "text-[#edfc3a] bg-[#edfc3a]/10 border border-[#edfc3a]/20"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Simple active indicator */}
          {isActive && (
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#edfc3a] rounded-r-md" />
          )}
        </>
      )}
    </NavLink>
  );
}
