import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  gap: vars.spacing["24"],
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  minHeight: "calc(100vh - 200px)",

  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: vars.spacing["16"],
    },
  },
});

export const sidebar = style({
  flex: "0 0 300px",
  position: "relative",

  "@media": {
    "screen and (max-width: 1024px)": {
      display: "none", 
    },
  },
});

export const content = style({
  flex: 1,
  width: "100%",
});

export const mobileFilterButtonContainer = style({
  display: "none",
  width: "100%",
  marginBottom: vars.spacing["16"],

  "@media": {
    "screen and (max-width: 1024px)": {
      display: "block",
    },
  },
});

export const mobileFilterButton = style({
  width: "100%",
  justifyContent: "center",
  position: "relative",
});

export const filterBadge = style({
  position: "absolute",
  right: vars.spacing["12"],
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: vars.color.brand.primary,
  color: "white",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.bold,
});

export const drawerContent = style({
  padding: vars.spacing["16"],
  height: "100%",
  overflowY: "auto",
});