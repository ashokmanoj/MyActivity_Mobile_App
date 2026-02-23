import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../theme/colors';
import DistanceHeader from '../components/distance/DistanceHeader';
import VehicleSelector from '../components/distance/VehicleSelector';
import OdometerBlock from '../components/distance/OdometerBlock';
import SelectLeaveTypeModal from '../components/distance/SelectLeaveTypeModal';
import ConfirmLeaveModal from '../components/distance/ConfirmLeaveModal';
import type { VehicleType, LeaveType } from '../types';
import { formatDateTime } from '../utils';

export default function DistanceScreen({ navigation }: any) {
  const [vehicle, setVehicle] = useState<VehicleType>('bike');
  const [startOdo, setStartOdo] = useState('');
  const [endOdo, setEndOdo] = useState('');
  const [startDate] = useState(() => formatDateTime(new Date()));
  const [endDate] = useState(() => formatDateTime(new Date()));
  const [showLeaveTypeModal, setShowLeaveTypeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState<LeaveType>('normal');
  const [isStarted, setIsStarted] = useState(false);
  const [showLocationToast, setShowLocationToast] = useState(false);

  const startNum = parseFloat(startOdo) || 0;
  const endNum = parseFloat(endOdo) || 0;
  const totalKm = endNum > startNum ? endNum - startNum : 0;

  const handleTakeLeave = () => {
    setShowLeaveTypeModal(true);
  };

  const handleSelectLeaveType = (type: LeaveType) => {
    setSelectedLeaveType(type);
    setShowLeaveTypeModal(false);
    setShowConfirmModal(true);
  };

  const handleConfirmLeave = () => {
    setShowConfirmModal(false);
    // Backend: submit leave
  };

  const handleStart = () => {
    setIsStarted(true);
    setShowLocationToast(true);
    setTimeout(() => setShowLocationToast(false), 3000);
  };

  const handleFinish = () => {
    // Backend: save distance record
    navigation.navigate('DistanceList');
  };

  return (
    <View style={styles.container}>
      <DistanceHeader
        onBack={() => navigation.goBack()}
        onDistanceListPress={() => navigation.navigate('DistanceList')}
        activeTab="form"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <View style={styles.vehicleSection}>
          <VehicleSelector value={vehicle} onChange={setVehicle} />
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <OdometerBlock
            label="START"
            icon="flag-outline"
            value={startOdo}
            onChangeText={setStartOdo}
            dateTime={isStarted ? startDate : undefined}
            onOdoImage={() => {}}
            onSelfieImage={() => {}}
          />
          <OdometerBlock
            label="END"
            icon="flag"
            value={endOdo}
            onChangeText={setEndOdo}
            dateTime={endOdo ? endDate : undefined}
            onOdoImage={() => {}}
            onSelfieImage={() => {}}
          />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Distance Calculated</Text>
            <Text style={styles.totalValue}>{totalKm} KM</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.takeLeaveBtn}
            onPress={handleTakeLeave}
            activeOpacity={0.8}
          >
            <Text style={styles.footerBtnText}>Take Leave</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={isStarted ? handleFinish : handleStart}
            activeOpacity={0.8}
          >
            <Text style={styles.footerBtnText}>{isStarted ? 'FINISH' : 'START'}</Text>
          </TouchableOpacity>
        </View>
        {showLocationToast && (
          <View style={styles.toast}>
            <Text style={styles.toastText}>
              Background location is required for distance tracking.
            </Text>
          </View>
        )}
      </KeyboardAvoidingView>
      <SelectLeaveTypeModal
        visible={showLeaveTypeModal}
        onClose={() => setShowLeaveTypeModal(false)}
        onSelect={handleSelectLeaveType}
      />
      <ConfirmLeaveModal
        visible={showConfirmModal}
        leaveType={selectedLeaveType}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmLeave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1 },
  vehicleSection: { backgroundColor: colors.primaryDark, paddingHorizontal: 8, borderBottomEndRadius:20, borderBottomLeftRadius:20 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 24 },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  totalLabel: { fontSize: 14, color: colors.textSecondary },
  totalValue: { fontSize: 16, fontWeight: '700', color: colors.text },
  footer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 28 : 16,
    gap: 12,
  },
  takeLeaveBtn: {
    flex: 1,
    backgroundColor: colors.statusRed,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtn: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBtnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  toast: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toastText: { color: colors.white, fontSize: 13, flex: 1 },
});
