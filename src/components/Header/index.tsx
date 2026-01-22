import { Link, useLocation } from 'react-router-dom';
import Bug from 'lucide-react/dist/esm/icons/bug';
import FileDown from 'lucide-react/dist/esm/icons/file-down';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Edit3 from 'lucide-react/dist/esm/icons/edit-3';
import { useEffect, useState } from 'react';
// import { useTheme } from '../../context/ThemeContext';
import { useLanguage, Language } from '../../context/LanguageContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { useAuth } from '../../context/AuthContext';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { TranslationText } from '../shared/TranslationText';

const languages: { code: Language; labelKey: string; }[] = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'ru', labelKey: 'language.ru' },
  { code: 'am', labelKey: 'language.am' },
];

export function Header() {
  // const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const { isFeatureEnabled } = usePublicFeatureFlags();
  const { isAdmin, isTranslationEditMode, setIsTranslationEditMode } = useAuth();
  const isScrolled = useScrollPosition();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const showLanguageSelector = isFeatureEnabled('language_selector');

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsInitialLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isLanguageOpen && !target.closest('.language-dropdown')) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen]);

  // Get current page name for context
  const getCurrentPageName = () => {
    const path = location.pathname;
    if (path === '/') return t('pages.home');
    // derive key like pages.about, pages.blog, etc.
    const slug = path.split('/').filter(Boolean)[0] || 'home';
    return t(`pages.${slug}`);
  };

  const handleDownloadCV = async () => {
    const { downloadCV } = await import('../../lib/utils/downloadCV');
    await downloadCV();
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === language) || languages[0];
  };

  const currentPageName = getCurrentPageName();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-[var(--space-8)] py-[var(--space-8)] md:px-[var(--space-12)] md:py-[var(--space-12)] transition-[transform,opacity] duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-[-100%] opacity-0'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`relative max-w-6xl mx-auto rounded-[var(--radius-xl)] px-[var(--space-12)] py-[var(--space-8)] md:px-[var(--space-16)] md:py-[var(--space-12)] border border-[var(--border)] transition-[background-color,box-shadow,transform] duration-500 ease-out ${
          isScrolled
            ? 'bg-[var(--surface-strong)] shadow-[0_18px_50px_rgba(7,10,18,0.5)] backdrop-blur-md'
            : 'bg-[var(--surface)] backdrop-blur-sm'
        } ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.02))] opacity-70 pointer-events-none" />
        <div className="relative flex items-center justify-between">
          {/* Logo Section - Mobile optimized with page context */}
          <Link 
            to="/" 
            className={`flex items-center gap-2 md:gap-3 group transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '200ms' : '0ms' }}
          >
            <Bug
              className="h-[var(--space-20)] w-[var(--space-20)] md:h-[var(--space-24)] md:w-[var(--space-24)] text-accent transition-transform duration-300 group-hover:rotate-6"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-[var(--space-2)] leading-[var(--leading-tight)]">
              <span className="text-[length:var(--font-400)] md:text-[length:var(--font-500)] font-semibold text-[var(--text)] font-display group-hover:text-accent transition-colors duration-300">
                Gor Papyan
              </span>
              {/* Current page indicator - hidden on mobile, shown on desktop */}
              <span className="hidden md:block text-[length:var(--font-100)] text-[var(--text-muted)] transition-colors duration-300">
                {currentPageName}
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop only */}
          <div 
            className={`transition-all duration-500 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-30px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '400ms' : '0ms' }}
          >
            <NavLinks />
          </div>

          {/* Right-side Controls - Mobile-first */}
          <div 
            className={`flex items-center gap-[var(--space-8)] md:gap-[var(--space-12)] transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '300ms' : '0ms' }}
          >
            {/* Language Selector - Desktop only */}
            {showLanguageSelector && (
              <div className="hidden md:block relative language-dropdown">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-[var(--space-8)] px-[var(--space-10)] py-[var(--space-6)] rounded-[var(--radius-md)] bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] transition-[color,background-color,box-shadow] duration-300 group"
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="listbox"
                >
                  <Globe className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-300" />
                  <span className="text-[length:var(--font-100)] text-[var(--text)] transition-colors duration-300">
                    <TranslationText translationKey={getCurrentLanguage().labelKey} shimmerWidth="80px" />
                  </span>
                  <ChevronDown 
                    className={`h-[var(--space-12)] w-[var(--space-12)] text-[var(--text-muted)] transition-all duration-300 ${
                      isLanguageOpen ? 'rotate-180 text-accent' : 'group-hover:text-[var(--text)]'
                    }`} 
                  />
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-[var(--space-8)] w-48 bg-[var(--bg-elevated)] backdrop-blur-md rounded-[var(--radius-md)] shadow-2xl border border-[var(--border)] overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="py-2">
                      {languages.map((lang, index) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full px-[var(--space-16)] py-[var(--space-12)] text-left text-[length:var(--font-100)] transition-all duration-200 hover:bg-[var(--surface-strong)] group ${
                            language === lang.code 
                              ? 'text-accent bg-[var(--surface-strong)]' 
                              : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              language === lang.code ? 'bg-accent' : 'bg-[var(--text-muted)] group-hover:bg-accent'
                            }`} />
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              <TranslationText translationKey={lang.labelKey} shimmerWidth="80px" />
                            </span>
                            {language === lang.code && (
                              <div className="ml-auto w-1 h-1 bg-accent rounded-full animate-pulse" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Edit Mode Toggle - Admin only */}
            {isAdmin && (
              <button
                onClick={() => setIsTranslationEditMode(!isTranslationEditMode)}
                title={isTranslationEditMode ? 'Disable translation edit mode' : 'Enable translation edit mode'}
                className={`hidden md:inline-flex items-center gap-[var(--space-8)] px-[var(--space-10)] py-[var(--space-6)] rounded-[var(--radius-md)] transition-[color,background-color,box-shadow] duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                  isTranslationEditMode
                    ? 'bg-[var(--surface-strong)] border border-accent text-accent shadow-[0_12px_24px_rgba(7,10,18,0.35)]'
                    : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                <Edit3 className="h-4 w-4" />
                <span className="text-[length:var(--font-100)] font-medium">
                  {isTranslationEditMode ? (
                    <TranslationText translationKey="nav.editOn" shimmerWidth="60px" />
                  ) : (
                    <TranslationText translationKey="nav.edit" shimmerWidth="40px" />
                  )}
                </span>
              </button>
            )}

            {/* Download CV Button - Desktop only */}
            <button
              onClick={handleDownloadCV}
              className="hidden md:inline-flex items-center gap-[var(--space-8)] px-[var(--space-12)] py-[var(--space-6)] md:px-[var(--space-16)] md:py-[var(--space-6)] rounded-full bg-accent text-accent-ink font-medium hover:bg-accent-strong transition-[color,background-color,box-shadow,transform] duration-300 text-[length:var(--font-100)] md:text-[length:var(--font-200)] group shadow-[0_12px_28px_rgba(var(--accent),0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <FileDown className="h-[var(--space-16)] w-[var(--space-16)] md:h-[var(--space-20)] md:w-[var(--space-20)] transition-transform duration-300 group-hover:translate-y-[-2px]" />
              <span className="transition-transform duration-300 group-hover:translate-y-[-1px]">
                <TranslationText translationKey="hero.downloadCV" shimmerWidth="100px" />
              </span>
            </button>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

