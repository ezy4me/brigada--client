import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const footer = style({
  backgroundColor: vars.color.black,

  color: vars.color.white,
  paddingTop: vars.spacing["32"],
  paddingBottom: vars.spacing["16"],
  fontFamily: vars.font.family,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const topSection = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: vars.spacing["24"],
  marginBottom: vars.spacing["32"],
  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "screen and (max-width: 767px)": {
      gridTemplateColumns: "1fr",
      gap: vars.spacing["16"],
    },
  },
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const sectionTitle = style({
  fontSize: vars.font.size.body1,
  fontWeight: vars.font.weight.medium,
  // color: vars.color.text.inverted,
  // marginBottom: vars.spacing["8"],
});

export const sectionDivider = style({
  width: "100%",
  height: "1px",
  backgroundColor: vars.color.gray["600"],
  borderRadius: "2px",
});

export const link = style({
  // color: vars.color.text.inverted,
  textDecoration: "none",
  fontSize: vars.font.size.body2,
  ":hover": {
    color: vars.color.brand.primary,
  },
});

export const socialSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const socialLinks = style({
  display: "flex",
  gap: vars.spacing["12"],
  marginTop: vars.spacing["8"],
});

export const socialLink = style({
  // color: vars.color.text.inverted,
  ":hover": {
    color: vars.color.brand.primary,
  },
});

export const contactInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
  marginTop: vars.spacing["8"],
});

export const bottomSection = style({
  borderTop: `1px solid ${vars.color.gray["700"]}`,
  paddingTop: vars.spacing["16"],
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      gap: vars.spacing["12"],
      alignItems: "flex-start",
    },
  },
});

export const copyright = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
});

export const bottomLinks = style({
  display: "flex",
  gap: vars.spacing["16"],
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.spacing["8"],
    },
  },
});

export const bottomLink = style({
  color: vars.color.text.inverted,
  textDecoration: "none",
  fontSize: vars.font.size.caption,
  ":hover": {
    color: vars.color.brand.primary,
  },
});

export const backToTopButton = style({
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverted,
  border: "none",
  borderRadius: vars.radius.full,
  width: vars.spacing["32"],
  height: vars.spacing["32"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":hover": {
    opacity: 0.9,
  },
});
