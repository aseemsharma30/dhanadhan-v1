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
import CountryPicker from 'react-native-country-picker-modal'; // You'll need to install this package

const SignupScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
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

              source={require('../assets/images/dummyLogo.png')}
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
              <Text style={styles.countryCode}>{countryCode}</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.phoneInput}
              placeholder="999 55 28772"
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
              onSelect={(country) => {
                setCountryCode('+' + country.callingCode[0]);
                setShowCountryPicker(false);
              }}
              withFilter
              withCallingCode
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
    width: 60,
    height: 60,
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
    fontSize: 18,
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 30,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    color: '#000',
  },
  dropdownIcon: {
    fontSize: 12,
    marginLeft: 5,
    color: '#666',
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
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