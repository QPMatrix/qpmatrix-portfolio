import { styled, Box } from '@mui/material';
import { QPCard } from '~/components/ui';

export const StyledContactCard = styled(QPCard)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  position: 'relative',
  overflow: 'visible',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -2,
    borderRadius: 16,
    padding: 2,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    pointerEvents: 'none',
    opacity: 0.5,
  },
  '&:hover::before': {
    opacity: 1,
  },
  boxShadow: theme.palette.mode === 'dark' 
    ? `0 10px 40px -10px rgba(0,0,0,0.5)`
    : `0 10px 40px -10px rgba(0,0,0,0.1)`,
}));

export const IntroText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const SubmitButtonWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));
