import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const MOCK_RTS = [
  { id: '1', title: 'End user Visit', date: 'Feb 15, 2025', status: 'green' as const },
  { id: '2', title: 'Meeting with Team lead', date: 'Feb 14, 2025', status: 'yellow' as const },
];

export default function RTSListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="RTS List" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        <View style={styles.calendarPlaceholder}>
          <Text style={styles.calendarText}>January 2025</Text>
        </View>
        {MOCK_RTS.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.date}
            status={item.status}
            onPress={() => navigation.navigate('RTSDetails')}
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
  calendarPlaceholder: { backgroundColor: colors.white, padding: 16, borderRadius: 8, marginBottom: 16 },
  calendarText: { fontSize: typography.body.fontSize, color: colors.text },
});
