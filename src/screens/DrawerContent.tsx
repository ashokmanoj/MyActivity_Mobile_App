import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const menuItems = [
  { icon: 'home', label: 'Home', screen: 'Home' },
  { icon: 'business', label: 'Branch', screen: 'Branch' },
  { icon: 'list', label: 'Activity List', screen: 'ActivityList' },
  { icon: 'add-circle', label: 'New Task', screen: 'NewTask' },
  { icon: 'wallet', label: 'Expense', screen: 'ExpenseList' },
  { icon: 'document-text', label: 'RTS', screen: 'RTSList' },
  { icon: 'hardware-chip', label: 'Assets', screen: 'Assets' },
  { icon: 'location', label: 'Location', screen: 'LocationList' },
  { icon: 'navigate', label: 'Distance', screen: 'Distance' },
  { icon: 'analytics', label: 'Analytics', screen: 'Analytics' },
  { icon: 'person', label: 'Profile', screen: 'Profile' },
  { icon: 'log-out-outline', label: 'Logout', isLogout: true },
] as const;

interface DrawerContentProps {
  navigation: any;
  onLogout?: () => void;
}

export default function DrawerContent({ navigation, onLogout }: DrawerContentProps) {
  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  const handlePress = (item: (typeof menuItems)[number]) => {
    if ('isLogout' in item && item.isLogout) {
      navigation.closeDrawer();
      onLogout?.();
    } else if ('screen' in item) {
      handleNavigate(item.screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>apps n fields</Text>
        <Text style={styles.userName}>Hello! Manoj Kumar</Text>
      </View>
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handlePress(item)}
            activeOpacity={0.7}
          >
            <Ionicons name={item.icon as any} size={22} color={colors.primaryDark} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primaryDark,
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  logo: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  userName: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: typography.body.fontSize,
  },
  menu: {
    flex: 1,
    paddingTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuLabel: {
    fontSize: typography.body.fontSize,
    color: colors.text,
    marginLeft: 16,
  },
});
