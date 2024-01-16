import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/pages/LandingPage';
import RegistrationPage from './src/pages/RegistrationPage';
import HomePage from './src/pages/HomePage';
import ListOfColleges from './src/pages/ListOfColleges';
import NavigateCoursePage from './src/pages/NavigateCoursePage';
import AssessmentPage from './src/pages/AssessmentPage';
import AcatechPage from './src/pages/colleges/AcatechPage';
import AmaPage from './src/pages/colleges/AmaPage';
import CagayanPhinmaPage from './src/pages/colleges/CagayanPhinmaPage';
import CapitolUniversityPage from './src/pages/colleges/CapitolUniversityPage';
import GoldenHeritagePage from './src/pages/colleges/GoldenHeritagePage';
import InformaticsPage from './src/pages/colleges/InformaticsPage';
import LiceoPage from './src/pages/colleges/LiceoPage';
import LourdesPage from './src/pages/colleges/LourdesPage';
import OroBiblePage from './src/pages/colleges/OroBiblePage';
import PilgrimPage from './src/pages/colleges/PilgrimPage';
import SpcPage from './src/pages/colleges/SpcPage';
import StiPage from './src/pages/colleges/StiPage';
import UstpPage from './src/pages/colleges/UstpPage';
import VineyardPage from './src/pages/colleges/VineyardPage';
import XavierPage from './src/pages/colleges/XavierPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ title: 'School Finder' }} />
        <Stack.Screen name="Registration" component={RegistrationPage} options={{ title: 'Registration' }} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="ListOfColleges" component={ListOfColleges} options={{ title: 'List of Colleges' }} />
        <Stack.Screen name="NavigateCoursePage" component={NavigateCoursePage} options={{ title: 'Navigate Course' }}/>
        <Stack.Screen name="AssessmentPage" component={AssessmentPage} options={{ title: 'Assessment Quiz' }}/>
        <Stack.Screen name="AcatechPage" component={AcatechPage} options={{ title: 'Acatech Aviation College'}} />
        <Stack.Screen name="AmaPage" component={AmaPage} options={{ title: 'AMA Computer College' }}/>
        <Stack.Screen name="CagayanPhinmaPage" component={CagayanPhinmaPage} options={{ title: 'Cagayan de Oro College -PHINMA' }}/>
        <Stack.Screen name="CapitolUniversityPage" component={CapitolUniversityPage} options={{ title: 'Capitol University' }}/>
        <Stack.Screen name="GoldenHeritagePage" component={GoldenHeritagePage} options={{ title: 'Golden Heritage Polytechnic College' }}/>
        <Stack.Screen name="InformaticsPage" component={InformaticsPage} options={{ title: 'Informatics College Cagayan de Oro' }} />
        <Stack.Screen name="LiceoPage" component={LiceoPage} options={{ title: 'Liceo de Cagayan University' }}/>
        <Stack.Screen name="LourdesPage" component={LourdesPage} options={{ title: 'Lourdes College' }}/>
        <Stack.Screen name="OroBiblePage" component={OroBiblePage} options={{ title: 'Oro Bible College' }}/>
        <Stack.Screen name="PilgrimPage" component={PilgrimPage} options={{ title: 'Pilgrim Christian College' }}/>
        <Stack.Screen name="SpcPage" component={SpcPage} options={{ title: 'Southern de Oro Philippines College' }}/>
        <Stack.Screen name="StiPage" component={StiPage} options={{ title: 'STI College' }} />
        <Stack.Screen name="UstpPage" component={UstpPage} options={{ title: 'University of Science and Technology of Southern Philippines (USTP)' }}/>
        <Stack.Screen name="VineyardPage" component={VineyardPage} options={{ title: 'Vineyard International Polytechnic College' }}/>
        <Stack.Screen name="XavierPage" component={XavierPage} options={{ title: 'Xavier University - Ateneo de Cagayan' }}/>

        


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
