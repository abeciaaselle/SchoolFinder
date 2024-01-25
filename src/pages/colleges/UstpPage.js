import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const UstpPage = () => {
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
    Linking.openURL('tel:+63 88 856 1738');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:chancelloroffice.cdo@ustp.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>University of Science and Technology of Southern Philippines(USTP)</Text> */}

      {/* Address */}
      {/* <Text style={styles.address}>Lapasan Highway, Cagayan de Oro City</Text> */}

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/ustp/ustp1.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/ustp/ustp2.png')} style={styles.logo} />
      <Image source={require('../../../assets/images/ustp/ustp3.jpeg')} style={styles.logo} />

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
          <Text style={styles.addressText}>Lapasan Highway, Cagayan de Oro City</Text>
        </View>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>The University of Science and Technology of Southern Philippines (USTP) is a state university established on August 16, 2016, by virtue of Republic Act 10919 through the amalgamation of the Mindanao University of Science and Technology (MUST) in Cagayan de Oro City, Misamis Oriental and the Misamis Oriental State College of Agriculture and Technology (MOSCAT) in Claveria, Misamis Oriental. It is located in Northern Mindanao, the Gateway to Mindanao, which offers a strategic locational advantage for the institution to train and develop students from all the other regions.</Text>
      <Text style={styles.background}>Adhering to its general mandate to primarily provide advanced education; higher technological, professional, and advanced instruction; and advanced research and extension work, required for global competitiveness, the University envisions becoming a nationally recognized S&T University providing the vital link between education and the economy. As the university fulfills this mandate, it moves from within its immediate context and toward its larger international environment, as the first and only national university of science and technology in the country. It will operate as such that it will have seamless knowledge and collaboration with its stakeholders in the private and public sectors, the labor market, business, and industry.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.background}>(a) bring the world of work (industry) into the actual higher education and training of students;</Text>
      <Text style={styles.background}>(b) offer entrepreneurs the opportunity to maximize their business potentials through a gamut of services from product conceptualization to commercialization;</Text>
      <Text style={styles.background}>(c) contribute significantly to the National Development Goals of food security an energy sufficiency through technological solutions. </Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>  
      <Text style={styles.background}>The University of Science and Technology of Southern Philippines (USTP) is a nationally-recognized science and technology university providing the vital link between education and the economy.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
        <Text style={styles.categoryCourse}>Education</Text>
        <Text style={styles.categoryItem}>Bachelor in Secondary Education Major in Science</Text>
        <Text style={styles.categoryItem}>Bachelor of Secondary Education Major in Mathematics</Text>
        <Text style={styles.categoryItem}>Bachelor in Technology and Livelihood Education</Text>
        <Text style={styles.categoryItem}>Bachelor in Technical-Vocational Teacher Education</Text>
          <Text style={styles.categoryCourse}>Engineering and Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Architecture</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Civil Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Mechanical Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Geodetic Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electrical Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electronics Engineering</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Technology Communication Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Data Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.categoryCourse}>Natural Sciences</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Applied Mathematics</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Applied Physics</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Chemistry</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Environmental Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Food Technology</Text>
          <Text style={styles.categoryCourse}>Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electronics Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Autotronics</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Energy Systems and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electro-Mechanical Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Manufacturing Engineering Technology</Text>

          

        </View>
      )}
      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>+63 88 856 1738</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>chancelloroffice.cdo@ustp.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
<View style={styles.footerContainer}>
      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL('https://www.ustp.edu.ph/cdeo/')}
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
export default UstpPage;
