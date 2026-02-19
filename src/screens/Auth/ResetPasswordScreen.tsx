import React, { useState, useRef } from 'react';
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

interface ResetPasswordScreenProps {
  onBack: () => void;
  mobile: string;
  onReset: (otp: string, newPassword: string, confirmPassword: string) => void;
  onResendOtp?: () => void;
}

export default function ResetPasswordScreen({
  onBack,
  mobile,
  onReset,
  onResendOtp,
}: ResetPasswordScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const otpRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleReset = () => {
    const otpString = otp.join('');
    if (otpString.length === 6 && newPassword && confirmPassword) {
      onReset(otpString, newPassword, confirmPassword);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <Text style={styles.instruction}>Enter OTP sent to {mobile}</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                otpRefs.current[index] = ref;
              }}
              style={[
                styles.otpInput,
                digit && styles.otpInputFilled,
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={({ nativeEvent }) => handleOtpKeyPress(nativeEvent.key, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter New Password"
              placeholderTextColor={Colors.textSecondary}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
              style={styles.eyeBtn}
            >
              <Ionicons
                name={showNewPassword ? 'eye' : 'eye-off'}
                size={20}
                color={Colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dashedLine} />

          <Text style={[styles.label, styles.labelSpacing]}>Confirm Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm New Password"
              placeholderTextColor={Colors.textSecondary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeBtn}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={20}
                color={Colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dashedLine} />
        </View>

        {onResendOtp && (
          <View style={styles.resendRow}>
            <Text style={styles.resendText}>Didn't receive the code? </Text>
            <TouchableOpacity onPress={onResendOtp}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            (otp.join('').length !== 6 || !newPassword || !confirmPassword) && styles.buttonDisabled,
          ]}
          onPress={handleReset}
          activeOpacity={0.8}
          disabled={otp.join('').length !== 6 || !newPassword || !confirmPassword}
        >
          <Text style={styles.buttonText}>RESET PASSWORD</Text>
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
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  otpInputFilled: {
    borderColor: Colors.primaryDark,
    borderWidth: 2,
  },
  form: {
    marginBottom: 16,
  },
  label: {
    fontSize: FontSize.body,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },
  labelSpacing: {
    marginTop: 24,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: FontSize.body,
    color: Colors.text,
    paddingVertical: 8,
  },
  eyeBtn: {
    padding: 4,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    borderStyle: 'dashed',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  resendText: {
    fontSize: FontSize.body,
    color: Colors.text,
  },
  resendLink: {
    fontSize: FontSize.body,
    color: Colors.primaryDark,
    fontWeight: '600',
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
