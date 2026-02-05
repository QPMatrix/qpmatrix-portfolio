import { Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { FC } from 'react';
import { LogoText } from '../ui/LogoText';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLink,
  SocialLinks,
  CopyrightBar,
} from './Footer.styles';

export const Footer: FC = () => {
  return (
    <FooterContainer component="footer">
      <FooterContent>
        {/* Brand Section */}
        <FooterSection>
          <LogoText variant="h5">QPMatrix</LogoText>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
            Empowering the future with high tech solutions. Building the matrix of tomorrow, today.
          </Typography>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <Typography variant="h6" fontWeight="bold">
            Product
          </Typography>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">Changelog</FooterLink>
        </FooterSection>

        {/* Social / Contact */}
        <FooterSection>
          <Typography variant="h6" fontWeight="bold">
            Connect
          </Typography>
          <SocialLinks>
            <IconButton color="inherit" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </SocialLinks>
          <Typography variant="body2" color="text.secondary">
            hasan@qpmatrix.tech
          </Typography>
        </FooterSection>
      </FooterContent>

      <CopyrightBar>
        <Typography variant="body2">
          © {new Date().getFullYear()} QPMatrix. All rights reserved.
        </Typography>
      </CopyrightBar>
    </FooterContainer>
  );
};
