import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { colors } from '../theme/colors';

const MOCK_BRANCHES = [
  { id: '1', title: 'Hyderabad Branch', subtitle: 'Kondapur, Hyderabad' },
  { id: '2', title: 'Bangalore Branch', subtitle: 'Koramangala, Bangalore' },
];

export default function BranchScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Branch" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_BRANCHES.map((item) => (
          <ListItem key={item.id} title={item.title} subtitle={item.subtitle} icon="business" onPress={() => {}} />
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
