import React, { type ReactNode } from 'react';
import createEmotionCache from './caches/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from './theme';

type ThemeProviderProps = {
  children: ReactNode;
};
const cache = createEmotionCache();

const ThemeProvider = ({ children }: ThemeProviderProps): ReactNode => {
  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
