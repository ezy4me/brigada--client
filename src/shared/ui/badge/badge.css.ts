import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

export const badge = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vars.radius.full,
    fontWeight: vars.font.weight.medium,
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
    userSelect: "none",
    gap: vars.spacing["8"],
  },

  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.gray[100],
        color: vars.color.text.secondary,
        border: `1px solid ${vars.color.border.default}`,
      },
      brand: {
        backgroundColor: vars.color.blue[50],
        color: vars.color.brand.primary,
        border: `1px solid ${vars.color.border.default}`,
      },
      success: {
        backgroundColor: vars.color.status.success + "15",
        color: vars.color.status.success,
        border: `1px solid ${vars.color.border.default}`,
      },
      warning: {
        backgroundColor: vars.color.status.warning + "15",
        color: vars.color.status.warning,
        border: `1px solid ${vars.color.border.default}`,
      },
      error: {
        backgroundColor: vars.color.status.error + "15",
        color: vars.color.status.error,
        border: `1px solid ${vars.color.border.default}`,
      },
      secondary: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.secondary,
        border: `1px solid ${vars.color.border.default}`,
      },
    },
    size: {
      sm: {
        fontSize: vars.font.size.caption,
        padding: `${vars.spacing["4"]} ${vars.spacing["8"]}`,
        height: "24px",
      },
      md: {
        fontSize: vars.font.size.body2,
        padding: `${vars.spacing["6"]} ${vars.spacing["12"]}`,
        height: "28px",
      },
      lg: {
        fontSize: vars.font.size.body1,
        padding: `${vars.spacing["8"]} ${vars.spacing["16"]}`,
        height: "32px",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
