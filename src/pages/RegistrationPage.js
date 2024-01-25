import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    setLoading(true);
    console.log('Username submitted:', username);

    setTimeout(() => {
      navigation.navigate('Home', { username: username });
      setLoading(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Enter username here"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        activeOpacity={0.8} // Set the opacity when the button is pressed
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
      </TouchableOpacity>
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
    ...Platform.select({
      ios: {
        width: 350,
      },
      android: {
        width: 300, // Adjust the width for Android
      },
    }),
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
    ...Platform.select({
      ios: {
        width: 350,
      },
      android: {
        width: 300, 
        
      },
    }),
    backgroundColor: '#1D2951',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: '#1D2951',
      },
      android: {
        elevation: 10,
      },
    }),
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RegistrationPage;