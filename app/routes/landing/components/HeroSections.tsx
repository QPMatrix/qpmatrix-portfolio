import type { ReactNode } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box } from '@mui/material';
import { QPButton, QPContainer, QPSection } from '~/components/ui';
import {
  HeroWrapper,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  ScrollIndicator,
} from '~/routes/landing/styles/HeroStyles';

const MotionBox = motion(Box);
// ScrollIndicator is a styled component, so we can animate it directly if we wrap it or use motion()
const MotionScrollIndicator = motion(ScrollIndicator);

const HeroSections = (): ReactNode => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScrollToContact = () :void=> {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToServices = ():void => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QPSection sx={{ p: 0 }}>
      <HeroWrapper>
        <MotionBox 
          style={{ y: y1, opacity }}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          <QPContainer maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HeroTitle variant="h1">
                QPMatrix
              </HeroTitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <HeroSubtitle variant="h5">
                We are <strong>QPMatrix</strong>  a premier software consultancy delivering digital transformation, 
                enterprise grade security, and scalable cloud solutions. 
                We turn your complex challenges into elegant, high performance capabilities.
              </HeroSubtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ButtonGroup>
                <QPButton size="large" onClick={handleScrollToContact}>
                  Start Project
                </QPButton>
                <QPButton size="large" variant="outlined" color="primary" onClick={handleScrollToContact}>
                  Contact Us
                </QPButton>
              </ButtonGroup>
            </motion.div>
                  </QPContainer>
                  
        </MotionBox>
              <MotionScrollIndicator 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={handleScrollToServices}
        >
          <KeyboardArrowDown fontSize="large" color="action" />
        </MotionScrollIndicator>

      </HeroWrapper>
    </QPSection>
  );
};

export default HeroSections;