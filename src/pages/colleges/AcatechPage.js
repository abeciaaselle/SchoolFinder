// import React from 'react';
// import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const SchoolDetails = () => {
//   const handlePhonePress = () => {
//     Linking.openURL('tel:+0888582335');
//   };

//   const handleHotlinePress = () => {
//     Linking.openURL('tel:+639179681504');
//   };

//   const handleEmailPress = () => {
//     Linking.openURL('mailto:acatechcdomarketing@gmail.com');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Acatech Aviation College</Text>

//       {/* Address */}
//       <Text style={styles.address}>TGS Square, Agora Road, Lapasan, Cagayan de Oro City</Text>

//       {/* Logo image with shadow */}
//       <Image
//         source={require('../../../assets/images/Acatech/acatech-logo.jpg')}
//         style={styles.logo}
//       />
      
//       <View style={styles.backgroundContainer}>
//         <Text style={styles.background}>The only aviation school in Northern Mindanao.</Text>
//       </View>

//       {/* Additional content for testing scrollability */}
      
//       {/* ... (you can add more duplicated content if needed) */}

//       {/* Courses offered */}
//       <Text style={styles.categoryTitle}>Courses Offered</Text>
//       <View style={styles.categoryContainer}>
//         <Text style={styles.categoryCourse}>Engineering and Technology</Text>
//         <Text style={styles.categoryItem}>Aircraft Maintenance Technology</Text>
//         <Text style={styles.categoryItem}>Aviation Electronics Technology</Text>
//       </View>

//       {/* Why Us? */}
//       <Text style={styles.categoryTitle}>Why Us?</Text>
//       <View style={styles.categoryContainer}>
//         <Text style={styles.categoryWhyUs}>CAAP APPROVED COURSES</Text>
//         <Text style={styles.categoryWhyUs}>STANDARD AVIATION TRAINING</Text>
//         <Text style={styles.categoryWhyUs}>COMPUTER-BASED TRAINING</Text>
//         <Text style={styles.categoryWhyUs}>ON-THE-JOB TRAINING</Text>
//       </View>

//       {/* Contact Us */}
//       <Text style={styles.categoryTitle}>Contact Us</Text>
//       <View style={styles.categoryContainer}>
//         <TouchableOpacity onPress={handlePhonePress}>
//           <View style={styles.contactItem}>
//             <Icon name="phone" size={20} color="black" />
//             <Text style={styles.contactText}>(088) 858-2335</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleHotlinePress}>
//           <View style={styles.contactItem}>
//             <Icon name="phone" size={20} color="black" />
//             <Text style={styles.contactText}>+63 917-968-1504</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleEmailPress}>
//           <View style={styles.contactItem}>
//             <Icon name="envelope" size={20} color="black" />
//             <Text style={styles.contactText}>acatechcdomarketing@gmail.com</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Website Link */}
//       <TouchableOpacity onPress={() => Linking.openURL('https://acatech-cdo.com/web/index.html')}>
//         <View style={styles.linkButton}>
//           <Text style={styles.linkButtonText}>
//             Need more information? Click here.
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: 'white',
//     alignItems: 'center',

//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'left',  // Align text to the left
//     width: '100%',  // Take full width

//   },
//   address: {
//     fontSize: 14,
//     marginBottom: 15, // Increase spacing
//     textAlign: 'left',  // Align text to the left
//     width: '100%',  // Take full width
//     color: 'gray',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 15, // Increase spacing
//     resizeMode: 'cover',
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//   },
//  backgroundContainer: {
//     backgroundColor: '#F2F3F4',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15, // Increase spacing
//     width: '100%',
//     alignItems: 'center',
//   },
//   background: {
//     fontSize: 16,
//     textAlign: 'justify',
//   },
//   categoryContainer: {
//     backgroundColor: '#F2F3F4',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 15, // Increase spacing
//     width: '100%',
//     alignItems: 'center',
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15, // Increase spacing
//   },
//   categoryItem: {
//     fontSize: 15,
//     marginBottom: 10, // Increase spacing
//   },
//   categoryCourse: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 15, // Increase spacing
//   },
//   categoryWhyUs: {
//     fontSize: 15,
//     marginBottom: 10,
//   },
//   contactItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15, // Increase spacing
//   },
//   contactText: {
//     fontSize: 15,
//     marginLeft: 10,
//   },
//   linkButton: {
//     backgroundColor: '#1D2951',
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   linkButtonText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default SchoolDetails;
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
    Linking.openURL('tel:+0888582335');
  };

  const handleHotlinePress = () => {
    Linking.openURL('tel:+639179681504');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:acatechcdomarketing@gmail.com');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <Text style={styles.title}>Acatech Aviation College</Text> */}

        {/* Address */}
        {/* <Text style={styles.address}>TGS Square, Agora Road, Lapasan, Cagayan de Oro City</Text> */}

        {/* Logo image with automatic swiper */}
        <Swiper style={styles.logoSlider} showsButtons={false} autoplay>
          <Image source={require('../../../assets/images/Acatech/acatech2.jpg')} style={styles.logo} />
          <Image source={require('../../../assets/images/Acatech/acatech1.jpg')} style={styles.logo} />
          <Image source={require('../../../assets/images/Acatech/acatech3.jpg')} style={styles.logo} />
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
          {/* Address with icon */}
        <View style={styles.addressContainer}>
          <Icon name="map-marker" size={20} color="gray" style={styles.addressIcon} />
          <Text style={styles.addressText}>TGS Square, Agora Road, Lapasan, Cagayan de Oro City</Text>
        </View>
        <View style={styles.backgroundContainer}>
          <Text style={styles.background}>The only aviation school in Northern Mindanao.</Text>
        </View>
          </>
        )}

        {showCourses && (
          <View style={styles.coursesContainer}>
            <Text style={styles.categoryCourse}>Engineering and Technology</Text>
            <Text style={styles.categoryItem}>Aircraft Maintenance Technology</Text>
            <Text style={styles.categoryItem}>Aviation Electronics Technology</Text>
          </View>
        )}

        {showWhyUs && (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryWhyUs}>CAAP APPROVED COURSES</Text>
            <Text style={styles.categoryWhyUs}>STANDARD AVIATION TRAINING</Text>
            <Text style={styles.categoryWhyUs}>COMPUTER-BASED TRAINING</Text>
            <Text style={styles.categoryWhyUs}>ON-THE-JOB TRAINING</Text>
          </View>
        )}

        {showContact && (
          <View style={styles.categoryContainer}>
            <TouchableOpacity onPress={handlePhonePress}>
              <View style={styles.contactItem}>
                <Icon name="phone" size={20} color="black" />
                <Text style={styles.contactText}>(088) 858-2335</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHotlinePress}>
              <View style={styles.contactItem}>
                <Icon name="phone" size={20} color="black" />
                <Text style={styles.contactText}>+63 917-968-1504</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEmailPress}>
              <View style={styles.contactItem}>
                <Icon name="envelope" size={20} color="black" />
                <Text style={styles.contactText}>acatechcdomarketing@gmail.com</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Website Link */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => Linking.openURL('https://acatech-cdo.com/web/index.html')}
      >
        <Text style={styles.linkButtonText}>
          Need more information? Click here.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // flexGrow: 1,
    // backgroundColor: 'white',
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
    alignSelf: 'center',
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



