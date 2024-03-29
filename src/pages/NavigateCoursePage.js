import React, { useState, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal, StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../color/colors';
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;

const collegesAndCourses = {
  'Acatech Aviation College': {
    'Engineering and Technology': [
      'Aircraft Maintenance Technology',
      'Aviation Electronics Technology',
    ],
  },
  'AMA College': {
    'Business and Management': ['Bachelor of Science in Business Administration'],
    'Information Technology': [
      'Bachelor of Science in Computer Science',
      'Bachelor of Science in Information Systems',
      'Bachelor of Science in Information Technology',
    ],
    'Engineering and Technology': ['Bachelor of Science in Computer Engineering'],
  },
  'Capitol University': {
    'Business and Management': [
      'Bachelor of Science in Accounting',
      'Bachelor of Science in Management Accounting',
    ],
    'Information Technology': [
      'Bachelor of Science in Computer Science',
      'Bachelor of Science in Information Technology',
    ],
    'Law and Legal Studies': ['Bachelor of Science in Criminology'],
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
    ],
    'Engineering and Technology': [
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Electronics and Communications Engineering',
      'Bachelor of Science in Marine Engineering',
      'Bachelor of Science in Mechanical Engineering',
    ],
    'Health and Medicine': ['Bachelor of Science in Nursing'],
    'Maritime': [
      'Bachelor of Science in Marine Engineering',
      'Bachelor of Science in Marine Transportation',
    ],
  },
  'Cagayan de Oro College-PHINMA': {
    'Business and Management': [
      'Bachelor of Science in Accountancy',
      'Bachelor of Science in Hospitality Management',
      'Bachelor of Science in Tourism Management',
    ],
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
      'Bachelor of Early Childhood Education',
    ],
    'Law and Legal Studies': ['Bachelor of Science in Criminology'],
    'Engineering and Technology': [
      'Bachelor of Science in Computer Engineering',
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Electrical Engineering',
      'Bachelor of Science in Mechanical Engineering',
    ],
    'Architecture': ['Bachelor of Science in Architecture'],
    'Health and Medicine': [
      'Bachelor of Science in Nursing',
      'Bachelor of Science in Pharmacy',
      'Bachelor of Science in Medical Technology',
      'Bachelor of Science in Psychology',
    ],
    'Information Technology': ['Bachelor of Science in Information Technology'],
  },
  'Golden Heritage Polytechnic College': {
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
    ],
    'Business and Management': [
      'Bachelor of Science in Business Administration',
      'Bachelor of Science in Office Administration',
    ],
  },
   'Informatics College Cagayan de Oro': {
    'Information Technology': [
      'Bachelor of Science in Information Technology',
      'Bachelor of Science in Computer Science',
      'Bachelor of Science in Information Systems',
      'Bachelor of Science in Entrepreneurship',
    ],
  },
  'Liceo De Cagayan University': {
    'Fine Arts': [
      'Bachelor of Arts in Communication',
      'Bachelor of Arts in Economics',
      'Bachelor of Arts in English Literature',
      'Bachelor of Arts in International Studies',
      'Bachelor of Arts in Political Science',
      'Bachelor of Library and Information Science',
      'Bachelor of Science in Biology',
      'Bachelor of Science in Psychology',
    ],
    'Business and Management': [
      'Bachelor of Science in Financial Management',
      'Bachelor of Science in Human Resource Management',
      'Bachelor of Science in Marketing Management',
      'Bachelor of Science in Operation Management',
      'Bachelor of Science in Hospitality Management',
      'Bachelor of Science in Management Accounting',
      'Bachelor of Science in Real Estate Management',
      'Bachelor of Science in Tourism Management',
    ],
    'Engineering and Technology': ['Bachelor of Science in Civil Engineering'],
    'Information Technology': ['Bachelor of Science in Information Technology'],
    'Health and Medicine': [
      'Bachelor of Science in Medical Technology/Medical Laboratory Science',
      'Bachelor of Science in Nursing',
      'Bachelor of Science in Pharmacy',
      'Bachelor of Science in Radiologic Technology',
    ],
  },
  'Lourdes College': {
    'Humanities': [
      'Bachelor of Arts in English Language',
      'Bachelor of Music',
      'Bachelor of Science in Psychology',
    ],
    'Business and Management': [
      'Bachelor of Science in Accounting',
      'Bachelor of Science in Accounting Information Systems',
      'Bachelor of Science in Business Administration',
    ],
    'Hospitality Management': [
      'Bachelor of Science in Hospitality Management',
      'Bachelor of Science in Tourism Management',
    ],
    'Information Technology': [
      'Bachelor of Science in Information Systems',
      'Bachelor of Science in Information Technology',
    ],
    'Health and Medicine': [
      'Bachelor of Science in Nursing',
      'Bachelor of Science in Nutrition & Dietetics',
    ],
    'Social Sciences': ['Bachelor of Science in Social Work'],
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
      'Bachelor of Technology & Livelihood Education',
    ],
  },
  'Oro Bible College': {
    'Humanities': ['Bachelor of Arts in Theology'],
  },
  'Pilgrim Christian College': {
    'Natural Sciences': [
      'Bachelor of Science in Environmental Science',
      'Bachelor of Arts in Communication',
    ],
    'Business and Management': [
      'Bachelor of Science in Accounting',
      'Bachelor of Science in Accounting Technology',
      'Bachelor of Science in Entrepreneurship',
      'Bachelor of Science in Tourism Management',
    ],
    'Education': [
      'Bachelor of Special Education',
      'Bachelor of Special Needs Education',
      'Bachelor of Secondary Education major in English',
      'Bachelor of Physical Education',
    ],
  },
  'Southern de Oro Philippines College': {
    'Business and Management': [
      'Bachelor of Arts in Economics',
      'Bachelor of Science in Business Administration',
    ],
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
    ],
    'Tourism, Hospitality & Culinary': [
      'Bachelor of Science in Hotel and Restaurant Management',
    ],
    'Maritime': ['Bachelor of Science in Marine Transportation'],
    'Information Technology': ['Bachelor of Science in Information Technology'],
    'Humanities': ['Bachelor of Arts in English'],
    'Social Sciences': ['Bachelor of Science in Criminology'],
  },
  'STI College': {
    'Business and Management': [
      'Bachelor of Science in Management Accounting',
      'Bachelor of Science in Information Technology',
      'Bachelor of Science in Hospitality Management',
    ],
  },
  'University of Science and Technology of Southern Philippines': {
    'Education': [
      'Bachelor in Secondary Education Major in Science',
      'Bachelor of Secondary Education Major in Mathematics',
      'Bachelor in Technology and Livelihood Education',
      'Bachelor in Technical-Vocational Teacher Education',
    ],
    'Engineering and Technology': [
      'Bachelor of Science in Architecture',
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Mechanical Engineering',
      'Bachelor of Science in Computer Engineering',
      'Bachelor of Science in Geodetic Engineering',
      'Bachelor of Science in Electrical Engineering',
      'Bachelor of Science in Electronics Engineering',
    ],
    'Information Technology': [
      'Bachelor of Science in Information Technology',
      'Bachelor of Science in Technology Communication Management',
      'Bachelor of Science in Data Science',
      'Bachelor of Science in Computer Science',
    ],
    'Natural Sciences': [
      'Bachelor of Science in Applied Mathematics',
      'Bachelor of Science in Applied Physics',
      'Bachelor of Science in Chemistry',
      'Bachelor of Science in Environmental Science',
      'Bachelor of Science in Food Technology',
    ],
    'Technology': [
      'Bachelor of Science in Electronics Technology',
      'Bachelor of Science in Autotronics',
      'Bachelor of Science in Energy Systems and Management',
      'Bachelor of Science in Electro-Mechanical Technology',
      'Bachelor of Science in Manufacturing Engineering Technology',
    ],
  },
  'Vineyard College': {
    'Business and Management': [
      'Bachelor of Science in Business Administration',
      'Bachelor of Science in Hotel & Restaurant Management',
    ],
  },
  'Xavier University – Ateneo de Cagayan': {
    'Education': [
      'Bachelor of Elementary Education',
      'Bachelor of Secondary Education',
    ],
    'Engineering and Technology': [
      'Bachelor of Science in Agricultural and Biosystems Engineering',
      'Bachelor of Science in Chemical Engineering',
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Electrical Engineering',
      'Bachelor of Science in Electronics Engineering',
      'Bachelor of Science in Electronics and Communications Engineering',
      'Bachelor of Science in Industrial Engineering',
      'Bachelor of Science in Mechanical Engineering',
    ],
    'Business and Management': [
      'Bachelor of Arts in Economics',
      'Bachelor of Science in Accountancy',
      'Bachelor of Science in Real Estate Management',
    ],
    'Social Sciences': [
      'Bachelor of Arts in International Studies',
      'Bachelor of Arts in Sociology-Anthropology',
      'Bachelor of Science in Psychology',
    ],
    'Natural Sciences': [
      'Bachelor of Science in Biology',
      'Bachelor of Science in Chemistry',
      'Bachelor of Science in Marine Biology',
      'Bachelor of Science in Mathematics',
    ],
    'Humanities': [
      'Bachelor of Arts in History',
      'Bachelor of Arts in Literature',
      'Bachelor of Arts in Philosophy',
    ],
    'Agriculture': [
      'Bachelor of Science in Agribusiness',
      'Bachelor of Science in Agricultural & Biosystems Engineering',
      'Bachelor of Science in Agriculture',
    ],
    'Languages': ['Bachelor of Arts in English'],
    'Health and Medicine': ['Bachelor of Science in Nursing'],
    'Information Technology': [
      'Bachelor of Science in Computer Science',
      'Bachelor of Science in Information Systems',
      'Bachelor of Science in Information Technology',
    ],
    'Communications': ['Bachelor of Science in Development Communication'],
    'Professional and Technical Courses': ['Bachelor of Science in Food Technology'],
  },
};

const NavigateCoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const scrollViewRef = useRef(null);

  const extractCategories = () => {
    const categories = new Set();

    Object.values(collegesAndCourses).forEach((collegeCourses) => {
      Object.keys(collegeCourses).forEach((category) => {
        categories.add(category);
      });
    });

    return Array.from(categories).sort((a, b) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' })
    );
  };
  const renderCategoryDropdown = () => {
    const categories = extractCategories();
  
    const categoryItems = categories.map((category) => ({
      label: category,
      value: category,
    }));
  
    return (
      <View style={styles.categoryDropdownContainer}>
      <Text style={styles.dropdownLabel}>Select Category:</Text>
      <RNPickerSelect
  items={categoryItems}
  onValueChange={(value) => handleCategorySelection(value)}
  style={{
    inputIOS: pickerSelectStyles.inputIOS,
    inputAndroid: {
      ...pickerSelectStyles.inputAndroid,
      color: 'white',
    },
    placeholder: {
      color: 'white',
    },
    iconContainer: pickerSelectStyles.iconContainer,
  }}
  placeholder={{ label: 'Select an item..', value: null }}
  useNativeAndroidPickerStyle={false}
/>

    </View>
    );
  };
  

  const renderCategoryCourses = () => {
    if (!selectedCategory) return null;

    const courses = [];
    const selectedColleges = [];

    Object.entries(collegesAndCourses).forEach(([college, collegeCourses]) => {
      if (collegeCourses[selectedCategory]) {
        selectedColleges.push(college);
        courses.push(...collegeCourses[selectedCategory]);
      }
    });

    const uniqueCourses = Array.from(
      new Set(courses)
    ).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    const uniqueColleges = Array.from(new Set(selectedColleges));

    return (
      <View style={styles.categoryCoursesContainer}>
        <Text style={styles.categoryCoursesHeader}>
          Courses under {selectedCategory}
        </Text>
        {uniqueCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCourseSelection(course)}
            style={styles.courseButton}
          >
            <Text style={styles.courseButtonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedCourse(null);
  
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const renderSchoolsForCourse = () => {
    if (!selectedCourse) return null;

    const schools = [];
    Object.entries(collegesAndCourses).forEach(([school, courses]) => {
      Object.entries(courses).forEach(([category, schoolCourses]) => {
        if (schoolCourses.includes(selectedCourse)) {
          schools.push(school);
        }
      });
    });

    return (
      <View style={styles.schoolsContainer}>
        
        {schools.map((school, index) => (
          <View key={index} style={styles.schoolContainer}>
            <Text style={styles.schoolText}>{school}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
    ref={scrollViewRef}
    style={[
      styles.container,
      Platform.OS === 'ios' ? { paddingTop: 40 } : null,
    ]}
  >
    {renderCategoryDropdown()}

    {selectedCategory && renderCategoryCourses()}

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeaderText}>
            Schools Offering {selectedCourse}
          </Text>
          {renderSchoolsForCourse()}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    <View style={styles.footer}></View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  categoryDropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  categoryCoursesContainer: {
    marginTop: 20,
  },
  categoryCoursesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  courseButton: {
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 8,
    padding: 15,
    backgroundColor: 'white',
    shadowColor: 'gray', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  courseButtonText: {
    fontSize: 16,
    color: '#333',
  },
  schoolsContainer: {
    marginTop: 20,
  },
  schoolsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  schoolContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  schoolText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#1D2951',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedCategoryText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  footer: {
    height: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingRight: 30,
    backgroundColor: '#1D2951',
    color: 'white',
  },
  inputAndroid: {
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingRight: 30,
        backgroundColor: '#1D2951',
  color: Platform.OS === 'android' ? 'black' : 'white',        
      },
    }),
  },
  iconContainer: {
    top: 10, // Adjust the position of the dropdown arrow/icon
    right: 20,
    color: 'white',
  },
});
export default NavigateCoursePage;

