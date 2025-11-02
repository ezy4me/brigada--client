import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const heading = recipe({
  base: {
    margin: 0,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.lineHeight.tight,
  },
  variants: {
    size: {
      h1: { fontSize: vars.font.size.h1 },
      h2: { fontSize: vars.font.size.h2 },
      h3: { fontSize: vars.font.size.h3 },
      h4: { fontSize: vars.font.size.h4 },
      h1Sm: { fontSize: vars.font.size.h1Sm },
      h2Sm: { fontSize: vars.font.size.h2Sm },
    },
    weight: {
      regular: { fontWeight: vars.font.weight.regular },
      medium: { fontWeight: vars.font.weight.medium },
      bold: { fontWeight: vars.font.weight.bold },
    },
  },
  defaultVariants: {
    size: 'h2',
    weight: 'medium',
  },
});