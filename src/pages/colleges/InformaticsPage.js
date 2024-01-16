import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const InformaticsPage = () => {
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
    Linking.openURL('tel:0917 703 3467');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:tech.support@informatics.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informatics College Cagayan de Oro</Text>

      {/* Address */}
      <Text style={styles.address}>2/F, Stary Building, 9000, Max Y. Suniel St, Cagayan de Oro</Text>

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/Informatics/informatics1.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Informatics/informatics2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/Informatics/informatics3.jpg')} style={styles.logo} />

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
      <Text style={styles.background}>Our roots can be traced back to 1983 when Informatics Education was founded in Singapore in response to the demands for skilled Information Technology professionals in Asia. With the passion for technology and the vision of making IT education more accessible to Filipinos, Leonardo “Leo” Angeles Riingen established Informatics Philippines in 1993.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION and VISION</Text>  
      <Text style={styles.mission}>We are the most preferred and leading private educational institution offering IT-enhanced programs transforming students to globally competitive individuals who can be innovators of the world.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Systems</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Entrepreneurship</Text>
           </View>
      )}

      {showWhyUs && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryWhyUs}>Informatics values your dreams as much as we value quality education. Thus, putting you first by providing a well-rounded curriculum that leads to employability and sustainability is our utmost priority.</Text>
          <Text style={styles.categoryWhyUs}>Globally Recognized</Text>
          <Text style={styles.categoryWhyUs}>International Qualifies Graduates</Text>
          <Text style={styles.categoryWhyUs}>Guaranteed Employment</Text>
        </View>
      )}

      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>0917 703 3467</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>tech.support@informatics.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL('https://informatics.edu.ph/')}
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

export default InformaticsPage;
