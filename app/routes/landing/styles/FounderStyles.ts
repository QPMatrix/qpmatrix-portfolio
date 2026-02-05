import { Box, Typography, styled } from '@mui/material';

export const FounderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(10),
  },
}));

export const FounderImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '120%',
    height: '120%',
    background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}40, transparent 70%)`,
    zIndex: 0,
    filter: 'blur(40px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10%',
    right: '-10%',
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at 70% 70%, ${theme.palette.secondary.main}40, transparent 70%)`,
    zIndex: 0,
    filter: 'blur(40px)',
  },
}));

export const FounderImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  borderRadius: 8,
  boxShadow: theme.shadows[10],
  position: 'relative',
  zIndex: 1,
  aspectRatio: '1/1',
  objectFit: 'cover',
  backgroundColor: theme.palette.action.hover, // Placeholder color
}));

export const FounderContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const BioText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  fontSize: '1.1rem',
}));

export const FounderActions = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(2),
}));
