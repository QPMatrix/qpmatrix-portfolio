import { Box, Typography, styled } from '@mui/material';
import { MotionQPDiv } from '~/components/ui/Motion';
import { QPButton } from '~/components/ui';

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg, #0f0c29 0%, #302b63 100%)'
    : 'linear-gradient(180deg, #f3f4f6 0%, #e0e7ff 100%)',
}));

export const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(180deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main},
      transparent
    )`,
    opacity: 0.3,
  }
}));

export const TimelineItem = styled(MotionQPDiv)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  paddingLeft: theme.spacing(6),
  
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-6px',
    top: '8px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark' ? '#0f0c29' : '#fff',
    border: `3px solid ${theme.palette.primary.main}`,
    zIndex: 1,
  }
}));

export const TimelineYear = styled(Typography)(({ theme }) => ({
  fontFamily: '"Fira Code", monospace',
  fontSize: '0.9rem',
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  letterSpacing: '0.05em',
}));

export const TimelineCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.03)' 
    : 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.light,
  }
}));

export const SkillTag = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  background: theme.palette.mode === 'dark' 
    ? 'rgba(0, 184, 204, 0.1)' 
    : 'rgba(0, 184, 204, 0.1)',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}30`,
}));

export const AboutSection = styled(MotionQPDiv)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
  padding: theme.spacing(4),
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.02)' 
    : 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
}));

export const InterestCard = styled(MotionQPDiv)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' 
    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: theme.palette.primary.main,
    '& .icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.primary.main,
    }
  },
  
  '& .icon': {
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontSize: '2.5rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  }
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));
export const HeroSection = styled(MotionQPDiv)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

export const AvatarWrapper = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  marginBottom: '32px',
});

export const AvatarGlow = styled(Box)(() => ({
  position: 'absolute',
  inset: -4,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #00B8CC, #2979FF)',
  zIndex: 0,
  opacity: 0.7,
  filter: 'blur(10px)',
}));

export const StyledAvatar = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  zIndex: 1,
  position: 'relative',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `4px solid ${theme.palette.background.paper}`,
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#fff',
  background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
}));

export const HeroGradientTitle = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00B8CC 30%, #2979FF 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  marginBottom: theme.spacing(2),
  fontSize: '2.5rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}));

export const BioText = styled(Typography)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  textAlign: 'center',
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

export const TimelineIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorType'
})<{ colorType?: string }>(({ theme, colorType = 'primary' }) => {
  const colorMap: Record<string, string> = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
  };
  const color = colorMap[colorType] || theme.palette.primary.main;
  
  return {
    padding: theme.spacing(1.5),
    borderRadius: '12px',
    display: 'flex',
    backgroundColor: `${color}15`, // ~8% opacity
    color: color,
  };
});

export const SkillsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
}));

export const CTASection = styled(MotionQPDiv)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(16),
}));

export const CTAButton = styled(QPButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 6),
  borderRadius: '50px',
  fontSize: '1.1rem',
  background: 'linear-gradient(45deg, #00B8CC 30%, #2979FF 90%)',
  boxShadow: '0 8px 16px rgba(0, 184, 204, 0.24)',
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
     background: 'linear-gradient(45deg, #009eb0 30%, #1c5fd1 90%)',
  }
}));
