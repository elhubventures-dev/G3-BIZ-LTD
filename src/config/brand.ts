/**
 * G3-Biz brand colors — official company palette
 */
export const brand = {
  /** Primary brand color */
  primary: "#8C001D",
  /** Secondary brand color */
  black: "#000000",
  /** Dark panels, nav variants */
  charcoal: "#000000",
  charcoalMid: "#111111",
  charcoalLogo: "#1A1A1A",
  dark: "#000000",
  darkBrown: "#1A1A1A",
  /** Section headings */
  heading: "#000000",
  headingAlt: "#1A1A1A",
  /** Body text */
  body: "#666666",
  /** Text on primary (red) backgrounds */
  onPrimary: "#FFFFFF",
  /** Muted text on dark backgrounds */
  muted: "#DDDDDD",
  /** Light section backgrounds */
  light: "#F7F7F7",
  lightBlue: "#FAFAFA",
  border: "#ECECEC",
  white: "#FFFFFF",
} as const;

export const fonts = {
  heading: "var(--font-merriweather)",
  body: "var(--font-nunito)",
} as const;
