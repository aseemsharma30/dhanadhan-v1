// components/BottomTabBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const BottomTabBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => console.log('Search pressed')}
      >
        <Feather name="search" size={24} color="#999999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => console.log('Chart pressed')}
      >
        <Feather name="pie-chart" size={24} color="#999999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => console.log('Home pressed')}
      >
        <View style={styles.homeIconContainer}>
          <FontAwesome name="home" size={20} color="#FFFFFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => console.log('Time pressed')}
      >
        <Feather name="clock" size={24} color="#999999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => console.log('Profile pressed')}
      >
        <Feather name="user" size={24} color="#999999" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default BottomTabBar;