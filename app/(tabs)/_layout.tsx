import React from 'react';
import { Tabs } from 'expo-router';
import BottomTabBar from '../../components/BottomTabBar'; // Import the BottomTabBar component

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#EEEEEE',
        },
      }}
      tabBar={({ state, navigation }) => (
        <BottomTabBar
          state={state}
          navigation={navigation}
        />
      )}
    >
      <Tabs.Screen name="search" />
      <Tabs.Screen name="analytics" />
      <Tabs.Screen name="index" /> {/* This is the home screen within tabs */}
      <Tabs.Screen name="history" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}