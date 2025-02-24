// app/(tabs)/index.tsx

import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeSection from '../../components/HomeSection';
import ExpandedView from '../../components/ExpandedView';
import CustomDropdown from '../../components/CustomDropdown';
import SearchBar from '../../components/SearchBar';
import ClothingCategories from '../../components/ClothingCategories';
import BillActions from '../../components/BillActions';
import { AuthContext } from '../../context/AuthContext';

export default function HomeScreen() {
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
  searchBarContainer: {
    paddingHorizontal: 20,
  },
});