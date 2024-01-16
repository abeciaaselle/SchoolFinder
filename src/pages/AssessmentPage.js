import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AssessmentPage = ({ navigation }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [suggestedCareer, setSuggestedCareer] = useState('');

  const collegeCategories = {
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
    'Informatics College Cagayan de Oro': {
      'Information Technology': [
        'Bachelor of Science in Information Technology',
        'Bachelor of Science in Computer Science',
        'Bachelor of Science in Information Systems',
        'Bachelor of Science in Entrepreneurship',
      ],
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
  const questions = [
    'Do you prefer working with numbers or words?',
    'Are you naturally inclined to solve problems?',
    'Do you enjoy engaging in creative activities?',
    'Are you interested in technology and innovation?',
    'How would you describe your communication style?',
    'Are you comfortable managing finances?',
    'How well do you handle stress and pressure?',
    'Are you more detail-oriented or big-picture-focused?',
    'Do you prefer hands-on, practical work or theoretical concepts?',
    'Would you rather work independently or as part of a team?',
  ];
  
  const choices = [
    ['Numbers', 'Words'],
    ['Yes, I enjoy problem-solving!', 'Not my favorite activity.'],
    ['Yes, I enjoy creative activities.', 'Not particularly interested in creative pursuits.'],
    ['Yes, I am interested in technology.', 'Not particularly interested in technology.'],
    ['I am a great communicator!', 'I prefer to keep to myself.'],
    ['I am comfortable managing finances.', 'Finances are not my strong suit.'],
    ['I thrive under stress and pressure.', 'I prefer a more relaxed environment.'],
    ['I pay attention to details.', 'I focus more on the big picture.'],
    ['I love hands-on, practical work.', 'I prefer theoretical and abstract concepts.'],
    ['I prefer working independently.', 'I enjoy working as part of a team.'],
  ];
  const handleAnswerSelection = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion + 1 === questions.length) {
      // Last question, process answers and show result
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Add logic to process and analyze answers
    console.log('Submitted Answers:', answers);

    // Example logic to determine suggested career (customize as needed)
    const suggestedCareerBasedOnAnswers = determineSuggestedCareer();

    // Set the suggested career and show the result
    setSuggestedCareer(suggestedCareerBasedOnAnswers);
    setShowResult(true);
  };

  const determineSuggestedCareer = () => {
    // Your logic to map answers to suggested careers
    // This is just a placeholder, modify it based on your criteria
    // For now, let's return a random career from the selected category
    const randomCollege = Object.keys(collegeCategories)[Math.floor(Math.random() * Object.keys(collegeCategories).length)];
    const randomCategory = Object.keys(collegeCategories[randomCollege])[0];
    const randomCareers = collegeCategories[randomCollege][randomCategory];
    return randomCareers[Math.floor(Math.random() * randomCareers.length)];
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    questionContainer: {
      marginBottom: 20,
    },
    pageIndicator: {
      fontSize: 16,
      marginBottom: 10,
      color: 'gray',
    },
    question: {
      fontSize: 18,
      marginBottom: 10,
    },
    option: {
      marginBottom: 10,
      padding: 10,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: 'lightgray',
      backgroundColor: 'white',
    },
    resultContainer: {
      marginTop: 20,
      padding: 15,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: 'lightgray',
      backgroundColor: 'lightyellow',
    },
    resultText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    suggestedCareer: {
      fontSize: 16,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.heading}>Career Assessment Quiz</Text> */}

      {/* Display questions dynamically */}
      {currentQuestion < questions.length && (
        <View style={styles.questionContainer}>
          <Text style={styles.pageIndicator}>{currentQuestion + 1} / {questions.length}</Text>
          <Text style={styles.question}>{questions[currentQuestion]}</Text>
          {choices[currentQuestion].map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleAnswerSelection(currentQuestion + 1, choice)}
            >
              <Text>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Display result if available */}
      {showResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Based on your answers, we suggest:</Text>
          <Text style={styles.suggestedCareer}>{suggestedCareer}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default AssessmentPage;