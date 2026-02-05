import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import type { FC } from 'react';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { QPButton } from '../ui/QPButton';
import { QPDiv } from '../ui/QPDiv';
import { SidebarContainer, DrawerHeader, FlexSpacer, SidebarFooter } from './Sidebar.styles';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

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

        <QPDiv p={2}>
          <QPButton fullWidth variant="contained" color="primary">
            Login
          </QPButton>
        </QPDiv>

        <SidebarFooter>
          <Typography variant="caption" color="text.secondary">
            © 2026 QPMatrix
          </Typography>
        </SidebarFooter>
      </SidebarContainer>
    </Drawer>
  );
};
