import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Radius, FontSize } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'green';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth,
}: ButtonProps) {
  const baseStyle: ViewStyle[] = [styles.button];
  if (fullWidth) baseStyle.push(styles.fullWidth);
  if (disabled) baseStyle.push(styles.disabled);
  if (variant === 'primary') baseStyle.push(styles.primary);
  if (variant === 'secondary') baseStyle.push(styles.secondary);
  if (variant === 'outline') baseStyle.push(styles.outline);
  if (variant === 'green') baseStyle.push(styles.green);

  const textStyleArr: TextStyle[] = [styles.text];
  if (variant === 'outline') textStyleArr.push(styles.outlineText);

  return (
    <TouchableOpacity
      style={[...baseStyle, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? Colors.accent : Colors.white} size="small" />
      ) : (
        <Text style={[...textStyleArr, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  fullWidth: { width: '100%' },
  disabled: { opacity: 0.6 },
  primary: { backgroundColor: Colors.primary },
  secondary: { backgroundColor: Colors.accent },
  outline: { backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.accent },
  green: { backgroundColor: Colors.statusGreen },
  text: { color: Colors.white, fontSize: FontSize.button, fontWeight: '600' },
  outlineText: { color: Colors.accent },
});
