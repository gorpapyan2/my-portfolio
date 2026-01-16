import { Link, useLocation } from 'react-router-dom';
import { Bug, FileDown, ChevronDown, Globe, Edit3 } from 'lucide-react';
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-[var(--space-12)] py-[var(--space-12)] md:px-[var(--space-16)] md:py-[var(--space-16)] transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-[-100%] opacity-0'
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[var(--surface-strong)] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
            : 'bg-[var(--surface)] backdrop-blur-sm'
        } rounded-[var(--radius-xl)] px-[var(--space-16)] py-[var(--space-12)] md:px-[var(--space-24)] md:py-[var(--space-16)] border border-[var(--border)] ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section - Mobile optimized with page context */}
          <Link 
            to="/" 
            className={`flex items-center gap-2 md:gap-3 group transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '200ms' : '0ms' }}
          >
            <Bug
              className="h-[var(--space-24)] w-[var(--space-24)] md:h-[var(--space-32)] md:w-[var(--space-32)] text-accent transition-transform duration-300 group-hover:rotate-6"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="text-[length:var(--font-500)] md:text-[length:var(--font-600)] font-semibold text-[var(--text)] font-display group-hover:text-accent transition-colors duration-300">
                Gor Papyan
              </span>
              {/* Current page indicator - hidden on mobile, shown on desktop */}
              <span className="hidden md:block text-[length:var(--font-100)] text-[var(--text-muted)] transition-colors duration-300">
                {getCurrentPageName()}
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
            className={`flex items-center gap-[var(--space-8)] md:gap-[var(--space-16)] transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '300ms' : '0ms' }}
          >
            {/* Language Selector - Desktop only */}
            {showLanguageSelector && (
              <div className="hidden md:block relative language-dropdown">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-[var(--space-8)] px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-md)] bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] transition-colors duration-300 group"
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
                className={`hidden md:inline-flex items-center gap-[var(--space-8)] px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-md)] transition-colors duration-300 group ${
                  isTranslationEditMode
                    ? 'bg-[var(--surface-strong)] border border-accent text-accent'
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
              className="hidden md:inline-flex items-center gap-[var(--space-8)] px-[var(--space-16)] py-[var(--space-8)] md:px-[var(--space-24)] md:py-[var(--space-8)] rounded-full bg-accent text-accent-ink font-medium hover:bg-accent-strong transition-colors duration-300 text-[length:var(--font-100)] md:text-[length:var(--font-200)] group"
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

