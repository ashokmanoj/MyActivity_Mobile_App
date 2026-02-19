import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { colors } from '../theme/colors';

const MOCK_ACTIVITIES = [
  { id: '1', title: 'Dr. Public School Konda...', date: 'Feb 15, 2025', icon: 'calendar' as const, status: 'Completed' },
  { id: '2', title: 'Client Meeting', date: 'Feb 14, 2025', icon: 'people' as const, status: 'Pending' },
];

export default function ActivityListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Activity List" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_ACTIVITIES.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={`${item.date} - ${item.status}`}
            icon={item.icon}
            onPress={() => navigation.navigate('ActivityDetail')}
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
});
