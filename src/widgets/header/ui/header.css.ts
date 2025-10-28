// shared/ui/header/header.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: vars.color.background.primary,
  backdropFilter: 'saturate(180%) blur(20px)',
  padding: `${vars.spacing['16']} 0`,
});

export const backgroundPattern = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundImage: `
    repeating-linear-gradient(
      to right,
      rgba(0, 122, 255, 0.05) 0px,
      rgba(0, 122, 255, 0.05) 1px,
      transparent 1px,
      transparent calc(100% / 24)
    )
  `,
  backgroundSize: '100% 100%',
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`, 
  position: 'relative', 
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing['12'], 
});

export const logoImage = style({
  width: vars.spacing['40'], 
  height: vars.spacing['40'],
  objectFit: 'contain',
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.full,
  padding: vars.spacing['8'],
});

export const logoText = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  letterSpacing: '0.02em', 
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing['12'], 
  '@media': {
    'screen and (min-width: 640px)': {
      gap: vars.spacing['16'], 
    },
  },
});