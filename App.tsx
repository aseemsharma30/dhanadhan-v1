// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

// Import screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './app/(tabs)/index'; // Your existing home screen
// Import other screens as needed

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main tab navigator (after login)
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.homeIconContainer : null}>
              <FontAwesome
                name="home"
                size={20}
                color={focused ? '#FFFFFF' : '#999999'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={HomeScreen} // Replace with actual screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="pie-chart"
              size={24}
              color={focused ? '#4A65FF' : '#999999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen} // Replace with actual screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={24}
              color={focused ? '#4A65FF' : '#999999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={HomeScreen} // Replace with actual screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? '#4A65FF' : '#999999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen} // Replace with actual screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? '#4A65FF' : '#999999'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main app with authentication flow
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is logged in (e.g., with AsyncStorage)
  useEffect(() => {
    // Here you would check for a stored auth token
    // and set isLoggedIn accordingly
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          // Auth screens
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          // App screens
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
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

export default App;