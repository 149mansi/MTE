import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import { Link } from "expo-router";

const CombinedSection = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const [data, setData] = useState({
    friends: "",
    learnings: "",
    essay: "",
  });

  const handleInputChange = (key, value) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const sections = [
    {
      title: "New friends or acquaintances made and what you learned from them",
      fields: [
        {
          key: "friends",
          placeholder: "Enter names of new friends or acquaintances",
          value: data.friends,
        },
        {
          key: "learnings",
          placeholder: "Enter what you learned from them",
          value: data.learnings,
        },
      ],
    },
    {
      title:
        "Essay on a topic of your choice including learning from the books read (Please write in your own words, don’t copy from the internet)",
      fields: [
        {
          key: "essay",
          placeholder: "Write your essay here",
          value: data.essay,
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{sections[currentSection].title}</Text>
      {sections[currentSection].fields.map((field) => (
        <TextInput
          key={field.key}
          style={styles.input}
          placeholder={field.placeholder}
          value={field.value}
          onChangeText={(text) => handleInputChange(field.key, text)}
          multiline
        />
      ))}

      <View style={styles.buttonContainer}>
        {currentSection > 0 ? (
          <Button
            title="Previous"
            onPress={() => setCurrentSection((prev) => prev - 1)}
            color="#FF6F61"
          />
        ) : (
          <Link
            href={{
              pathname: "/HealthAndReading", // Navigate to HealthAndReading page
              params: { studentInfo: data }, // Pass the current form data if needed
            }}
            style={styles.link}
          >
            <Text style={styles.previousButton}>Previous</Text>
          </Link>
        )}
        {currentSection < sections.length - 1 ? (
          <Button
            title="Next"
            onPress={() => setCurrentSection((prev) => prev + 1)}
            color="#FF6F61"
          />
        ) : (
          <Link
            href={{
              pathname: "/MonthlyPlanForm", // Navigate to MonthlyPlanForm
              params: { studentInfo: data }, // Pass the current form data
            }}
            style={styles.link}
          >
            <Text style={styles.nextButton}>Next</Text>
          </Link>
        )}
      </View>
    </ScrollView>
  );
};

export default CombinedSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    minHeight: 50,
    textAlignVertical: "top", // Ensures text starts at the top for multiline inputs
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
  nextButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
