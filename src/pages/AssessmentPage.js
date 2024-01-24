import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';


const Introduction = ({ onStartPress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.introText}>
          Welcome to the Career Assessment Quiz! This quiz will help you discover your strengths and interests, guiding you towards suitable career paths.
        </Text>
        <TouchableOpacity onPress={onStartPress} style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const questions = [
  {
    question: 'What is your strongest academic skill?',
    options: [
      'Analysis',
      'Communication',
      'Critical thinking',
      'Foreign languages',
      'Math',
      'Problem-solving',
      'Reading comprehension',
      'Research',
      'Science',
      'Writing',
    ],
  },
  {
    question: 'Describe a real-world problem you\'d love to solve.',
    options: [
      'Cultural misunderstandings',
      'Creative or artistic problems',
      'Education inequality',
      'Environmental issues',
      'Healthcare access',
      'Political conflicts',
      'Poverty and hunger',
      'Social justice issues',
      'Technological challenges',
    ],
  },
  {
    question: 'Which subject did you enjoy the most in high school?',
    options: [
      'Art',
      'Business',
      'English',
      'History',
      'Math',
      'Music',
      'Physical education',
      'Science',
      'Social studies',
      'Technology',
      'Foreign languages',
    ],
  },
  {
    question: 'What are your favorite hobbies and activities?',
    options: [
      'Analytical activities',
      'Creative activities',
      'Exploring new places',
      'Playing games',
      'Playing sports',
      'Reading',
      'Socializing',
      'Spending time outdoors',
      'Volunteering',
      'Watching movies',
      'Writing',
    ],
  },
  {
    question: 'Imagine your ideal career five years from now. What are you doing?',
    options: [
      'Creating and expressing yourself',
      'Helping and caring for others',
      'Leading and influencing others',
      'Solving problems and using logic',
      'Working with technology and machines',
    ],
  },
  {
    question: 'Pick two environments you\'d thrive in.',
    options: [
      'A bustling, fast-paced city center',
      'A collaborative team environment',
      'A creative studio or workshop',
      'A quiet research lab or library',
    ],
  },
  {
    question: 'Choose the statement that best describes your approach to learning.',
    options: [
      'I learn best by analyzing data and solving problems logically.',
      'I learn best by doing and experiencing things firsthand.',
      'I learn best by exploring ideas and concepts creatively.',
      'I learn best by working with others and collaborating on projects.',
    ],
  },
  {
    question: 'Rank your comfort level with the following tasks from most comfortable to least comfortable.',
    options: [
      'Conducting experiments and collecting data',
      'Designing visuals and crafting creative solutions',
      'Leading discussions and presenting ideas',
      'Performing calculations and solving equations',
      'Writing and analyzing text',
    ],
  },
];

const categoryScores = {
  'Engineering and Technology': 0,
  'Business and Management': 0,
  'Information Technology': 0,
  'Fine Arts': 0,
  'Health and Medicine': 0,
  'Education': 0,
  'Law and Legal Studies': 0,
  'Maritime': 0,
  'Architecture': 0,
  'Hospitality Management': 0,
  'Social Sciences': 0,
  'Humanities': 0,
  'Natural Sciences': 0,
  'Languages': 0,
  'Agriculture': 0,
  'Communications': 0,
  'Professional and Technical Courses': 0,
};

const AssessmentPage = () => {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userChoices, setUserChoices] = useState([]);

  const handleOptionPress = (option) => {
    setUserChoices([...userChoices, option]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const scoringCriteria = {
    'Analysis': { 'Engineering and Technology': 3, 'Business and Management': 2, 'Information Technology': 2 },
    'Communication': { 'Communications': 3, 'Business and Management': 2 },
    'Critical thinking': { 'Social Sciences': 3, 'Natural Sciences': 2, 'Humanities': 2 },
    'Foreign languages': { 'Languages': 3 },
    'Math': { 'Engineering and Technology': 3, 'Natural Sciences': 2 },
    'Problem-solving': { 'Engineering and Technology': 3, 'Business and Management': 2 },
    'Reading comprehension': { 'Humanities': 3, 'Languages': 1 },
    'Research': { 'Natural Sciences': 3, 'Social Sciences': 2 },
    'Science': { 'Engineering and Technology': 3, 'Natural Sciences': 2, 'Health and Medicine': 2 },
    'Writing': { 'Communications': 3, 'Fine Arts': 2 },
  };

  const calculateScore = () => {
    userChoices.forEach((choice) => {
      const scoresForChoice = scoringCriteria[choice];
      if (scoresForChoice) {
        for (const category in scoresForChoice) {
          categoryScores[category] += scoresForChoice[category];
        }
      }
    });
  };
  const renderResult = () => {
    calculateScore();
  
    // Create an array of category names
    const categoryNames = Object.keys(categoryScores);
  
    // Sort category names alphabetically
    categoryNames.sort();
  
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultHeader}>Assessment Completed!</Text>
        <Text style={styles.explanationText}>
        Here is a breakdown of your strengths and interests based on your answers:
      </Text>
        <View style={styles.resultTable}>
          {categoryNames.map((category, index) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.resultRow,
                {
                  backgroundColor: categoryScores[category] === 0 ? 'white' : '#1D2951',
                  shadowColor: categoryScores[category] === 0 ? 'black' : 'gray',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  paddingRight: 10,
                  paddingLeft: 15,
                  borderRadius: 8,
                  elevation: categoryScores[category] === 0 ? 0 : 5, // Add elevation for Android
                  marginBottom: index < categoryNames.length - 1 ? 10 : 0, // Add margin except for the last one
                },
              ]}
              onPress={() => console.log(`${category}: ${categoryScores[category]}`)} // Add any action you want here
            >
              <Text style={[
                styles.resultText,
                styles.answerText,
                { color: categoryScores[category] === 0 ? 'black' : 'white'},
              ]}>
                {`${category}:`}
              </Text>
              <Text style={[
                styles.resultText,
                styles.answerText,
                { color: categoryScores[category] === 0 ? 'black' : 'white' },
              ]}>
                {`${categoryScores[category]}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
    
  
  const startQuiz = () => {
    setShowIntroduction(false);
  };

  return (
    <ScrollView style={styles.container}>
      {showIntroduction && (
        <Introduction onStartPress={startQuiz} />
      )}
      {!showIntroduction && currentQuestion < questions.length ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionCounter}>{`Question ${currentQuestion + 1} of ${questions.length}`}</Text>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.sort().map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionPress(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        renderResult()
      )}
        {/* Footer with space */}
        <View style={styles.footerContainer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  resultHeader:{
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',  // Set background color to white
    padding: 20,  // Added padding to create space around the content
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  introText: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
    alignItems: 'center', 
    textAlign: 'justify',
  },
  startButton: {
    backgroundColor: '#1D2951',
    padding: 10,
    borderRadius: 5,
    width: '80%',

  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
  },
  questionCounter: {
    fontSize: 16,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#1D2951',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    padding: 20,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  explanationText: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  noAnswer: {
    backgroundColor: 'white',
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    height: 8,
    marginBottom: 20,  // Added margin to the noAnswer style
  },
  noAnswerText: {
    fontSize: 16,
    marginBottom: 5,
  },
  answerWithBackground: {
    backgroundColor: '#1D2951',
    borderRadius: 8,
    padding: 5,
    height: 8,
  },
  answerText: {
    color: 'white',
  },
  footerContainer: {
    height: 40, 
  },
});

export default AssessmentPage;
