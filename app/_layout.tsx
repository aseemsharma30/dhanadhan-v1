import React from 'react';
import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';

// Main app layout that wraps everything
export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Authentication routes - no tabs */}
        <Stack.Screen name="index" />  {/* Signup screen */}
        <Stack.Screen name="otp" />    {/* OTP verification */}
        <Stack.Screen name="login" />  {/* Login screen (if you need it) */}

        {/* Main app with tabs - grouped together */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}