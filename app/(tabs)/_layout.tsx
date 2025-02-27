import React from 'react';
import { Tabs } from 'expo-router';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  // Get the safe area insets to account for notches, home indicators, etc.
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'none', // Hide the default tab bar since we're using a custom one
        },
      }}
      tabBar={({ state, navigation }) => (
        <View style={[
          styles.container,
          // Add bottom padding based on safe area insets
          { paddingBottom: Platform.OS === 'ios' ? insets.bottom : 0 }
        ]}>
          <View style={styles.tabBar}>
            <TouchableTabButton
              name="search"
              isActive={state.index === 0}
              onPress={() => navigation.navigate('Search')}
            />
            <TouchableTabButton
              name="pie-chart"
              isActive={state.index === 1}
              onPress={() => navigation.navigate('Items')}
            />
            <TouchableTabButton
              name="home"
              isActive={state.index === 2}
              onPress={() => navigation.navigate('Home')}
            />
            <TouchableTabButton
              name="clock"
              isActive={state.index === 3}
              onPress={() => navigation.navigate('History')}
            />
            <TouchableTabButton
              name="user"
              isActive={state.index === 4}
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      )}
    >
      <Tabs.Screen name="search" />
      <Tabs.Screen name="Items" />
      <Tabs.Screen name="Index" />
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    // Add shadow for iOS
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});