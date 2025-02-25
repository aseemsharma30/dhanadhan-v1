// components/HomeSection.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HomeSectionProps = {
  title: string;
  value: number;
};

const HomeSection = ({ title, value }: HomeSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>+{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008000', // Green color for positive values
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default HomeSection;