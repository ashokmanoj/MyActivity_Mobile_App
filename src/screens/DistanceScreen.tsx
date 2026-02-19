import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function DistanceScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Distance" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total Distance</Text>
            <Text style={styles.summaryValue}>1000 KM</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total Expense</Text>
            <Text style={styles.summaryValue}>10,00,000</Text>
          </View>
        </View>
        {[
          { date: 'Feb 15, 2025', distance: '50 KM' },
          { date: 'Feb 14, 2025', distance: '75 KM' },
        ].map((item, i) => (
          <ListItem
            key={i}
            title={item.distance}
            subtitle={item.date}
            onPress={() => navigation.navigate('DistanceDetail')}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  summary: { flexDirection: 'row', marginBottom: 20 },
  summaryItem: { flex: 1, backgroundColor: colors.white, padding: 16, borderRadius: 8, marginRight: 8, shadowColor: colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  summaryLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary },
  summaryValue: { fontSize: typography.title.fontSize, fontWeight: '600', color: colors.text, marginTop: 4 },
});
