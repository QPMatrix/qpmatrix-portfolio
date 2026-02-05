import { styled } from '@mui/material';
import { QPDiv } from '../ui/QPDiv';
import { pxToRem } from '~/libs/theme/utils';

export const DrawerHeader = styled(QPDiv)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `${pxToRem(1)} solid ${theme.palette.divider}`,
}));

export const SidebarContainer = styled(QPDiv)(({ theme }) => ({
  width: pxToRem(280), // Classic sidebar width
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? '#111122' : '#ffffff', // Slightly lighter/distinct background
}));

export const FlexSpacer = styled(QPDiv)({
  flexGrow: 1,
});

export const SidebarFooter = styled(QPDiv)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `${pxToRem(1)} solid ${theme.palette.divider}`,
  display: 'flex',
  justifyContent: 'center',
}));
