import { Typography, type TypographyProps, styled } from '@mui/material';
import type { FC } from 'react';

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: theme.spacing(4),
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`
    : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

/**
 * Standard Page Title for QPMatrix.
 * Defaults to h1 and enforces accessibility and consistent styling.
 *
 * @param {TypographyProps} props - The typography props.
 * @returns {JSX.Element} The styled title.
 */
export const QPTitle: FC<TypographyProps> = (props) => {
  return (
    <StyledTitle
      variant="h1"
      component="h1"
      align="center"
      {...props}
    />
  );
};
