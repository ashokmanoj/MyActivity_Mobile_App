import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function SchoolDailyReportScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="School Daily Report" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.schoolName}>Dr. Public School, Konda...</Text>
            <View style={styles.barsRow}>
              <View style={[styles.bar, { backgroundColor: colors.statusGreen, flex: 3 }]} />
              <View style={[styles.bar, { backgroundColor: colors.statusRed, flex: 1 }]} />
              <View style={[styles.bar, { backgroundColor: colors.accent, flex: 2 }]} />
              <View style={[styles.bar, { backgroundColor: colors.statusGray, flex: 1 }]} />
            </View>
            <Text style={styles.percent}>85%</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  card: { backgroundColor: colors.white, borderRadius: 8, padding: 16, marginBottom: 12, shadowColor: colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  schoolName: { fontSize: typography.body.fontSize, color: colors.text, marginBottom: 12 },
  barsRow: { flexDirection: 'row', marginBottom: 8 },
  bar: { height: 12, borderRadius: 4, marginRight: 4 },
  percent: { fontSize: typography.caption.fontSize, color: colors.textSecondary },
});
