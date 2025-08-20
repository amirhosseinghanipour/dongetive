export const Colors = {
  // primary
  primary: '#5467FF',
  secondary: '#23B58A',

  // background
  scaffoldBackground: '#141B30',
  cardBackground: '#2F364E',
  darkCardBackground: '#262E45',
  chipBackground: '#20263A',

  // text
  textPrimary: '#FFFFFF',
  textSecondary: '#CCD1E0',
  textMuted: '#A7B0CC',

  // status
  success: '#33DE7B',
  warning: '#FCCF65',
  ethereum: '#F7C42C',
  defi: '#5467FF',

  // overlay
  overlayLight: '#5467FF',
  overlaySuccess: '#23B58A',
} as const;

export type ColorKey = keyof typeof Colors; 