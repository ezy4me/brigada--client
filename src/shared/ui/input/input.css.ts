import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
  width: "100%",
});

export const label = style({
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  textAlign: "left",
});

export const inputWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const inputContainer = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  borderRadius: vars.radius.lg,
  background: vars.color.background.primary,
  boxShadow: `0 0 0 1px ${vars.color.gray[200]}`,
  transition: "box-shadow 0.2s ease",
  ":focus-within": {
    boxShadow: `0 0 0 2px ${vars.color.brand.secondary}`,
  },
  ":disabled": {
    opacity: 0.5,
    pointerEvents: "none",
  },
});

export const icon = style({
  color: vars.color.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const leftIcon = style({
  marginLeft: vars.spacing["16"],
});

export const rightIcon = style({
  marginRight: vars.spacing["16"],
});

export const input = recipe({
  base: {
    flex: 1,
    width: "100%",
    borderRadius: vars.radius.lg,
    border: "none",
    background: vars.color.background.primary,
    color: vars.color.text.primary,
    fontFamily: vars.font.family,
    outline: "none",
    padding: 0,
    "::placeholder": {
      color: vars.color.text.secondary,
    },
  },
  variants: {
    size: {
      sm: {
        height: "32px",
        fontSize: vars.font.size.body2,
        padding: `0 ${vars.spacing["16"]}`,
      },
      md: {
        height: "44px",
        fontSize: vars.font.size.body1,
        padding: `0 ${vars.spacing["16"]}`,
      },
      lg: {
        height: "52px",
        fontSize: vars.font.size.body1,
        padding: `0 ${vars.spacing["16"]}`,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputContainerError = style({
  boxShadow: `0 0 0 1px ${vars.color.status.error}`,
  ":focus-within": {
    boxShadow: `0 0 0 2px ${vars.color.status.error}`,
  },
});

export const inputContainerSuccess = style({
  boxShadow: `0 0 0 1px ${vars.color.status.success}`,
  ":focus-within": {
    boxShadow: `0 0 0 2px ${vars.color.status.success}`,
  },
});

export const helperText = style({
  fontSize: vars.font.size.caption,
  lineHeight: vars.font.lineHeight.normal,
});

export const helperTextError = style({
  color: vars.color.status.error,
});

export const helperTextSuccess = style({
  color: vars.color.status.success,
});
