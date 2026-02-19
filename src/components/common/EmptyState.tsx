import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize } from '../../theme';

interface EmptyStateProps {
  message?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function EmptyState({ message = 'No data yet', icon = 'folder-open-outline' }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={48} color={Colors.textSecondary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  message: { fontSize: FontSize.body, color: Colors.textSecondary, marginTop: 12, textAlign: 'center' },
});
