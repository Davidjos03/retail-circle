/**
 * "Retails Circle OS" dark theme, ported from the web Figma tokens.
 */
export const colors = {
  base: '#141414',
  surface: '#1a1a1a',
  surface2: '#212121',
  line: '#303030',
  lineSoft: '#242424',
  brand: '#7629f9',
  brandIcon: '#784bdb',
  brandSoft: 'rgba(118, 41, 249, 0.2)',
  paragraph: '#797979',

  text: '#e5e5e5',
  white: '#ffffff',
  muted: '#b7b7b7', // nav / secondary labels
  faint: '#797979', // paragraph
  dim: '#595959',
  green: '#2a904f',
  greenDark: '#16a34a',
} as const;

export type AppColors = typeof colors;
