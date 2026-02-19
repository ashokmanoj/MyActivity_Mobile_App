import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function RTSDetailsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="RTS Details" showBack onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} contentContainerStyle={styles.form}>
        <Text style={styles.sectionTitle}>BASIC INFO</Text>
        <Input label="Name" value="John Doe" editable={false} />
        <Input label="Email" value="john@example.com" editable={false} />
        <Input label="Phone" value="+91 9876543210" editable={false} />
        <Input label="Company" value="ABC Corp" editable={false} />
        <Input label="State" value="Telangana" editable={false} />
        <Input label="City" value="Hyderabad" editable={false} />
        <Input label="Budget" value="50,000" editable={false} />
        <Text style={styles.sectionTitle}>WORK INFO</Text>
        <Input label="Description" value="Installation and training" multiline editable={false} />
        <View style={styles.imagePlaceholder} />
        <Button title="SUBMIT REPORT" onPress={() => navigation.goBack()} variant="primary" fullWidth />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  form: { padding: 16, paddingBottom: 32 },
  sectionTitle: { fontSize: typography.title.fontSize, fontWeight: '600', color: colors.primary, marginBottom: 12, marginTop: 8 },
  imagePlaceholder: { height: 150, backgroundColor: colors.border, borderRadius: 8, marginBottom: 20 },
});
