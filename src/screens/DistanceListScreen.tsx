import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { DistanceRecord, VehicleType } from '../types';

const vehicleIcons: Record<VehicleType, keyof typeof Ionicons.glyphMap> = {
  bike: 'bicycle',
  car: 'car',
  other: 'bus',
};
const vehicleLabels: Record<VehicleType, string> = {
  bike: 'Bike',
  car: 'Car',
  other: 'Other',
};

const MOCK_ITEMS: DistanceRecord[] = [
  {
    id: '1',
    vehicleType: 'bike',
    status: 'started',
    startOdo: 3,
    endOdo: undefined,
    startDate: '19 Feb 2026, 10:02 AM',
    endDate: undefined,
  },
];

function DistanceListItem({
  item,
  onPress,
}: {
  item: DistanceRecord;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardHeader}>
        <View style={styles.transportRow}>
          <Ionicons
            name={vehicleIcons[item.vehicleType]}
            size={22}
            color={colors.text}
          />
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
          <Ionicons name="arrow-forward" size={20} color={colors.textSecondary} />
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

export default function DistanceListScreen({ navigation }: any) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Distance List</Text>
      </View>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={20} color={colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by transport..."
          placeholderTextColor={colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {MOCK_ITEMS.map((item) => (
          <DistanceListItem
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('Distance', { id: item.id })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { padding: 4, marginRight: 12 },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: -12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: typography.body.fontSize,
    color: colors.text,
    paddingVertical: 0,
  },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  transportRow: { flexDirection: 'row', alignItems: 'center' },
  transportLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 8,
  },
  statusTag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: colors.statusGreen,
  },
  statusStarted: {
    backgroundColor: '#FFF9C4',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  statusTextStarted: {
    color: '#F57F17',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  section: { flex: 1 },
  sectionLabelOrange: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 4,
  },
  sectionLabelRed: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.statusRed,
    marginBottom: 4,
  },
  odoText: { fontSize: 14, color: colors.text, marginBottom: 2 },
  dateText: { fontSize: 12, color: colors.textSecondary },
  arrowWrap: { paddingHorizontal: 8, paddingTop: 4 },
});
