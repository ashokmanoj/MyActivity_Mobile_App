import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import DashboardHeader from '../components/DashboardHeader';
import HomeGridButton from '../components/HomeGridButton';
import SyncFooter from '../components/SyncFooter';

const menuItems = [
  { icon: 'navigate' as const, title: 'Distance', screen: 'Distance' },
  { icon: 'receipt-outline' as const, title: 'Expense', screen: 'ExpenseList' },
  { icon: 'list' as const, title: 'Task List', screen: 'NewTaskList' },
  { icon: 'walk-outline' as const, title: 'Task Activity', screen: 'TaskActivity' },
  { icon: 'git-network-outline' as const, title: 'Class run', screen: 'ClassRun' },
  { icon: 'location' as const, title: 'Add Location', screen: 'AddLocation' },
  { icon: 'cube-outline' as const, title: 'Asset Management', screen: 'Assets' },
  { icon: 'document-text-outline' as const, title: 'Documentation', screen: 'DocumentationReports' },
];

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleSync = () => {
    // Sync logic
  };

  return (
    <View style={styles.container}>
      <DashboardHeader onMenuPress={() => navigation.openDrawer()} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <HomeGridButton
                icon={item.icon}
                title={item.title}
                onPress={() => navigation.navigate(item.screen)}
              />
            </View>
          ))}
        </View>
        <SyncFooter onSync={handleSync} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 0,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 18,
  },
});
