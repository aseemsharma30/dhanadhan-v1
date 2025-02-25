import { Redirect } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  // Redirect based on authentication status
  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/" />;
}