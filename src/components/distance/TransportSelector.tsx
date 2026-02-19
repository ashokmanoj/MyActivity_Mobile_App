import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../theme';
import type { VehicleType } from '../../types';

interface TransportSelectorProps {
  value: VehicleType;
  onChange: (v: VehicleType) => void;
}

const options: { key: VehicleType; icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { key: 'bike', icon: 'bicycle', label: 'Bike' },
  { key: 'car', icon: 'car', label: 'Car' },
  { key: 'other', icon: 'bus', label: 'Other' },
];

export default function TransportSelector({ value, onChange }: TransportSelectorProps) {
  return (
    <View style={styles.row}>
      {options.map((opt) => {
        const selected = value === opt.key;
        return (
          <TouchableOpacity
            key={opt.key}
            style={[styles.option, selected && styles.optionSelected]}
            onPress={() => onChange(opt.key)}
            activeOpacity={0.8}
          >
            <Ionicons name={opt.icon} size={28} color={selected ? Colors.primary : Colors.white} />
            <Text style={[styles.label, selected && styles.labelSelected]}>{opt.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8, paddingBottom: 16 },
  option: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  optionSelected: { backgroundColor: Colors.white, borderColor: Colors.primaryLight },
  label: { marginTop: 6, fontSize: 13, fontWeight: '600', color: Colors.white },
  labelSelected: { color: Colors.primary },
});
