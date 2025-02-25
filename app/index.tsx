import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignupScreen from '../components/SignupScreen';

const LoginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#ffffff" // Match this to your splash screen background
        barStyle="dark-content" // Use 'light-content' if your logo/background is dark
      />
      <View style={{ flex: 1 }}>
        <SignupScreen />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;