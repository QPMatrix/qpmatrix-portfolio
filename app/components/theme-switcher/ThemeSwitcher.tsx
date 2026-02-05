import { IconButton, Tooltip } from '@mui/material';
import type { FC } from 'react';
import { useThemeContext } from '~/libs/theme/ThemeProvider';
// Icons (using generic text/emoji if icons not installed, but usually we'd import from @mui/icons-material)
// Since user didn't explicitly ask for icons package, I'll use emoji or SVG for now, or assume they have it?
// Looking at package.json, icons are not installed. I'll use simple SVGs or text for now to avoid breaking build.

/**
 * Component to toggle between light and dark themes.
 * @returns {ReactNode} The rendered ThemeSwitcher.
 */
export const ThemeSwitcher: FC = () => {
  const { mode, toggleTheme } = useThemeContext();

  const isDark = mode === 'dark';

  return (
    <Tooltip title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? (
           // Sun Icon
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
        ) : (
           // Moon Icon
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </IconButton>
    </Tooltip>
  );
};
