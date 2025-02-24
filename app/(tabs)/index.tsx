// app/(tabs)/index.tsx
import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HomeSection from '../../components/HomeSection';
import ExpandedView from '../../components/ExpandedView';
import CustomDropdown from '../../components/CustomDropdown';
import SearchBar from '../../components/SearchBar';
import ClothingCategories from '../../components/ClothingCategories';
import BillActions from '../../components/BillActions';
import BottomTabBar from '../../components/BottomTabBar';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState({
    todayActual: 1850,
    todayOutside: 2300,
    income: 2500,
    toBeReceived: 2500,
    expense: 650,
    toBeSpent: 300,
  });

  const handleSearch = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
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
              style={styles.expandedView}
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
      <BottomTabBar />
    </View>
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
    paddingBottom: 140,
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
  expandedView: {
    width: '100%',
    backgroundColor: 'grey',
  },
});