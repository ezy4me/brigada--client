import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const mobileNav = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  backgroundColor: vars.color.background.primary,
  borderTop: `1px solid ${vars.color.border.default}`,
  padding: `${vars.spacing["8"]} ${vars.spacing["16"]}`,
  zIndex: 50,

  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const navItem = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["4"],
  padding: `${vars.spacing["8"]} ${vars.spacing["4"]}`,
  borderRadius: vars.radius.md,
  textDecoration: "none",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.background.secondary,
  },
});

export const activeNavItem = style({
  backgroundColor: vars.color.background.secondary,
});

export const navIcon = style({
  color: vars.color.text.secondary,
  transition: "color 0.2s ease",
});

export const activeNavIcon = style({
  color: vars.color.brand.primary,
});

export const navText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
  fontWeight: vars.font.weight.medium,
  transition: "color 0.2s ease",
});

export const activeNavText = style({
  color: vars.color.brand.primary,
});