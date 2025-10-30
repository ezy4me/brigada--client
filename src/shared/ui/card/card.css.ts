import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const card = style({
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
});

export const cardTitle = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  margin: 0, 
});

export const cardDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  margin: 0,
});

export const cardContent = style({
  padding: vars.spacing['24'],
});

export const cardFooter = style({
  padding: vars.spacing['24'],
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
});

export const cardHeader = style({
  padding: vars.spacing['24'],
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['4'],
});