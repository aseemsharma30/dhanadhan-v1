import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const BottomTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('search')}
      >
        <Feather
          name="search"
          size={24}
          color={state.index === 0 ? "#4A65FF" : "#999999"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('analytics')}
      >
        <Feather
          name="pie-chart"
          size={24}
          color={state.index === 1 ? "#4A65FF" : "#999999"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('index')}
      >
        <View style={[
          styles.homeIconContainer,
          state.index === 2 && { backgroundColor: '#3A55EF' }
        ]}>
          <FontAwesome name="home" size={20} color="#FFFFFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('history')}
      >
        <Feather
          name="clock"
          size={24}
          color={state.index === 3 ? "#4A65FF" : "#999999"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('profile')}
      >
        <Feather
          name="user"
          size={24}
          color={state.index === 4 ? "#4A65FF" : "#999999"}
        />
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