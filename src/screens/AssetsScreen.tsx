import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { colors } from '../theme/colors';

const MOCK_ASSETS = [
  { id: '1', title: 'Laptop', subtitle: 'Assigned • Feb 15, 2025', status: 'green' as const },
  { id: '2', title: 'Mobile Phone', subtitle: 'In Stock', status: 'yellow' as const },
];

export default function AssetsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Assets" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_ASSETS.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            status={item.status}
            onPress={() => {}}
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
