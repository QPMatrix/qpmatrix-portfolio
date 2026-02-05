import { Card, type CardProps, styled } from '@mui/material';
import type { FC } from 'react';
import { pxToRem } from '~/libs/theme/utils';

/**
 * Standard Card for QPMatrix.
 * Implements glassmorphism and consistent border radius.
 *
 * @param {CardProps} props - The card props.
 * @returns {JSX.Element} The styled card.
 */
export const QPCard: FC<CardProps> = styled(Card)(({ theme }) => ({
  borderRadius: pxToRem(16),
  overflow: 'hidden',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  
  // Dark Mode Glassmorphism
  ...(theme.palette.mode === 'dark' && {
    background: 'rgba(30, 35, 41, 0.6) !important', // Using our new 'paper' color base but translucent
    backdropFilter: `blur(${pxToRem(12)})`,
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
  }),

  // Light Mode Clean Look
  ...(theme.palette.mode === 'light' && {
    background: '#FFFFFF !important',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
  }),

  '&:hover': {
    transform: `translateY(-${pxToRem(4)})`,
    boxShadow: theme.palette.mode === 'dark'
      ? `0 12px 32px -2px rgba(0, 184, 204, 0.15)` // Primary color glow
      : '0 12px 32px -2px rgba(0, 0, 0, 0.1)',
  },
})) as FC<CardProps>;
