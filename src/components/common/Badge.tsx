import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, FontSize } from '../../theme';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const bg = variant === 'success' ? Colors.statusGreen : variant === 'warning' ? '#FFF9C4' : variant === 'error' ? Colors.statusRed : Colors.background;
  const textColor = variant === 'warning' ? '#F57F17' : Colors.white;
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: variant === 'default' ? Colors.text : textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: Radius.lg,
    alignSelf: 'flex-start',
  },
  text: { fontSize: FontSize.caption, fontWeight: '600' },
});
