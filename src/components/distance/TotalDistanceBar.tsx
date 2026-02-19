import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

interface TotalDistanceBarProps {
  totalKm: number;
}

export default function TotalDistanceBar({ totalKm }: TotalDistanceBarProps) {
  return (
    <View style={styles.bar}>
      <Text style={styles.label}>Total Distance Calculated</Text>
      <Text style={styles.value}>{totalKm} KM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  label: { fontSize: 14, color: Colors.textSecondary },
  value: { fontSize: 16, fontWeight: '700', color: Colors.text },
});
