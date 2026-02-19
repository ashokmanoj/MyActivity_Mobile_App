import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { colors } from '../theme/colors';

const MOCK_LOCATIONS = [
  { id: '1', title: 'Dr. Public School Konda...', address: 'Kondapur, Hyderabad' },
];

export default function LocationListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Location List" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.list}>
        {MOCK_LOCATIONS.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.address}
            icon="location"
            rightElement={<Ionicons name="checkmark-circle" size={24} color="#4CAF50" />}
            onPress={() => {}}
          />
        ))}
        <Button title="Add Location" onPress={() => navigation.navigate('AddLocation')} variant="primary" fullWidth style={styles.addBtn} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  addBtn: { marginTop: 16 },
});
