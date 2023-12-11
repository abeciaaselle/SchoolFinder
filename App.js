import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/pages/LandingPage';
import RegistrationPage from './src/pages/RegistrationPage';
import HomePage from './src/pages/HomePage';
import ListOfColleges from './src/pages/ListOfColleges';
import NavigateCoursePage from './src/pages/NavigateCoursePage';
import CapitolUniversityPage from './src/pages/colleges/CapitolUniversityPage';
import AssessmentPage from './src/pages/AssessmentPage'; // Import the new page

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ListOfColleges" component={ListOfColleges} />
        <Stack.Screen name="CapitolUniversityPage" component={CapitolUniversityPage} />
        <Stack.Screen name="NavigateCoursePage" component={NavigateCoursePage} />
        {/* Add the new screen */}
        <Stack.Screen name="AssessmentPage" component={AssessmentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
