import { styled } from '@mui/material';
import { QPDiv } from '../ui/QPDiv';

export const DrawerHeader = styled(QPDiv)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const SidebarContainer = styled(QPDiv)({
  width: 280, // Classic sidebar width
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const FlexSpacer = styled(QPDiv)({
  flexGrow: 1,
});

export const SidebarFooter = styled(QPDiv)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  justifyContent: 'center',
}));
