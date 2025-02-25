import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Authentication routes - no tabs */}
        <Stack.Screen name="index" /> {/* Signup screen */}
        <Stack.Screen name="otp" />   {/* OTP verification */}
        <Stack.Screen name="login" /> {/* Login screen (if needed) */}

        {/* Main app with tabs - grouped together */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}