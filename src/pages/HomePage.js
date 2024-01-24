import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const HomePage = ({ route, navigation }) => {
  const { username } = route.params;

  // Function to navigate to the ListOfColleges page
  const navigateToListOfColleges = () => {
    navigation.navigate('ListOfColleges');
  };

  // Function to navigate to the NavigateCoursePage
  const navigateToNavigateCourse = () => {
    navigation.navigate('NavigateCoursePage');
  };

  // Function to navigate to the AssessmentPage
  const navigateToAssessmentPage = () => {
    navigation.navigate('AssessmentPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, {username}</Text>
      <Text style={styles.subtext}>
        Welcome to School Finder - Your gateway to informed decisions! Navigate the educational landscape of Cagayan de Oro City effortlessly.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToListOfColleges}
        >
          <Text style={styles.buttonText}>List of Colleges</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToNavigateCourse}
        >
          <Text style={styles.buttonText}>Navigate Course</Text>
        </TouchableOpacity>
        {/* Add the Assessment Quiz text */}
        <View style={styles.quizContainer}>
          <Text style={styles.quizText}>
            Are you wondering which course aligns best with your knowledge and interests? Dive into our Assessment Quiz to uncover the ideal fit for you.
          </Text>
          <Text style={styles.quizText1}>
            Click the button below to start!
          </Text>
          <TouchableOpacity
          style={styles.quizButton}
          onPress={navigateToAssessmentPage}
        >
          <Text style={styles.buttonText}>Take Assessment Quiz</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Exit button with arrow-right icon inside a box */}
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.iconBox}>
          <FontAwesome5 name="sign-out-alt" size={40} color="#1D2951" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    marginBottom: 20,
    textAlign: 'justify',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#1D2951',
    padding: 25,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 15,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  quizContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    textAlign: 'justify',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  quizButton: {
    backgroundColor: '#1D2951',
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  quizText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'justify',
  },
  quizText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',

  },
  exitButton: {
    position: 'absolute',
    bottom: 20,
    right: 18,
    zIndex: 1,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  iconBox: {
    // backgroundColor: '#1D2951',
    padding: 10,
    borderRadius: 50,
  },
});

export default HomePage;