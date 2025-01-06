import { Link } from 'react-router-dom';
import { Bug, Moon, Sun, FileDown } from 'lucide-react';
// import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export function Header() {
  // const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isScrolled = useScrollPosition();

  const handleDownloadCV = () => {
    const cvUrl = '/Gor-Papyan-CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Gor-Papyan-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg'
            : 'bg-black/60 backdrop-blur-sm'
        } rounded-full px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <Bug
              className="h-7 w-7 text-[#edfc3a] drop-shadow-[0_0_10px_#edfc3a] transition-transform hover:scale-125"
              aria-hidden="true"
            />
            <span className="text-2xl font-bold text-white">Gor Papyan</span>
          </Link>

          {/* Navigation Links */}
          <NavLinks />

          {/* Right-side Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            {/* <button
              className="text-white text-sm hover:text-[#edfc3a] transition-colors"
              aria-label={t('language')}
            >
              {t('hero.language')}
            </button> */}

            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              aria-label={t('theme')}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-[#edfc3a]" />
              ) : (
                <Moon className="h-5 w-5 text-[#edfc3a]" />
              )}
            </button> */}

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#edfc3a] text-black font-medium hover:bg-[#c4cf2b] transition-all duration-300"
            >
              <FileDown className="h-5 w-5" />
              {t('hero.downloadCV')}
            </button>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
