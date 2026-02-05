import { type PaletteMode, type PaletteOptions } from '@mui/material';

// High-Tech Brand Colors
const BrandColors = {
  // Primary (Neon Blue/Cyan)
  primary: {
    main: '#00F0FF',
    light: '#5CFFFF',
    dark: '#00B8CC',
    contrastText: '#000000',
  },
  // Secondary (Neon Purple/Pink)
  secondary: {
    main: '#7000FF',
    light: '#B266FF',
    dark: '#4700B3',
    contrastText: '#FFFFFF',
  },
  // Backgrounds
  dark: {
    default: '#050510', // Deep space blue/black
    paper: '#0A0A1F', // Slightly lighter
  },
  light: {
    default: '#F5F5FA',
    paper: '#FFFFFF',
  },
  // Text
  text: {
    dark: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    light: {
      primary: '#050510',
      secondary: 'rgba(5, 5, 16, 0.7)',
    },
  },
  // Status
  success: '#00FF9D',
  warning: '#FFD600',
  error: '#FF003C',
  info: '#00F0FF',
};

/**
 * Returns the palette options based on the mode.
 * @param {PaletteMode} mode - The current palette mode (light or dark).
 * @returns {PaletteOptions} The palette configuration.
 */
export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === 'dark'
    ? {
        // Dark Mode Palette
        primary: BrandColors.primary,
        secondary: BrandColors.secondary,
        background: {
          default: BrandColors.dark.default,
          paper: BrandColors.dark.paper,
        },
        text: BrandColors.text.dark,
        success: { main: BrandColors.success },
        warning: { main: BrandColors.warning },
        error: { main: BrandColors.error },
        info: { main: BrandColors.info },
      }
    : {
        // Light Mode Palette
        primary: {
          ...BrandColors.primary,
          main: '#00B8CC', // Slightly darker for light mode contrast
          contrastText: '#FFFFFF',
        },
        secondary: BrandColors.secondary,
        background: {
          default: BrandColors.light.default,
          paper: BrandColors.light.paper,
        },
        text: BrandColors.text.light,
        success: { main: BrandColors.success },
        warning: { main: BrandColors.warning },
        error: { main: BrandColors.error },
        info: { main: BrandColors.info },
      }),
});

export default BrandColors;
