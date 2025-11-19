import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const formCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  width: "100%",
});

export const profileHeader = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["16"],
  marginBottom: vars.spacing["24"],
});

export const avatarWrapper = style({
  position: "relative",
  display: "inline-block",
});

export const avatar = style({
  width: ["128"],
  height: ["128"],
  borderRadius: vars.radius.full,
  objectFit: "cover",
  border: `2px solid ${vars.color.border.default}`,
});

export const uploadButton = style({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: vars.spacing["32"],
  height: vars.spacing["32"],
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverted,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    opacity: 0.9,
  },
});

export const userInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
  flex: 1,
});

export const userName = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const verifiedIcon = style({
  color: vars.color.status.success,
});

export const userRole = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const fieldGroup = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.spacing["16"],
  marginBottom: vars.spacing["16"],

  "@media": {
    "screen and (max-width: 767px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const singleField = style({
  marginBottom: vars.spacing["16"],
});

export const buttonGroup = style({
  display: "flex",
  gap: vars.spacing["12"],
  justifyContent: "flex-end",
  marginTop: vars.spacing["24"],

  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
    },
  },
});
