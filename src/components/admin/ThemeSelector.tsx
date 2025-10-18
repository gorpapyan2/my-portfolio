import { useState } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { useCodeTheme } from '../../context/CodeThemeContext';
import { GitHubTheme } from '../../lib/markdown/processor';

interface ThemeSelectorProps {
  className?: string;
}

/**
 * Theme selector component for switching code themes
 * Provides a dropdown with all available GitHub-style themes
 */
export function ThemeSelector({ className = '' }: ThemeSelectorProps) {
  const { theme, setTheme, availableThemes } = useCodeTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: GitHubTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleThemeButtonClick = (e: React.MouseEvent, newTheme: GitHubTheme) => {
    e.preventDefault();
    e.stopPropagation();
    handleThemeChange(newTheme);
  };

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        title="Select code theme"
      >
        <Palette className="h-4 w-4" />
        <span className="text-sm font-medium">
          {availableThemes[theme]}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={handleBackdropClick}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs text-gray-500 px-2 py-1 mb-2 font-medium">
                Code Themes
              </div>
              
              {Object.entries(availableThemes).map(([themeKey, themeName]) => {
                const isSelected = theme === themeKey;
                const isThemeDark = themeKey.includes('dark') || themeKey === 'dracula' || themeKey === 'monokai' || themeKey === 'nord' || themeKey === 'tokyo-night' || themeKey === 'catppuccin-mocha';
                
                return (
                  <button
                    key={themeKey}
                    type="button"
                    onClick={(e) => handleThemeButtonClick(e, themeKey as GitHubTheme)}
                    className={`w-full flex items-center justify-between px-2 py-2 rounded text-sm transition-colors ${
                      isSelected 
                        ? 'bg-[#edfc3a]/20 text-[#edfc3a]' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Theme preview */}
                      <div className="flex gap-1">
                        <div className={`w-3 h-3 rounded-sm ${
                          isThemeDark ? 'bg-gray-700' : 'bg-gray-200'
                        }`} />
                        <div className={`w-3 h-3 rounded-sm ${
                          isThemeDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`} />
                        <div className={`w-3 h-3 rounded-sm ${
                          isThemeDark ? 'bg-gray-500' : 'bg-gray-400'
                        }`} />
                      </div>
                      <span>{themeName}</span>
                    </div>
                    
                    {isSelected && (
                      <Check className="h-4 w-4 text-[#edfc3a]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
