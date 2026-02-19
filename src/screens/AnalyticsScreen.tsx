import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function AnalyticsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Analytics" showBack onBackPress={() => navigation.goBack()} />
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Coming Soon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  placeholder: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  placeholderText: { fontSize: typography.title.fontSize, color: colors.textSecondary },
});
