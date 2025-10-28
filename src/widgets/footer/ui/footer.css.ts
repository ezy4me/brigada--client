import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const footer = style({
  backgroundColor: vars.color.background.primary,
  borderTop: `1px solid ${vars.color.border.default}`,
  padding: `${vars.spacing['24']} 0`,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
      gap: vars.spacing['12'],
    },
  },
});

export const copyright = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
});

export const link = style({
  color: vars.color.text.primary,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});