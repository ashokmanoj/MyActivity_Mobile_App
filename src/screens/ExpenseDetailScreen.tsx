import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function ExpenseDetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Travel Allowance" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Expense Type</Text>
          <Text style={styles.value}>Travel Allowance</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>₹1,500</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>Feb 15, 2025</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>Travel from office to client site</Text>
        </View>
        <Text style={styles.sectionLabel}>Receipt</Text>
        <View style={styles.imagePlaceholder} />
        <Button title="EDIT" onPress={() => navigation.navigate('NewExpense')} variant="primary" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  field: { marginBottom: 16 },
  label: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 4 },
  value: { fontSize: typography.body.fontSize, color: colors.text },
  sectionLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 8 },
  imagePlaceholder: { height: 120, backgroundColor: colors.border, borderRadius: 8, marginBottom: 20 },
});
