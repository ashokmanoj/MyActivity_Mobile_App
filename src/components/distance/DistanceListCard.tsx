import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Shadow } from '../../theme';
import type { DistanceRecord, VehicleType } from '../../types';

const vehicleIcons: Record<VehicleType, keyof typeof Ionicons.glyphMap> = {
  bike: 'bicycle',
  car: 'car',
  other: 'bus',
};
const vehicleLabels: Record<VehicleType, string> = { bike: 'Bike', car: 'Car', other: 'Other' };

interface DistanceListCardProps {
  item: DistanceRecord;
  onPress: () => void;
}

export default function DistanceListCard({ item, onPress }: DistanceListCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardHeader}>
        <View style={styles.transportRow}>
          <Ionicons name={vehicleIcons[item.vehicleType]} size={22} color={Colors.text} />
          <Text style={styles.transportLabel}>{vehicleLabels[item.vehicleType]}</Text>
        </View>
        <View style={[styles.statusTag, item.status === 'started' && styles.statusStarted]}>
          <Text style={[styles.statusText, item.status === 'started' && styles.statusTextStarted]}>
            {item.status === 'started' ? 'Started' : 'Finished'}
          </Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.section}>
          <Text style={styles.sectionLabelOrange}>START</Text>
          <Text style={styles.odoText}>Odo: {item.startOdo} KM</Text>
          <Text style={styles.dateText}>{item.startDate ?? 'N/A'}</Text>
        </View>
        <View style={styles.arrowWrap}>
          <Ionicons name="arrow-forward" size={20} color={Colors.textSecondary} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionLabelRed}>END</Text>
          <Text style={styles.odoText}>Odo: {item.endOdo != null ? `${item.endOdo} KM` : '- KM'}</Text>
          <Text style={styles.dateText}>{item.endDate ?? 'N/A'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: 16,
    marginBottom: 12,
    ...Shadow.md,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  transportRow: { flexDirection: 'row', alignItems: 'center' },
  transportLabel: { fontSize: 16, fontWeight: '700', color: Colors.text, marginLeft: 8 },
  statusTag: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: Radius.lg, backgroundColor: Colors.statusGreen },
  statusStarted: { backgroundColor: '#FFF9C4' },
  statusText: { fontSize: 12, fontWeight: '600', color: Colors.white },
  statusTextStarted: { color: '#F57F17' },
  cardBody: { flexDirection: 'row', alignItems: 'flex-start' },
  section: { flex: 1 },
  sectionLabelOrange: { fontSize: 12, fontWeight: '700', color: Colors.accent, marginBottom: 4 },
  sectionLabelRed: { fontSize: 12, fontWeight: '700', color: Colors.statusRed, marginBottom: 4 },
  odoText: { fontSize: 14, color: Colors.text, marginBottom: 2 },
  dateText: { fontSize: 12, color: Colors.textSecondary },
  arrowWrap: { paddingHorizontal: 8, paddingTop: 4 },
});
