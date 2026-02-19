import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface DashboardHeaderProps {
  onMenuPress: () => void;
  version?: string;
  logo?: string;
}

export default function DashboardHeader({
  onMenuPress,
  version = 'v. 2.0.4b',
  logo = 'LKTPM',
}: DashboardHeaderProps) {
  return (
    <View style={styles.header}>
      {/* Faint background graphics */}
      <View style={styles.bgPhone} />
      <View style={styles.bgCircle} />
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
            <Ionicons name="menu" size={26} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.version}>{version}</Text>
        </View>
        <Text style={styles.logo}>{logo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 24,
    paddingHorizontal: 20,
    position: 'relative',
  },
  bgPhone: {
    position: 'absolute',
    right: '15%',
    top: 30,
    width: 80,
    height: 140,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.12)',
    opacity: 0.6,
  },
  bgCircle: {
    position: 'absolute',
    right: '5%',
    bottom: -20,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.08)',
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  menuButton: {
    padding: 4,
    marginBottom: 4,
  },
  version: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 12,
    fontWeight: '500',
  },
  logo: {
    color: '#FF5722',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
