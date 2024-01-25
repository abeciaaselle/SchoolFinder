import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../color/colors';

const LandingPage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Registration');
      setLoading(false);
    }, 1000);
  };

  const renderButton = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={colors.onPrimary} />;
    } else {
      return (
        <TouchableOpacity
          style={[styles.buttonContainer, { borderColor: colors.primary }]}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logowithname.png')} style={styles.logo} />
      {renderButton()}
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
    ...Platform.select({
      ios: {
        borderWidth: 1, // Add border for iOS
      },
      android: {
        elevation: 10, // Add elevation for Android
      },
    }),
  },
  buttonText: {
    color: colors.onPrimary,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LandingPage;
