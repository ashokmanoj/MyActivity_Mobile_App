import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Radius, Shadow } from '../../theme';

export default function DocumentationReportsScreen({ navigation }: any) {
  const [project, setProject] = useState('');
  const [institution, setInstitution] = useState('');
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Documentation Reports</Text>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Select Project</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>Select Project</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Select Institution</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>Select Institution</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Select Report Type</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>Select Report Type</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Date</Text>
            <TouchableOpacity style={styles.dateField}>
              <Ionicons name="calendar-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.dateText}>{date || 'Select Date'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Enter any remarks...</Text>
            <TextInput
              style={styles.remarksInput}
              placeholder="Enter any remarks..."
              placeholderTextColor={Colors.textSecondary}
              value={remarks}
              onChangeText={setRemarks}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>
              <Text style={styles.required}>*</Text> HM Letter (in Image format)
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>From Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Additional Image/PDF/MP4 videos</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>From Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: {
    backgroundColor: Colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { padding: 4, marginRight: 12 },
  title: { flex: 1, color: Colors.white, fontSize: FontSize.header, fontWeight: '700' },
  viewBtn: { padding: 4 },
  viewText: { color: Colors.white, fontSize: FontSize.body, fontWeight: '600' },
  content: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 24 },
  field: { marginBottom: 20 },
  fieldLabel: { fontSize: FontSize.body, fontWeight: '500', color: Colors.text, marginBottom: 8 },
  required: { color: Colors.statusRed },
  selectField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 14,
    ...Shadow.sm,
  },
  selectText: { flex: 1, fontSize: FontSize.body, color: Colors.text },
  dateField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 14,
    ...Shadow.sm,
  },
  dateText: { flex: 1, marginLeft: 8, fontSize: FontSize.body, color: Colors.text },
  remarksInput: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 14,
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: FontSize.body,
    color: Colors.text,
    ...Shadow.sm,
  },
  buttonRow: { flexDirection: 'row', gap: 12 },
  actionBtn: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingVertical: 14,
    borderRadius: Radius.md,
    alignItems: 'center',
  },
  actionBtnText: { color: Colors.white, fontSize: FontSize.body, fontWeight: '600' },
  submitBtn: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 16,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: Platform.OS === 'ios' ? 28 : 16,
  },
  submitText: { color: Colors.white, fontSize: FontSize.button, fontWeight: '700', letterSpacing: 1 },
});
