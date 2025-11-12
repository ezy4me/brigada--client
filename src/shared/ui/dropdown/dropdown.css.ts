import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const dropdown = style({
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const trigger = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: vars.spacing["8"],
  borderRadius: vars.radius.md,
  ":hover": {
    backgroundColor: vars.color.background.secondary,
  },
});

export const content = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.radius.md,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: vars.spacing["8"],
  marginTop: vars.spacing["0"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
  zIndex: 999,
  minWidth: "200px",
});

export const item = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.sm,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.background.secondary,
  },
  ":focus": {
    outline: "none",
    backgroundColor: vars.color.background.secondary,
  },
});

export const separator = style({
  height: "1px",
  backgroundColor: vars.color.border.default,
  margin: `${vars.spacing["4"]} 0`,
});
