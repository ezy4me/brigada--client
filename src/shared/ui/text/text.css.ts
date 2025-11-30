import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

export const text = recipe({
  base: {
    margin: 0,
    color: vars.color.text.primary,
    lineHeight: vars.font.lineHeight.normal,
  },
  variants: {
    size: {
      body1: { fontSize: vars.font.size.body1 },
      body2: { fontSize: vars.font.size.body2 },
      caption: { fontSize: vars.font.size.caption },
    },
    color: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      inverted: { color: vars.color.text.inverted },
      error: { color: vars.color.status.error },
      success: { color: vars.color.status.success },
    },
    weight: {
      regular: { fontWeight: vars.font.weight.regular },
      medium: { fontWeight: vars.font.weight.medium },
      bold: { fontWeight: vars.font.weight.bold },
    },
  },
  defaultVariants: {
    size: "body1",
    color: "primary",
    weight: "regular",
  },
});
