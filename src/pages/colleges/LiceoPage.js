import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LiceoPage = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showCourses, setShowCourses] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleToggleSection = (section) => {
    switch (section) {
      case 'about':
        setShowAbout(true);
        setShowCourses(false);
        setShowContact(false);
        break;
      case 'courses':
        setShowAbout(false);
        setShowCourses(true);
        setShowContact(false);
        break;
      case 'contact':
        setShowAbout(false);
        setShowCourses(false);
        setShowContact(true);
        break;
      default:
        break;
    }
  };

  const handleHotlinePress = () => {
    Linking.openURL('tel:(088) 858-4093');
    Linking.openURL('tel:(63)(88) 858-4095');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:inquiries@liceo.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Liceo de Cagayan University</Text>

      {/* Address */}
      <Text style={styles.address}>Rodolfo N. Pelaez Blvd., Cagayan de Oro City</Text>

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/Liceo/liceo4.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Liceo/liceo1.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Liceo/liceo2.jpg')} style={styles.logo} />

      </Swiper>
      {/* Panel */}
      <View style={styles.panel}>
        <TouchableOpacity onPress={() => handleToggleSection('about')}>
          <Text style={[styles.panelItem, showAbout && styles.activePanel]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleSection('courses')}>
          <Text style={[styles.panelItem, showCourses && styles.activePanel]}>Courses Offered</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleSection('contact')}>
          <Text style={[styles.panelItem, showContact && styles.activePanel]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {showAbout && (
  <>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>Founded in 1955 by Atty. Rodolfo N. Pelaez of Cagayan de Oro City and his wife Elsa Pelaez Pelaez of Cebu City, the University was established with the primary mission to impart professional education to the youth of Northern Mindanao especially those who are deserving, but are financially-challenged. Envisioned to make relevant and quality education accessible to the youth, this higher institution of learning was founded as a catalyst in their total human formation anchored on universal moral values and Christian precepts.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.mission}>The University is committed to deliver quality instruction, research, and service learning for global integration.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>  
      <Text style={styles.mission}>A leading Filipino University preparing responsible global leaders, anchored on Total Human Formation, for God, Country, and Humanity.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Fine Arts</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Communication</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Economics</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in English Literature</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in International Studies</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Political Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Library and Information Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Biology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Psychology</Text>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Financial Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Human Resource Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Marketing Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Operation Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Hospitality Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Management Accounting</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Real Estate Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Tourism Management</Text>
          <Text style={styles.categoryCourse}>Engineering and Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Civil Engineering</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryCourse}>Health and Medicine</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Medical Technology/Medical Laboratory Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Nursing</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Pharmacy</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Radiologic Technology</Text>
        </View>
      )}

      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handleHotlinePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(088) 858-4093</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHotlinePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(63)(88) 858-4095</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>inquiries@liceo.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL(' https://www.liceo.edu.ph/')}
>
  <Text style={styles.linkButtonText}>
    Need more information? Click here.
  </Text>
</TouchableOpacity>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 20,
    width: '100%',
  },
  address: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'left',
    marginLeft: 20,
    width: '100%',
    color: 'gray',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSlider: {
    height: 200,
   
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  backgroundContainer: {
    backgroundColor: '#F2F3F4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  background: {
    fontSize: 16,
    textAlign: 'justify',
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    backgroundColor: '#1D2951',
    padding: 18,
    width: '100%',
    alignItems: 'center',
  },
  panelItemContainer: {
    flex: 1,
  },
  panelItem: {
    fontSize: 15,
    color: 'white',
    textDecorationLine: 'none',
  },
  activePanel: {
    color: 'lightgray',
  },
  categoryContainer: {
    backgroundColor: '#F2F3F4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  coursesContainer: {
    backgroundColor: '#F2F3F4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'justify',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryItem: {
    fontSize: 15,
    marginBottom: 10,
  },
  categoryCourse: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryWhyUs: {
    fontSize: 15,
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 15,
    marginLeft: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#1D2951',
    padding: 15,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  linkButtonText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'none',
  },
});

export default LiceoPage;
