import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const authLayout = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.background.primary,
});

export const authContainer = style({
  width: '100%',
  maxWidth: '400px',
  padding: vars.spacing['24'],
});