import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const roleGroup = style({
  display: 'inline-flex',
  backgroundColor: vars.color.gray['800'],
  borderRadius: vars.radius.lg,
  padding: vars.spacing['4'],
  position: 'relative',
  overflow: 'hidden', 
});

export const roleButton = recipe({
  base: {
    padding: `${vars.spacing['8']} ${vars.spacing['16']}`,
    borderRadius: vars.radius.lg,
    border: 'none',
    backgroundColor: 'transparent',
    color: vars.color.text.inverted,
    cursor: 'pointer',
    fontFamily: vars.font.family,
    fontSize: vars.font.size.body2,
    fontWeight: vars.font.weight.medium,
    position: 'relative',
    zIndex: 2,
    transition: 'color 0.2s ease',
  },
  variants: {
    active: {
      true: {
        color: vars.color.text.inverted,
      },
    },
  },
});

export const indicator = style({
  position: 'absolute',
  top: vars.spacing['4'],
  bottom: vars.spacing['4'],
  background: vars.color.brand.primary,
  borderRadius: vars.radius.lg,
  zIndex: 1,
});