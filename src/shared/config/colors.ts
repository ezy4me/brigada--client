export const colorPalette = {
  white: "#FFFFFF",
  light: "#fafafa",
  black: "#000000",
  gray50: "#F5F5F5",
  gray100: "#EDEDED",
  gray200: "#DADADA",
  gray300: "#BFBFBF",
  gray400: "#8C8C8C",
  gray500: "#717171ff",
  gray600: "#515151ff",
  gray700: "#2f2f2fff",
  gray800: "#2A2A2A",
  gray900: "#252525",

  red50: "#FFEBEE",
  red100: "#FFCDD2",
  red200: "#EF9A9A",
  red300: "#E57373",
  red500: "#D8292F",
  red600: "#C62828",
  red700: "#B71C1C",

  blue50: "#E3F2FD",
  blue100: "#BBDEFB",
  blue200: "#90CAF9",
  blue300: "#64B5F6",
  blue500: "#2E7DBA",
  blue600: "#1976D2",
  blue700: "#1565C0",
} as const;

export const semanticColors = {
  background: {
    primary: colorPalette.light,
    secondary: colorPalette.gray50,
    tertiary: colorPalette.gray100,
  },
  text: {
    primary: colorPalette.black,
    secondary: colorPalette.gray400,
    inverted: colorPalette.white,
  },
  border: {
    default: colorPalette.gray100,
    strong: colorPalette.gray300,
  },
  brand: {
    primary: colorPalette.red500,
    secondary: colorPalette.blue500,
  },
  status: {
    success: colorPalette.blue500,
    warning: "#FFA726",
    error: colorPalette.red500,
  },
} as const;
