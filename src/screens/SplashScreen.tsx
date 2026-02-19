import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>apps n fields</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>field STAFF</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 40,
  },
  card: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 1,
  },
});
