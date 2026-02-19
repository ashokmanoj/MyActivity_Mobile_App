import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../theme';
import type { LeaveType } from '../../types';

type Step = 'select' | 'confirm';

interface LeaveModalProps {
  visible: boolean;
  step: Step;
  selectedLeaveType: LeaveType | null;
  onClose: () => void;
  onSelectLeaveType: (type: LeaveType) => void;
  onConfirm: () => void;
}

const leaveOptions: { key: LeaveType; icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { key: 'normal', icon: 'person', label: 'Normal Leave' },
  { key: 'holiday', icon: 'umbrella', label: 'Holiday Leave' },
];
const leaveLabels: Record<LeaveType, string> = { normal: 'Normal Leave', holiday: 'Holiday Leave' };

export default function LeaveModal({
  visible,
  step,
  selectedLeaveType,
  onClose,
  onSelectLeaveType,
  onConfirm,
}: LeaveModalProps) {
  if (step === 'select') {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modal}>
                <Text style={styles.title}>Select Leave Type</Text>
                {leaveOptions.map((opt) => (
                  <TouchableOpacity
                    key={opt.key}
                    style={styles.option}
                    onPress={() => onSelectLeaveType(opt.key)}
                    activeOpacity={0.8}
                  >
                    <Ionicons name={opt.icon} size={22} color={Colors.primary} />
                    <Text style={styles.optionLabel}>{opt.label}</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text style={styles.question}>Are you sure you want to take leave?</Text>
              <Text style={styles.type}>Type: {selectedLeaveType ? leaveLabels[selectedLeaveType] : ''}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.cancelBtn} onPress={onClose} activeOpacity={0.8}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.yesBtn} onPress={onConfirm} activeOpacity={0.8}>
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 24 },
  modal: { backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border },
  title: { fontSize: 18, fontWeight: '700', color: Colors.primaryDark, textAlign: 'center', marginBottom: 20 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
  },
  optionLabel: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.text, marginLeft: 12 },
  question: { fontSize: 17, fontWeight: '700', color: Colors.text, textAlign: 'center', marginBottom: 8 },
  type: { fontSize: 14, color: Colors.textSecondary, textAlign: 'center', marginBottom: 24 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between' },
  cancelBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, borderWidth: 1, borderColor: Colors.border, alignItems: 'center', marginRight: 12 },
  cancelText: { fontSize: 16, fontWeight: '600', color: Colors.textSecondary },
  yesBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: Colors.statusRed, alignItems: 'center' },
  yesText: { fontSize: 16, fontWeight: '600', color: Colors.white },
});
