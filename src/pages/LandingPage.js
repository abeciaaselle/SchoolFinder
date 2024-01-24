import React, { useState } from 'react';
import { View, Image, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../color/colors';

const LandingPage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    // Set loading to true when the button is pressed
    setLoading(true);

    // Perform any async operation here (e.g., API call, data fetching)
    // After the operation is complete, navigate to the next page
    // For now, simulate a delay using setTimeout
    setTimeout(() => {
      navigation.navigate('Registration');
      // Set loading back to false when the operation is complete
      setLoading(false);
    }, 1000); // Simulated delay of 2 seconds
  };

  return (
    <View style={styles.container}>
      {/* Logo image */}
      <Image source={require('../../assets/images/logowithname.png')} style={styles.logo} />

      {/* "Let's get started" button within a box */}
      <View style={[styles.buttonContainer, { borderColor: colors.primary, backgroundColor: '#1D2951' }]}>
        {/* If loading is true, show ActivityIndicator; otherwise, show the button */}
        {loading ? (
          <ActivityIndicator size="small" color={colors.onPrimary} />
        ) : (
          <Button title="Let's get started" onPress={handleGetStarted} color={colors.onPrimary} />
        )}
      </View>
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
  buttonContainer: {
    backgroundColor: '#1D2951',
    padding: 15,
    borderRadius: 5,
    width: 300,
    shadowColor: '#1D2951',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default LandingPage;
