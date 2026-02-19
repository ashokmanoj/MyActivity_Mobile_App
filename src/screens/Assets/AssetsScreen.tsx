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

export default function AssetsScreen({ navigation }: any) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Asset Management</Text>
      </View>

      <View style={styles.searchWrap}>
        <Ionicons name="search" size={20} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="filter" size={20} color={Colors.primaryDark} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.filterSection}>
          <TouchableOpacity style={styles.filterField}>
            <Text style={styles.filterText}>Select Project</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterField}>
            <Text style={styles.filterText}>Select a project first...</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterField}>
            <Text style={styles.filterText}>Select a District first...</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterField}>
            <Text style={styles.filterText}>Select Location</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterField}>
            <Text style={styles.filterText}>Select Status</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cell</Text>
          <Text style={styles.cardSubtitle}>Request</Text>
          <View style={styles.divider} />
          <View style={styles.cardRow}>
            <View style={styles.cardCol}>
              <Text style={styles.cardLabel}>Transaction No.</Text>
              <Text style={styles.cardValue}>251119000051564</Text>
            </View>
            <View style={styles.cardCol}>
              <Text style={styles.cardLabel}>Transaction Date</Text>
              <Text style={styles.cardValue}>Nov 19 2025</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardRow}>
            <View style={styles.cardCol}>
              <Text style={styles.cardLabel}>Status</Text>
              <Text style={styles.cardValue}>Working</Text>
            </View>
            <View style={styles.cardCol}>
              <Text style={styles.cardLabel}>Location</Text>
              <Text style={styles.cardValue}>Received from store</Text>
            </View>
          </View>
        </View>
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
  title: { flex: 1, color: Colors.white, fontSize: FontSize.header, fontWeight: '700' },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E5F5',
    marginHorizontal: 16,
    marginTop: -12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: Radius.md,
    ...Shadow.sm,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: FontSize.body, color: Colors.text, paddingVertical: 0 },
  filterBtn: { padding: 4 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  filterSection: { marginBottom: 20 },
  filterField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 12,
    ...Shadow.sm,
  },
  filterText: { flex: 1, fontSize: FontSize.body, color: Colors.text },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: 16,
    ...Shadow.md,
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: Colors.primaryDark, marginBottom: 4 },
  cardSubtitle: { fontSize: FontSize.body, color: Colors.textSecondary, marginBottom: 12 },
  divider: { height: 1, backgroundColor: Colors.border, marginVertical: 12 },
  cardRow: { flexDirection: 'row' },
  cardCol: { flex: 1 },
  cardLabel: { fontSize: FontSize.caption, color: Colors.textSecondary, marginBottom: 4 },
  cardValue: { fontSize: FontSize.body, fontWeight: '700', color: Colors.text },
});
