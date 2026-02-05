import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import createEmotionCache from './caches/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, type PaletteMode } from '@mui/material';
import { createAppTheme } from './theme';

type ThemeContextType = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

const cache = createEmotionCache();

/**
 * Global Theme Provider wrapping MUI and Emotion.
 * Manages Dark/Light mode state.
 * @param {ThemeProviderProps} props - The props.
 * @returns {ReactNode} The provider component.
 */
const ThemeProvider = ({ children }: ThemeProviderProps): ReactNode => {
  // Lazy initialization to avoid effect and handle SSR safety check
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window !== 'undefined' && localStorage) {
      const savedMode = localStorage.getItem('themeMode') as PaletteMode;
      if (savedMode === 'light' || savedMode === 'dark') {
        return savedMode;
      }
    }
    return 'dark'; // Default to High-Tech dark
  });

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Use callback with functional state update to keep reference stable
  const toggleTheme = React.useCallback((): void => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  }, []);

  const contextValue = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <CacheProvider value={cache}>
      <ThemeContext.Provider value={contextValue}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
};

export default ThemeProvider;
