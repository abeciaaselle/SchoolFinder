import { StyleSheet, Platform } from 'react-native';

export const colors = {
  primary: '#1D2951',
  accent: '#2196F3',
  // ... (more color variables)
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  categoryDropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  // ... (more global styles)

  // Adjustments for iOS
  ios: {
    courseButton: {
      borderWidth: 0.5,
      borderRadius: 8,
      padding: 15,
      backgroundColor: 'white',
      shadowColor: '#000',
      // ... (more iOS-specific styles)
    },
    // ... (more iOS adjustments)
  },

  // Adjustments for Android
  android: {
    courseButton: {
      borderWidth: 0.5,
      borderRadius: 8,
      padding: 15,
      backgroundColor: 'white',
      shadowColor: '#ddd',
      // ... (more Android-specific styles)
    },
    // ... (more Android adjustments)
  },
});
