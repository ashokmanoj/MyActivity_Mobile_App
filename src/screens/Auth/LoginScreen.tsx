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
import { Colors, FontSize } from '../../theme';

interface LoginScreenProps {
  onLogin: () => void;
  onForgotPassword?: () => void;
}

export default function LoginScreen({ onLogin, onForgotPassword }: LoginScreenProps) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    if (mobile.trim() && password.trim()) {
      onLogin();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <View style={styles.logoShape}>
          <View style={styles.logoLeft} />
          <View style={styles.logoRight} />
        </View>
        <Text style={styles.brandName}>apps'n'devices</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <View style={styles.form}>
          <Text style={styles.label}>Mobile no.</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile No."
            placeholderTextColor={Colors.textSecondary}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <View style={styles.dashedLine} />

          <Text style={[styles.label, styles.labelSpacing]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={Colors.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.dashedLine} />

          {onForgotPassword && (
            <TouchableOpacity onPress={onForgotPassword} style={styles.forgotLink}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: '#F8F4FA',
  },
  header: {
    backgroundColor: Colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 50,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logoShape: {
    width: 64,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoLeft: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 48,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.white,
    transform: [{ rotate: '-30deg' }],
    marginRight: -8,
  },
  logoRight: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 48,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.white,
    transform: [{ rotate: '30deg' }],
  },
  brandName: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: FontSize.body,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },
  labelSpacing: {
    marginTop: 32,
  },
  input: {
    fontSize: FontSize.body,
    color: Colors.text,
    paddingVertical: 8,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    borderStyle: 'dashed',
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  forgotText: {
    fontSize: FontSize.body,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  confirmText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
