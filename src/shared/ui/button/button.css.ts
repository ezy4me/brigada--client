import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

const iconAppear = keyframes({
  "0%": { opacity: 0, transform: "translateX(var(--icon-offset, 0px))" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const iconBase = style({
  display: "flex",
  animation: `${iconAppear} 0.4s ease-out forwards`,
});

const iconLeft = style({
  vars: {
    "--icon-offset": "-4px",
  },
  marginRight: vars.spacing["8"],
});

const iconRight = style({
  vars: {
    "--icon-offset": "4px",
  },
  marginLeft: vars.spacing["8"],
});

const iconOnly = style({
  padding: vars.spacing["8"],
});

export const iconStyles = {
  base: iconBase,
  left: iconLeft,
  right: iconRight,
  only: iconOnly,
};

const baseButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing["8"],
  borderRadius: vars.radius.lg,
  padding: 0,
  border: "none",
  fontFamily: vars.font.family,
  fontWeight: vars.font.weight.medium,
  textDecoration: "none",
  cursor: "pointer",
  transition: "background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  color: vars.color.text.primary,

  ":hover": {
    transform: "scale(1.02)",
  },

  ":focus-visible": {
    outline: `2px solid ${vars.color.brand.primary}`,
    outlineOffset: "2px",
  },

  selectors: {
    "&:disabled": {
      opacity: 0.5,
      pointerEvents: "none",
      transform: "none",
    },
  },
});

export const button = recipe({
  base: baseButton,
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.brand.primary,
        // color: vars.color.text.inverted,
        ":hover": {
          backgroundColor: vars.color.brand.primary,
          opacity: 0.9,
        },
        boxShadow: "0 2px 6px rgba(216, 41, 47, 0.2)",
        ":active": {
          transform: "scale(0.98)",
          boxShadow: "0 1px 3px rgba(216, 41, 47, 0.2)",
        },
      },
      secondary: {
        backgroundColor: vars.color.brand.secondary,
        color: vars.color.white,
        ":hover": {
          backgroundColor: vars.color.brand.secondary,
          opacity: 0.9,
        },
        boxShadow: "0 2px 6px rgba(46, 125, 186, 0.2)",
        ":active": {
          transform: "scale(0.98)",
          boxShadow: "0 1px 3px rgba(46, 125, 186, 0.2)",
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: vars.color.text.primary,
        border: `1px solid ${vars.color.text.secondary}`,
        ":hover": {
          backgroundColor: vars.color.background.secondary,
          borderColor: vars.color.text.primary,
        },
        ":active": {
          transform: "scale(0.98)",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: vars.color.text.primary,
        ":hover": {
          backgroundColor: vars.color.background.secondary,
        },
        ":active": {
          transform: "scale(0.98)",
        },
      },
      destructive: {
        backgroundColor: vars.color.status.error,
        // color: vars.color.text.inverted,
        boxShadow: "0 2px 6px rgba(216, 41, 47, 0.2)",
        ":hover": {
          backgroundColor: vars.color.status.error,
          opacity: 0.9,
        },
        ":active": {
          transform: "scale(0.98)",
          boxShadow: "0 1px 3px rgba(216, 41, 47, 0.2)",
        },
      },
      white: {
        backgroundColor: vars.color.gray[50],
        color: vars.color.text.primary,
        border: `1px solid ${vars.color.border.default}`,
        ":hover": {
          backgroundColor: vars.color.background.secondary,
          borderColor: vars.color.border.strong,
        },
        ":active": {
          transform: "scale(0.98)",
        },
      },
      black: {
        backgroundColor: vars.color.gray[900],
        color: vars.color.text.inverted,
        border: `1px solid ${vars.color.border.default}`,
        ":hover": {
          backgroundColor: vars.color.gray[800],
          borderColor: vars.color.border.strong,
        },
        ":active": {
          transform: "scale(0.98)",
        },
      },
    },
    size: {
      sm: {
        height: "32px",
        padding: `0 ${vars.spacing["16"]}`,
        fontSize: vars.font.size.body2,
      },
      md: {
        height: "44px",
        padding: `0 ${vars.spacing["24"]}`,
        fontSize: vars.font.size.body1,
      },
      lg: {
        height: "52px",
        padding: `0 ${vars.spacing["28"]}`,
        fontSize: vars.font.size.body1,
      },
    },
    iconOnly: {
      true: {
        width: "auto",
        aspectRatio: "1/1",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "sm",
        iconOnly: true,
      },
      style: {
        width: "32px",
        padding: "0",
      },
    },
    {
      variants: {
        size: "md",
        iconOnly: true,
      },
      style: {
        width: "44px",
        padding: "0",
      },
    },
    {
      variants: {
        size: "lg",
        iconOnly: true,
      },
      style: {
        width: "52px",
        padding: "0",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    iconOnly: false,
  },
});
