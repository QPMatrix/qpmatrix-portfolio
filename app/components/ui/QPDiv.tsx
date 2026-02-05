import { Box, type BoxProps } from '@mui/material';
import type { FC, ReactNode } from 'react';

/**
 * Props for the QPDiv component.
 * Extends standard MUI BoxProps.
 */
export type QPDivProps = BoxProps;

/**
 * Generic container component for the QPMatrix application.
 * Wraps MUI Box.
 *
 * @param {QPDivProps} props - The box properties.
 * @returns {ReactNode} The rendered box.
 */
export const QPDiv: FC<QPDivProps> = (props: QPDivProps): ReactNode => {
  const { children, ...other } = props;

  return <Box {...other}>{children}</Box>;
};
