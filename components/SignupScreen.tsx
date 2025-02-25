import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import CountryPicker, { Country } from 'react-native-country-picker-modal'; // Import Country type
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const SignupScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState<Country>({
    cca2: 'IN', // India’s country code (ISO 3166-1 alpha-2)
    callingCode: ['91'], // India’s calling code (not shown in UI)
    name: 'India',
  });
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleSubmit = () => {
    // Validate phone number
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }

    // Navigate to OTP screen
    router.push('/OTP');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              // If you don't have a logo image yet, remove the Image component and use the below View instead
              // <View style={styles.logoPlaceholder}>
              //   <Text style={styles.logoText}>DhanaDhan</Text>
              // </View>
            />
            <Text style={styles.appName}>DhanaDhan</Text>
          </View>

          <Text style={styles.inputLabel}>Phone Number</Text>

          <View style={styles.phoneInputContainer}>
            <TouchableOpacity
              style={styles.countryCodeContainer}
              onPress={() => setShowCountryPicker(true)}
            >
              <Image
                source={{ uri: `https://flagcdn.com/24x18/${country.cca2.toLowerCase()}.png` }}
                style={styles.flag}
              />
              <Ionicons name="chevron-down" size={16} color="#666" /> {/* Downward chevron (v-shaped) */}
            </TouchableOpacity>

            <TextInput
              style={styles.phoneInput}
              placeholder="999 55 29772"
              placeholderTextColor="#999"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          {showCountryPicker && (
            <CountryPicker
              visible={showCountryPicker}
              onClose={() => setShowCountryPicker(false)}
              onSelect={(selectedCountry: Country) => {
                setCountry(selectedCountry);
                setShowCountryPicker(false);
              }}
              withFilter
              withFlag
              withCallingCode
              countryCode={country.cca2} // Default to India
              flagSize={24} // Use a specific flag size to match the rectangular design
            />
          )}

          <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 63.85,
    height: 93.84,
    resizeMode: 'contain',
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#4357FE',
    fontWeight: 'bold',
  },
  appName: {
    marginTop: 8,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for the input box
    borderRadius: 8, // Rounded corners
    borderWidth: 1, // Subtle border
    borderColor: '#F3F5F9', // Light border color
    marginBottom: 30,
    paddingHorizontal: 10,
    height: 48, // Match the height in your image
    shadowColor: '#000', // Shadow color for the bottom shadow
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (bottom shadow)
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 2, // Android elevation for shadow
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 10,
  },
  flag: {
    width: 18, // Size of the flag image
    height: 18, // Size of the flag image
    // Removed borderRadius to make it rectangular with slight rounding
    borderRadius: 18, // Slight rounding for a clean look (optional, adjust or remove as needed)
  },
  countryCode: {
    fontSize: 24, // Not used anymore since we’re using an image for the flag
    color: '#000',
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  registerButton: {
    backgroundColor: '#4357FE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    display: 'none', // This button is visible in the UI but not in the image, so hiding it
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignupScreen;