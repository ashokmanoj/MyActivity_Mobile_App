import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function DistanceDetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Distance" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Input label="Start Place" placeholder="Enter" rightIcon="location" />
        <Input label="End Place" placeholder="Enter" rightIcon="location" />
        <Input label="Distance (KM)" placeholder="Enter" keyboardType="numeric" />
        <Input label="Description" placeholder="Enter" multiline />
        <Button title="SAVE" onPress={() => navigation.goBack()} variant="primary" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
});
