import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeSection = ({ title, value, isOverview }) => {
  return (
    <View style={[styles.container, isOverview && styles.overviewContainer]}>
      <Text style={[styles.title, isOverview && styles.overviewTitle]}>{title}</Text>
      <Text style={[styles.value, isOverview && styles.overviewValue]}>+{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008000',
  },
  overviewContainer: {
    backgroundColor: 'grey', // Change the container background to grey
  },
  overviewTitle: {
    color: 'grey', // Change the title text color to grey
  },
  overviewValue: {
    color: 'grey', // Change the value text color to grey
  },
});

export default HomeSection;
