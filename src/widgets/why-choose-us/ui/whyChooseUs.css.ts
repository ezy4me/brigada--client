import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const section = style({
  padding: `${vars.spacing['32']} 0`,
  backgroundColor: vars.color.background.primary,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['16']}`,
});

export const intro = style({
  textAlign: 'center',
  marginBottom: vars.spacing['24'],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing['8'],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  maxWidth: '700px',
  margin: '0 auto',
});

export const benefitsList = style({
  listStyle: 'none',
  padding: 0,
  margin: '0 auto',
  maxWidth: '800px',
  marginTop: vars.spacing['32'],
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.spacing['24'],
});

export const benefitItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing['12'],
  padding: vars.spacing['16'],
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background.secondary,
  border: `1px solid ${vars.color.border.default}`,
});

export const benefitIcon = style({
  flexShrink: 0,
  width: vars.spacing['24'],
  height: vars.spacing['24'],
  backgroundColor: vars.color.brand.primary,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.text.inverted,
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.bold,
});

export const benefitText = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.tight,
});