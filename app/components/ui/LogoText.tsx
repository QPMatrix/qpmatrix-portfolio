import { Typography, styled } from '@mui/material';

/**
 * Shared LogoText component with gradient styling.
 */
export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, #00F0FF 30%, #7000FF 90%)'
      : 'linear-gradient(45deg, #00B8CC 30%, #7000FF 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.02em',
  cursor: 'pointer',
}));
