import type { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { QPButton, QPContainer, QPSection, QPTitle } from '~/components/ui';
import {
  FounderWrapper,
  FounderImageContainer,
  FounderImage,
  FounderContent,
  BioText,
  FounderActions,
} from '~/routes/landing/styles/FounderStyles';

export const FounderSection = (): ReactNode => {
  return (
    <QPSection id="founder">
      <QPContainer sx={{ py: 10 }}>
        <QPTitle variant="h2" sx={{ mb: 6 }}>
          Meet the Founder
        </QPTitle>
        
        <FounderWrapper>
          <FounderImageContainer>
            <FounderImage 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="QPMatrix Founder" 
            />
          </FounderImageContainer>
          
          <FounderContent>
            <Typography variant="h4" fontWeight="bold" color="primary">
              Hasan
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Lead Software Architect
            </Typography>
            
            <BioText>
              I founded <strong>QPMatrix</strong> with a singular vision: to bridge the gap between complex technical challenges and elegant, user-centric solutions. With over a decade of experience in full-stack development and cloud architecture, I help businesses transform their digital presence.
            </BioText>
            
            <BioText>
              My philosophy is simple: Code should be as beautiful as the design it powers. Whether you need a robust enterprise platform or a high-performance mobile app, I bring a craftsman&apos;s attention to detail to every project.
            </BioText>

            <FounderActions>
              <QPButton size="large" onClick={() => window.open('https://qpmatrix.tech', '_blank')}>
                Learn More
              </QPButton>
              <QPButton size="large" variant="outlined" color="primary">
                Download CV
              </QPButton>
            </FounderActions>
          </FounderContent>
        </FounderWrapper>
      </QPContainer>
    </QPSection>
  );
};
