import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function ActivityDetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Activity" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Text style={styles.title}>Dr. Public School Konda...</Text>
        <Text style={styles.date}>Feb 15, 2025</Text>
        <Input label="Location" value="Dr. Public School, Kondapur" editable={false} />
        <Input label="People Meeting" value="Principal, Staff" editable={false} />
        <Input
          label="Description"
          value="Meeting regarding installation and training"
          multiline
          numberOfLines={4}
          editable={false}
        />
        <Text style={styles.sectionLabel}>Attached Images</Text>
        <View style={styles.imagePlaceholder} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  title: { fontSize: typography.title.fontSize, fontWeight: '600', color: colors.text, marginBottom: 4 },
  date: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 16 },
  sectionLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 8 },
  imagePlaceholder: { height: 120, backgroundColor: colors.border, borderRadius: 8 },
});
