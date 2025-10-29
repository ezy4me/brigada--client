import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const hero = style({
  position: 'relative',
  padding: `${vars.spacing['32']} 0`,
  overflow: 'hidden',
  // backgroundColor: vars.color.gray['900'],
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.spacing['48']} 0`,
    },
  },
});

export const backgroundPattern = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundImage: `
    repeating-linear-gradient(
      to right,
      ${vars.color.gray['300']} 0px,
      ${vars.color.gray['300']} 1px,
      transparent 1px,
      transparent calc(100% / 24)
    )
  `,
  backgroundSize: '100% 100%',
  opacity: 0.15,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`,
  position: 'relative',
});

export const content = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.spacing['40'],
  textAlign: 'center',
  
});

export const heading = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.tight,
  marginTop: vars.spacing['40'],
  marginBottom: vars.spacing['40'],
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '48px',
    },
    'screen and (min-width: 1024px)': {
      fontSize: '56px',
    },
  },
});

export const headingAccent = style({
  color: vars.color.brand.primary,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.loose,
  marginTop: vars.spacing['40'],
  marginBottom: vars.spacing['40'],
  maxWidth: '800px',
  marginInline: 'auto',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.font.size.body2,
    },
  },
});

export const descriptionBreak = style({
  '@media': {
    'screen and (max-width: 639px)': {
      display: 'none',
    },
    'screen and (min-width: 640px)': {
      display: 'inline',
    },
  },
});

export const subDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  marginBottom: vars.spacing['24'],
  maxWidth: '800px',
  marginInline: 'auto',
});

export const buttonWrapper = style({});