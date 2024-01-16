import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SchoolDetails = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showCourses, setShowCourses] = useState(false);
  const [showWhyUs, setShowWhyUs] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleToggleSection = (section) => {
    switch (section) {
      case 'about':
        setShowAbout(true);
        setShowCourses(false);
        setShowWhyUs(false);
        setShowContact(false);
        break;
      case 'courses':
        setShowAbout(false);
        setShowCourses(true);
        setShowWhyUs(false);
        setShowContact(false);
        break;
      case 'whyUs':
        setShowAbout(false);
        setShowCourses(false);
        setShowWhyUs(true);
        setShowContact(false);
        break;
      case 'contact':
        setShowAbout(false);
        setShowCourses(false);
        setShowWhyUs(false);
        setShowContact(true);
        break;
      default:
        break;
    }
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+63 917 376 5105');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:info.coc@phinmaed.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cagayan de Oro College-PHINMA</Text>

      {/* Address */}
      <Text style={styles.address}>Max Suniel St., Carmen, Cagayan de Oro City</Text>

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/COC/coc4.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/COC/coc2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/COC/coc3.jpg')} style={styles.logo} />

      </Swiper>
      {/* Panel */}
      <View style={styles.panel}>
        <TouchableOpacity onPress={() => handleToggleSection('about')}>
          <Text style={[styles.panelItem, showAbout && styles.activePanel]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleSection('courses')}>
          <Text style={[styles.panelItem, showCourses && styles.activePanel]}>Courses Offered</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleSection('whyUs')}>
          <Text style={[styles.panelItem, showWhyUs && styles.activePanel]}>Why Us?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleSection('contact')}>
          <Text style={[styles.panelItem, showContact && styles.activePanel]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {showAbout && (
  <>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>For more than a decade, PHINMA built its reputation on transforming existing educational institutions to better serve Filipino students. PHINMA Education begins this process by strategically selecting a school from a key growth area and thoroughly transforming its academics, operations, and student community in order to ensure success for Filipino youth coming from low-income families.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.mission}>To make lives better through education.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accountancy</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Hospitality Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Tourism Management</Text>
          <Text style={styles.categoryCourse}>Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Elementary Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Secondary Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Early Childhood Education</Text>
          <Text style={styles.categoryCourse}>Law and Legal Studies</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Criminology</Text>
          <Text style={styles.categoryCourse}>Engineering and Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Civil Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electrical Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Mechanical Engineering</Text>
          <Text style={styles.categoryCourse}>Architecture</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Architecture</Text>
          <Text style={styles.categoryCourse}>Health and Medicine</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Nursing</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Pharmacy</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Medical Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Psychology</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>

          

        </View>
      )}

      {showWhyUs && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryWhyUs}>As an innovative Philippine business institution, PHINMA believes that access to quality education is the solution to many of our country’s problems. While the enrollment rate in the Philippines has always been high, PHINMA discovered that most students do not finish tertiary education. Students were willing to learn but did not have the resources to stay in school.</Text>
        </View>
      )}

      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>+63 917 376 5105</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>info.coc@phinmaed.com</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL('https://coc.phinma.edu.ph/')}
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

export default SchoolDetails;
