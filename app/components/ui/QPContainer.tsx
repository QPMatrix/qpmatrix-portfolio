import { Container, styled, type ContainerProps } from '@mui/material';
import type { FC } from 'react';

/**
 * Standard content container for QPMatrix.
 * Enforces consistent max-width and padding.
 *
 * @param {ContainerProps} props - The container props.
 * @returns {JSX.Element} The styled container.
 */
export const QPContainer: FC<ContainerProps> = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
})) as FC<ContainerProps>;
