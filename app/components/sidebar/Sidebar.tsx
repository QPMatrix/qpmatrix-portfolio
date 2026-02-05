import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, styled, Typography } from '@mui/material';
import type { FC } from 'react';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { QPButton } from '../ui/QPButton';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SidebarContainer = styled(Box)({
  width: 280, // Classic sidebar width
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const FlexSpacer = styled(Box)({
  flexGrow: 1,
});

const SidebarFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  justifyContent: 'center',
}));

export const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <SidebarContainer role="presentation">
        <DrawerHeader>
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
          <ThemeSwitcher />
        </DrawerHeader>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/" onClick={onClose}>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/about" onClick={onClose}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>

        <FlexSpacer />

        <Box p={2}>
           <QPButton fullWidth variant="contained" color="primary">
             Login
           </QPButton>
        </Box>

        <SidebarFooter>
          <Typography variant="caption" color="text.secondary">
            © 2026 QPMatrix
          </Typography>
        </SidebarFooter>
      </SidebarContainer>
    </Drawer>
  );
};
