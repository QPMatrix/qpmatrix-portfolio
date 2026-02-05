import { type PaletteMode, type PaletteOptions } from '@mui/material';

// High-Tech Brand Colors
// High-Tech Brand Colors - Refined Soft Palette
const BrandColors = {
  // Primary (Cyan/Blue - Softer)
  primary: {
    main: '#00B8CC', // Slightly darker/softer cyan
    light: '#5CFFFF',
    dark: '#008A99',
    contrastText: '#000000',
  },
  // Secondary (Purple - Softer)
  secondary: {
    main: '#7000FF',
    light: '#B266FF',
    dark: '#4700B3',
    contrastText: '#FFFFFF',
  },
  // Backgrounds
  dark: {
    default: '#121212', // Material Design Dark (Softer than #050510)
    paper: '#1E2329', // Blue-grey tint, readable
  },
  light: {
    default: '#F7F9FC', // Cool Grey (Softer than #F5F5FA)
    paper: '#FFFFFF',
  },
  // Text
  text: {
    dark: {
      primary: '#E0E0E0', // Soft White (High readability)
      secondary: '#B0B0B0', // Light Grey
    },
    light: {
      primary: '#1A2027', // Soft Black (Gunmetal)
      secondary: '#5E6C79', // Slate Grey
    },
  },
  // Status
  success: '#00E676',
  warning: '#FFC400',
  error: '#FF5252',
  info: '#00B8CC',
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
