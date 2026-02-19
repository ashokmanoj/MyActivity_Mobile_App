import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { colors } from '../theme/colors';

const MOCK_EXPENSES = [
  { id: '1', title: 'Mobile Recharge', amount: '₹500', date: 'Feb 15, 2025', icon: 'phone-portrait' as const },
  { id: '2', title: 'Electricity Bill', amount: '₹2,000', date: 'Feb 14, 2025', icon: 'flash' as const },
];

export default function ExpenseListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Expense List" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_EXPENSES.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={`${item.amount} • ${item.date}`}
            icon={item.icon}
            onPress={() => navigation.navigate('ExpenseDetail')}
          />
        ))}
        <Button title="Add Expense" onPress={() => navigation.navigate('NewExpense')} variant="secondary" fullWidth style={styles.addBtn} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  addBtn: { marginTop: 16 },
});
