import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAppData } from "../../contexts/AppDataContext"; // Import global state

const HealthAndReading = () => {
  const router = useRouter();
  const { updateSectionData } = useAppData(); // Function to update global state

  const [currentSection, setCurrentSection] = useState(0);
  const [data, setData] = useState({
    exercise: "",
    sleep: "",
    diet: "",
    ladderBooks: "",
    otherBooks: "",
    ladderStatus: "",
    reviewedBooks: "",
  });

  const handleInputChange = (key, value) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const sections = [
    {
      title: "Exercise, Sleep, and Diet",
      fields: [
        { key: "exercise", placeholder: "Enter your exercise routine", value: data.exercise },
        { key: "sleep", placeholder: "Enter your sleep duration", value: data.sleep },
        { key: "diet", placeholder: "Describe your diet", value: data.diet },
      ],
    },
    {
      title: "Books Read and Ladder Progress",
      fields: [
        { key: "ladderBooks", placeholder: "List books from the ladder", value: data.ladderBooks },
        { key: "otherBooks", placeholder: "List other books read", value: data.otherBooks },
      ],
    },
    {
      title: "Ladder Progress and Reviewed Books",
      fields: [
        { key: "ladderStatus", placeholder: "Enter your ladder progress status", value: data.ladderStatus },
        { key: "reviewedBooks", placeholder: "Books you've reviewed", value: data.reviewedBooks },
      ],
    },
  ];

  const handleSaveAndNext = () => {
    // Validate data before proceeding
    const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
    if (!isAnyFieldFilled) {
      Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
      return;
    }

    // Update global state with health and reading data
    updateSectionData("healthAndReading", data);

    // Navigate to the next page
    router.push("/FriendsAndEssayForm");
  };

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
          <TouchableOpacity
            style={styles.link}
            onPress={() => setCurrentSection((prev) => prev - 1)}
          >
            <Text style={styles.previousButton}>Previous</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.link}
            onPress={() => router.push("/CoCurricularSection")}
          >
            <Text style={styles.previousButton}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentSection < sections.length - 1 ? (
          <TouchableOpacity
            style={styles.link}
            onPress={() => setCurrentSection((prev) => prev + 1)}
          >
            <Text style={styles.nextButton}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.link} onPress={handleSaveAndNext}>
            <Text style={styles.nextButton}>Save and Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default HealthAndReading;

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
    textAlignVertical: "top",
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
