import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const footer = style({
  backgroundColor: vars.color.gray["900"],
  color: vars.color.text.inverted,
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
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.spacing["24"],
  marginBottom: vars.spacing["32"],
  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
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
  marginBottom: vars.spacing["8"],
  color: vars.color.text.inverted,
});

export const link = style({
  color: vars.color.text.inverted,
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
  color: vars.color.text.inverted,
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

export const trustBadges = style({
  display: "flex",
  gap: vars.spacing["8"],
  marginTop: vars.spacing["8"],
});

export const appButtons = style({
  display: "flex",
  gap: vars.spacing["8"],
  marginTop: vars.spacing["8"],
});

export const newsletterForm = style({
  display: "flex",
  gap: vars.spacing["8"],
  marginTop: vars.spacing["8"],
});

export const newsletterInput = style({
  flex: 1,
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.md,
  border: "none",
  backgroundColor: vars.color.gray["800"],
  color: vars.color.text.inverted,
  "::placeholder": {
    color: vars.color.text.secondary,
  },
});

export const newsletterButton = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverted,
  border: "none",
  cursor: "pointer",
  ":hover": {
    opacity: 0.9,
  },
});

export const bottomSection = style({
  borderTop: `1px solid ${vars.color.gray["400"]}`,
  paddingTop: vars.spacing["16"],
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      gap: vars.spacing["12"],
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
      alignItems: "center",
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
