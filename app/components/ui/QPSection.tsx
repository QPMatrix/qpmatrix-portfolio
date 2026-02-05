import { Box, type BoxProps, styled } from '@mui/material';
import type { FC, ReactNode } from 'react';

const StyledSection = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  display: 'block',
}));

/**
 * Standard semantic Page Section for QPMatrix.
 * Renders a <section> tag by default.
 * Use this as the top-level wrapper for major page areas (Hero, Services, etc.).
 *
 * @param {BoxProps} props - The box props.
 * @returns {JSX.Element} The styled section.
 */
export const QPSection: FC<BoxProps> = (props: BoxProps): ReactNode => {
  return <StyledSection component="section" {...props} />;
};
