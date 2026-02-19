import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface SyncFooterProps {
  lastSynced?: string;
  onSync?: () => void;
}

export default function SyncFooter({
  lastSynced = '17 Feb 2026 15:09 PM',
  onSync,
}: SyncFooterProps) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.syncButton} onPress={onSync} activeOpacity={0.8}>
        <Ionicons name="sync" size={20} color={colors.white} />
        <Text style={styles.syncText}>SYNC</Text>
      </TouchableOpacity>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Last synced on {lastSynced}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryDark,
  },
  syncButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryDarker,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.white,
  },
  syncText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  statusContainer: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10
    ,
    borderColor: colors.white,
    borderWidth: 1,
  },
  statusText: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 12,
  },
});
