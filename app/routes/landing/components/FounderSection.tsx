import type { ReactNode } from 'react';
import { QPButton, QPContainer, QPDiv, QPSection, QPTitle } from '~/components/ui';
import { motion } from 'framer-motion';
import {
  FounderWrapper,
  FounderImageContainer,
  FounderImage,
  FounderContent,
  BioText,
  FounderActions,
  FounderName,
  FounderRole,
} from '~/routes/landing/styles/FounderStyles';
import { founderImage } from '../assets/images';

import { MotionQPDiv } from '~/components/ui/Motion';

// We can wrap styled components too
const MotionFounderImageContainer = motion(FounderImageContainer);
const MotionFounderContent = motion(FounderContent);
const MotionFounderName = motion(FounderName);
const MotionFounderRole = motion(FounderRole);

export const FounderSection = (): ReactNode => {
  return (
    <QPSection id="founder" sx={{ overflow: 'visible', py: 12 }}>
      <QPContainer>
        <MotionQPDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Optional: Remove standard section title if it clashes, or keep it subtle */}
          <QPTitle variant="h2" sx={{ mb: 10, textAlign: 'center', opacity: 0.4 }}>
            Visionary
          </QPTitle>
        </MotionQPDiv>
        
        <FounderWrapper>
          <MotionFounderImageContainer
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <QPDiv sx={{ position: 'relative' }}>
                {/* Decorative blob behind image */}
                <QPDiv sx={{
                    position: 'absolute',
                    top: '-20%', left: '-20%',
                    width: '140%', height: '140%',
                    background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    filter: 'blur(50px)',
                    opacity: 0.6
                }}/>
                <FounderImage 
                src={founderImage} 
                alt="QPMatrix Founder" 
                />
            </QPDiv>
          </MotionFounderImageContainer>
          
          <MotionFounderContent
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          >
            <QPDiv>
                <MotionFounderName
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                Hasan
                </MotionFounderName>
                
                <MotionFounderRole
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                Lead Software Architect
                </MotionFounderRole>
            </QPDiv>
            
            <BioText>
              I founded <strong>QPMatrix</strong> with a singular vision to bridge the gap between complex technical challenges and elegant, user centric solutions. With over a decade of experience in full stack development and cloud architecture, I help businesses transform their digital presence.
            </BioText>
            
            <BioText>
              My philosophy is simple Code should be as beautiful as the design it powers. Whether you need a robust enterprise platform or a high performance mobile app, I bring a craftsman&apos;s attention to detail to every project.
            </BioText>

            <FounderActions>
              <QPButton size="large" href="/founder">
                Learn More
              </QPButton>
              <QPButton size="large" variant="outlined" color="primary">
                Download CV
              </QPButton>
            </FounderActions>
          </MotionFounderContent>
        </FounderWrapper>
      </QPContainer>
    </QPSection>
  );
};
