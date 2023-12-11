// CapitolUniversityPage.js

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const CapitolUniversityPage = () => {
  // You can replace these image URLs with the actual image URLs you want to use
  const images = [
    '../../assets/images/CU/CUlogo.jpg',
    '../../assets/images/CU/CUpic1.jpg',
    '../../assets/images/CU/CUpic2.jpg',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* You can implement a carousel or image slider here */}
        {images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </View>
    
      <Text style={styles.heading}>Capitol University</Text>
      <Text style={styles.text}>Corrales Avenue, Cagayan de Oro City</Text>
      
      <Text style={styles.details}>
        Capitol University formerly Cagayan Capitol College was established in 1971 as a non – sectarian, co – educational
        private academic institution, duly registered with the Securities and Exchange Commission as a stock corporation
        and operates with the authority of the Department of Education for its primary and secondary programs and the
        Commission on Higher Education for its tertiary, graduate and postgraduate programs.
      </Text>

      <Text style={styles.heading}>VISION</Text>
      <Text style={styles.text}>ACCESSIBLE EXCELLENT EDUCATION FOR ENHANCED QUALITY OF LIFE</Text>

      <Text style={styles.heading}>MISSION</Text>
      <Text style={styles.text}>
        Capitol University is committed to developing the youth into “Total Persons,” mature and responsible individuals
        who are intellectually, professionally, and technically competent, imbued with desirable attitudes, and steeped in
        moral and spiritual values, who will serve as a catalyst for social transformation.
      </Text>

      <Text style={styles.heading}>CORE VALUES</Text>
      <Text style={styles.text}>- Commitment</Text>
      <Text style={styles.text}>- Competence</Text>
      <Text style={styles.text}>- Character</Text>
      <Text style={styles.text}>- Culture</Text>
      <Text style={styles.text}>- Care</Text>

      <Text style={styles.heading}>COLLEGES OFFERED</Text>
      <Text style={styles.text}>- Arts and Sciences</Text>
      <Text style={styles.text}>- Business and Accountancy</Text>
      <Text style={styles.text}>- Computer Studies</Text>
      <Text style={styles.text}>- Criminology</Text>
      <Text style={styles.text}>- Education</Text>
      <Text style={styles.text}>- Engineering</Text>

      <Text style={styles.heading}>FACILITIES</Text>
      <Text style={styles.text}>- Gymnasium</Text>
      <Text style={styles.text}>- Multi-purpose Hall</Text>
      <Text style={styles.text}>- Theater</Text>
      <Text style={styles.text}>- AVR'S</Text>
      <Text style={styles.text}>- Parks and Study Areas</Text>
      <Text style={styles.text}>- Maritime Facilities</Text>
      <Text style={styles.text}>- ICT Laboratories</Text>
      <Text style={styles.text}>- Machine Shop</Text>
      <Text style={styles.text}>- Bio Lab</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CapitolUniversityPage;