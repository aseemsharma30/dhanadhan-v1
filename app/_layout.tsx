// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,  // Hides the header completely
      tabBarStyle: { display: 'none' }  // Hides the tab bar
    }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,  // Prevents the tab from being accessible via deep linking
          title: ''  // Empty title to remove any text
        }}
      />
    </Tabs>
  );
}