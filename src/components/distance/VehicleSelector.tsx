import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import type { VehicleType } from '../../types';

interface VehicleSelectorProps {
  value: VehicleType;
  onChange: (v: VehicleType) => void;
}

const options: { key: VehicleType; icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { key: 'bike', icon: 'bicycle', label: 'Bike' },
  { key: 'car', icon: 'car', label: 'Car' },
  { key: 'other', icon: 'bus', label: 'Other' },
];

export default function VehicleSelector({ value, onChange }: VehicleSelectorProps) {
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
            <Ionicons
              name={opt.icon}
              size={28}
              color={selected ? colors.primary : colors.white}
            />
            <Text style={[styles.label, selected && styles.labelSelected]}>{opt.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding : 50,
    paddingBottom: 16,
  },
  option: {
    flex: 1,
    marginHorizontal: 6,
    
    borderRadius: 12,
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'#FFFFFF'
 
  },
  optionSelected: {
    backgroundColor: colors.white,
    borderColor: colors.primaryLight,
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
  },
  labelSelected: {
    color: colors.primary,
  },
});
