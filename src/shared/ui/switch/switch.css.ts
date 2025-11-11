import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const switchRoot = recipe({
  base: {
    all: "unset",
    width: "42px",
    height: "25px",
    backgroundColor: vars.color.gray["400"],
    borderRadius: "9999px",
    position: "relative",
    cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    ":focus": {
      boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
    },
  },
  variants: {
    checked: {
      true: {
        backgroundColor: vars.color.brand.primary,
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const switchThumb = recipe({
  base: {
    display: "block",
    width: "21px",
    height: "21px",
    backgroundColor: vars.color.text.inverted,
    borderRadius: "9999px",
    transition: "transform 100ms",
  },
  variants: {
    checked: {
      false: {
        transform: "translateX(2px)",
      },
      true: {
        transform: "translateX(21px)",
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});