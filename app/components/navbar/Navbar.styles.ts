import { AppBar, Toolbar, Typography, Box, styled } from '@mui/material';
import { QPButton } from '../ui/QPButton';

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(5, 5, 16, 0.8)' : '#ffffff',
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundImage: 'none',
  boxShadow: 'none',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

export const NavbarToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 24px',
});

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

export const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileMenuButton = styled(QPButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));
