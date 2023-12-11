import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import CapitolUniversityPage from '../pages/colleges/CapitolUniversityPage';

const allColleges = [
  {
    name: 'Acatech Aviation College',
    address: 'Agora Road, Lapasan, Cagayan de Oro City',
  },
  {
    name: 'AMA Computer College',
    address: 'AMA Computer University - Cagayan de Oro Campus, 3rd floor, Goking Building cor. Daumar & JR Borja Streets, Brgy. 39 (Cogon), Cagayan de Oro City',
  },
  {
    name: 'Capitol University',
    address: 'Corrales Avenue, Cagayan de Oro City',
  },
  {
    name: 'Cagayan de Oro College-PHINMA',
    address: 'Max Suniel St., Carmen, Cagayan de Oro City',
  },
  {
    name: 'Golden Heritage Polytechnic College',
    address: 'Vamenta Boulevard, Carmen, 9000 Cagayan de Oro City',
  },
  {
    name: 'Informatics College Cagayan de Oro',
    address: 'Door 6, 2nd Floor, Lourdes College, Capistrano-Mabini Sts., Cagayan de Oro City',
  },
  {
    name: 'Liceo de Cagayan University',
    address: 'Rodolfo N. Pelaez Blvd., Cagayan de Oro City',
  },
  {
    name: 'Lourdes College',
    address: 'Capistrano-Mabini Sts., Cagayan de Oro City',
  },
  {
    name: 'Oro Bible College',
    address: '32 Max Y. Suniel St. Cagayan de Oro City',
  },
  {
    name: 'Pilgrim Christian College',
    address: '1129 Claro M. Recto Avenue, Lapasan, Cagayan de Oro City',
  },
  {
    name: 'Southern de Oro Philippines College',
    address: 'Don Apolinar Velez Street, Cagayan de Oro City',
  },
  {
    name: 'STI College',
    address: 'Mortola Street, Barangay 40, Cagayan de Oro City',
  },
  {
    name: 'University of Science and Technology of Southern Philippines (USTP)',
    address: 'Lapasan Highway, Cagayan de Oro City',
  },
  {
    name: 'Vineyard College',
    address: 'Corrales corner Antonio Luna Streets, Cagayan de Oro',
  },
  {
    name: 'Xavier University – Ateneo de Cagayan',
    address: 'Corrales Avenue, Cagayan de Oro City',
  },
];

const privateColleges = allColleges.filter(college => college.name !== 'University of Science and Technology of Southern Philippines (USTP)');

const publicColleges = [
  // Add details for public colleges, including USTP
  {
    name: 'University of Science and Technology of Southern Philippines (USTP)',
    address: 'Lapasan Highway, Cagayan de Oro City',
  },
];

// Sort the colleges alphabetically
allColleges.sort((a, b) => a.name.localeCompare(b.name));
privateColleges.sort((a, b) => a.name.localeCompare(b.name));
publicColleges.sort((a, b) => a.name.localeCompare(b.name));

const ListOfColleges = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleSegmentChange = (e) => {
      e.persist(); // Persist the event
      const index = e.nativeEvent.selectedSegmentIndex;
      setSelectedIndex(index);
    };
  
    const navigateToCollegePage = (collegeName) => {
      if (collegeName === 'Capitol University') {
        navigation.navigate('CapitolUniversityPage');
      } else {
        // Add similar navigation logic for other colleges if needed
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        <SegmentedControl
          values={['All', 'Private', 'Public']}
          selectedIndex={selectedIndex}
          onChange={handleSegmentChange}
          style={styles.segmentedControl}
        />
        {selectedIndex === 0 &&
          allColleges.map((college, index) => (
            <TouchableOpacity
              key={index}
              style={styles.collegeContainer}
              onPress={() => navigateToCollegePage(college.name)}
            >
              <Text style={styles.collegeName}>{college.name}</Text>
              <Text style={styles.collegeAddress}>{college.address}</Text>
            </TouchableOpacity>
          ))}
        {selectedIndex === 1 &&
          privateColleges.map((college, index) => (
            <TouchableOpacity
              key={index}
              style={styles.collegeContainer}
              onPress={() => navigateToCollegePage(college.name)}
            >
              <Text style={styles.collegeName}>{college.name}</Text>
              <Text style={styles.collegeAddress}>{college.address}</Text>
            </TouchableOpacity>
          ))}
        {selectedIndex === 2 &&
          publicColleges.map((college, index) => (
            <TouchableOpacity
              key={index}
              style={styles.collegeContainer}
              onPress={() => navigateToCollegePage(college.name)}
            >
              <Text style={styles.collegeName}>{college.name}</Text>
              <Text style={styles.collegeAddress}>{college.address}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
  segmentedControl: {
    marginTop: 10,
    marginBottom: 20,
  },
  collegeContainer: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
    borderColor: 'lightgray',
  },
  collegeName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  collegeAddress: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ListOfColleges;

