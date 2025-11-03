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
//   padding: vars.spacing['24'],
});