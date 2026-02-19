import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const checklist = [
  'Install New Category (Manual Update)',
  'Configure Settings',
  'Training Session',
  'Documentation',
];

export default function TaskActivityScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Task Activity" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Generated</Text>
          <Text style={styles.body}>Task summary and details...</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <Text style={styles.body}>Activity 1st and 2nd working day</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Checklist</Text>
          {checklist.map((item, i) => (
            <View key={i} style={styles.checkItem}>
              <View style={styles.checkbox} />
              <Text style={styles.checkText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  contentInner: { padding: 16, paddingBottom: 32 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: typography.title.fontSize, fontWeight: '600', color: colors.text, marginBottom: 12 },
  body: { fontSize: typography.body.fontSize, color: colors.textSecondary },
  checkItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: colors.border, borderRadius: 4, marginRight: 12 },
  checkText: { fontSize: typography.body.fontSize, color: colors.text },
});
