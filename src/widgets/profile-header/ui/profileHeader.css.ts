import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const header = style({
  backgroundColor: vars.color.background.primary,
  padding: `${vars.spacing["8"]} 0`,
  borderBottom: `1px solid ${vars.color.border.default}`,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const content = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const logoSection = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["12"],
});

export const userSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing["12"],
});

export const avatarTrigger = style({
  border: "none",
  background: "none",
  cursor: "pointer",
  padding: 0,
  borderRadius: vars.radius.full,
  ":focus-visible": {
    outline: `2px solid ${vars.color.brand.primary}`,
  },
});

export const avatar = style({
  width: vars.spacing["60"],
  height: vars.spacing["60"],
});

export const dropdown = style({
  position: "relative",
});
