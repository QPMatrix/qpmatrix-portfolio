

/**
 * Responsive Navigation Bar component.
 * Features a glassmorphism effect and gradient logo.
 * @returns {ReactNode} The rendered Navbar.
 */
import { type FC, type ReactNode, useState } from 'react';
import { useLocation, NavLink as RouterNavLink } from 'react-router';
import { NavbarContainer, NavbarToolbar, NavItems, MobileMenuButton, LogoWrapper, NavActions, StyledNavLink } from './Navbar.styles';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { Sidebar } from '../sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoText } from '../ui/LogoText';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MotionBox } from '~/components/ui/Motion';

// Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

/**
 * Responsive Navigation Bar component.
 * Features a glassmorphism effect and gradient logo.
 * @returns {ReactNode} The rendered Navbar.
 */
export const Navbar: FC = (): ReactNode => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeRoundedIcon fontSize="small" /> },
    { name: 'Services', path: '/#services', icon: <BusinessCenterRoundedIcon fontSize="small" /> },
    { name: 'Projects', path: '/projects', icon: <CodeRoundedIcon fontSize="small" /> },
    { name: 'Founder', path: '/founder', icon: <PersonRoundedIcon fontSize="small" /> },
    { name: 'Contact', path: '/#contact', icon: <EmailRoundedIcon fontSize="small" /> },
  ];

  return (
    <>
      <NavbarContainer position="sticky">
        <NavbarToolbar>
          <LogoWrapper>
             <a href="/">
                <LogoText variant="h5">QPMatrix</LogoText>
             </a>
          </LogoWrapper>

          {/* Desktop Navigation */}
          <NavItems>
            {navLinks.map((item) => {
               const isActive = location.pathname === item.path || (item.path !== '/' && location.hash === item.path.replace('/',''));
               
               return (
                <StyledNavLink 
                  key={item.name}
                  href={item.path}
                >
                  {isActive && (
                    <MotionBox
                      layoutId="navbar-active"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 184, 204, 0.1)',
                        borderRadius: '50px',
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center', color: isActive ? 'primary.main' : 'inherit' }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    fontWeight={isActive ? 700 : 500}
                    color={isActive ? 'primary.main' : 'inherit'}
                  >
                    {item.name}
                  </Typography>
                </StyledNavLink>
               )
            })}
          </NavItems>

          <NavActions>
            {/* Theme Switcher for Desktop */}
            <ThemeSwitcher />
            
            {/* Mobile View Toggle */}
            <MobileMenuButton variant="text" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </MobileMenuButton>
          </NavActions>

        </NavbarToolbar>
      </NavbarContainer>

      {/* Mobile Sidebar */}
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};
