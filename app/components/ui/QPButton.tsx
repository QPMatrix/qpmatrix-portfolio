import { Button, type ButtonProps } from '@mui/material';
import type { FC, ReactNode } from 'react';

/**
 * Props for the QPButton component.
 * Extends standard MUI ButtonProps.
 */
export type QPButtonProps = ButtonProps;

/**
 * Generic button component for the QPMatrix application.
 * Wraps MUI Button with default High-Tech styling.
 *
 * @param {QPButtonProps} props - The button properties.
 * @returns {ReactNode} The rendered button.
 */
export const QPButton: FC<QPButtonProps> = (props: QPButtonProps): ReactNode => {
  const { children, variant = 'contained', color = 'primary', ...other } = props;

  return (
    <Button variant={variant} color={color} {...other}>
      {children}
    </Button>
  );
};
