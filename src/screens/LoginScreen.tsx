import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    if (mobile.trim() && password.trim()) {
      onLogin();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
      <View style={styles.header}>
        <View style={styles.logoShape}>
          <View style={styles.logoCircle} />
          <View style={[styles.logoCircle, styles.logoCircleOverlap]} />
        </View>
        <Text style={styles.brandName}>apps'n'devices</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <View style={styles.form}>
          <Text style={styles.label}>Mobile No.</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            placeholderTextColor={colors.textSecondary}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <View style={styles.dashedLine} />

          <Text style={[styles.label, styles.labelSpacing]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={colors.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.dashedLine} />
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirm}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  logoShape: {
    width: 64,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    marginHorizontal: -8,
  },
  logoCircleOverlap: {
    opacity: 0.9,
  },
  brandName: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: typography.body.fontSize,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },
  labelSpacing: {
    marginTop: 28,
  },
  input: {
    fontSize: typography.body.fontSize,
    color: colors.text,
    paddingVertical: 8,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderStyle: 'dashed',
  },
  confirmButton: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  confirmText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
