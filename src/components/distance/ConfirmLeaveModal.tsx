import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../theme/colors';
import type { LeaveType } from '../../types';

interface ConfirmLeaveModalProps {
  visible: boolean;
  leaveType: LeaveType;
  onClose: () => void;
  onConfirm: () => void;
}

const leaveLabels: Record<LeaveType, string> = {
  normal: 'Normal Leave',
  holiday: 'Holiday Leave',
};

export default function ConfirmLeaveModal({
  visible,
  leaveType,
  onClose,
  onConfirm,
}: ConfirmLeaveModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text style={styles.question}>Are you sure you want to take leave?</Text>
              <Text style={styles.type}>Type: {leaveLabels[leaveType]}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={onClose}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.yesBtn}
                  onPress={onConfirm}
                  activeOpacity={0.8}
                >
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  question: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  type: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginRight: 12,
  },
  cancelText: { fontSize: 16, fontWeight: '600', color: colors.textSecondary },
  yesBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: colors.statusRed,
    alignItems: 'center',
  },
  yesText: { fontSize: 16, fontWeight: '600', color: colors.white },
});
