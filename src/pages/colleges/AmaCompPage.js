import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SchoolDetails = () => {
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
      case 'whyUs':
        setShowAbout(false);
        setShowCourses(false);
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
    Linking.openURL('tel:0995 721 1749');
  };

  const handleHotlinePress = () => {
    Linking.openURL('tel:(02) 8656-0654 / 88443225');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>AMA Computer College</Text> */}

      {/* Address */}
      {/* <Text style={styles.address}>3rd floor, Goking Building cor. Daumar & JR Borja Streets, Brgy. 39 (Cogon), Cagayan de Oro City
</Text> */}

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/AMA/ama1.png')} style={styles.logo} />
      <Image source={require('../../../assets/images/AMA/ama2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/AMA/ama3.jpg')} style={styles.logo} />

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
          <Text style={styles.addressText}>3rd floor, Goking Building cor. Daumar & JR Borja Streets, Brgy. 39 (Cogon), Cagayan de Oro City</Text>
        </View>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>AMA UNIVERSITY IS A TOP CHOICE FOR IT BASED EDUCATION IN THE PHILIPPINES.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.background}>AMA is committed to delivering comprehensive, relevant, and high-quality IT-based education across all levels and fields. Our goal is to cultivate world-class professionals and leaders who are attuned to the demands of technology and the global community, conscious of the well-being and welfare of others, and capable of realizing their potential as productive members of society, all to honor and glorify God Almighty</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>
      <Text style={styles.background}>To become the foremost and most prominent provider of globally recognized information technology-based education and related services in the global market, helping our graduates lead joyful, fulfilling, professional, and personal lives.
      </Text>
    </View>
  </>
)}


      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Business Administration</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Systems</Text>
          <Text style={styles.categoryCourse}>	Engineering and Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Engineering</Text>


        </View>
      )}

      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(02) 8656-0654 / 88443225</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHotlinePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>0995 721 1749</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

<View style={styles.footerContainer}>
        {/* Website Link - add footer container */}
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => Linking.openURL('https://www.ama.edu.ph/')}
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

export default SchoolDetails;