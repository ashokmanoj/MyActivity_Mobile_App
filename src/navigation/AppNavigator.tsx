import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

// Auth screens
import SplashScreen from '../screens/Auth/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import OTPScreen from '../screens/Auth/OTPScreen';

// Other screens
import DrawerContent from '../screens/DrawerContent';
import HomeScreen from '../screens/Home/HomeScreen';
import TaskListScreen from '../screens/Task/TaskListScreen';
import NewTaskScreen from '../screens/Task/NewTaskScreen';
import TaskActivityScreen from '../screens/Activity/TaskActivityScreen';
import ActivityListScreen from '../screens/Activity/ActivityListScreen';
import ActivityDetailScreen from '../screens/ActivityDetailScreen';
import RTSListScreen from '../screens/RTS/RTSListScreen';
import RTSDetailsScreen from '../screens/RTSDetailsScreen';
import ClassRunScreen from '../screens/RTS/ClassRunScreen';
import SchoolDailyReportScreen from '../screens/SchoolDailyReportScreen';
import DistanceScreen from '../screens/Distance/DistanceScreen';
import DistanceListScreen from '../screens/Distance/DistanceListScreen';
import DistanceDetailScreen from '../screens/DistanceDetailScreen';
import LocationListScreen from '../screens/LocationListScreen';
import AddLocationScreen from '../screens/Location/AddLocationScreen';
import ExpenseListScreen from '../screens/Expense/ExpenseListScreen';
import ExpenseScreen from '../screens/Expense/ExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';
import AssetsScreen from '../screens/Assets/AssetsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BranchScreen from '../screens/BranchScreen';
import DocumentationReportsScreen from '../screens/Documentation/DocumentationReportsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();


function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewTaskList" component={TaskListScreen} />
      <Stack.Screen name="NewTask" component={NewTaskScreen} />
      <Stack.Screen name="TaskActivity" component={TaskActivityScreen} />
      <Stack.Screen name="ActivityList" component={ActivityListScreen} />
      <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      <Stack.Screen name="RTSList" component={RTSListScreen} />
      <Stack.Screen name="RTSDetails" component={RTSDetailsScreen} />
      <Stack.Screen name="ClassRun" component={ClassRunScreen} />
      <Stack.Screen name="SchoolDailyReport" component={SchoolDailyReportScreen} />
      <Stack.Screen name="Distance" component={DistanceScreen} />
      <Stack.Screen name="DistanceList" component={DistanceListScreen} />
      <Stack.Screen name="DistanceDetail" component={DistanceDetailScreen} />
      <Stack.Screen name="LocationList" component={LocationListScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
      <Stack.Screen name="ExpenseList" component={ExpenseListScreen} />
      <Stack.Screen name="Expense" component={ExpenseScreen} />
      <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      <Stack.Screen name="Assets" component={AssetsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Branch" component={BranchScreen} />
      <Stack.Screen name="DocumentationReports" component={DocumentationReportsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [forgotPasswordMobile, setForgotPasswordMobile] = useState('');

  // Wrapper components for auth screens (need to be inside AppNavigator to access state)
  const LoginWrapper = ({ navigation }: any) => (
    <LoginScreen
      onLogin={() => setIsLoggedIn(true)}
      onForgotPassword={() => navigation.navigate('ForgotPassword')}
    />
  );

  const ForgotPasswordWrapper = ({ navigation }: any) => (
    <ForgotPasswordScreen
      onBack={() => navigation.goBack()}
      onSubmit={(mobile: string) => {
        setForgotPasswordMobile(mobile);
        navigation.navigate('ResetPassword', { mobile });
      }}
    />
  );

  const ResetPasswordWrapper = ({ navigation, route }: any) => (
    <ResetPasswordScreen
      mobile={route.params?.mobile || forgotPasswordMobile}
      onBack={() => navigation.goBack()}
      onReset={(otp: string, newPassword: string, confirmPassword: string) => {
        console.log('Reset password:', { otp, newPassword, confirmPassword });
        navigation.navigate('Login');
      }}
      onResendOtp={() => {
        console.log('Resend OTP');
      }}
    />
  );

  const OTPWrapper = ({ navigation, route }: any) => (
    <OTPScreen
      mobile={route.params?.mobile || ''}
      onVerify={(otp: string) => {
        console.log('Verify OTP:', otp);
        setIsLoggedIn(true);
      }}
      onResend={() => {
        console.log('Resend OTP');
      }}
    />
  );

  if (showSplash) {
    return (
      <View style={styles.container}>
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </View>
    );
  }

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginWrapper} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordWrapper} />
            <AuthStack.Screen name="ResetPassword" component={ResetPasswordWrapper} />
            <AuthStack.Screen name="OTP" component={OTPWrapper} />
          </AuthStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} onLogout={() => setIsLoggedIn(false)} />}
          screenOptions={{ headerShown: false, drawerType: 'front' }}
        >
          <Drawer.Screen name="Main" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
