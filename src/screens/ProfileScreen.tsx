import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Profile" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MK</Text>
        </View>
        <Text style={styles.name}>Manoj Kumar</Text>
        <Text style={styles.email}>manoj@example.com</Text>
        <Text style={styles.phone}>+91 9876543210</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 24, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarText: { color: colors.white, fontSize: 28, fontWeight: '600' },
  name: { fontSize: typography.title.fontSize, fontWeight: '600', color: colors.text, marginBottom: 4 },
  email: { fontSize: typography.body.fontSize, color: colors.textSecondary, marginBottom: 2 },
  phone: { fontSize: typography.body.fontSize, color: colors.textSecondary },
});
