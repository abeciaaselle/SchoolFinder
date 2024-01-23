// RegistrationPage.js
import React, { useState } from 'react';
import { View, Image, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle submission logic (you can add validation, API calls, etc.)
    console.log('Username submitted:', username);

    // Navigate to Home page with the username as a parameter
    navigation.navigate('Home', { username: username }); // Pass the username as a parameter
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
      >
        <Text style={styles.submitButtonText}>Submit</Text>
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
    marginBottom: 20,
    marginTop: -180,
  },
  input: {
    width: 350,
    height: 60,
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
    textAlign: 'center', 
 
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
