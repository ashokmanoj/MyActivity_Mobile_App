import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerContent from '../screens/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import NewTaskListScreen from '../screens/NewTaskListScreen';
import NewTaskScreen from '../screens/NewTaskScreen';
import TaskActivityScreen from '../screens/TaskActivityScreen';
import ActivityListScreen from '../screens/ActivityListScreen';
import ActivityDetailScreen from '../screens/ActivityDetailScreen';
import RTSListScreen from '../screens/RTSListScreen';
import RTSDetailsScreen from '../screens/RTSDetailsScreen';
import ClassRunScreen from '../screens/ClassRunScreen';
import SchoolDailyReportScreen from '../screens/SchoolDailyReportScreen';
import DistanceScreen from '../screens/DistanceScreen';
import DistanceDetailScreen from '../screens/DistanceDetailScreen';
import LocationListScreen from '../screens/LocationListScreen';
import AddLocationScreen from '../screens/AddLocationScreen';
import ExpenseListScreen from '../screens/ExpenseListScreen';
import NewExpenseScreen from '../screens/NewExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import AssetsScreen from '../screens/AssetsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BranchScreen from '../screens/BranchScreen';
import DocumentationScreen from '../screens/DocumentationScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewTaskList" component={NewTaskListScreen} />
      <Stack.Screen name="NewTask" component={NewTaskScreen} />
      <Stack.Screen name="TaskActivity" component={TaskActivityScreen} />
      <Stack.Screen name="ActivityList" component={ActivityListScreen} />
      <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      <Stack.Screen name="RTSList" component={RTSListScreen} />
      <Stack.Screen name="RTSDetails" component={RTSDetailsScreen} />
      <Stack.Screen name="ClassRun" component={ClassRunScreen} />
      <Stack.Screen name="SchoolDailyReport" component={SchoolDailyReportScreen} />
      <Stack.Screen name="Distance" component={DistanceScreen} />
      <Stack.Screen name="DistanceDetail" component={DistanceDetailScreen} />
      <Stack.Screen name="LocationList" component={LocationListScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
      <Stack.Screen name="ExpenseList" component={ExpenseListScreen} />
      <Stack.Screen name="NewExpense" component={NewExpenseScreen} />
      <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      <Stack.Screen name="Assets" component={AssetsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Branch" component={BranchScreen} />
      <Stack.Screen name="Documentation" component={DocumentationScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (showSplash) {
    return (
      <View style={styles.container}>
        <SplashScreen onFinish={handleSplashFinish} />
      </View>
    );
  }

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <LoginScreen onLogin={handleLogin} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} onLogout={() => setIsLoggedIn(false)} />}
          screenOptions={{
            headerShown: false,
            drawerType: 'front',
          }}
        >
          <Drawer.Screen name="Main" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
