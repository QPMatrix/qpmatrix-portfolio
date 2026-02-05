import type { TypographyVariantsOptions } from '@mui/material/styles';
import { pxToRem } from '../utils';

/**
 * Typography configuration.
 * Uses 'Inter' as the primary font family.
 */
export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(56), // 3.5rem
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(40), // 2.5rem
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(32), // 2rem
    lineHeight: 1.3,
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(24), // 1.5rem
    lineHeight: 1.3,
  },
  h5: {
    fontWeight: 600,
    fontSize: pxToRem(20), // 1.25rem
    lineHeight: 1.4,
  },
  h6: {
    fontWeight: 600,
    fontSize: pxToRem(16), // 1rem
    lineHeight: 1.4,
  },
  button: {
    fontWeight: 600,
    textTransform: 'none', // Modern feel, no all-caps
    letterSpacing: '0.01em',
  },
};
