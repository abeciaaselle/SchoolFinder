import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const GoldenHeritagePage = () => {
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
      Linking.openURL('tel:0917-152-4297');
      Linking.openURL('tel:0947-933-9514');
    };
    const handleHotlinePress = () => {
      Linking.openURL('tel:(088)858-7326');
    };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Golden Heritage Polytechnic College</Text>
  
        {/* Address */}
        <Text style={styles.address}>Vamenta Boulevard, Carmen, 9000 Cagayan de Oro City</Text>
  
        {/* Logo image with automatic swiper */}
        <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
        <Image source={require('../../../assets/images/GoldenHeritage/goldenheritage1.jpg')} style={styles.logo} />
        <Image source={require('../../../assets/images/GoldenHeritage/goldenheritage2.jpg')} style={styles.logo} />
        <Image source={require('../../../assets/images/GoldenHeritage/goldenheritage3.jpg')} style={styles.logo} />
  
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
        <Text style={styles.background}> The Golden Heritage Polytechnic College duly registered with the Security and Exchange Commission (SEC) as a non-stock, non-profit, non-sectarian educational institution was founded in 1987 by Capt. Tito P. Dichosa, a master mariner and a maritime school department head at the same time professor and his wife Netty D. Dichosa, a grade school teacher, with the vision of producing quality graduates at a very low school fees. It operates with the authority of the Department of Education (DepED) for its basic education program, the Technical Education and Skills Development Authority (TESDA) for its tertiary training programs, and the Commission on Higher Education (CHED) for its tertiary baccalaureate programs.</Text>
      </View>
      <View style={styles.backgroundContainer}>
      <Text style={styles.title}>MISSION</Text>  
        <Text style={styles.mission}>Enhance knowledge by keeping abreast with the new educational trends for global excellence.</Text>
        <Text style={styles.mission}>Continually instill the passion and love of work for skills development.</Text>
        <Text style={styles.mission}>Wholeheartedly abide by the school's rules and regulations manifesting a refined-character person at all times.</Text>
      </View>
      <View style={styles.backgroundContainer}>
      <Text style={styles.title}>VISION</Text>  
        <Text style={styles.mission}>The Golden Heritage Polytechnic College is a forerunner of educational pursuits that cater to the total development of the person’s inherent potentialities thereby capable to withstand the challenges of society.</Text>
      </View>
    </>
  )}
        {showCourses && (
          <View style={styles.coursesContainer}>
            <Text style={styles.categoryCourse}>Education</Text>
            <Text style={styles.categoryItem}>Bachelor of Elementary Education</Text>
            <Text style={styles.categoryItem}>Bachelor of Secondary Education</Text>
            <Text style={styles.categoryCourse}>Business and Management</Text>
            <Text style={styles.categoryItem}>Bachelor of Science in Business Administration</Text>
            <Text style={styles.categoryItem}>Bachelor of Science in Office Administration</Text>
          </View>
        )}
  
        {showContact && (
          <View style={styles.categoryContainer}>
            <TouchableOpacity onPress={handlePhonePress}>
              <View style={styles.contactItem}>
                <Icon name="phone" size={20} color="black" />
                <Text style={styles.contactText}>0917-152-4297</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePhonePress}>
              <View style={styles.contactItem}>
                <Icon name="phone" size={20} color="black" />
                <Text style={styles.contactText}>0947-933-9514</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHotlinePress}>
              <View style={styles.contactItem}>
                <Icon name="phone" size={20} color="black" />
                <Text style={styles.contactText}>(088)858-7326</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
  
        {/* Website Link */}
        <TouchableOpacity
    style={styles.floatingButton}
    onPress={() => Linking.openURL('www.goldenheritage.edu.ph')}
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

export default GoldenHeritagePage;
