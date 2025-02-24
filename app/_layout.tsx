// app/(tabs)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Platform } from 'react-native';

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
        <View style={styles.container}>
          <View style={styles.tabBar}>
            <TouchableTabButton
              name="search"
              isActive={state.index === 0}
              onPress={() => navigation.navigate('search')}
            />
            <TouchableTabButton
              name="pie-chart"
              isActive={state.index === 1}
              onPress={() => navigation.navigate('analytics')}
            />
            <TouchableHomeButton
              isActive={state.index === 2}
              onPress={() => navigation.navigate('index')}
            />
            <TouchableTabButton
              name="clock"
              isActive={state.index === 3}
              onPress={() => navigation.navigate('history')}
            />
            <TouchableTabButton
              name="user"
              isActive={state.index === 4}
              onPress={() => navigation.navigate('profile')}
            />
          </View>
        </View>
      )}
    >
      <Tabs.Screen name="search" />
      <Tabs.Screen name="analytics" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const TouchableTabButton = ({ name, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={onPress}
    >
      <Feather
        name={name}
        size={24}
        color={isActive ? "#4A65FF" : "#999999"}
      />
    </TouchableOpacity>
  );
};

const TouchableHomeButton = ({ isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={onPress}
    >
      <View style={[
        styles.homeIconContainer,
        isActive && { backgroundColor: '#3A55EF' }
      ]}>
        <FontAwesome name="home" size={20} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
};

import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#4A65FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});