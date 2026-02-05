import { Grid } from '@mui/material';
import { QPCard, QPContainer, QPSection, QPTitle } from '~/components/ui';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import type { ReactNode } from 'react';
import {
  ServiceCardContent,
  ServiceDescription,
  ServiceIconWrapper,
  ServiceTitle,
} from '~/routes/landing/styles/ServicesStyles';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Bespoke web applications tailored to your business needs, utilizing modern frameworks like Next.js and React for potential scaling.',
    icon: <CodeIcon color="primary" />,
  },
  {
    title: 'Mobile App Solutions',
    description: 'High-performance native and cross-platform mobile applications that ensure a seamless experience on both iOS and Android devices.',
    icon: <SmartphoneIcon color="secondary" />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Secure, scalable cloud infrastructure and CI/CD pipelines designed to optimize your operational efficiency and uptime.',
    icon: <CloudIcon color="info" />,
  },
  {
    title: 'Cybersecurity Audits',
    description: 'Comprehensive security assessments and implementation of robust protocols to safeguard your digital assets and customer data.',
    icon: <SecurityIcon color="error" />,
  },
];

export const ServicesSection = (): ReactNode => {
  return (
    <QPSection id="services">
      <QPContainer sx={{ py: 10 }}>
        <QPTitle variant="h2" sx={{ mb: 8 }}>
          What We Do
        </QPTitle>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <QPCard sx={{ height: '100%', overflow: 'hidden' }}>
                <ServiceCardContent>
                  <ServiceIconWrapper>
                    {service.icon}
                  </ServiceIconWrapper>
                  <ServiceTitle variant="h5">
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription variant="body1">
                    {service.description}
                  </ServiceDescription>
                </ServiceCardContent>
              </QPCard>
            </Grid>
          ))}
        </Grid>
      </QPContainer>
    </QPSection>
  );
};
