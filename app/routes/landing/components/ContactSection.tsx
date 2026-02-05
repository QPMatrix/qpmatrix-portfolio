import type { ReactNode } from 'react';
import { TextField, Grid } from '@mui/material';
import { QPButton, QPContainer, QPSection, QPTitle } from '~/components/ui';
import {
  StyledContactCard,
  IntroText,
  SubmitButtonWrapper,
} from '~/routes/landing/styles/ContactStyles';

import { MotionBox } from '~/components/ui/Motion';

export const ContactSection = (): ReactNode => {
  return (
    <QPSection id="contact">
      <QPContainer maxWidth="md" sx={{ py: 10 }}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <StyledContactCard>
            <QPTitle variant="h2" sx={{ mb: 2 }}>
              Let&apos;s Talk
            </QPTitle>
            <IntroText>
              Ready to start your next project? Send us a message and we&apos;ll get back to you shortly.
            </IntroText>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Email" variant="outlined" type="email" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <SubmitButtonWrapper>
                  <QPButton size="large" sx={{ px: 8 }}>
                    Send Message
                  </QPButton>
                </SubmitButtonWrapper>
              </Grid>
            </Grid>
          </StyledContactCard>
        </MotionBox>
      </QPContainer>
    </QPSection>
  );
};
