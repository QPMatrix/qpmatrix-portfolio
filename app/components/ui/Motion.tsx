import { motion } from 'framer-motion';
import {  Grid, Typography } from '@mui/material';
import { QPDiv } from './QPDiv';
import { QPButton } from './QPButton';
import { QPContainer } from './QPContainer';

/**
 * Shared Motion Components
 * 
 * These components are pre-wrapped with Framer Motion to avoid repetitive
 * wrapping in feature components and to centralize type handling.
 */

// Box
export const MotionBox = motion(QPDiv);

// Grid (using Grid2 as Grid from MUI v6+)
export const MotionGrid = motion(Grid);

// Typography
export const MotionTypography = motion(Typography);

// Container
export const MotionContainer = motion(QPContainer);

// Button
export const MotionButton = motion(QPButton);

// Generic Div
export const MotionQPDiv =motion(QPDiv)
