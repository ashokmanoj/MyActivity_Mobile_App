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
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize } from '../../theme';

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onSubmit: (mobile: string) => void;
}

export default function ForgotPasswordScreen({ onBack, onSubmit }: ForgotPasswordScreenProps) {
  const [mobile, setMobile] = useState('');

  const handleGetOtp = () => {
    if (mobile.trim().length >= 10) {
      onSubmit(mobile);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <Text style={styles.instruction}>
          Enter your registered mobile number to receive a verification code.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            placeholderTextColor={Colors.textSecondary}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <View style={styles.dashedLine} />
        </View>

        <TouchableOpacity
          style={[styles.button, mobile.length < 10 && styles.buttonDisabled]}
          onPress={handleGetOtp}
          activeOpacity={0.8}
          disabled={mobile.length < 10}
        >
          <Text style={styles.buttonText}>GET OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    padding: 4,
    marginRight: 12,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.header,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  instruction: {
    fontSize: FontSize.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  form: {
    marginBottom: 32,
  },
  label: {
    fontSize: FontSize.body,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
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
  button: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
