import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Radius, Shadow } from '../../theme';

interface SchoolData {
  id: string;
  name: string;
  code: string;
  tasks: number;
  tickets: number;
  lastVisit: string;
  lastRacRun: string;
}

const MOCK_SCHOOLS: SchoolData[] = [
  {
    id: '1',
    name: 'KAMALACHARA HIGH SCHOOL',
    code: '16030101404',
    tasks: 4,
    tickets: 4,
    lastVisit: '09 Dec 2025',
    lastRacRun: 'N/A',
  },
  {
    id: '2',
    name: 'TAFAMACHARA HIGH SCHOOL',
    code: '16030102108',
    tasks: 0,
    tickets: 1,
    lastVisit: 'N/A',
    lastRacRun: 'N/A',
  },
];

const dates = ['Feb 16', 'Feb 14', 'Feb 13', 'Feb 12', 'Feb 11'];

export default function ClassRunScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState('Feb 16');
  const [selectedProject, setSelectedProject] = useState('APIV');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>CLASS RUN STATUS</Text>
        <Text style={styles.month}>Feb 2026</Text>
      </View>

      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.projectSelector}>
          <View>
            <Text style={styles.projectMain}>{selectedProject}</Text>
            <Text style={styles.projectSub}>Classrooms</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color={Colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="search" size={20} color={Colors.primaryDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="information-circle" size={20} color={Colors.primaryDark} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll} contentContainerStyle={styles.dateScrollContent}>
        {dates.map((date) => (
          <TouchableOpacity
            key={date}
            style={[styles.dateBtn, selectedDate === date && styles.dateBtnSelected]}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={[styles.dateText, selectedDate === date && styles.dateTextSelected]}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {MOCK_SCHOOLS.map((school) => (
          <View key={school.id} style={styles.card}>
            <Text style={styles.schoolName}>
              {school.name} ({school.code})
            </Text>
            <View style={styles.rnRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <View key={i} style={styles.rnBtn}>
                  <Text style={styles.rnText}>R | N</Text>
                </View>
              ))}
            </View>
            <View style={styles.divider} />
            <View style={styles.statsRow}>
              <View style={styles.statCol}>
                <Text style={styles.statLabel}>Tasks</Text>
                <Text style={styles.statValue}>{school.tasks}</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={styles.statLabel}>Tickets</Text>
                <Text style={styles.statValue}>{school.tickets}</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={styles.statLabel}>Last Visit</Text>
                <Text style={styles.statValue}>{school.lastVisit}</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={styles.statLabel}>Last RAC Run</Text>
                <Text style={styles.statValue}>{school.lastRacRun}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: {
    backgroundColor: Colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { padding: 4, marginRight: 12 },
  title: { flex: 1, color: Colors.white, fontSize: FontSize.header, fontWeight: '700', letterSpacing: 1 },
  month: { color: Colors.white, fontSize: FontSize.body, fontWeight: '600' },
  filterSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    gap: 8,
  },
  projectSelector: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 12,
    ...Shadow.sm,
  },
  projectMain: { fontSize: FontSize.body, fontWeight: '600', color: Colors.text },
  projectSub: { fontSize: FontSize.caption, color: Colors.textSecondary },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.sm,
  },
  dateScroll: { backgroundColor: Colors.white },
  dateScrollContent: { paddingHorizontal: 16, paddingVertical: 12 },
  dateBtn: { paddingHorizontal: 16, paddingVertical: 8, marginRight: 8 },
  dateBtnSelected: {},
  dateText: { fontSize: FontSize.caption, color: Colors.textSecondary },
  dateTextSelected: { color: Colors.primaryDark, fontWeight: '600' },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: 16,
    marginBottom: 12,
    ...Shadow.md,
  },
  schoolName: { fontSize: FontSize.title, fontWeight: '700', color: Colors.text, marginBottom: 12 },
  rnRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  rnBtn: {
    backgroundColor: Colors.statusRed,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.sm,
  },
  rnText: { color: Colors.white, fontSize: FontSize.caption, fontWeight: '600' },
  divider: { height: 1, backgroundColor: Colors.border, marginVertical: 12 },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap' },
  statCol: { width: '50%', marginBottom: 12 },
  statLabel: { fontSize: FontSize.caption, color: Colors.textSecondary, marginBottom: 4 },
  statValue: { fontSize: FontSize.body, fontWeight: '700', color: Colors.text },
});
