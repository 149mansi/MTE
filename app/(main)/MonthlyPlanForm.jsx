import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { generateExcelFile } from "../../utils/generateExcelFile";
import { supabase } from "../../lib/supabase"; // Make sure this is correct

const MonthlyPlanForm = () => {
  const [formData, setFormData] = useState({
    actionPlan: "",
    mentorComments: "",
    counselingPlan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { studentInfo } = useLocalSearchParams(); // Previous data

  const handleInputChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const completeData = {
        ...studentInfo,
        ...formData,
      };

      console.log("Generating Excel with data:", completeData);
      const fileUri = await generateExcelFile(completeData); // generateExcelFile should return file URI

      // Share / download the file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("File Ready", "File saved but cannot be shared.");
      }

      // Upload to Supabase
      const fileName = fileUri.split("/").pop();
      const fileContent = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const { data, error } = await supabase.storage
        .from("monthly-forms") // Your bucket name
        .upload(`plans/${fileName}`, Buffer.from(fileContent, "base64"), {
          contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          upsert: true,
        });

      if (error) throw error;

      Alert.alert("Success", "Form submitted and file uploaded!");

      // Clear the form
      setFormData({
        actionPlan: "",
        mentorComments: "",
        counselingPlan: "",
      });

      // Redirect to home page
      router.replace("/Home");

    } catch (error) {
      console.error("Submission Error:", error);
      Alert.alert("Error", "Something went wrong during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.buttonContainer}>
        <Link
          href={{
            pathname: "/FriendsAndEssayForm",
            params: { studentInfo: formData },
          }}
          style={styles.link}
        >
          <Text style={styles.previousButton}>Previous</Text>
        </Link>
        <Button
          title={isSubmitting ? "Submitting..." : "Submit & Download"}
          onPress={handleSubmit}
          color="#4CAF50"
          disabled={isSubmitting}
        />
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
    textAlignVertical: "top",
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
  