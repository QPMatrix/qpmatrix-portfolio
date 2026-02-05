import { createTheme, type Theme, type PaletteMode } from '@mui/material';
import { getPalette } from './configs/colors';
import { typography } from './configs/typography';
import { getComponents } from './configs/components';
import { breakpoints } from './configs/breakpoints';

/**
 * Creates the application theme based on the desired mode.
 * @param {PaletteMode} mode - 'light' or 'dark'.
 * @returns {Theme} The complete MUI theme.
 */
export const createAppTheme = (mode: PaletteMode): Theme => {
  // 1. Create base theme to generate palette (needed for components)
  let theme = createTheme({
    palette: getPalette(mode),
    typography,
    breakpoints,
    shape: {
      borderRadius: 12, // More modern default
    },
  });

  // 2. Inject component overrides which depend on the palette
  theme = createTheme(theme, {
    components: getComponents(theme),
  });

  return theme;
};

// Default export for backward compatibility if needed, though we prefer createAppTheme
export default createAppTheme('dark');
