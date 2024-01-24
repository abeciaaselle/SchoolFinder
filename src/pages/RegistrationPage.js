import React, { useState } from 'react';
import { View, Image, TextInput, TouchableHighlight, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Set loading to true when the button is pressed
    setLoading(true);

    // Handle submission logic (you can add validation, API calls, etc.)
    console.log('Username submitted:', username);

    // Simulate a delay using setTimeout before navigating to Home page
    setTimeout(() => {
      // Navigate to Home page with the username as a parameter
      navigation.navigate('Home', { username: username }); // Pass the username as a parameter

      // Set loading back to false when the operation is complete
      setLoading(false);
    }, 500); // Simulated delay of 2 seconds
  };

  return (
    <View style={styles.container}>
      {/* Logo image */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      {/* TextInput for entering username */}
      <TextInput
        style={styles.input}
        placeholder="Enter username here"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Submit button */}
      <TouchableHighlight
        style={styles.submitButton}
        onPress={handleSubmit}
        underlayColor="#173f6a" // Change this color when the button is pressed
        disabled={loading} // Disable the button when loading is true
      >
        {/* If loading is true, show ActivityIndicator; otherwise, show the button */}
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 1,
    marginTop: -180,
  },
  input: {
    width: 350,
    height: 60,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    textAlign: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: '#1D2951',
    padding: 15,
    borderRadius: 5,
    width: 350,
    shadowColor: '#1D2951',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RegistrationPage;
