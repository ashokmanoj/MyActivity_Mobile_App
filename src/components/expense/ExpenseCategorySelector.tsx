import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Shadow } from '../../theme';

type Category = 'TA' | 'FOOD' | 'STAY' | 'OTHERS';

interface ExpenseCategorySelectorProps {
  value: Category;
  onChange: (c: Category) => void;
}

const categories: { key: Category; icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { key: 'TA', icon: 'walk', label: 'TA' },
  { key: 'FOOD', icon: 'restaurant', label: 'FOOD' },
  { key: 'STAY', icon: 'bed', label: 'STAY' },
  { key: 'OTHERS', icon: 'bag', label: 'OTHERS' },
];

export default function ExpenseCategorySelector({ value, onChange }: ExpenseCategorySelectorProps) {
  return (
    <View style={styles.container}>
      {categories.map((cat) => {
        const selected = value === cat.key;
        return (
          <TouchableOpacity
            key={cat.key}
            style={[styles.categoryBtn, selected && styles.categoryBtnSelected]}
            onPress={() => onChange(cat.key)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={cat.icon}
              size={28}
              color={selected ? Colors.primaryDark : Colors.primaryDark}
            />
            <Text style={[styles.label, selected && styles.labelSelected]}>{cat.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryBtn: {
    width: 70,
    height: 70,
    borderRadius: Radius.full,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.sm,
  },
  categoryBtnSelected: {
    backgroundColor: '#F3E5F5',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  labelSelected: {
    fontWeight: '700',
  },
});
