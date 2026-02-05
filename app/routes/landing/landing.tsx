import type { ReactNode } from 'react';
import type { Route } from './+types/landing';
import HeroSections from './components/HeroSections';
import { ServicesSection } from './components/ServicesSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';

/**
 * Meta tags for the home page.
 */
export function meta(_: Route.MetaArgs) {
  return [
    { title: 'QPMatrix - Digital Transformation & Software Solutions' },
    { 
      name: 'description', 
      content: 'QPMatrix provides top-tier web development, mobile apps, and cloud security solutions. Transform your business with our expert engineering.' 
    }
  ];
}

/**
 * The home page component.
 *
 * @returns {ReactNode} The home page.
 */
import { Box } from '@mui/material';

export default function Home(): ReactNode {
  return (
    <Box component="main" sx={{ overflowX: 'hidden' }}>
      <HeroSections />
      <ServicesSection />
      <FounderSection />
      <ContactSection />
    </Box>
  );
}
