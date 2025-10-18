import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GitHubTheme, GITHUB_THEMES } from '../lib/markdown/processor';

interface CodeThemeContextType {
  theme: GitHubTheme;
  setTheme: (theme: GitHubTheme) => void;
  availableThemes: typeof GITHUB_THEMES;
  isDarkTheme: boolean;
}

const CodeThemeContext = createContext<CodeThemeContextType | undefined>(undefined);

interface CodeThemeProviderProps {
  children: ReactNode;
}

/**
 * Provider for code theme management
 * Handles theme persistence and provides theme switching functionality
 */
export function CodeThemeProvider({ children }: CodeThemeProviderProps) {
  const [theme, setThemeState] = useState<GitHubTheme>('github-dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('code-theme') as GitHubTheme;
    if (savedTheme && GITHUB_THEMES[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  const setTheme = (newTheme: GitHubTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('code-theme', newTheme);
  };

  // Determine if current theme is dark
  const isDarkTheme = theme.includes('dark') || theme === 'dracula' || theme === 'monokai' || theme === 'nord' || theme === 'tokyo-night' || theme === 'catppuccin-mocha';

  const value: CodeThemeContextType = {
    theme,
    setTheme,
    availableThemes: GITHUB_THEMES,
    isDarkTheme,
  };

  return (
    <CodeThemeContext.Provider value={value}>
      {children}
    </CodeThemeContext.Provider>
  );
}

/**
 * Hook to use code theme context
 * @returns Code theme context value
 */
export function useCodeTheme(): CodeThemeContextType {
  const context = useContext(CodeThemeContext);
  if (context === undefined) {
    throw new Error('useCodeTheme must be used within a CodeThemeProvider');
  }
  return context;
}

/**
 * Safe hook to use code theme context with fallback
 * Returns default values if CodeThemeProvider is not available
 * @returns Code theme context value or fallback values
 */
export function useSafeCodeTheme(): CodeThemeContextType {
  const context = useContext(CodeThemeContext);
  if (context === undefined) {
    // Return fallback values when context is not available
    return {
      theme: 'github-dark' as GitHubTheme,
      setTheme: () => {}, // No-op function
      availableThemes: GITHUB_THEMES,
      isDarkTheme: true,
    };
  }
  return context;
}
