import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const header = style({
  backgroundColor: vars.color.background.primary,
  borderBottom: `1px solid ${vars.color.border.default}`,
  padding: `${vars.spacing['16']} 0`,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`,
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing['8'],
});

export const title = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.primary,
  margin: 0,
});

export const subtitle = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  margin: 0,
});

export const userActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing['16'],
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing['8'],
  padding: `${vars.spacing['8']} ${vars.spacing['12']}`,
  borderRadius: vars.radius.md,
});

export const userDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2'],
});

export const userName = style({
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  margin: 0,
});

export const userRole = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
  margin: 0,
});