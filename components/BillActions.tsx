import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// BillActions Component that accepts selected count as a prop
const BillActions = ({ selectedCount = 0 }) => {
  const insets = useSafeAreaInsets();

  // Calculate the bottom position to account for the tab bar height (60px) plus any safe area insets
  const bottomPosition = 70 + (Platform.OS === 'ios' ? insets.bottom : 0);

  return (
    <View style={[styles.billActionsContainer, { bottom: bottomPosition }]}>
      <TouchableOpacity
        style={styles.billButton}
        onPress={() => console.log('Bill it clicked')}
      >
        <Text style={styles.billButtonText}>
          Bill it {selectedCount > 0 ? `(${selectedCount})` : ''}
        </Text>
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
  billActionsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1000, // Ensure it's above other elements
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
    shadowOffset: { width: 0, height: 2 },
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