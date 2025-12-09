// heroFinder.css.ts
import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  position: "relative",
  overflow: "hidden",
  backgroundColor: vars.color.background.tertiary,
  width: "100%",
  backgroundImage: 'url("/bg.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  
  // Адаптивный padding
  padding: `${vars.spacing["20"]} ${vars.spacing["16"]}`,
  
  "@media": {
    "screen and (min-width: 768px)": {
      padding: `${vars.spacing["32"]} ${vars.spacing["24"]}`,
    },
    "screen and (min-width: 1024px)": {
      padding: `${vars.spacing["48"]} ${vars.spacing["32"]}`,
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.spacing["16"],
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  
  "@media": {
    "screen and (min-width: 768px)": {
      gap: vars.spacing["24"],
    },
  },
});

export const top = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.spacing["12"],
  width: "100%",
  
  "@media": {
    "screen and (min-width: 375px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: vars.spacing["24"],
    },
  },
});

export const title = style({
  fontSize: "32px",
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  lineHeight: 1.2,
  textAlign: "left",
  margin: 0,
  
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "48px",
      flex: 1,
    },
    "screen and (min-width: 1024px)": {
      fontSize: "56px",
    },
  },
});

export const locationBlock = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  color: vars.color.text.primary,
  fontSize: vars.font.size.body2,
  cursor: "pointer",
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: vars.radius.lg,
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: vars.font.size.body1,
      maxWidth: "250px",
    },
  },
});

export const city = style({
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const cityIcon = style({
  width: vars.spacing["20"],
  height: vars.spacing["20"],
  color: vars.color.brand.primary,
  flexShrink: 0,
});

export const popularRequests = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["8"],
  justifyContent: "flex-start",
  width: "100%",
  
  "@media": {
    "screen and (min-width: 768px)": {
      gap: vars.spacing["12"],
    },
  },
});

export const requestTag = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["16"]}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.secondary,
  color: vars.color.text.primary,
  fontSize: vars.font.size.body2,
  cursor: "pointer",
  border: `1px solid ${vars.color.border.default}`,
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
  
  ":hover": {
    backgroundColor: vars.color.background.tertiary,
    transform: "translateY(-1px)",
    boxShadow: vars.shadow.sm,
  },
  
  "@media": {
    "screen and (max-width: 480px)": {
      padding: `${vars.spacing["6"]} ${vars.spacing["12"]}`,
      fontSize: vars.font.size.caption,
    },
  },
});

export const searchContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      alignItems: "center",
      gap: vars.spacing["16"],
    },
  },
});

export const inputRow = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  width: "100%",
  
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      alignItems: "center",
      gap: vars.spacing["8"],
    },
  },
});

export const inputWrapper = style({
  position: "relative",
  flex: 1,
  width: "100%",
  
  "@media": {
    "screen and (min-width: 768px)": {
      width: "auto",
    },
  },
});

export const searchButton = style({
  width: "100%",
  
  "@media": {
    "screen and (min-width: 768px)": {
      width: "auto",
      minWidth: "160px",
    },
    "screen and (min-width: 1024px)": {
      minWidth: "200px",
    },
  },
});

export const stats = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  width: "100%",
  
  "@media": {
    "screen and (min-width: 480px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: vars.spacing["16"],
    },
    "screen and (min-width: 768px)": {
      gap: vars.spacing["24"],
    },
  },
});

export const statItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  
  "@media": {
    "screen and (max-width: 479px)": {
      justifyContent: "center",
      textAlign: "center",
    },
  },
});

export const statIcon = style({
  color: vars.color.brand.primary,
  flexShrink: 0,
});

export const clearButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.gray["500"],
  padding: vars.spacing["4"],
  borderRadius: vars.radius.sm,
  transition: "all 0.2s ease",
  
  ":hover": {
    color: vars.color.gray["700"],
    backgroundColor: vars.color.gray["100"],
  },
  
  ":focus": {
    outline: "none",
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
  },
});