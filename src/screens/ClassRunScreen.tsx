import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const barColors = [colors.statusRed, colors.text, colors.statusGreen, '#E91E63', colors.statusYellow, '#2196F3', colors.white, colors.statusGray, colors.accent];

export default function ClassRunScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Class Run" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        <Text style={styles.statusTitle}>Class Run Status</Text>
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.checkbox} />
              <Text style={styles.schoolName}>Dr. Public School, Konda...</Text>
            </View>
            <View style={styles.barsRow}>
              {barColors.map((c, j) => (
                <View key={j} style={[styles.bar, { backgroundColor: c, borderWidth: c === colors.white ? 1 : 0 }]} />
              ))}
            </View>
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
  statusTitle: { fontSize: typography.title.fontSize, fontWeight: '600', marginBottom: 16, color: colors.text },
  card: { backgroundColor: colors.white, borderRadius: 8, padding: 16, marginBottom: 12, shadowColor: colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: colors.border, borderRadius: 4, marginRight: 12 },
  schoolName: { flex: 1, fontSize: typography.body.fontSize, color: colors.text },
  barsRow: { flexDirection: 'row', flexWrap: 'wrap' },
  bar: { width: 24, height: 12, marginRight: 4, marginBottom: 4, borderRadius: 2, borderColor: colors.border },
});
