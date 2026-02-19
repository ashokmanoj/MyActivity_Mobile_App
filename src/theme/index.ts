/**
 * Design tokens: Colors, Spacing, Radius, FontSize, Shadow
 */

export const Colors = {
  primary: '#6A1B9A',
  primaryDark: '#673AB7',
  primaryDarker: '#4A148C',
  primaryLight: '#7B1FA2',
  accent: '#FF6D00',
  accentLight: '#FFAB40',
  white: '#FFFFFF',
  background: '#F5F5F5',
  card: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  border: '#E0E0E0',
  statusRed: '#F44336',
  statusYellow: '#FFC107',
  statusGreen: '#4CAF50',
  statusGray: '#9E9E9E',
  shadow: 'rgba(0,0,0,0.1)',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const Radius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const FontSize = {
  small: 11,
  caption: 12,
  body: 14,
  title: 16,
  header: 18,
  button: 14,
} as const;

export const Shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
} as const;

// Legacy exports for backward compatibility during migration
export const colors = Colors;
export const typography = {
  header: { fontSize: FontSize.header, fontWeight: '600' as const },
  title: { fontSize: FontSize.title, fontWeight: '600' as const },
  body: { fontSize: FontSize.body, fontWeight: '400' as const },
  caption: { fontSize: FontSize.caption, fontWeight: '400' as const },
  button: { fontSize: FontSize.button, fontWeight: '600' as const },
  small: { fontSize: FontSize.small, fontWeight: '400' as const },
};
