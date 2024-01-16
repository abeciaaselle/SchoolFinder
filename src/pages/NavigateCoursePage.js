import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import { colors } from '../color/colors';

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
      'Bachelor of Science in Electronics & Communications Engineering',
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
      'Bachelor of Science in Early Childhood Education',
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
      'Bachelor in Physical Education',
    ],
  },
  'Southern de Oro Philippines College': {
    'Business and Management': [
      'Bachelor of Arts in Economics',
      'Bachelor of Science in Business Administration',
    ],
    'Education': [
      'Bachelor of Science in Elementary Education',
      'Bachelor of Science in Secondary Education',
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
      'Bachelor of Science in Agricultural and Biosystems Engineering',
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

  const extractCategories = () => {
    const categories = new Set();

    Object.values(collegesAndCourses).forEach((collegeCourses) => {
      Object.keys(collegeCourses).forEach((category) => {
        categories.add(category);
      });
    });

    return Array.from(categories);
  };

  const renderCategoryButtons = () => {
    const categories = extractCategories();

    return (
      <>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategorySelection(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category ? styles.selectedButton : null,
            ]}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </>
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

    const uniqueCourses = Array.from(new Set(courses));
    const uniqueColleges = Array.from(new Set(selectedColleges));

    uniqueCourses.sort(); // Sort courses alphabetically

    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: 'black' }}>
          Courses under {selectedCategory}
        </Text>
        {uniqueCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCourseSelection(course)}
            style={styles.courseButton}
          >
            <Text>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedCourse(null); // Reset selected course when a new category is selected
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

    return schools.map((school, index) => (
      <View key={index} style={styles.schoolContainer}>
        <Text>{school}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
      {/* Display Category Buttons */}
      <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>
        {selectedCategory ? `You chose ${selectedCategory}` : 'Choose a Category'}
      </Text>
      {renderCategoryButtons()}

      {/* Display Courses for Selected Category */}
      {selectedCategory && renderCategoryCourses()}

      {/* Modal for displaying schools offering the selected course */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              Schools Offering {selectedCourse}
            </Text>
            {renderSchoolsForCourse()}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
  
  
  const styles = StyleSheet.create({
    categoryButton: {
      backgroundColor: '#1D2951',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    selectedButton: {
      backgroundColor: '#588BAE', // Change the color for selected category
    },
    courseButton: {
      marginBottom: 20,
      borderWidth: 0.5,
      borderRadius: 8,
      padding: 10,
      borderColor: 'lightgray',
      backgroundColor: 'white',
    },
    schoolContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    closeButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
  });
  
  export default NavigateCoursePage;
