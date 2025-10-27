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
});

export const textareaWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const textareaContainer = style({
  display: "flex",
  width: "100%",
  alignItems: "start",
  borderRadius: vars.radius.lg, 
  overflow: 'hidden',
  boxShadow: `0 0 0 1px ${vars.color.text.secondary}`,
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
  marginLeft: vars.spacing["12"],
  marginTop: vars.spacing["12"],
});

export const rightIcon = style({
  marginRight: vars.spacing["12"],
  marginTop: vars.spacing["12"],
});

export const textarea = recipe({
  base: {
    border: "none",
    backgroundColor: "transparent",
    color: vars.color.text.primary,
    fontFamily: vars.font.family,
    outline: "none",
    resize: "none",
    minHeight: "100px",
    width: "100%",
    "::placeholder": {
      color: vars.color.text.secondary,
    },
  },
  variants: {
    size: {
      sm: {
        minHeight: "80px",
        fontSize: vars.font.size.body2,
        padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
      },
      md: {
        minHeight: "120px",
        fontSize: vars.font.size.body1,
        padding: `${vars.spacing["12"]} ${vars.spacing["12"]}`,
      },
      lg: {
        minHeight: "160px",
        fontSize: vars.font.size.body1,
        padding: `${vars.spacing["16"]} ${vars.spacing["12"]}`,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const textareaContainerError = style({
  boxShadow: `0 0 0 1px ${vars.color.status.error}`,
  ":focus-within": {
    boxShadow: `0 0 0 2px ${vars.color.status.error}`,
  },
});

export const textareaContainerSuccess = style({
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
