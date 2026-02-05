import type { Components, Theme } from '@mui/material';
import { LinkBehavior } from '~/components/links';

/**
 * Component overrides to enforce the High-Tech aesthetic.
 * @param {Theme} theme - The base theme instance.
 * @returns {Components<Theme>} The component overrides.
 */
export const getComponents = (theme: Theme): Components<Theme> => {
  const isDark = theme.palette.mode === 'dark';

  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: isDark ? '#333 #050510' : '#ccc #f5f5f5',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: isDark ? '#050510' : '#f5f5f5',
            width: 8,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: isDark ? '#333' : '#ccc',
            minHeight: 24,
            border: isDark ? '2px solid #050510' : '2px solid #f5f5f5',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Modern rounded corners
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          ...(isDark && {
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)', // Neon glow
            '&:hover': {
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)',
              transform: 'translateY(-1px)',
            },
          }),
        },
        containedSecondary: {
          ...(isDark && {
            boxShadow: '0 0 10px rgba(112, 0, 255, 0.3)', // Neon glow
          }),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ...(isDark && {
            backgroundImage: 'none', // Remove default material overlay
            backgroundColor: 'rgba(10, 10, 31, 0.7)', // Glassmorphism base
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          ...(isDark && {
            background: 'linear-gradient(145deg, rgba(10,10,31,0.9) 0%, rgba(5,5,16,0.95) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.1)',
          }),
        },
      },
    },
  };
};
