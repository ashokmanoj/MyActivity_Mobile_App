import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import type { LeaveType } from '../../types';

interface SelectLeaveTypeModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (type: LeaveType) => void;
}

const options: { key: LeaveType; icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { key: 'normal', icon: 'person', label: 'Normal Leave' },
  { key: 'holiday', icon: 'umbrella', label: 'Holiday Leave' },
];

export default function SelectLeaveTypeModal({
  visible,
  onClose,
  onSelect,
}: SelectLeaveTypeModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text style={styles.title}>Select Leave Type</Text>
              {options.map((opt) => (
                <TouchableOpacity
                  key={opt.key}
                  style={styles.option}
                  onPress={() => onSelect(opt.key)}
                  activeOpacity={0.8}
                >
                  <Ionicons name={opt.icon} size={22} color={colors.primary} />
                  <Text style={styles.optionLabel}>{opt.label}</Text>
                  <Ionicons name="chevron-forward" size={20} color={colors.primary} />
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
    textAlign: 'center',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.primaryLight,
  },
  optionLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 12,
  },
});
