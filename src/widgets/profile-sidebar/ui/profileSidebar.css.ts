import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const sidebar = style({
  width: "250px",
  padding: vars.spacing["24"],
  backgroundColor: vars.color.background.primary,
});

export const sidebarWrapper = style({
  height: "100%",
  // borderRadius: vars.radius.lg,
  // border: `1px solid ${vars.color.border.default}`,
  // backgroundColor: vars.color.background.secondary,
});

export const nav = style({});

export const navList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2"],
});

export const navItem = style({});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["12"],
  padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
  borderRadius: vars.radius.md,
  textDecoration: "none",
  color: vars.color.text.primary,
  transition: "all 0.2s ease",
  ":hover": {
    // backgroundColor: vars.color.background.tertiary,
  },
});

export const activeNavLink = style({
  backgroundColor: vars.color.white,
  color: vars.color.brand.primary,
  fontWeight: vars.font.weight.bold,
});

export const navIcon = style({
  color: vars.color.text.secondary,
  selectors: {
    [`${navLink}:hover &`]: {
      color: vars.color.brand.primary,
    },
    [`${activeNavLink} &`]: {
      color: vars.color.brand.primary,
    },
  },
});

export const navText = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  selectors: {
    [`${navLink}:hover &`]: {
      color: vars.color.brand.primary,
    },
    [`${activeNavLink} &`]: {
      color: vars.color.brand.primary,
    },
  },
});
