import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const chatButton = style({
  position: "fixed",
  bottom: vars.spacing["24"],
  right: vars.spacing["24"],
  width: vars.spacing["60"],
  height: vars.spacing["60"],
  borderRadius: "50%",
  boxShadow: vars.shadow.lg,
  zIndex: 1000,
  backgroundColor: vars.color.brand.secondary,
  color: vars.color.text.inverted,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    transform: "scale(1.05)",
    backgroundColor: vars.color.brand.primary,
  },
  transition: "all 0.2s ease",
});

export const chatButtonIcon = style({
  height: "auto",
  width: "auto",
});

export const chatWidget = style({
  position: "fixed",
  bottom: vars.spacing["96"],
  right: vars.spacing["24"],
  width: "380px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  zIndex: 1001,
  boxShadow: vars.shadow["2xl"],
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.primary,

  "@media": {
    "screen and (max-width: 768px)": {
      width: "calc(100vw - 48px)",
      right: vars.spacing["16"],
      left: vars.spacing["16"],
    },
  },
});

export const chatHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.spacing["16"],
  borderBottom: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.tertiary,
  borderTopLeftRadius: vars.radius.lg,
  borderTopRightRadius: vars.radius.lg,
});

export const chatTitle = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const closeButton = style({
  width: vars.spacing["32"],
  height: vars.spacing["32"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: vars.color.black,
  borderRadius: vars.radius.md,
  padding: 0,
  color: vars.color.white,
  cursor: "pointer",
});

export const closeButtonIcon = style({
  width: "auto",
  height: "auto",
  borderRadius: vars.radius.md,
  color: vars.color.white,
});

export const messagesContainer = style({
  flex: 1,
  padding: vars.spacing["16"],
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
});

export const messageWrapper = styleVariants({
  isUser: {
    display: "flex",
    justifyContent: "flex-end",
  },
  isBot: {
    display: "flex",
    justifyContent: "flex-start",
  },
});

export const messageBubble = styleVariants({
  isUser: {
    maxWidth: "80%",
    padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
    borderRadius: vars.radius.lg,
    borderBottomRightRadius: vars.radius.sm,
    backgroundColor: vars.color.background.secondary,
    color: vars.color.text.inverted,
  },
  isBot: {
    maxWidth: "80%",
    padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
    borderRadius: vars.radius.lg,
    borderBottomLeftRadius: vars.radius.sm,
    backgroundColor: vars.color.background.primary,
    border: `1px solid ${vars.color.border.default}`,
  },
});

export const messageText = style({
  fontSize: vars.font.size.body2,
  lineHeight: 1.4,
});

export const messageTime = style({
  fontSize: vars.font.size.caption,
  opacity: 0.7,
  marginTop: vars.spacing["4"],
});

export const inputForm = style({
  display: "flex",
  gap: vars.spacing["8"],
  padding: vars.spacing["16"],
  borderTop: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  borderBottomLeftRadius: vars.radius.lg,
  borderBottomRightRadius: vars.radius.lg,
});

export const messageInput = style({
  flex: 1,
});

export const sendButton = style({
  width: "48px",
  height: "44px",
  background: vars.color.brand.primary,
  borderRadius: vars.radius.full,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.white,
  padding: vars.spacing["8"],
});
