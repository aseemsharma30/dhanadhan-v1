import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Item {
  id: string;
  name: string;
  price: number;
  category: string;
  initial: string;
  tax?: number;
}

const ItemsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Category name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [itemName, setItemName] = useState<string>('');
  const [itemCategory, setItemCategory] = useState<string>('Category Name');
  const [itemPrice, setItemPrice] = useState<string>('');
  const [itemTax, setItemTax] = useState<string>('18');

  const items: Item[] = [
    { id: '1', name: 'Churidhar Top', price: 498.00, category: 'Tops', initial: 'T' },
    { id: '2', name: 'Frok', price: 498.00, category: 'Dresses', initial: 'F' },
    { id: '3', name: 'Blouse', price: 498.00, category: 'Tops', initial: 'B', tax: 18 },
    { id: '4', name: 'Bottom', price: 498.00, category: 'Bottoms', initial: 'B' },
  ];

  const handleEditItem = (item: Item) => {
    setSelectedItem(item);
    setItemName(item.name);
    setItemCategory(item.category);
    setItemPrice(item.price.toString());
    setItemTax(item.tax?.toString() || '18');
    setModalVisible(true);
  };

  const handleSaveItem = () => {
    // Save item logic would go here
    setModalVisible(false);
  };

  const handleDeleteItem = () => {
    // Delete item logic would go here
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.initialContainer}>
        <Text style={styles.initialText}>{item.initial}</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => handleEditItem(item)}>
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
          placeholderTextColor="#000"
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Column Headers */}
      <View style={styles.columnHeaders}>
        <Text style={[styles.columnHeader, { flex: 2, textAlign: 'left' }]}>Item Name</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>Total</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>Action</Text>
      </View>

      {/* Items List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setSelectedItem(null);
          setItemName('');
          setItemCategory('Category Name');
          setItemPrice('');
          setItemTax('18');
          setModalVisible(true);
        }}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Item Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalContainer}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Item details</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Item name</Text>
                <TextInput
                  style={styles.input}
                  value={itemName}
                  onChangeText={setItemName}
                  placeholder="Enter item name"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Category</Text>
                <TouchableOpacity style={styles.categoryInput}>
                  <Text>{itemCategory}</Text>
                  <Ionicons name="chevron-down" size={16} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles.formRow}>
                <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput
                    style={styles.input}
                    value={itemPrice}
                    onChangeText={setItemPrice}
                    placeholder="Enter price"
                    keyboardType="numeric"
                  />
                </View>

                <View style={[styles.formGroup, { width: 100 }]}>
                  <Text style={styles.label}>Tax</Text>
                  <View style={styles.taxContainer}>
                    <TextInput
                      style={styles.taxInput}
                      value={itemTax}
                      onChangeText={setItemTax}
                      keyboardType="numeric"
                    />
                    <Text style={styles.taxSymbol}>%</Text>
                  </View>
                </View>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={handleDeleteItem}
                >
                  <Text style={styles.deleteButtonText}>Delete Item</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.saveButton]}
                  onPress={handleSaveItem}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
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
    paddingHorizontal: 24,
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
    height: 55,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
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
  columnHeaders: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  columnHeader: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: '#888',
    fontFamily: 'Inter',
    letterSpacing: 0,
  },
  listContent: {
    paddingBottom: 80, // Ensure space for add button
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  initialContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,  // Changed to circle
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
    fontWeight: '600',
  },
  editButton: {
    width: 60,
  },
  editButtonText: {
    color: '#4F7DF3',
    textAlign: 'right',
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: Platform.OS === 'ios' ? 110 : 80,
    width: 56,
    height: 56,
    borderRadius: 8,  // Changed to rectangle with rounded corners
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

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  categoryInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  taxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  taxInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  taxSymbol: {
    fontSize: 16,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    marginRight: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#4F7DF3',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ItemsScreen;