import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

type StatusColor = 'red' | 'yellow' | 'green' | 'gray';

interface ListItemProps {
  title: string;
  subtitle?: string;
  status?: StatusColor;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  rightElement?: React.ReactNode;
}

export default function ListItem({
  title,
  subtitle,
  status,
  icon,
  onPress,
  rightElement,
}: ListItemProps) {
  const statusColors: Record<StatusColor, string> = {
    red: colors.statusRed,
    yellow: colors.statusYellow,
    green: colors.statusGreen,
    gray: colors.statusGray,
  };

  const content = (
    <View style={styles.container}>
      {status && (
        <View
          style={[
            styles.statusDot,
            { backgroundColor: statusColors[status] },
          ]}
        />
      )}
      {icon && (
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={20} color={colors.primary} />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
        )}
      </View>
      {(onPress || rightElement) && (
        <View style={styles.right}>
          {rightElement || (
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          )}
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.caption.fontSize,
    color: colors.textSecondary,
    marginTop: 2,
  },
  right: {
    marginLeft: 8,
  },
});
