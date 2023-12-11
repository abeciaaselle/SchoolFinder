// LandingPage.js
import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../color/colors';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={[styles.container]}>
      {/* Logo image */}
      <Image source={require('../../assets/images/logowithname.png')} style={styles.logo} />

      {/* "Let's get started" button within a box */}
      <View style={[styles.buttonContainer, { borderColor: colors.primary, backgroundColor: '#1D2951' }]}>
        <Button title="Let's get started" onPress={handleGetStarted} color={colors.onPrimary} />
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default LandingPage;
