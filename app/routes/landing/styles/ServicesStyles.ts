import { styled, Typography } from '@mui/material';

export const ServiceIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: '20px',
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
    : `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`,
  marginBottom: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  '.MuiSvgIcon-root': {
    fontSize: '2.5rem',
    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
  },
}));

export const ServiceCardContent = styled('div')(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  transition: 'all 0.4s ease',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.02)' 
    : 'rgba(255, 255, 255, 0.6)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.palette.mode === 'dark'
      ? `0 20px 40px -10px ${theme.palette.primary.main}40, 0 0 20px ${theme.palette.secondary.main}20 inset`
      : `0 20px 40px -10px ${theme.palette.primary.main}20, 0 0 20px ${theme.palette.secondary.main}10 inset`,
    borderColor: theme.palette.primary.main,
    [`& ${ServiceIconWrapper}`]: {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      transform: 'scale(1.1) rotate(5deg)',
      boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
      '.MuiSvgIcon-root': {
        color: '#fff',
      },
    },
  },
}));

export const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  marginBottom: theme.spacing(1),
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));
