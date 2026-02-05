import { Dialog, type DialogProps, styled } from '@mui/material';
import type { FC } from 'react';
import { pxToRem } from '~/libs/theme/utils';

/**
 * Standard Dialog for QPMatrix.
 * Implements backdrop blur and consistent shape.
 *
 * @param {DialogProps} props - The dialog props.
 * @returns {JSX.Element} The styled dialog.
 */
export const QPDialog: FC<DialogProps> = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backdropFilter: `blur(${pxToRem(8)})`,
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(0, 0, 0, 0.7)' 
      : 'rgba(255, 255, 255, 0.4)',
  },
  '& .MuiDialog-paper': {
    borderRadius: pxToRem(20),
    padding: theme.spacing(1),
    
    ...(theme.palette.mode === 'dark' && {
      background: '#1E2329 !important', // New dark paper color
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.5)',
    }),
    
    ...(theme.palette.mode === 'light' && {
      background: '#FFFFFF !important',
      boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.1)',
    }),
  },
})) as FC<DialogProps>;
