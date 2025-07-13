// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Alert,
//   Platform
// } from "react-native";
// import { Link, useLocalSearchParams, useRouter } from "expo-router";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import * as Sharing from 'expo-sharing';
// // import { supabase } from "../../config/supabaseClient"; // Uncomment if using Supabase

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { studentInfo } = useLocalSearchParams();

//   const [formData, setFormData] = useState({
//     actionPlan: "",
//     mentorComments: "",
//     counselingPlan: "",
//   });

//   // Parse studentInfo safely
//   const combinedData = (() => {
//     try {
//       return studentInfo
//         ? typeof studentInfo === "string"
//           ? JSON.parse(studentInfo)
//           : studentInfo
//         : {};
//     } catch (error) {
//       console.error("Failed to parse studentInfo:", error);
//       return {};
//     }
//   })();

//   const handleInputChange = (key, value) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const completeData = { ...combinedData, monthlyPlan: formData };
//       const { fileUri, filename } = await generateExcelFile(completeData);

//       // Uncomment if using Supabase upload
//       /*
//       const fileContent = await fetch(fileUri);
//       const blob = await fileContent.blob();
//       const { error } = await supabase.storage
//         .from("student-reports")
//         .upload(filename, blob, {
//           contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//           upsert: true,
//         });

//       if (error) throw error;
//       */

//       Alert.alert("Success", "Report generated successfully!");
//       router.replace("/Home");
//     } catch (err) {
//       console.error("Error:", err);
//       Alert.alert("Error", "Failed to generate report.");
//     }
//   };

//   const handleDownload = async () => {
//     try {
//       const completeData = { ...combinedData, monthlyPlan: formData };
//       const { fileUri } = await generateExcelFile(completeData);
      
//       if (Platform.OS === 'web') {
//         const link = document.createElement('a');
//         link.href = fileUri;
//         link.download = `StudentReport_${new Date().toISOString().slice(0,10)}.xlsx`;
//         link.click();
//       } else {
//         await Sharing.shareAsync(fileUri);
//       }
//     } catch (error) {
//       Alert.alert("Download Error", "Failed to download report");
//       console.error("Download failed:", error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Action Plan for the Coming Month</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your action plan here"
//           value={formData.actionPlan}
//           onChangeText={(text) => handleInputChange("actionPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Comments by the Mentor</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter mentor's comments here"
//           value={formData.mentorComments}
//           onChangeText={(text) => handleInputChange("mentorComments", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Action Plan Based on the Counseling</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter action plan based on counseling here"
//           value={formData.counselingPlan}
//           onChangeText={(text) => handleInputChange("counselingPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Link href={{
//           pathname: "/FriendsAndEssayForm",
//           params: { studentInfo: JSON.stringify(combinedData) }
//         }} style={styles.link}>
//           <Text style={styles.previousButton}>Previous</Text>
//         </Link>

//         <Button 
//           title="Download Report" 
//           onPress={handleDownload} 
//           color="#2196F3"
//         />

//         <Button 
//           title="Submit" 
//           onPress={handleSubmit} 
//           color="#4CAF50" 
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     minHeight: 50,
//     backgroundColor: "#fff",
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//   },
//   link: {
//     padding: 10,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   previousButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default MonthlyPlanForm;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { generateExcelFile } from "../../utils/generateExcelFile";
import * as Sharing from "expo-sharing";

const MonthlyPlanForm = () => {
  const router = useRouter();
  const { studentInfo } = useLocalSearchParams();

  const [formData, setFormData] = useState({
    actionPlan: "",
    mentorComments: "",
    counselingPlan: "",
  });

  // Parse studentInfo safely
  const combinedData = (() => {
    try {
      return studentInfo
        ? typeof studentInfo === "string"
          ? JSON.parse(studentInfo)
          : studentInfo
        : {};
    } catch (error) {
      console.error("Failed to parse studentInfo:", error);
      return {};
    }
  })();

  const handleInputChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const completeData = { ...combinedData, monthlyPlan: formData };
      const { fileUri } = await generateExcelFile(completeData);

      if (Platform.OS !== "web" && await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
        Alert.alert("Success", "Report shared successfully!");
      } else {
        Alert.alert("Success", "Report generated successfully!");
      }

      router.replace("/Home");
    } catch (err) {
      console.error("Error:", err);
      Alert.alert("Error", "Failed to generate and share the report.");
    }
  };

  const handleDownload = async () => {
    try {
      const completeData = { ...combinedData, monthlyPlan: formData };
      const { fileUri, fileName } = await generateExcelFile(completeData);

      if (Platform.OS === "web") {
        // Web: Create Blob and trigger download
        const response = await fetch(fileUri);
        if (!response.ok) throw new Error("Failed to fetch file content");

        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName || `StudentReport_${new Date().toISOString().slice(0, 10)}.xlsx`;
        document.body.appendChild(link); // Attach to DOM for Firefox compatibility
        link.click();
        link.remove();
        URL.revokeObjectURL(link.href);
      } else if (await Sharing.isAvailableAsync()) {
        // Mobile: Use Sharing API
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Download Error", "Sharing is not supported on this device.");
      }
    } catch (error) {
      Alert.alert("Download Error", "Failed to download or share the report.");
      console.error("Download failed:", error);
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
        <Text style={styles.sectionTitle}>
          Action Plan Based on the Counseling
        </Text>
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
            params: { studentInfo: JSON.stringify(combinedData) },
          }}
          style={styles.link}
        >
          <Text style={styles.previousButton}>Previous</Text>
        </Link>

        <Button
          title="Download Report"
          onPress={handleDownload}
          color="#2196F3"
        />

        <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

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
    gap: 10,
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

export default MonthlyPlanForm;
