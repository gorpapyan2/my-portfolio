import { createContext, useContext, ReactNode } from 'react';

/**
 * @deprecated This context is deprecated. Code themes now automatically sync with the main app theme.
 * Use ThemeContext from './ThemeContext' instead.
 * This is kept for backward compatibility only.
 */

// Legacy theme types for backward compatibility
export const GITHUB_THEMES = {
  'github-dark': 'GitHub Dark',
  'github-light': 'GitHub Light', 
  'dark-plus': 'VS Code Dark+',
  'light-plus': 'VS Code Light+',
  'dark-modern': 'Dark Modern',
  'light-modern': 'Light Modern',
  'min-dark': 'Minimal Dark',
  'min-light': 'Minimal Light',
  'one-dark-pro': 'One Dark Pro',
  'dracula': 'Dracula',
  'monokai': 'Monokai',
  'nord': 'Nord',
  'tokyo-night': 'Tokyo Night',
  'catppuccin-mocha': 'Catppuccin Mocha',
  'catppuccin-latte': 'Catppuccin Latte',
} as const;

export type GitHubTheme = keyof typeof GITHUB_THEMES;

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
 * @deprecated Provider for code theme management - DEPRECATED
 * Code themes now automatically sync with the main app theme (ThemeProvider).
 * This provider is kept for backward compatibility but does nothing.
 * 
 * @see ThemeProvider from './ThemeContext' for the main theme management
 */
export function CodeThemeProvider({ children }: CodeThemeProviderProps) {
  // No-op provider for backward compatibility
  // Code themes now sync with main app theme automatically
  const value: CodeThemeContextType = {
    theme: 'github-dark',
    setTheme: () => {
      console.warn('CodeThemeContext.setTheme is deprecated. Code themes now sync with the main app theme automatically.');
    },
    availableThemes: GITHUB_THEMES,
    isDarkTheme: true,
  };

  return (
    <CodeThemeContext.Provider value={value}>
      {children}
    </CodeThemeContext.Provider>
  );
}

/**
 * @deprecated Hook to use code theme context - DEPRECATED
 * Use useTheme from './ThemeContext' instead.
 * Code themes now automatically sync with the main app theme.
 * @returns Code theme context value
 */
export function useCodeTheme(): CodeThemeContextType {
  const context = useContext(CodeThemeContext);
  if (context === undefined) {
    console.warn('useCodeTheme is deprecated. Use useTheme from ThemeContext instead.');
    return {
      theme: 'github-dark' as GitHubTheme,
      setTheme: () => {},
      availableThemes: GITHUB_THEMES,
      isDarkTheme: true,
    };
  }
  return context;
}

/**
 * @deprecated Safe hook to use code theme context with fallback - DEPRECATED
 * Use useTheme from './ThemeContext' instead.
 * Code themes now automatically sync with the main app theme.
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
