import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import AnalyticsScreen from './AnalyticsScreen';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Analytics') {
              iconName = 'analytics';
            } else if (route.name === 'History') {
              iconName = 'time';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#008000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
