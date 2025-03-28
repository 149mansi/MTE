import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper'; // Adjusted relative path
import { Picker } from '@react-native-picker/picker'; // Dropdown Picker component
import { Link } from 'expo-router'; // Using expo-router's Link component
import { useAuth } from '../../contexts/AuthContext'; // Ensure 'useAuth' is exported
import { supabase } from '../../lib/supabase'; // Ensure 'supabase' is exported
import { Button } from 'react-native';

const Home = () => {
  const { setAuth } = useAuth();
  const [studentInfo, setStudentInfo] = useState({
    thinkingExercise: "",
    month: "",
    college: "",
    yearOfStudy: "",
  });

  const handleInputChange = (field, value) => {
    setStudentInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Sign out', "Error signing out!");
    }
  };

  const onPrevious = () => {
    Alert.alert("Navigation", "You are on the first page."); // Message for the user
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Personal Information Section */}
        <View style={styles.card}>
          <Text style={styles.title}>Personal Information</Text>
          <View style={styles.field}>
            <Text style={styles.label}>Thinking Exercise:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Thinking Exercise"
              value={studentInfo.thinkingExercise}
              onChangeText={(text) => handleInputChange("thinkingExercise", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>For the Month of:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={studentInfo.month}
                onValueChange={(value) => handleInputChange("month", value)}
              >
                <Picker.Item label="Select a month" value="" />
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
                <Picker.Item label="March" value="March" />
                <Picker.Item label="April" value="April" />
                <Picker.Item label="May" value="May" />
                <Picker.Item label="June" value="June" />
                <Picker.Item label="July" value="July" />
                <Picker.Item label="August" value="August" />
                <Picker.Item label="September" value="September" />
                <Picker.Item label="October" value="October" />
                <Picker.Item label="November" value="November" />
                <Picker.Item label="December" value="December" />
              </Picker>
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>College:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter College"
              value={studentInfo.college}
              onChangeText={(text) => handleInputChange("college", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Year of Study:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Year of Study"
              value={studentInfo.yearOfStudy}
              onChangeText={(text) => handleInputChange("yearOfStudy", text)}
            />
          </View>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={onPrevious} color="#FF6F61" />
          <Link
            href={{
              pathname: '/AcademicProgress',
              params: { studentInfo },
            }}
            style={styles.link}
          >
            <Text style={styles.nextButton}>Next</Text>
          </Link>
        </View>

        {/* Logout Button */}
        <View style={{ marginTop: 20 }}>
          <Button title="Logout" onPress={onLogout} color="#d9534f" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  link: {
    flex: 1,
    alignItems: "center",
  },
  nextButton: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
