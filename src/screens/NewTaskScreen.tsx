import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function NewTaskScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="New Task" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Input label="Select Customer" placeholder="Select" rightIcon="chevron-down" />
        <Input label="Select Team" placeholder="Select" rightIcon="chevron-down" />
        <Input label="Select Service (Category)" placeholder="Select" rightIcon="chevron-down" />
        <Input label="Select Work Type" placeholder="Select" rightIcon="chevron-down" />
        <Input label="Schedule (Date & Time)" placeholder="Select" rightIcon="calendar-outline" />
        <Input label="Time Spent" placeholder="Enter" keyboardType="numeric" />
        <Input label="Comment" placeholder="Enter comment" multiline numberOfLines={3} />
        <Text style={styles.sectionLabel}>Attach Images</Text>
        <View style={styles.imageRow}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
        </View>
        <Button title="CREATE" onPress={() => navigation.goBack()} variant="primary" fullWidth style={styles.btn} />
        <Button title="SAVE AS DRAFT" onPress={() => navigation.goBack()} variant="outline" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  sectionLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 8 },
  imageRow: { flexDirection: 'row', marginBottom: 20 },
  imagePlaceholder: { width: 80, height: 80, backgroundColor: colors.border, borderRadius: 8, flex: 1, marginRight: 8 },
  btn: { marginBottom: 12 },
});
