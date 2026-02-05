import { styled, Link as MuiLink } from '@mui/material';
import { QPDiv } from '../ui/QPDiv';
import { pxToRem } from '~/libs/theme/utils';

export const FooterContainer = styled(QPDiv)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 15, 35, 0.98)' : '#f0f2f5',
  borderTop: `${pxToRem(1)} solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
  padding: theme.spacing(6, 2),
  marginTop: 'auto',
  color: theme.palette.text.primary,
}));

export const FooterContent = styled(QPDiv)(({ theme }) => ({
  maxWidth: pxToRem(1200),
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1.5fr 1fr 1fr',
    gap: theme.spacing(8),
  },
}));

export const FooterSection = styled(QPDiv)({
  display: 'flex',
  flexDirection: 'column',
  gap: pxToRem(16),
});

export const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const SocialLinks = styled(QPDiv)({
  display: 'flex',
  gap: pxToRem(16),
});

export const CopyrightBar = styled(QPDiv)(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(3),
  borderTop: `${pxToRem(1)} solid ${theme.palette.divider}`,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
