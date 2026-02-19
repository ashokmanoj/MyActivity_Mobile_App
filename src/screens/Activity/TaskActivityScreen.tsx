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
import { Colors, FontSize, Radius, Shadow } from '../../theme';

interface TaskActivity {
  id: string;
  type: string;
  classroom: string;
  location: string;
  synced: boolean;
  date: string;
  status: 'in_progress' | 'completed';
  taskId: string;
}

const MOCK_ACTIVITIES: TaskActivity[] = [
  {
    id: '1',
    type: 'Material Delivery',
    classroom: 'APIV Classrooms',
    location: 'KAMALACHARA HIGH SCHOOL | 16030101404',
    synced: true,
    date: '09 Dec 25 14:48',
    status: 'in_progress',
    taskId: '126297',
  },
  {
    id: '2',
    type: 'Installation',
    classroom: 'APIV Classrooms',
    location: 'KAMALACHARA HIGH SCHOOL | 16030101404',
    synced: true,
    date: '19 Nov 25 11:04',
    status: 'in_progress',
    taskId: '122133',
  },
];

export default function TaskActivityScreen({ navigation }: any) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>TASK ACTIVITY</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={20} color={Colors.white} />
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={20} color={Colors.primaryDark} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {MOCK_ACTIVITIES.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <View style={styles.cardLeft}>
              <View style={styles.iconBox}>
                <Ionicons name="bar-chart" size={24} color={Colors.primaryDark} />
              </View>
            </View>
            <View style={styles.cardMiddle}>
              <Text style={styles.typeName}>{item.type}</Text>
              <Text style={styles.classroom}>{item.classroom}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.synced}>Synced</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.status}>{item.status === 'in_progress' ? 'In progress' : 'Completed'}</Text>
              <Text style={styles.taskId}>{item.taskId}</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} style={styles.chevron} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
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
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  addText: { color: Colors.white, fontSize: FontSize.body, fontWeight: '600' },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginTop: -12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: Radius.full,
    ...Shadow.sm,
  },
  searchInput: { flex: 1, fontSize: FontSize.body, color: Colors.text, paddingVertical: 0 },
  searchIcon: { padding: 4 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: 16,
    marginBottom: 12,
    ...Shadow.md,
  },
  cardLeft: { marginRight: 12 },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardMiddle: { flex: 1 },
  typeName: { fontSize: FontSize.title, fontWeight: '700', color: Colors.text, marginBottom: 4 },
  classroom: { fontSize: FontSize.caption, color: Colors.textSecondary, marginBottom: 4 },
  location: { fontSize: FontSize.body, color: Colors.text, marginBottom: 4 },
  synced: { fontSize: FontSize.caption, color: Colors.statusGreen, fontWeight: '600' },
  cardRight: { alignItems: 'flex-end', justifyContent: 'space-between' },
  date: { fontSize: FontSize.caption, color: Colors.text, marginBottom: 4 },
  status: { fontSize: FontSize.caption, color: '#FF9800', fontWeight: '600', marginBottom: 4 },
  taskId: { fontSize: FontSize.body, color: Colors.text, marginBottom: 4 },
  chevron: { marginTop: 'auto' },
});
