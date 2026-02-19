import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { colors as themeColors } from '../theme/colors';

interface HeaderWithLogoProps {
  title?: string;
}

export default function HeaderWithLogo({ title = 'apps n fields' }: HeaderWithLogoProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={themeColors.primaryDark} />
      <View style={styles.header}>
        <Text style={styles.logo}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: themeColors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 50 : 44,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    color: themeColors.white,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
