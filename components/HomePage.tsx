import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ExpandedView from './ExpandedView';
import CustomDropdown from './CustomDropdown';
import ClothingCategories from './ClothingCategories';
import { AuthContext } from '../context/AuthContext';

export default function Homepage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState({
    todayActual: 1850,
    todayOutside: 2300,
    income: 2500,
    toBeReceived: 2500,
    expense: 650,
    toBeSpent: 300,
  });

  const { user } = useContext(AuthContext);

  const handleSearch = (text) => {
    console.log('Searching:', text);
  };

  // HomeSection Component
  const HomeSection = ({ title, value }) => (
    <View style={styles.homeSectionContainer}>
      <Text style={styles.homeSectionTitle}>{title}</Text>
      <Text style={styles.homeSectionValue}>+{value}</Text>
    </View>
  );

  // SearchBar Component
  const SearchBar = ({ placeholder, onChange }) => (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder || 'Search'}
        onChangeText={onChange}
      />
    </View>
  );

  // BillActions Component
  const BillActions = () => (
    <View style={styles.billActionsContainer}>
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          {!isExpanded ? (
            <View style={styles.compactView}>
              <HomeSection title="Today Actual" value={data.todayActual} />
              <HomeSection title="Today Outside" value={data.todayOutside} />
              <CustomDropdown onPress={() => setIsExpanded(true)} />
            </View>
          ) : (
            <ExpandedView
              data={data}
              onCollapse={() => setIsExpanded(false)}
            />
          )}
          <View style={styles.searchBarContainer}>
            <SearchBar placeholder="Search..." onChange={handleSearch} />
          </View>
          <ClothingCategories />
        </View>
      </ScrollView>
      <BillActions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 140, // To account for bottom tabs and bill actions
  },
  content: {
    flex: 1,
  },
  compactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: 20,
  },
  // HomeSection Styles
  homeSectionContainer: {
    alignItems: 'flex-start',
  },
  homeSectionValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008000', // Green color for positive values
  },
  homeSectionTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  // SearchBar Styles
  searchBarContainer: {
    marginHorizontal: 24,
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    gap: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 55,
    fontSize: 16,
  },
  // BillActions Styles
  billActionsContainer: {
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