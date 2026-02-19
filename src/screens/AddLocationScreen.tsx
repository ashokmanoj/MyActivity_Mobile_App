import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function AddLocationScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Add Location" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Input label="Location Name" placeholder="Enter" />
        <Input label="Address" placeholder="Enter address" multiline />
        <Input label="Pin Code" placeholder="Enter pin code" keyboardType="numeric" />
        <Text style={styles.sectionLabel}>Attach Images</Text>
        <View style={styles.imagePlaceholder} />
        <Button title="SAVE" onPress={() => navigation.goBack()} variant="primary" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  sectionLabel: { fontSize: typography.caption.fontSize, color: colors.textSecondary, marginBottom: 8 },
  imagePlaceholder: { height: 100, backgroundColor: colors.border, borderRadius: 8, marginBottom: 20 },
});
