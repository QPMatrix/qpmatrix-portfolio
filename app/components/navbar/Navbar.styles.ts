import { AppBar, Toolbar, styled } from '@mui/material';
import { QPButton } from '../ui/QPButton';
import { QPDiv } from '../ui/QPDiv';
import { pxToRem } from '~/libs/theme/utils';

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(10, 10, 31, 0.95)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: `blur(${pxToRem(12)})`,
  borderBottom: `${pxToRem(1)} solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
  backgroundImage: 'none',
  boxShadow: theme.shadows[1],
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  color: theme.palette.text.primary,
}));

export const NavbarToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${pxToRem(24)}`,
});



export const NavItems = styled(QPDiv)(({ theme }) => ({
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
