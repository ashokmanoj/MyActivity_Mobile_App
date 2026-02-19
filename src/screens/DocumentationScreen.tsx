import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function DocumentationScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Documentation" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
        <Text style={styles.placeholder}>Documentation content</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  contentInner: { padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 },
  placeholder: { fontSize: typography.body.fontSize, color: colors.textSecondary },
});
