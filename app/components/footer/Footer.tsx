import { Typography, IconButton, Link } from '@mui/material';
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
  CopyrightBar} from './Footer.styles';
import { QPDiv } from '../ui';

export const Footer: FC = () => {
  return (
    <FooterContainer component="footer">
      <FooterContent>
        {/* Brand Section */}
        <FooterSection sx={{ maxWidth: '350px' }}>
          <LogoText variant="h5">QPMatrix</LogoText>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            Empowering the future with high technical excellence. We build the matrix of tomorrow, delivering scalable, secure, and aesthetic solutions for modern businesses.
          </Typography>
        </FooterSection>

        {/* Quick Links - Center */}
        <FooterSection>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Explore
          </Typography>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/#services">Services</FooterLink>
          <FooterLink href="/founder">Founder</FooterLink>
          <FooterLink href="/#contact">Contact</FooterLink>
        </FooterSection>

        {/* Social / Contact */}
        <FooterSection>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Connect
          </Typography>
          <SocialLinks>
            <IconButton 
              color="inherit" 
              aria-label="GitHub"
              component="a"
              href="https://github.com/hasan-qpmatrix" // Placeholder
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="Twitter"
              component="a"
              href="#"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="LinkedIn"
              component="a"
              href="#"
            >
              <LinkedInIcon />
            </IconButton>
          </SocialLinks>
          <Link href="mailto:hasan@qpmatrix.tech" underline="hover" sx={{ mt: 1 }}>
            <Typography variant="body2" color="primary" fontWeight={500}>
             hasan@qpmatrix.tech
            </Typography>
          </Link>
        </FooterSection>
      </FooterContent>

      <CopyrightBar>
        <Typography variant="body2">
          © {new Date().getFullYear()} QPMatrix. All rights reserved.
        </Typography>
        <QPDiv sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="text.disabled" underline="hover" variant="caption">Privacy Policy</Link>
            <Link href="#" color="text.disabled" underline="hover" variant="caption">Terms of Service</Link>
        </QPDiv>
      </CopyrightBar>
    </FooterContainer>
  );
};
