import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const PilgrimPage = () => {
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

  const handlePhonePress = () => {
    Linking.openURL('tel:(088) 856-4232');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:pilgrimchristiancollege@pilgrim.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>Pilgrim Christian College</Text> */}

      {/* Address */}
      {/* <Text style={styles.address}>1129 Claro M. Recto Avenue, Lapasan, Cagayan de Oro City</Text> */}

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/Pilgrim/pilgrim1.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Pilgrim/pilgrim2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Pilgrim/pilgrim3.jpg')} style={styles.logo} />

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
            {/* Address with icon */}
            <View style={styles.addressContainer}>
          <Icon name="map-marker" size={20} color="gray" style={styles.addressIcon} />
          <Text style={styles.addressText}>1129 Claro M. Recto Avenue, Lapasan, Cagayan de Oro City</Text>
        </View>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>For more than a decade, PHINMA built its reputation on transforming existing educational institutions to better serve Filipino students. PHINMA Education begins this process by strategically selecting a school from a key growth area and thoroughly transforming its academics, operations, and student community in order to ensure success for Filipino youth coming from low-income families.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.background}>To produce graduates with Christian values of faith, integrity, responsibility, excellence, service.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>  
      <Text style={styles.background}>Premier Christ-centered education institution to empower lives throught Whole Person Education for global integration and sustainable development.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Natural Sciences</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Environmental Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Communication</Text>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accounting</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accounting Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Entrepreneurship</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Tourism Management</Text>
          <Text style={styles.categoryCourse}>Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Special Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Special Needs Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Secondary Education major in English</Text>
          <Text style={styles.categoryItem}>Bachelor in Physical Education</Text>
          </View>
      )}
      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(088) 856-4232</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>pilgrimchristiancollege@pilgrim.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
<View style={styles.footerContainer}>
      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL('https://pilgrimchristiancollege.edu.ph/')}
>
  <Text style={styles.linkButtonText}>
    Need more information? Click here.
  </Text>
</TouchableOpacity>
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    // backgroundColor: 'white',
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
    // marginLeft: 20,
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
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20, 
  },
  addressIcon: {
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    color: 'gray',
    width: '100%',
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
    marginBottom: 15,
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
 
  footerContainer: { //add container footer
    flex: 1,
  },
  floatingButton: {
    // position: 'absolute',
    // bottom: 15,
    width: '80%',
    marginBottom: 20, // add
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

export default PilgrimPage;
