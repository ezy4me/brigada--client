import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

export const roleGroup = style({
  display: "flex",
  backgroundColor: vars.color.gray["800"],
  borderRadius: vars.radius.lg,
  padding: vars.spacing["4"],
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  gap: vars.spacing["6"],

  "@media": {
    "screen and (max-width: 550px)": {
      display: "none",
    },
  },
});

export const separator = style({
  width: "1px",
  height: "20px",
  backgroundColor: vars.color.gray["100"],
  alignSelf: "center",
});

export const roleButton = recipe({
  base: {
    padding: `${vars.spacing["6"]} ${vars.spacing["16"]}`,
    borderRadius: vars.radius.lg,
    border: "none",
    backgroundColor: "transparent",
    color: vars.color.text.inverted,
    cursor: "pointer",
    fontFamily: vars.font.family,
    fontSize: vars.font.size.body2,
    fontWeight: vars.font.weight.medium,
    position: "relative",
    zIndex: 2,
    transition: "color 0.2s ease",
  },
  variants: {
    active: {
      true: {
        color: vars.color.white,
      },
    },
  },
});

export const indicator = style({
  position: "absolute",
  top: vars.spacing["4"],
  bottom: vars.spacing["4"],
  background: vars.color.brand.primary,
  borderRadius: vars.radius.lg,
  zIndex: 1,
});

export const mobileDropdownWrapper = style({
  display: "none",
  position: "relative",
  zIndex: 100,
  "@media": {
    "screen and (max-width: 550px)": {
      display: "block",
    },
  },
});

export const mobileTrigger = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: vars.spacing["8"],
    padding: `${vars.spacing["8"]} ${vars.spacing["16"]}`,
    borderRadius: vars.radius.lg,
    backgroundColor: vars.color.gray["800"],
    color: vars.color.text.inverted,
    border: "none",
    cursor: "pointer",
    fontFamily: vars.font.family,
    fontSize: vars.font.size.body2,
    fontWeight: vars.font.weight.medium,
    width: "100%",
  },
});

export const dropdownList = style({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  zIndex: 100,
  marginTop: vars.spacing["8"],
  backgroundColor: vars.color.gray["900"],
  borderRadius: vars.radius.md,
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const dropdownItem = recipe({
  base: {
    padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
    backgroundColor: "transparent",
    color: vars.color.text.inverted,
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: vars.font.family,
    fontSize: vars.font.size.body2,
    ":hover": {
      backgroundColor: vars.color.background.tertiary,
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.black,
      },
    },
  },
});
