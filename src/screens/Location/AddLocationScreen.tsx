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

export default function AddLocationScreen({ navigation }: any) {
  const [locationName, setLocationName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('KAMALACHARA HIGH SCHOOL | 1603010..');
  const [locationType, setLocationType] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>LOCATION</Text>
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
            <Text style={styles.fieldLabel}>Location Name</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Location Name"
                placeholderTextColor={Colors.textSecondary}
                value={locationName}
                onChangeText={setLocationName}
              />
              <Ionicons name="send" size={20} color={Colors.primaryDark} />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Address</Text>
            <TextInput
              style={styles.addressInput}
              placeholder="Address"
              placeholderTextColor={Colors.textSecondary}
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Pin code</Text>
            <TextInput
              style={styles.input}
              placeholder="Pin code"
              placeholderTextColor={Colors.textSecondary}
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.field}>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>{selectedLocation}</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <TouchableOpacity style={styles.selectField}>
              <Text style={styles.selectText}>{locationType || 'Select Location Type'}</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor={Colors.textSecondary}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Photos</Text>
            <TouchableOpacity style={styles.photoBtn}>
              <Ionicons name="document" size={32} color={Colors.primaryDark} />
              <View style={styles.photoAdd}>
                <Ionicons name="add" size={16} color={Colors.white} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
          <Text style={styles.saveText}>Save Location</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4FA' },
  header: {
    backgroundColor: Colors.primaryDark,
    paddingTop: Platform.OS === 'ios' ? 54 : 44,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { padding: 4, marginRight: 12 },
  title: { flex: 1, color: Colors.white, fontSize: FontSize.header, fontWeight: '700', letterSpacing: 1 },
  content: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 24 },
  field: { marginBottom: 20 },
  fieldLabel: { fontSize: FontSize.body, fontWeight: '500', color: Colors.text, marginBottom: 8 },
  inputRow: {
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
  input: { flex: 1, fontSize: FontSize.body, color: Colors.text },
  addressInput: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 12,
    paddingVertical: 14,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: FontSize.body,
    color: Colors.text,
    ...Shadow.sm,
  },
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
  photoAdd: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtn: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 16,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: Platform.OS === 'ios' ? 28 : 16,
  },
  saveText: { color: Colors.white, fontSize: FontSize.button, fontWeight: '700', letterSpacing: 1 },
});
