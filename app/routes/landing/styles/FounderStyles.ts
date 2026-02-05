import { Box, Typography, styled } from '@mui/material';

export const FounderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0, // Remove gap to allow overlap
  },
}));

export const FounderImageContainer = styled(Box)(({ theme }) => ({
  flex: '1.2', // Image takes slightly more space
  position: 'relative',
  zIndex: 1,
  perspective: '1000px',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

export const FounderImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  borderRadius: '24px',
  // Organic rounded shape variation
  borderTopLeftRadius: '24px',
  borderBottomRightRadius: '24px',
  borderTopRightRadius: '100px',
  borderBottomLeftRadius: '40px',
  boxShadow: theme.shadows[20],
  position: 'relative',
  zIndex: 1,
  aspectRatio: '0.9', // Slightly taller portrait
  objectFit: 'cover',
  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  filter: 'grayscale(20%) contrast(1.1)',
  border: `1px solid ${theme.palette.divider}`,
  
  '&:hover': {
    filter: 'grayscale(0%) contrast(1.2)',
    transform: 'rotate(-2deg) scale(1.02)',
    boxShadow: `0 20px 40px -10px ${theme.palette.primary.main}50`,
  },
}));

export const FounderContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  position: 'relative',
  zIndex: 2,
  
  // Glassmorphic Card Effect
  backdropFilter: 'blur(16px)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(20, 20, 25, 0.6)' 
    : 'rgba(255, 255, 255, 0.7)',
  padding: theme.spacing(6),
  borderRadius: '32px',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[10],
  
  [theme.breakpoints.up('md')]: {
    marginLeft: '-80px', // Overlap effect
    padding: theme.spacing(8),
  },
}));

export const FounderName = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '3.5rem',
  lineHeight: 1,
  letterSpacing: '-1px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(1),
  fontFamily: '"Inter", sans-serif',
}));

export const FounderRole = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  opacity: 0.8,
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '&::after': {
    content: '""',
    height: '1px',
    flex: 1,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
  }
}));

export const BioText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  fontSize: '1.05rem',
  marginBottom: theme.spacing(1),
}));

export const FounderActions = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  gap: theme.spacing(2),
}));
