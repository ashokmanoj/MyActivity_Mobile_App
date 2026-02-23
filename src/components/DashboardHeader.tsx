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
      <View style={styles.bgCircle1} />
      <View style={styles.bgPhone} />
      <View style={styles.bgBox} />
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
    paddingTop: Platform.OS === 'ios' ? 70 : 64,
    paddingBottom: 24,
    paddingHorizontal: 20,
    position: 'relative',
  },
  bgPhone: {
    position: 'absolute',
    right: '55%',
    top: 90,
    width: 100,
    height: 140,
    borderRadius: 12,
    borderWidth: 6,
    borderColor: '#1A5AFF',
    backgroundColor: '#D4E1E8',
    opacity: 0.3,
  },
  bgCircle: {
    position: 'absolute',
    right: '20%',
    bottom: -50,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    opacity: 0.5,
    backgroundColor:'#A5A797'
  },
  bgCircle1: {
    position: 'absolute',
    right: '28%',
    bottom: -25,
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#6652EF',
    opacity: 0.9,
    backgroundColor:'#8B69F0'
  },
  bgBox:{
    position: 'absolute',
    right: '43%',
    top: 120,
    width: 45,
    height: 130,
    borderRadius: 12,
    borderWidth: 6,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: '#DFEE70',
    opacity: 0.3,
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
    paddingLeft: 0,
    marginBottom: 3,
  },
  version: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 13,
    fontWeight: '700',
  },
  logo: {
    color: '#FF5722',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
