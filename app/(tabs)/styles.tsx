import { StyleSheet } from 'react-native';
import { View } from 'react-native';

// Define styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  compactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
});

// Add a default export component
export default function StylesLayout() {
  return <View style={styles.container} />;
}