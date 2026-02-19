import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { colors } from '../theme/colors';

const MOCK_TASKS = [
  { id: '1', title: 'Ultrasonic Cleaner Is a Fuller', date: 'Feb 15, 2025', status: 'red' as const },
  { id: '2', title: 'Documentation', date: 'Feb 14, 2025', status: 'yellow' as const },
  { id: '3', title: 'Install New Category', date: 'Feb 13, 2025', status: 'green' as const },
];

export default function NewTaskListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="New Task" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_TASKS.map((task) => (
          <ListItem
            key={task.id}
            title={task.title}
            subtitle={task.date}
            status={task.status}
            onPress={() => navigation.navigate('TaskActivity')}
          />
        ))}
        <Button
          title="+ New Task"
          onPress={() => navigation.navigate('NewTask')}
          variant="secondary"
          fullWidth
          style={styles.addButton}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  addButton: { marginTop: 16 },
});
