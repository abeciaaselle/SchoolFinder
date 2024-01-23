import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LourdesPage = () => {
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
    Linking.openURL('tel:(088) 857-1423');
    Linking.openURL('tel:(08822) 72-34-64');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:lc@lccdo.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>Lourdes College</Text> */}

      {/* Address */}
      {/* <Text style={styles.address}>Capistrano-Mabini Sts., Cagayan de Oro City</Text> */}

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/lourdes/lourdes1.png')} style={styles.logo} />
      <Image source={require('../../../assets/images/lourdes/lourdes2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/lourdes/lourdes3.jpg')} style={styles.logo} />

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
          <Text style={styles.addressText}>Capistrano-Mabini Sts., Cagayan de Oro City</Text>
        </View>
    <View style={styles.backgroundContainer}>
      <Text style={styles.background}>A private, Roman Catholic basic and higher education institution managed by the Congregation of the Religious of the Virgin Mary in Cagayan de Oro City, Misamis Oriental, Philippines. It was founded by Archbishop James T.G. Hayes, S.J. in 1928. It is a member of the Philippine Accrediting Association of Schools, Colleges and Universities (PAASCU).</Text>
      <Text style={styles.background}>The school has two campuses: the Integrated Basic Education Department (IBED) in Barangay Macasandig, and the Higher Education Department (HED) on Capistrano-Hayes Sts.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.background}>We commit ourselves to:</Text>
      <Text style={styles.background}>1. grow deeper in discernment and interior freedom to be prophets of hope in today's world;</Text>
      <Text style={styles.background}>2. continuously form Ignacian Marian leaders who witness to faith, excellence and service in varied socio-cultural settings;</Text>
      <Text style={styles.background}>3. constantly pursue innovative programs, approaches, and educational strategies to develop world-class professionals;</Text>
      <Text style={styles.background}>4. build up resources and capabilities and create new paradigms to address social harmony toward a dignified life; and</Text>
      <Text style={styles.background}>5. expand our educational thrust for the poor.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>  
      <Text style={styles.background}>We, the Ignacian Marian community, witness the loving compassion of Jesus. We open new horizons with hope of nurturing learners to be humble and globally competent leaders grounded in solidarity and committed to social renewal for the common good.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Humanities</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in English Language</Text>
          <Text style={styles.categoryItem}>Bachelor of Music</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Psychology</Text>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accounting</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accounting Information Systems</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Business Administration</Text>
          <Text style={styles.categoryCourse}>Hospitality Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Hospitality Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Tourism Management</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Systems</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryCourse}>Health and Medicine</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Nursing</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Nutrition & Dietetics</Text>
          <Text style={styles.categoryCourse}>Social Sciences</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Social Work</Text>
          <Text style={styles.categoryCourse}>Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Elementary Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Secondary Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Technology & Livelihood Education</Text>
        </View>
      )}

      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handleHotlinePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(088) 857-1423</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHotlinePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(08822) 72-34-64</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>lc@lccdo.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
<View style={styles.footerContainer}>

      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL(' https://www.lccdo.edu.ph/')}
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
export default LourdesPage;
