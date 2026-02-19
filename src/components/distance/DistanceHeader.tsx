import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

interface DistanceHeaderProps {
  onBack: () => void;
  onDistanceListPress?: () => void;
  activeTab?: 'form' | 'list';
}

export default function DistanceHeader({
  onBack,
  onDistanceListPress,
  activeTab = 'form',
}: DistanceHeaderProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleRow}>
          <Text style={[styles.titleMain, activeTab === 'list' && styles.titleInactive]}>
            DISTANCE
          </Text>
          <TouchableOpacity onPress={onDistanceListPress} disabled={!onDistanceListPress}>
            <Text
              style={[
                styles.titleSub,
                activeTab === 'list' && styles.titleActive,
              ]}
            >
              Distance List
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { padding: 4, marginRight: 12 },
  titleRow: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
  titleMain: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  titleSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    fontWeight: '600',
  },
  titleActive: { color: colors.white },
  titleInactive: { color: 'rgba(255,255,255,0.7)' },
});
