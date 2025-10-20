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
      className={`fixed top-0 left-0 right-0 z-50 px-3 py-3 md:px-4 md:py-4 transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-[-100%] opacity-0'
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-black/60 backdrop-blur-sm'
        } rounded-full px-4 py-3 md:px-6 md:py-4 border border-white/5 ${
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
              className="h-6 w-6 md:h-7 md:w-7 text-[#edfc3a] drop-shadow-[0_0_10px_#edfc3a] transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_20px_#edfc3a]"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-white group-hover:text-[#edfc3a] transition-all duration-300 group-hover:scale-105">
                Gor Papyan
              </span>
              {/* Current page indicator - hidden on mobile, shown on desktop */}
              <span className="hidden md:block text-xs text-gray-400 group-hover:text-[#edfc3a]/70 transition-all duration-300 group-hover:translate-x-1">
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
            className={`flex items-center gap-2 md:gap-4 transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}
            style={{ transitionDelay: isInitialLoad ? '300ms' : '0ms' }}
          >
            {/* Language Selector - Desktop only */}
            {showLanguageSelector && (
              <div className="hidden md:block relative language-dropdown">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#edfc3a]/30 transition-all duration-300 group"
                >
                  <Globe className="h-4 w-4 text-gray-300 group-hover:text-[#edfc3a] transition-colors duration-300" />
                  <span className="text-sm text-white group-hover:text-[#edfc3a] transition-colors duration-300">
                    {t(getCurrentLanguage().labelKey)}
                  </span>
                  <ChevronDown 
                    className={`h-3 w-3 text-gray-400 transition-all duration-300 ${
                      isLanguageOpen ? 'rotate-180 text-[#edfc3a]' : 'group-hover:text-[#edfc3a]'
                    }`} 
                  />
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="py-2">
                      {languages.map((lang, index) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 hover:bg-white/5 group ${
                            language === lang.code 
                              ? 'text-[#edfc3a] bg-[#edfc3a]/10' 
                              : 'text-gray-300 hover:text-white'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              language === lang.code ? 'bg-[#edfc3a]' : 'bg-gray-500 group-hover:bg-[#edfc3a]'
                            }`} />
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {t(lang.labelKey)}
                            </span>
                            {language === lang.code && (
                              <div className="ml-auto w-1 h-1 bg-[#edfc3a] rounded-full animate-pulse" />
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
                className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                  isTranslationEditMode
                    ? 'bg-[#edfc3a]/20 border border-[#edfc3a] text-[#edfc3a]'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:text-[#edfc3a] hover:border-[#edfc3a]/50'
                }`}
              >
                <Edit3 className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {isTranslationEditMode ? t('nav.editOn') : t('nav.edit')}
                </span>
              </button>
            )}

            {/* Download CV Button - Desktop only */}
            <button
              onClick={handleDownloadCV}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-full bg-[#edfc3a] text-black font-medium hover:bg-[#c4cf2b] transition-all duration-300 text-sm md:text-base hover:scale-105 hover:shadow-lg hover:shadow-[#edfc3a]/30 active:scale-95 group"
            >
              <FileDown className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
              <span className="transition-transform duration-300 group-hover:translate-y-[-1px]">
                {t('hero.downloadCV')}
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
