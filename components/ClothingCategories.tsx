// components/ClothingCategories.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth - 80) / 4; // Adjust button size based on screen width

type CategoryButtonProps = {
  letter: string;
  label: string;
};

const CategoryButton = ({ letter, label }: CategoryButtonProps) => (
  <View style={styles.categoryContainer}>
    <TouchableOpacity style={styles.circleButton}>
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
    <Text style={styles.buttonLabel}>{label}</Text>
  </View>
);

type CategoryGroupProps = {
  title: string;
  categories: Array<{ letter: string; label: string }>;
};

const CategoryGroup = ({ title, categories }: CategoryGroupProps) => (
  <View style={styles.groupContainer}>
    <Text style={styles.groupTitle}>{title}</Text>
    <View style={styles.categoryRow}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          letter={category.letter}
          label={category.label}
        />
      ))}
    </View>
  </View>
);

const ClothingCategories = () => {
  const liningCategories = [
    { letter: 'T', label: 'Top' },
    { letter: 'B', label: 'Bottom' },
    { letter: 'B', label: 'Blouse' },
    { letter: 'F', label: 'Frock' },
  ];

  const sadhaCategories = [
    { letter: 'T', label: 'Top' },
    { letter: 'B', label: 'Bottom' },
    { letter: 'B', label: 'Blouse' },
    { letter: 'F', label: 'Frock' },
  ];

  return (
    <View style={styles.container}>
      <CategoryGroup title="Lining" categories={liningCategories} />
      <CategoryGroup title="Sadha set" categories={sadhaCategories} />
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
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#666',
  },
  buttonLabel: {
    fontSize: 14,
    color: '#333',
  },
});

export default ClothingCategories;