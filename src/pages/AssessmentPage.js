import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AssessmentPage = ({ navigation }) => {
  const [answers, setAnswers] = useState({});
  
  const handleAnswerSelection = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    // Add logic to process and analyze answers
    console.log('Submitted Answers:', answers);
    // You can add further logic or navigate to another screen based on the answers
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Assessment Quiz</Text>

      {/* Question 1: Preferred field of study */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>1. What is your preferred field of study?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleAnswerSelection('fieldOfStudy', 'Engineering')}
        >
          <Text>Engineering</Text>
        </TouchableOpacity>
        {/* Add more options... */}
      </View>

      {/* Question 2: Preferred learning environment */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>2. What type of learning environment do you prefer?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleAnswerSelection('learningEnvironment', 'Classroom-based')}
        >
          <Text>Classroom-based</Text>
        </TouchableOpacity>
        {/* Add more options... */}
      </View>

      {/* Question 3: Career goals */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>3. What are your career goals?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleAnswerSelection('careerGoals', 'Corporate Professional')}
        >
          <Text>Corporate Professional</Text>
        </TouchableOpacity>
        {/* Add more options... */}
      </View>

      {/* Question 4: Preferred working style */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>4. What is your preferred working style?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleAnswerSelection('workingStyle', 'Team Collaboration')}
        >
          <Text>Team Collaboration</Text>
        </TouchableOpacity>
        {/* Add more options... */}
      </View>

      {/* Question 5: Extracurricular interests */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>5. What are your extracurricular interests?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleAnswerSelection('extracurricularInterests', 'Sports and Athletics')}
        >
          <Text>Sports and Athletics</Text>
        </TouchableOpacity>
        {/* Add more options... */}
      </View>

      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
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
  submitButton: {
    backgroundColor: '#1D2951',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AssessmentPage;
