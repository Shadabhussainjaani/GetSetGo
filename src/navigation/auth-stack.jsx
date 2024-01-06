import React from 'react';

import { authStack } from '../../src/config/navigator';

import { createStackNavigator } from '@react-navigation/stack';

import SmsOtpScreen from '../screens/Auth/SmsOtpScreen';
import OTPVerified from '../screens/otpVerified/OTPVerified';
import SignIn from '../screens/Auth/SignIn';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import SignUp from '../screens/Auth/SignUp';
import UserDetails from '../screens/Auth/UserDetails';
import SelectAvatar from '../screens/selectAvatar/SelectAvatar';

// import LoginMobile from 'src/screens/auth/login-mobile';
// import SignInMobile from 'src/screens/auth/signin-mobile';
// import Register from 'src/screens/auth/register';
// import Forgot from 'src/screens/auth/forgot';

const Stack = createStackNavigator();

function AuthStack(py) {
  return (
    <>
      <Stack.Navigator
        initialRouteName={authStack.SignUp}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={authStack.SignUp}
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={authStack.userDetails}
          component={UserDetails}
          // initialParams={homeData}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={authStack.selectAvatar}
          component={SelectAvatar}
          // initialParams={homeData}
        />

        <Stack.Screen
          name={authStack.SmsOtpScreen}
          component={SmsOtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={authStack.OTPVerified}
          component={OTPVerified}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={authStack.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={authStack.ForgotPassword}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={authStack.ResetPassword}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthStack;
