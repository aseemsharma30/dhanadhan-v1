// components/NavigationContainer.tsx

import React from 'react';
import { Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';

type NavigationContainerProps = {
  initialRoute?: string;
};

export function NavigationContainer({ initialRoute }: NavigationContainerProps) {
  return (
    <Stack initialRouteName={initialRoute}>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="Items" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}