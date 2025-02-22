import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ExpandedView = ({ data, onCollapse }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Overview</Text>
        <TouchableOpacity onPress={onCollapse}>
          <AntDesign name="up" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.alignLeft}>
          <Text style={[styles.value, styles.highlightedValue]}>+{data.todayActual}</Text>
        </View>
        <View style={styles.alignRight}>
          <Text style={[styles.value, styles.highlightedValue]}>+{data.todayOutside}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.alignLeft}>
          <Text style={styles.label}>Today Actual</Text>
        </View>
        <View style={styles.alignRight}>
          <Text style={styles.label}>Today Outside</Text>
        </View>
      </View>

      <View style={styles.financeRow}>
        <View style={styles.alignLeft}>
          <View style={styles.labelValuePair}>
            <Text style={styles.label}>Income</Text>
            <Text style={[styles.value, styles.incomeText]}>{data.income}</Text>
          </View>
          <View style={styles.labelValuePair}>
            <Text style={styles.label}>Expense</Text>
            <Text style={[styles.value, styles.expenseText]}>{data.expense}</Text>
          </View>
        </View>
        <View style={styles.alignRight}>
          <View style={styles.labelValuePair}>
            <Text style={styles.label}>to be received</Text>
            <Text style={[styles.value, styles.incomeText]}>{data.toBeReceived}</Text>
          </View>
          <View style={styles.labelValuePair}>
            <Text style={styles.label}>to be spent</Text>
            <Text style={[styles.value, styles.expenseText]}>{data.toBeSpent}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  financeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  labelValuePair: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6, // Space between label and value
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightedValue: {
    fontSize: 30, // Bigger font size
    color: '#008000', // Green color
  },
  incomeText: {
    color: '#008000', // Green color for income
  },
  expenseText: {
    color: '#FF0000', // Red color for expenses
  },
  alignLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  alignRight: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10, // Moves right section slightly right
  },
});

export default ExpandedView;
