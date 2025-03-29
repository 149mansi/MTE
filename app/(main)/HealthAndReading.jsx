import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from "react-native";
import { Link } from "expo-router";

const HealthAndReading = () => {
  const [data, setData] = useState({
    exercise: "",
    sleep: "",
    eat: "",
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

  return (
    <ScrollView style={styles.container}>
      {/* Section 1: Exercise, Sleep, Eat */}
      <Text style={styles.title}>
        It's very important to exercise regularly and eat and sleep properly
      </Text>
      <Text style={styles.label}>Exercise:</Text>
      <TextInput
        style={styles.input}
        placeholder="Exercise"
        value={data.exercise}
        onChangeText={(text) => handleInputChange("exercise", text)}
      />
      <Text style={styles.label}>Sleep:</Text>
      <TextInput
        style={styles.input}
        placeholder="Sleep"
        value={data.sleep}
        onChangeText={(text) => handleInputChange("sleep", text)}
      />
      <Text style={styles.label}>Eat:</Text>
      <TextInput
        style={styles.input}
        placeholder="Eat"
        value={data.eat}
        onChangeText={(text) => handleInputChange("eat", text)}
      />

      {/* Section 2: Reading Books / Watching Videos */}
      <Text style={styles.title}>Reading Books / Watching Videos</Text>
      <Text style={styles.label}>Names of the ladder books/videos read:</Text>
      <TextInput
        style={styles.input}
        placeholder="Names of the ladder books/videos read"
        value={data.ladderBooks}
        onChangeText={(text) => handleInputChange("ladderBooks", text)}
      />
      <Text style={styles.label}>Names of the other books/videos:</Text>
      <TextInput
        style={styles.input}
        placeholder="Names of the other books/videos"
        value={data.otherBooks}
        onChangeText={(text) => handleInputChange("otherBooks", text)}
      />
      <Text style={styles.label}>Ladder status (books/videos read / to be read):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ladder status (books/videos read / to be read)"
        value={data.ladderStatus}
        onChangeText={(text) => handleInputChange("ladderStatus", text)}
      />
      <Text style={styles.label}>Books / Videos reviewed:</Text>
      <TextInput
        style={styles.input}
        placeholder="Books / Videos reviewed"
        value={data.reviewedBooks}
        onChangeText={(text) => handleInputChange("reviewedBooks", text)}
      />

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Link
          href={{
            pathname: "/Co-Curricular section", // Navigate to Co-Curricular section
            params: { section: "difficulties" }, // Navigate back to the difficulties section
          }}
          style={styles.link}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </Link>
        <Link
          href={{
            pathname: "/FriendsAndEssayForm", // Navigate to FriendsAndEssayForm page
            params: { studentInfo: data }, // Pass the current form data
          }}
          style={styles.link}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Link>
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
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
