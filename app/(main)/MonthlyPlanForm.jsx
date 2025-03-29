import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import { Link } from "expo-router";

const MonthlyPlanForm = () => {
  const [formData, setFormData] = useState({
    actionPlan: "",
    mentorComments: "",
    counselingPlan: "",
  });

  const handleInputChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <ScrollView style={styles.container}>
      {/* Section 1: Action Plan for the Coming Month */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Action Plan for the Coming Month</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your action plan here"
          value={formData.actionPlan}
          onChangeText={(text) => handleInputChange("actionPlan", text)}
          multiline
        />
      </View>

      {/* Section 2: Comments by the Mentor */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comments by the Mentor</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mentor's comments here"
          value={formData.mentorComments}
          onChangeText={(text) => handleInputChange("mentorComments", text)}
          multiline
        />
      </View>

      {/* Section 3: Action Plan Based on the Counseling */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Action Plan Based on the Counseling</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter action plan based on counseling here"
          value={formData.counselingPlan}
          onChangeText={(text) => handleInputChange("counselingPlan", text)}
          multiline
        />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <Link
          href={{
            pathname: "/FriendsAndEssayForm", // Navigate to the FriendsAndEssayForm page
            params: { studentInfo: formData }, // Pass current form data
          }}
          style={styles.link}
        >
          <Text style={styles.previousButton}>Previous</Text>
        </Link>

        {/* Submit Button */}
        <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

export default MonthlyPlanForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    minHeight: 50,
    backgroundColor: "#fff",
    textAlignVertical: "top", // Ensures text starts at the top for multiline inputs
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    padding: 10,
    backgroundColor: "#FF6F61",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  previousButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
