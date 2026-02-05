import { Box, Typography, styled, keyframes } from '@mui/material';
import { pxToRem } from '~/libs/theme/utils';

// Animations
const aurora = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 184, 204, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(0, 184, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 184, 204, 0); }
`;

export const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  // Aurora Mesh Gradient Background
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #00B8CC)'
    : 'linear-gradient(-45deg, #f3f4f6, #e0e7ff, #c7d2fe, #a5f3fc)',
  backgroundSize: '400% 400%',
  animation: `${aurora} 15s ease infinite`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
      : 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.4) 100%)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: pxToRem(56),
  fontWeight: 900,
  letterSpacing: '-0.02em',
  marginBottom: theme.spacing(3),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light}, ${theme.palette.info.main})`,
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${float} 6s ease-in-out infinite`,
  textShadow: theme.palette.mode === 'dark' ? '0 0 40px rgba(0, 184, 204, 0.3)' : 'none',
  [theme.breakpoints.up('md')]: {
    fontSize: pxToRem(84),
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  maxWidth: '800px',
  marginBottom: theme.spacing(6),
  fontSize: pxToRem(18),
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('md')]: {
    fontSize: pxToRem(20),
  },
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: 0,
  right: 0,
  marginInline: 'auto',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0.7,
  animation: `${pulse} 2s infinite`,
  cursor: 'pointer',
}));
