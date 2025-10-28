import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const section = style({
  padding: `${vars.spacing["48"]} 0`,
  backgroundColor: vars.color.background.primary,
});

export const container = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const heading = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.medium,
  marginBottom: vars.spacing["40"],
  textAlign: "center",
  color: vars.color.text.primary,
  letterSpacing: "0.02em",
});

export const accordionList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
});

export const accordionItem = style({
  borderRadius: vars.radius.full, 
  boxShadow: `0 1px 3px ${vars.color.text.secondary}10`, 
  overflow: "hidden",
  border: `1px solid ${vars.color.border.default}`, 
  selectors: {
    '&[data-state="open"]': {
      borderColor: vars.color.brand.secondary,
      boxShadow: `0 4px 12px ${vars.color.brand.secondary}15`, 
    },
  },
  transition: "box-shadow 0.2s ease, border-color 0.2s ease", 
});

export const accordionTrigger = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.spacing["16"]} ${vars.spacing["20"]}`, 
  textAlign: "left",
  fontSize: vars.font.size.body1,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  background: "transparent", 
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.background.secondary, 
  },
  ":focus-visible": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
  },
});

export const triggerIconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.text.secondary}`,
  transition: "all 0.2s ease",
  selectors: {
    [`${accordionItem}[data-state="open"] &`]: {
      backgroundColor: vars.color.brand.secondary,
      borderColor: vars.color.brand.secondary,
      color: vars.color.text.inverted,
    },
    [`${accordionTrigger}:hover &`]: {
      borderColor: vars.color.brand.secondary,
    },
  },
});

export const accordionContentInner = style({
  padding: `${vars.spacing["16"]} ${vars.spacing["20"]}`, 
  fontSize: vars.font.size.body2,
  lineHeight: vars.font.lineHeight.normal,
  color: vars.color.text.secondary,
});