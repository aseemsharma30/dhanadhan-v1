import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import an icon library

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50, // Adjusted height
    paddingLeft: 10,
  },
});

export default SearchBar;
