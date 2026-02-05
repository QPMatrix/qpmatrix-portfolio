import { type PaletteMode, type PaletteOptions } from '@mui/material';

// High-Tech Brand Colors
// High-End "Alive" Brand Colors
const BrandColors = {
  // Primary (Neon Cyan - Electric)
  primary: {
    main: '#00E5FF', 
    light: '#88FFFF',
    dark: '#00B2CC',
    contrastText: '#000000',
  },
  // Secondary (Deep Neon Purple)
  secondary: {
    main: '#7C4DFF',
    light: '#B47CFF',
    dark: '#3F1DCB',
    contrastText: '#FFFFFF',
  },
  // Backgrounds - True Black + Deep Space
  dark: {
    default: '#0A0A0F', // Very dark blue/black, not pure black, more premium
    paper: '#13131F', // Slightly lighter for cards
  },
  light: {
    default: '#FFFFFF',
    paper: '#F8F9FA',
  },
  // Text
  text: {
    dark: {
      primary: '#FFFFFF', // Pure White for max contrast
      secondary: '#B0B0C0', // Cool Grey
    },
    light: {
      primary: '#0A0A0F',
      secondary: '#4A4A5A',
    },
  },
  // Status - Vibrant
  success: '#00FF9D',
  warning: '#FFD600',
  error: '#FF2D55',
  info: '#00E5FF',
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
