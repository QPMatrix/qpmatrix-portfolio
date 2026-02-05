import type { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { QPContainer, QPDiv } from '~/components/ui';
import {
  PageWrapper,
  TimelineContainer,
  TimelineItem,
  TimelineYear,
  TimelineCard,
  SkillTag,
  AboutSection,
  InterestCard,
  GridContainer,
  HeroSection,
  AvatarWrapper,
  AvatarGlow,
  StyledAvatar,
  HeroGradientTitle,
  BioText,
  SectionHeader,
  SectionTitle,
  TimelineIconWrapper,
  SkillsWrapper,
  CTASection,
  CTAButton
} from './styles/FounderPageStyles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import type { Route } from './+types/founder';

/**
 * Meta tags for the Founder page.
 */
export function meta(_: Route.MetaArgs) {
    return [
        { title: 'Hasan Diab - Founder & Architect' },
        {
            name: 'description',
            content: 'Meet Hasan Diab, the founder of QPMatrix. Full Stack Developer, System Architect, and Technology Enthusiast.'
        }
    ];
}

const timelineData = [
  {
    year: 'Present',
    title: 'Full Stack Developer',
    company: 'Matrix',
    description: 'Developing robust, scalable enterprise applications. Focused on delivering high-quality code and optimizing system integrity for large scale deployments.',
    skills: ['Full Stack Development', 'Enterprise Systems', 'Scalability', 'System Integration'],
    icon: <BusinessCenterIcon fontSize="inherit" />,
    color: 'primary'
  },
  {
    year: '2021 - Present',
    title: 'Founder & Freelance Developer',
    company: 'QPMatrix',
    description: 'Leading a personal freelance consultancy. Delivering bespoke digital solutions, from web applications to cloud architecture, for a diverse range of clients.',
    skills: ['Freelancing', 'React/Next.js', 'System Architecture', 'Consulting'],
    icon: <RocketLaunchIcon fontSize="inherit" />,
    color: 'secondary'
  },
  {
    year: '2024 - 2025',
    title: 'Full Stack Pro Course',
    company: 'Technion - Israel Institute of Technology',
    description: 'Advanced professional training in modern full stack development, mastering cutting edge technologies and best practices in software engineering.',
    skills: ['Advanced Web Dev', 'Modern Frameworks', 'Software Architecture'],
    icon: <CodeIcon fontSize="inherit" />,
    color: 'info'
  },
  {
    year: '2021 - 2023',
    title: 'Practical Software Engineer',
    company: 'Ort Braude College',
    description: 'Completed comprehensive studies in software engineering foundations, gaining deep knowledge in algorithms, data structures, and system design.',
    skills: ['Software Engineering', 'Algorithms', 'Data Structures', 'System Design'],
    icon: <SchoolIcon fontSize="inherit" />,
    color: 'warning'
  },
];

const hobbies = [
  {
    title: 'Tech Enthusiast',
    description: 'Always exploring the latest in AI, cloud computing, and open source technologies.',
    icon: <CodeIcon className="icon" />
  },
  {
    title: 'Gamer',
    description: 'Strategic analysis doesn\'t stop at work. I enjoy competitive gaming and strategy titles.',
    icon: <SportsEsportsIcon className="icon" />
  },
  {
    title: 'Continuous Learner',
    description: 'Reading about system design patterns and keeping up with the rapid pace of tech innovation.',
    icon: <AutoStoriesIcon className="icon" />
  }
];

const Founder = (): ReactNode => {
  return (
    <PageWrapper>
      <QPContainer maxWidth="lg">
        
        {/* Header / Bio Section */}
        <HeroSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AvatarWrapper>
             <AvatarGlow />
             <StyledAvatar>
                HD
             </StyledAvatar>
          </AvatarWrapper>
          
          <HeroGradientTitle variant="h1">
            Hasan Diab
          </HeroGradientTitle>
          <Typography variant="h4" color="text.primary" fontWeight={300} gutterBottom>
            Founder & Lead Architect
          </Typography>
          
          <AboutSection
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3, duration: 0.6 }}
          >
            <BioText variant="h6">
              &ldquo;I build digital bridges between complex problems and elegant solutions. 
              With a deep passion for <strong>Full Stack Development</strong> and <strong>System Architecture</strong>, 
              I founded QPMatrix to bring enterprise-grade engineering to every project I touch.&ldquo;
            </BioText>
          </AboutSection>
        </HeroSection>
        
        {/* Hobbies / Personal */}
        <SectionHeader>
            <SectionTitle variant="h3">
                Beyond the Code
            </SectionTitle>
            <Typography variant="body1" color="text.secondary">
                What fuels my creativity and strategic thinking.
            </Typography>
        </SectionHeader>

        <GridContainer sx={{ mb: 16 }}>
            {hobbies.map((hobby, index) => (
            <InterestCard
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                {hobby.icon}
                <Typography variant="h6" fontWeight="bold">{hobby.title}</Typography>
                <Typography variant="body2" color="text.secondary">{hobby.description}</Typography>
            </InterestCard>
            ))}
        </GridContainer>

        {/* Timeline */}
        <SectionHeader>
            <SectionTitle variant="h3">
                My Professional Journey
            </SectionTitle>
        </SectionHeader>
          
        <TimelineContainer>
        {timelineData.map((item, index) => (
            <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.5, type: 'spring', stiffness: 50 }}
            >
            <TimelineYear variant="subtitle2">{item.year}</TimelineYear>
            <TimelineCard>
                <QPDiv sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                <TimelineIconWrapper colorType={item.color}>
                    {item.icon}
                </TimelineIconWrapper>
                <QPDiv>
                    <Typography variant="h6" fontWeight="bold">
                    {item.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    @ {item.company}
                    </Typography>
                </QPDiv>
                </QPDiv>
                
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.primary', opacity: 0.9 }}>
                {item.description}
                </Typography>

                <SkillsWrapper>
                {item.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                ))}
                </SkillsWrapper>
            </TimelineCard>
            </TimelineItem>
        ))}
        </TimelineContainer>

        <CTASection
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to collaborate?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Whether it&apos;s a new project or a complex system architecture, I&apos;m here to help.
          </Typography>
          <CTAButton 
            size="large" 
            href="/#contact"
          >
            Contact Me
          </CTAButton>
        </CTASection>

      </QPContainer>
    </PageWrapper>
  );
};

export default Founder;