import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import ScreenWrapper from "../../components/screenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";
import { useAppData } from "../../contexts/AppDataContext";

const Home = () => {
  const { setAuth } = useAuth();
  const { sectionData, updateSectionData } = useAppData(); // Use global state
  const router = useRouter();

  const [studentInfo, setStudentInfo] = useState({
    thinkingExercise: "",
    month: "",
    college: "",
    yearOfStudy: "",
  });

  useEffect(() => {
    // Load previously saved data when the component mounts
    const savedData = sectionData?.home;
    if (savedData) {
      setStudentInfo(savedData);
    }
  }, [sectionData]);

  const handleInputChange = (field, value) => {
    setStudentInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveDataToGlobalState = () => {
    if (updateSectionData && typeof updateSectionData === "function") {
      try {
        updateSectionData("home", studentInfo);
        console.log("Global state updated with:", studentInfo);
      } catch (error) {
        console.error("Error updating global state:", error);
        Alert.alert("Error", "Failed to save data to global state.");
      }
    } else {
      console.error("updateSectionData is not a function or undefined.");
      Alert.alert("Error", "Global state update function is unavailable.");
    }
  };

  const validateFields = () => {
    const { thinkingExercise, month, college, yearOfStudy } = studentInfo;
    if (!thinkingExercise || !month || !college || !yearOfStudy) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateFields()) {
      saveDataToGlobalState(); // Save to global state
      router.push("/AcademicProgress"); // Navigate to next page
    }
  };

  const onLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setAuth(null);
      Alert.alert("Success", "You have been logged out.");
      router.replace("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      Alert.alert("Sign out", `Error signing out: ${error.message}`);
    }
  };

  const onPrevious = () => {
    Alert.alert("Navigation", "You are on the first page.");
  };

  useEffect(() => {
    saveDataToGlobalState(); // Ensure data is saved when studentInfo changes
  }, [studentInfo]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Personal Information</Text>
          <View style={styles.field}>
            <Text style={styles.label}>Thinking Exercise:</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Student"
              value={studentInfo.thinkingExercise}
              onChangeText={(text) =>
                handleInputChange("thinkingExercise", text)
              }
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
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <Picker.Item key={month} label={month} value={month} />
                ))}
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
              onChangeText={(text) =>
                handleInputChange("yearOfStudy", text)
              }
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={onPrevious} color="#FF6F61" />
          <Button title="Next" onPress={handleNext} color="#4CAF50" />
        </View>

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
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
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
});
