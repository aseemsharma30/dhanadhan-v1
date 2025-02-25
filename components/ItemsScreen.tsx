import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Item {
  id: string;
  name: string;
  price: number;
  category: string;
  initial: string;
}

const ItemsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Category name');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const items: Item[] = [
    { id: '1', name: 'Churidhar Top', price: 498.00, category: 'Tops', initial: 'T' },
    { id: '2', name: 'Frok', price: 498.00, category: 'Dresses', initial: 'F' },
    { id: '3', name: 'Blouse', price: 498.00, category: 'Tops', initial: 'B' },
    { id: '4', name: 'Bottom', price: 498.00, category: 'Bottoms', initial: 'B' },
  ];

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.initialContainer}>
        <Text style={styles.initialText}>{item.initial}</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Items</Text>
        <TouchableOpacity style={styles.categorySelector}>
          <Text style={styles.categoryText}>{selectedCategory}</Text>
          <Ionicons name="chevron-down" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search items"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Column Headers */}
      <View style={styles.columnHeaders}>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Item Name</Text>
        <Text style={[styles.columnHeader, { flex: 1 }]}>Total</Text>
        <Text style={[styles.columnHeader, { flex: 1 }]}>Action</Text>
      </View>

      {/* Items List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Ionicons name="pie-chart" size={24} color="#4F7DF3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="time" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categorySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryText: {
    marginRight: 5,
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },
  columnHeaders: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  columnHeader: {
    fontSize: 14,
    color: '#888',
  },
  listContent: {
    paddingBottom: 80, // Ensure space for add button
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  initialContainer: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#EEF1FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initialText: {
    color: '#4F7DF3',
    fontWeight: '500',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    width: 80,
    textAlign: 'right',
  },
  editButton: {
    width: 60,
  },
  editButtonText: {
    color: '#4F7DF3',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4F7DF3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: '#4F7DF3',
  },
});

export default ItemsScreen;