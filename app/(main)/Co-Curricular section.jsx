import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Assuming you're using Expo Router

const CoCurricularsection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [combinedData, setCombinedData] = useState({
    realLifeProject: '',
    extraEnglish: '',
    coCurricularPlan: '',
    examResults: '',
    financialRequirements: '',
    difficulties: '',
  });

  const studentInfo = { name: 'John Doe', age: 20 }; // Example student info

  const sections = [
    {
      label: 'Real Life Project:',
      key: 'realLifeProject',
      placeholder: 'Enter your real-life project details',
    },
    {
      label: 'Extra English:',
      key: 'extraEnglish',
      placeholder: 'Enter your extra English details',
    },
    {
      label: 'Co-Curricular Plan:',
      key: 'coCurricularPlan',
      placeholder: 'Enter your co-curricular plan',
    },
    {
      label: 'Results of the exams (Regular college/university and other exams):',
      key: 'examResults',
      placeholder: 'Enter your exam results',
    },
    {
      label: 'Financial Requirements for the next 3 months (Details Please):',
      key: 'financialRequirements',
      placeholder: 'Enter your financial requirements',
    },
    {
      label: 'Difficulties (Social, Family, etc.):',
      key: 'difficulties',
      placeholder: 'Enter the difficulties you face',
    },
  ];

  const handleChange = (key, value) => {
    setCombinedData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      {sections[currentSection] && (
        <View style={styles.section}>
          <Text style={styles.label}>{sections[currentSection].label}</Text>
          <TextInput
            style={styles.input}
            placeholder={sections[currentSection].placeholder}
            value={combinedData[sections[currentSection].key]}
            onChangeText={(text) => handleChange(sections[currentSection].key, text)}
            multiline
          />
        </View>
      )}

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          {currentSection === 0 ? (
            <Link
              href={{ pathname: '/AcademicProgress', params: { studentInfo } }}
              style={styles.link}
            >
              <Text style={styles.nextButton}>Previous</Text>
            </Link>
          ) : (
            <Button title="Previous" onPress={handlePrevious} color="#FF6F61" />
          )}
        </View>
        <View style={styles.buttonWrapper}>
          {currentSection < sections.length - 1 ? (
            <Button title="Next" onPress={handleNext} color="#FF6F61" />
          ) : (
            <Link
              href={{ pathname: '/HealthAndReading', params: { studentInfo } }}
              style={styles.link}
            >
              <Text style={styles.nextButton}>Next</Text>
            </Link>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    minWidth: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
  link: {
    padding: 10,
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CoCurricularsection;
