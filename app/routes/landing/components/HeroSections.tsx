import type { ReactNode } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { QPButton, QPContainer, QPSection } from '~/components/ui';
import {
  HeroWrapper,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  ScrollIndicator,
} from '~/routes/landing/styles/HeroStyles';

const HeroSections = (): ReactNode => {
  const handleScrollToServices = () :void  => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = ():void => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QPSection>
      <HeroWrapper>
        <QPContainer maxWidth="md">
          <HeroTitle variant="h1">
            QPMatrix
          </HeroTitle>
          
          <HeroSubtitle variant="h5">
            We are <strong>QPMatrix</strong>  a premier software consultancy delivering digital transformation, 
            enterprise grade security, and scalable cloud solutions. 
            We turn your complex challenges into elegant, high performance capabilities.
          </HeroSubtitle>

          <ButtonGroup>
            <QPButton size="large" onClick={handleScrollToContact}>
              Start Project
            </QPButton>
            <QPButton size="large" variant="outlined" color="primary" onClick={handleScrollToContact}>
              Contact Us
            </QPButton>
          </ButtonGroup>
        </QPContainer>

        <ScrollIndicator onClick={handleScrollToServices}>
          <KeyboardArrowDown fontSize="large" color="action" />
        </ScrollIndicator>
      </HeroWrapper>
    </QPSection>
  );
};

export default HeroSections;