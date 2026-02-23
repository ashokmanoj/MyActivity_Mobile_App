import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
  onBackPress?: () => void;
  showBack?: boolean;
  rightIcon?: React.ReactNode;
}

export default function Header({
  title,
  onMenuPress,
  onBackPress,
  showBack = false,
  rightIcon,
}: HeaderProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
      <View style={styles.header}>
        <View style={styles.leftSection}>
          {showBack ? (
            <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={32} color={colors.white} />
            </TouchableOpacity>
          ) : onMenuPress ? (
            <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
              <Ionicons name="menu" size={32} color={colors.white} />
            </TouchableOpacity>
          ) : null}
          <Text style={styles.title}>{title}</Text>
        </View>
        {rightIcon && <View style={styles.rightSection}>{rightIcon}</View>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 50 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    marginLeft: 8,
  },
  iconButton: {
    padding: 4,
    marginRight: 16,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
});
