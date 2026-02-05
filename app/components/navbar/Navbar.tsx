import { type FC, type ReactNode, useState } from 'react';
import { QPButton } from '../ui/QPButton';
import {
  NavbarContainer,
  NavbarToolbar,
  LogoText,
  NavItems,
  MobileMenuButton,
} from './Navbar.styles';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { Sidebar } from '../sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Responsive Navigation Bar component.
 * Features a glassmorphism effect and gradient logo.
 * @returns {ReactNode} The rendered Navbar.
 */
export const Navbar: FC = (): ReactNode => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavbarContainer position="sticky">
        <NavbarToolbar>
          <LogoText variant="h5">QPMatrix</LogoText>

          {/* Desktop Navigation */}
          <NavItems>
            <QPButton variant="text" color="inherit" href="/">
              News
            </QPButton>
            <QPButton variant="text" color="inherit" href="/about">
              About
            </QPButton>
            <QPButton variant="contained" color="primary">
              Login
            </QPButton>
            {/* Theme Switcher for Desktop */}
            <ThemeSwitcher />
          </NavItems>

          {/* Mobile View Toggle */}
          <MobileMenuButton variant="text" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MobileMenuButton>
        </NavbarToolbar>
      </NavbarContainer>

      {/* Mobile Sidebar */}
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};
