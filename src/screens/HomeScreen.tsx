import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import DashboardHeader from '../components/DashboardHeader';
import SyncFooter from '../components/SyncFooter';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const menuItems: {
  icon: IconName;
  title: string;
  screen: string;
}[] = [
    { icon: 'location-outline', title: 'Distance', screen: 'Distance' },
    { icon: 'receipt', title: 'Expense', screen: 'ExpenseList' },
    { icon: 'list-outline', title: 'Task List', screen: 'NewTaskList' },
    { icon: 'walk', title: 'Task Activity', screen: 'TaskActivity' },
    { icon: 'easel-outline', title: 'Class run', screen: 'ClassRun' },
    { icon: 'location-sharp', title: 'Add Location', screen: 'AddLocation' },
    { icon: 'clipboard-outline', title: 'Asset Management', screen: 'Assets' },
    { icon: 'document-attach-outline', title: 'Documentation', screen: 'DocumentationReports' },
  ];

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleSync = () => {
    // Your sync logic
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
            <TouchableOpacity
              key={index}
              style={styles.gridItem}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.8}
            >
              <View style={styles.card}>
                <Ionicons
                  name={item.icon}
                  size={32}
                  color={colors.primaryDark}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
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
    paddingTop: 0,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gridItem: {
    width: '46%',
    marginBottom: 15,
    margin:3
    
  },

  /* 🔥 CARD STYLE (Icon Top, Text Bottom) */
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 28,
    paddingHorizontal: 16,
    justifyContent: 'center',
    elevation: 4,
  },

  title: {
    marginTop: 9,
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryDark,
    textAlign: 'center',
  },
});