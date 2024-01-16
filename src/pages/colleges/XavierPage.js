import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const XavierPage = () => {
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
    Linking.openURL('tel:(088) 853-9800');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:cisohelpdesk@xu.edu.ph');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Xavier University – Ateneo de Cagayan</Text>

      {/* Address */}
      <Text style={styles.address}>Corrales Avenue, Cagayan de Oro City</Text>

      {/* Logo image with automatic swiper */}
      <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
      <Image source={require('../../../assets/images/xu/xu1.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/xu/xu2.jpg')} style={styles.logo} />
      <Image source={require('../../../assets/images/xu/xu3.jpg')} style={styles.logo} />

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
      <Text style={styles.background}>The Xavier University – Ateneo de Cagayan, also known simply as the Ateneo de Cagayan or Xavier is a private, Catholic, coeducational, basic and higher education institution. It is operated by the Philippine Province of the Society of Jesus in Cagayan de Oro, Misamis Oriental, Philippines. Founded in 1933 as the Ateneo de Cagayan, it became the first higher education institution in Mindanao to receive a university status a year before its sister school Ateneo de Manila. It was given its present name in honor of the Jesuit missionary St. Francis Xavier.</Text>
      <Text style={styles.background}>The university offers primary and secondary education as well as undergraduate and post-graduate education in humanities, social sciences, engineering, management and business. It offers professional degrees through graduate schools such as Xavier Ateneo College of Law and Jose P. Rizal School of Medicine.</Text>

    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>MISSION</Text>  
      <Text style={styles.mission}>Xavier University (Ateneo de Cagayan) is a Filipino, Catholic and Jesuit educational community dedicated to the integral development of the person for the needs of Mindanao, the Philippines and Asia-Pacific. As a University, Xavier engages in the authentic search for the truth through teaching, formation, research and social outreach; it is dedicated to the renewal, discovery, safeguarding and communication of knowledge and human values; and it trains men and women to think rigorously, so as to act rightly and serve humanity justly. As a Filipino University, Xavier is devoted to the appreciation, preservation and enrichment of the Filipino culture and heritage; to the sustainable development of the nation; and to the pursuit of the common good. As a Catholic University, Xavier is committed to the proclamation of the joy of the Gospel; its commitment is rooted in a deep personal friendship with Jesus Christ manifested by loyalty to the Church characterized by a preferential option for the poor; it shares in the privileged task of fostering the interdisciplinary and integrated encounter between faith, reason, and the sciences. As a Jesuit University, Xavier participates in the Jesuit mission of reconciliation with God, with others and with creation; it seeks to serve the faith, promote justice, dialogue with culture and religions, and protect the environment; it upholds the Ignatian values of magis, cura personalis and finding-God-in-all-things. In sum, Xavier University forms men and women of competence, conscience and commitment in service of the Church, the global community and the Filipino people.</Text>
    </View>
    <View style={styles.backgroundContainer}>
    <Text style={styles.title}>VISION</Text>  
      <Text style={styles.vision}>To be a leading ASEAN university forming leaders of character by 2033.</Text>
    </View>
  </>
)}
      {showCourses && (
        <View style={styles.coursesContainer}>
          <Text style={styles.categoryCourse}>Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Elementary Education</Text>
          <Text style={styles.categoryItem}>Bachelor of Secondary Education</Text>
          <Text style={styles.categoryCourse}>Engineering and Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Agricultural and Biosystems Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Chemical Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Civil Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electrical Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electronics Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Electronics and Communications Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Industrial Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Mechanical Engineering</Text>
          <Text style={styles.categoryCourse}>Business and Management</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Economics</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Accountancy</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Real Estate Management</Text>
          <Text style={styles.categoryCourse}>Social Sciences</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in International Studies</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Sociology-Anthropology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Psychology</Text>
          <Text style={styles.categoryCourse}>Natural Sciences</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Biology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Chemistry</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Marine Biology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Mathematics</Text>
          <Text style={styles.categoryCourse}>Humanities</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in History</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Literature</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in Philosophy</Text>
          <Text style={styles.categoryCourse}>Agriculture</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Agribusiness</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Agricultural and Biosystems Engineering</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Agriculture</Text>
          <Text style={styles.categoryCourse}>Languages</Text>
          <Text style={styles.categoryItem}>Bachelor of Arts in English</Text>
          <Text style={styles.categoryCourse}>Health and Medicine</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Nursing</Text>
          <Text style={styles.categoryCourse}>Information Technology</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Systems</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.categoryCourse}>Communications</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Development Communication</Text>
          <Text style={styles.categoryCourse}>Professional and Technical Courses</Text>
          <Text style={styles.categoryItem}>Bachelor of Science in Food Technology</Text>
        </View>
      )}
      {showContact && (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="black" />
              <Text style={styles.contactText}>(088) 853-9800 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="black" />
              <Text style={styles.contactText}>cisohelpdesk@xu.edu.ph</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Website Link */}
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => Linking.openURL('https://www.xu.edu.ph/')}
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

export default XavierPage;
