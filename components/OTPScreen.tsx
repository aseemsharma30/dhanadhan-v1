import React, { useState, useRef, useEffect } from 'react';
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

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Empty strings as default values
  const inputRefs = useRef([]);

  // Auto-focus on first input when screen loads
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (value, index) => {
    // Only allow numbers
    if (value === '' || /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value; // Update the OTP array
      setOtp(newOtp);

      // Auto-focus to next input if current input is filled
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join(''); // Join the OTP array into a single string
    if (otpValue.length !== 6) {
      alert('Please enter the complete OTP');
      return;
    }

    // Navigate to the home screen within the tabbed layout
    router.replace('/(tabs)/Home'); // Ensure navigation to the tabbed Home screen
  };

  const handleResend = () => {
    // Add logic here for resending OTP (e.g., API call, alert, etc.)
    alert('OTP resent successfully!');
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

          <View style={styles.otpWrapper}>
            <View style={styles.otpLeftContainer}>
              {otp.slice(0, 3).map((digit, index) => (
                <View key={index} style={styles.otpInputContainer}>
                  <TextInput
                    ref={(input) => (inputRefs.current[index] = input)}
                    style={[
                      styles.otpInput,
                      digit && styles.otpInputHighlighted, // Highlight if a number is entered
                    ]}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                  />
                  {!digit && (
                    <View style={styles.placeholderContainer}>
                      <Text style={styles.placeholder}>-</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>

            {/* Spacer between the third and fourth OTP boxes */}
            <View style={styles.spacer} />

            <View style={styles.otpRightContainer}>
              {otp.slice(3, 6).map((digit, index) => (
                <View key={index + 3} style={styles.otpInputContainer}>
                  <TextInput
                    ref={(input) => (inputRefs.current[index + 3] = input)}
                    style={[
                      styles.otpInput,
                      digit && styles.otpInputHighlighted, // Highlight if a number is entered
                    ]}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index + 3)}
                    onKeyPress={(e) => handleKeyPress(e, index + 3)}
                    keyboardType="number-pad"
                    maxLength={1}
                  />
                  {!digit && (
                    <View style={styles.placeholderContainer}>
                      <Text style={styles.placeholder}>-</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.otpInstructions}>
              Didn't receive an OTP? <Text style={styles.resendText}>Resend</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Submit</Text>
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
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Ensure the spacer and OTP boxes are aligned
    marginBottom: 20,
  },
  otpLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align boxes to the right within the left container
  },
  otpRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align boxes to the left within the right container
  },
  otpInputContainer: {
    position: 'relative',
    justifyContent: 'center', // Center the placeholder vertically
    alignItems: 'center', // Center the placeholder horizontally
  },
  otpInput: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 5, // Reduced margin for tighter spacing
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: 'transparent', // Ensure the input is transparent
  },
  otpInputHighlighted: {
    borderColor: '#4357FE', // Blue border for highlighted boxes
  },
  placeholderContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  placeholder: {
    textAlign: 'center',
    fontSize: 17,
    color: '#999', // Grey color for "-"
  },
  spacer: {
    width: 20, // Adjust the width to control the space between the third and fourth OTP boxes
  },
  otpInstructions: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  resendText: {
    color: '#4357FE', // Blue color for "Resend"
  },
  verifyButton: {
    backgroundColor: '#4357FE',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OTPScreen;