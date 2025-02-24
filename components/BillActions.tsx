// components/BillActions.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BillActions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.billButton}
        onPress={() => console.log('Bill it clicked')}
      >
        <Text style={styles.billButtonText}>Bill it</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => console.log('Plus clicked')}
      >
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  billButton: {
    flex: 1,
    backgroundColor: '#4A65FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  billButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  plusButton: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusButtonText: {
    fontSize: 24,
    color: '#4A65FF',
    fontWeight: '500',
  },
});

export default BillActions;