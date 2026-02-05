import React, { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react';
import createEmotionCache from './caches/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, type PaletteMode } from '@mui/material';
import { createAppTheme } from './theme';
import { useFetcher } from 'react-router';

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
  initialTheme: PaletteMode;
};

const cache = createEmotionCache();

/**
 * Global Theme Provider wrapping MUI and Emotion.
 * Manages Dark/Light mode state via SSR cookies.
 * @param {ThemeProviderProps} props - The props.
 * @returns {ReactNode} The provider component.
 */
const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps): ReactNode => {
  const fetcher = useFetcher();

  // Optimistic UI: If submitting, use the submitted value. Otherwise use server state.
  const optimisticMode = fetcher.formData?.get('themeMode') as PaletteMode;
  const mode =
    optimisticMode && (optimisticMode === 'light' || optimisticMode === 'dark')
      ? optimisticMode
      : initialTheme;

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = useCallback((): void => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    fetcher.submit({ themeMode: newMode }, { method: 'post', action: '/api/theme' });
  }, [mode, fetcher]);

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
