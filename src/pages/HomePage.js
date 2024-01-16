// // HomePage.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const HomePage = ({ route, navigation }) => {
//   const { username } = route.params;

//   // Function to navigate to the ListOfColleges page
//   const navigateToListOfColleges = () => {
//     navigation.navigate('ListOfColleges');
//   };

//   // Function to navigate to the NavigateCoursePage
//   const navigateToNavigateCourse = () => {
//     navigation.navigate('NavigateCoursePage');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>Hi, {username}</Text>
//       <Text style={styles.subtext}>
//         Welcome to School Finder - Your gateway to informed decisions! Navigate the educational landscape of Cagayan de Oro City effortlessly.
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={navigateToListOfColleges}
//         >
//           <Text style={styles.buttonText}>List of Colleges</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={navigateToNavigateCourse} // Update this line
//         >
//           <Text style={styles.buttonText}>Navigate Course</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   greeting: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtext: {
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: '#1D2951',
//     padding: 25,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default HomePage;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
          onPress={navigateToNavigateCourse} // Update this line
        >
          <Text style={styles.buttonText}>Navigate Course</Text>
        </TouchableOpacity>
        {/* Add the Assessment Quiz button */}
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToAssessmentPage}
        >
          <Text style={styles.buttonText}>Take Assessment Quiz</Text>
        </TouchableOpacity>
      </View>
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
  },
  buttonContainer: {
    marginTop: 40,
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
});

export default HomePage;
