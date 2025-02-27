import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ExpandedView from './ExpandedView';
import CustomDropdown from './CustomDropdown';
import ClothingCategories from './ClothingCategories';
import BillActions from './BillActions';
import { AuthContext } from '../context/AuthContext';

export default function Homepage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [data, setData] = useState({
    todayActual: 1850,
    todayOutside: 2300,
    income: 2500,
    toBeReceived: 2500,
    expense: 650,
    toBeSpent: 300,
  });

  const { user } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const handleSearch = (text) => {
    console.log('Searching:', text);
  };

  // Function to handle category selection updates
  const handleCategorySelectionChange = (selectedIds) => {
    setSelectedCategories(selectedIds);
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
        placeholderTextColor="#000" // Added to make placeholder text black
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          { paddingBottom: 140 + (Platform.OS === 'ios' ? insets.bottom : 0) }
        ]}
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
            <SearchBar placeholder="Search" onChange={handleSearch} />
          </View>
          <ClothingCategories
            onSelectionChange={handleCategorySelectionChange}
            selectedCategories={selectedCategories}
          />
        </View>
      </ScrollView>
      <BillActions selectedCount={selectedCategories.length} />
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
    paddingBottom: 140, // Base padding will be adjusted dynamically
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
    color: '#4CAF50', // Green color for positive values - matched to your design
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
  }
});