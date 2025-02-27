// components/ClothingCategories.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth - 80) / 4; // Adjust button size based on screen width

type CategoryButtonProps = {
  letter: string;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const CategoryButton = ({ letter, label, isSelected, onPress }: CategoryButtonProps) => (
  <View style={styles.categoryContainer}>
    <TouchableOpacity
      style={[
        styles.circleButton,
        isSelected && styles.selectedButton
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        isSelected && styles.selectedButtonText
      ]}>
        {letter}
      </Text>
    </TouchableOpacity>
    <Text style={styles.buttonLabel}>{label}</Text>
  </View>
);

type Category = {
  id: string;
  letter: string;
  label: string;
};

type CategoryGroupProps = {
  title: string;
  categories: Category[];
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
};

const CategoryGroup = ({ title, categories, selectedIds, onToggleSelect }: CategoryGroupProps) => (
  <View style={styles.groupContainer}>
    <Text style={styles.groupTitle}>{title}</Text>
    <View style={styles.categoryRow}>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          letter={category.letter}
          label={category.label}
          isSelected={selectedIds.includes(category.id)}
          onPress={() => onToggleSelect(category.id)}
        />
      ))}
    </View>
  </View>
);

type ClothingCategoriesProps = {
  onSelectionChange?: (selectedIds: string[]) => void;
  selectedCategories?: string[];
};

const ClothingCategories = ({ onSelectionChange, selectedCategories: externalSelectedCategories }: ClothingCategoriesProps) => {
  // State to track selected categories (use external state if provided)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(externalSelectedCategories || []);

  // Toggle selection function
  const toggleSelection = (id: string) => {
    const newSelection = selectedCategories.includes(id)
      ? selectedCategories.filter(categoryId => categoryId !== id)
      : [...selectedCategories, id];

    setSelectedCategories(newSelection);
    if (onSelectionChange) {
      onSelectionChange(newSelection);
    }
  };

  // Update internal state when external state changes
  useEffect(() => {
    if (externalSelectedCategories) {
      setSelectedCategories(externalSelectedCategories);
    }
  }, [externalSelectedCategories]);

  const liningCategories: Category[] = [
    { id: 'lining-top', letter: 'T', label: 'Top' },
    { id: 'lining-bottom', letter: 'B', label: 'Bottom' },
    { id: 'lining-blouse', letter: 'B', label: 'Blouse' },
    { id: 'lining-frock', letter: 'F', label: 'Frock' },
  ];

  const sadhaCategories: Category[] = [
    { id: 'sadha-top', letter: 'T', label: 'Top' },
    { id: 'sadha-bottom', letter: 'B', label: 'Bottom' },
    { id: 'sadha-blouse', letter: 'B', label: 'Blouse' },
    { id: 'sadha-frock', letter: 'F', label: 'Frock' },
  ];

  return (
    <View style={styles.container}>
      <CategoryGroup
        title="Lining"
        categories={liningCategories}
        selectedIds={selectedCategories}
        onToggleSelect={toggleSelection}
      />
      <CategoryGroup
        title="Sadha set"
        categories={sadhaCategories}
        selectedIds={selectedCategories}
        onToggleSelect={toggleSelection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  groupContainer: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    paddingLeft: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryContainer: {
    alignItems: 'center',
    width: buttonSize,
  },
  circleButton: {
    width: Math.min(48, buttonSize - 8),
    height: Math.min(48, buttonSize - 8),
    borderRadius: Math.min(24, (buttonSize - 8) / 2),
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedButton: {
    backgroundColor: '#4A65FF', // Blue background for selected state
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#666',
  },
  selectedButtonText: {
    color: '#FFFFFF', // White text for selected state
  },
  buttonLabel: {
    fontSize: 14,
    color: '#333',
  },
});

export default ClothingCategories;