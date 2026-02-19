import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function NewExpenseScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="New Expense" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Input label="Select Expense" placeholder="Select" rightIcon="chevron-down" />
        <Input label="Amount" placeholder="Enter amount" keyboardType="numeric" />
        <Input label="Date" placeholder="Select date" rightIcon="calendar-outline" />
        <Input label="Comment" placeholder="Enter comment" multiline />
        <Text style={styles.sectionLabel}>Attach Receipt</Text>
        <View style={styles.imagePlaceholder} />
        <Button title="SAVE" onPress={() => navigation.goBack()} variant="primary" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  sectionLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 8 },
  imagePlaceholder: { height: 100, backgroundColor: colors.border, borderRadius: 8, marginBottom: 20 },
});
