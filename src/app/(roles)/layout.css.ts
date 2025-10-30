import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const rolesLayout = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.background.primary,
});

export const main = style({
  flex: 1,
});