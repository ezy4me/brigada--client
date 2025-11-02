import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const section = style({
  padding: `${vars.spacing['60']} 0`,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`,
});