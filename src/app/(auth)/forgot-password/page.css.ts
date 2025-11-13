import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: vars.spacing["16"],
  // background: `linear-gradient(135deg, ${vars.color.gray["800"]} 0%, ${vars.color.gray["700"]} 100%)`,
  position: "relative",
  overflow: "hidden",
});

export const formContainer = style({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: "600px",
});

export const card = style({
  background: `linear-gradient(135deg, ${vars.color.background.secondary} 0%, ${vars.color.gray["100"]} 100%)`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
  padding: vars.spacing["32"],
  "@media": {
    "screen and (max-width: 767px)": {
      padding: vars.spacing["0"],
    },
  },
});

export const logoWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vars.spacing["24"],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  textAlign: "center",
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  textAlign: "center",
  marginBottom: vars.spacing["24"],
});

export const footer = style({
  marginTop: vars.spacing["24"],
  textAlign: "center",
});

export const footerText = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const footerLink = style({
  color: vars.color.brand.primary,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
