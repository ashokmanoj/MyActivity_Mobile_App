import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Shadow } from '../../theme';

interface ExpenseItem {
  id: string;
  date: string;
  type: string;
  number: string;
  amount: number;
  limit?: number;
  hasComment: boolean;
  status?: 'approved' | 'rejected' | 'pending';
}

const MOCK_EXPENSES: ExpenseItem[] = [
  { id: '1', date: '12 Nov 2023', type: 'Bus', number: '101', amount: 2100, limit: 500, hasComment: true, status: 'pending' },
  { id: '2', date: '12 Nov 2023', type: 'Breakfast', number: '102', amount: 500, limit: 500, hasComment: true },
  { id: '3', date: '12 Nov 2023', type: 'Courear bill', number: '103', amount: 150, limit: 500, hasComment: true, status: 'pending' },
  { id: '4', date: '13 Nov 2023', type: 'Auto', number: '104', amount: 300, limit: 500, hasComment: true },
  { id: '5', date: '14 Nov 2023', type: 'Breakfast', number: '105', amount: 450, limit: 500, hasComment: true, status: 'pending' },
  { id: '6', date: '15 Nov 2023', type: 'Courier bill', number: '106', amount: 200, limit: 500, hasComment: true, status: 'pending' },
];

const typeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Bus: 'bus',
  Breakfast: 'restaurant',
  'Courear bill': 'print',
  'Courier bill': 'print',
  Auto: 'car',
};

export default function ExpenseListScreen({ navigation }: any) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Expense List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Expense')} style={styles.addBtn}>
          <Ionicons name="add" size={24} color={Colors.white} />
        </TouchableOpacity>
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
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {MOCK_EXPENSES.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.typeRow}>
                <Ionicons name={typeIcons[item.type] || 'receipt'} size={20} color={Colors.primary} />
                <Text style={styles.typeName}>{item.type}</Text>
              </View>
              <Text style={styles.number}>No: {item.number}</Text>
            </View>
            <View style={styles.cardMiddle}>
              {item.hasComment && <Ionicons name="chatbubble-outline" size={20} color={Colors.textSecondary} />}
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.amount}>₹{item.amount}</Text>
              {item.limit && <Text style={styles.limit}>({item.limit})</Text>}
              <View style={styles.statusRow}>
                {item.status === 'rejected' && (
                  <View style={styles.statusIcon}>
                    <Ionicons name="close-circle" size={20} color={Colors.statusRed} />
                  </View>
                )}
                {item.status === 'approved' && (
                  <View style={styles.statusIcon}>
                    <Ionicons name="checkmark-circle" size={20} color={Colors.statusGreen} />
                  </View>
                )}
                {item.status === 'pending' && (
                  <>
                    <TouchableOpacity style={styles.statusIcon}>
                      <Ionicons name="close-circle" size={20} color={Colors.statusRed} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.statusIcon}>
                      <Ionicons name="checkmark-circle" size={20} color={Colors.statusGreen} />
                    </TouchableOpacity>
                  </>
                )}
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
  title: { flex: 1, color: Colors.white, fontSize: FontSize.header, fontWeight: '700' },
  addBtn: { padding: 4 },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginTop: -12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    ...Shadow.md,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: FontSize.body, color: Colors.text, paddingVertical: 0 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...Shadow.md,
  },
  cardLeft: { flex: 1 },
  date: { fontSize: FontSize.caption, color: Colors.textSecondary, marginBottom: 8 },
  typeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  typeName: { fontSize: FontSize.title, fontWeight: '700', color: Colors.text, marginLeft: 8 },
  number: { fontSize: FontSize.caption, color: Colors.textSecondary },
  cardMiddle: { justifyContent: 'center', paddingHorizontal: 12 },
  cardRight: { alignItems: 'flex-end', justifyContent: 'center' },
  amount: { fontSize: 20, fontWeight: '700', color: Colors.primaryDark, marginBottom: 2 },
  limit: { fontSize: FontSize.caption, color: Colors.textSecondary, marginBottom: 8 },
  statusRow: { flexDirection: 'row', gap: 8 },
  statusIcon: { padding: 2 },
});
