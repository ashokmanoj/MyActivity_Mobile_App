import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

interface OdometerBlockProps {
  label: string;
  icon: 'flag' | 'flag-outline';
  value: string;
  onChangeText: (v: string) => void;
  dateTime?: string;
  onOdoImage?: () => void;
  onSelfieImage?: () => void;
}

export default function OdometerBlock({
  label,
  icon,
  value,
  onChangeText,
  dateTime,
  onOdoImage,
  onSelfieImage,
}: OdometerBlockProps) {
  return (
    <View style={styles.block}>
      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Ionicons name={icon} size={14} color={colors.white} />
          <Text style={styles.tagText}>{label}</Text>
        </View>
        {dateTime && <Text style={styles.dateTime}>{dateTime}</Text>}
      </View>
      <View style={styles.inputRow}>
        <View style={styles.odoField}>
          <Text style={styles.odoLabel}>Odometer</Text>
          <TextInput
            style={styles.odoInput}
            value={value}
            onChangeText={onChangeText}
            placeholder="0"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
          />
          <Text style={styles.unit}>KM</Text>
        </View>
        <View style={styles.imageButtons}>
          <TouchableOpacity style={styles.imageBtn} onPress={onOdoImage} activeOpacity={0.7}>
            <Ionicons name="image-outline" size={24} color={colors.primaryLight} />
            <Text style={styles.imageLabel}>ODO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageBtn} onPress={onSelfieImage} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={24} color={colors.primaryLight} />
            <Text style={styles.imageLabel}>SELFIE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: { marginBottom: 20 },
  tagRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  tagText: { color: colors.white, fontSize: 12, fontWeight: '700', marginLeft: 4 },
  dateTime: { fontSize: 12, color: colors.textSecondary },
  inputRow: { flexDirection: 'row', alignItems: 'flex-end' },
  odoField: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  odoLabel: { fontSize: 12, color: colors.textSecondary, marginBottom: 4 },
  odoInput: { fontSize: 16, color: colors.text, paddingVertical: 4 },
  unit: { fontSize: 12, color: colors.textSecondary },
  imageButtons: { flexDirection: 'row', marginLeft: 12 },
  imageBtn: {
    width: 56,
    height: 56,
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageLabel: { fontSize: 10, color: colors.textSecondary, marginTop: 4 },
});
