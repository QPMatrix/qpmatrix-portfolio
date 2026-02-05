import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import type { FC, ReactNode } from 'react';
import { useThemeContext } from '~/libs/theme/ThemeProvider';

/**
 * Component to toggle between light and dark themes.
 * @returns {ReactNode | null} The rendered ThemeSwitcher.
 */
export const ThemeSwitcher: FC = (): ReactNode | null => {
  const { mode, toggleTheme } = useThemeContext();

  const isDark = mode === 'dark';

  return (
    <Tooltip title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};
