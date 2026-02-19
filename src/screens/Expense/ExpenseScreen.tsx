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
import ExpenseCategorySelector from '../../components/expense/ExpenseCategorySelector';

type Category = 'TA' | 'FOOD' | 'STAY' | 'OTHERS';

export default function ExpenseScreen({ navigation }: any) {
  const [category, setCategory] = useState<Category>('TA');
  const [project, setProject] = useState('');
  const [particulars, setParticulars] = useState('');
  const [amount, setAmount] = useState('');
  const [billDate, setBillDate] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Expense</Text>
      </View>

      <View style={styles.categorySection}>
        <ExpenseCategorySelector value={category} onChange={setCategory} />
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
            <Text style={styles.fieldLabel}>Select Projects</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>Select Projects</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Select Particulars</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>Select Particulars</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Amount</Text>
            <View style={styles.amountRow}>
              <Text style={styles.rupee}>₹</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="0.00"
                placeholderTextColor={Colors.textSecondary}
                value={amount}
                onChangeText={setAmount}
                keyboardType="decimal-pad"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Bill Date</Text>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>{billDate || 'Select Date'}</Text>
              <Ionicons name="calendar-outline" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Enter Remarks...</Text>
            <TextInput
              style={styles.remarksInput}
              placeholder="Enter Remarks..."
              placeholderTextColor={Colors.textSecondary}
              value={remarks}
              onChangeText={setRemarks}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Photos</Text>
            <TouchableOpacity style={styles.photoBtn}>
              <Ionicons name="camera" size={32} color={Colors.primaryDark} />
              <Ionicons name="add-circle" size={20} color={Colors.primaryDark} style={styles.photoAdd} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
          <Text style={styles.submitText}>SUBMIT</Text>
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
  categorySection: { backgroundColor: Colors.primaryDark, paddingBottom: 8 },
  content: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 24 },
  field: { marginBottom: 20 },
  fieldLabel: { fontSize: FontSize.body, fontWeight: '500', color: Colors.text, marginBottom: 8 },
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
  amountRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: 12, paddingVertical: 14, ...Shadow.sm },
  rupee: { fontSize: FontSize.title, fontWeight: '600', color: Colors.text, marginRight: 8 },
  amountInput: { flex: 1, fontSize: FontSize.body, color: Colors.text },
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
  photoBtn: {
    width: 100,
    height: 100,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  photoAdd: { position: 'absolute', bottom: 4, right: 4 },
  submitBtn: { backgroundColor: Colors.primaryDark, paddingVertical: 16, borderRadius: Radius.md, alignItems: 'center', marginHorizontal: 16, marginBottom: Platform.OS === 'ios' ? 28 : 16 },
  submitText: { color: Colors.white, fontSize: FontSize.button, fontWeight: '700', letterSpacing: 1 },
});
