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
  let theme = createTheme({
    palette: getPalette(mode),
    typography,
    breakpoints,
    shape: {
      borderRadius: 12,
    },
  });

  theme = createTheme(theme, {
    components: getComponents(theme),
  });

  return theme;
};

export default createAppTheme('dark');
