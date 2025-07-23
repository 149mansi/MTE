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
//           ? .parse(studentInfo)
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

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext"; // Add this import

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData } = useAppData(); // Get all your collected data

//   // State for form data
//   const [formData, setFormData] = useState({
//     actionPlan: "",
//     mentorComments: "",
//     counselingPlan: "",
//   });

//   // Combine all data from different sections
//   const combinedData = {
//     ...sectionData?.home,
//     academicProgress: sectionData?.academicProgress,
//     coCurricular: sectionData?.coCurricular,
//     healthAndReading: sectionData?.healthAndReading,
//     friendsAndEssay: sectionData?.friendsAndEssay,
//     monthlyPlan: formData,
//   };

//   // Handle form field changes
//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   // Submit form and generate/share the file
//   const handleSubmit = async () => {
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);

//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//         Alert.alert("Success", "Report shared successfully!");
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert("Error", "Failed to generate the report.");
//     }
//   };

//   const handleDownload = async () => {
//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS !== "web") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Success", `File saved to ${downloadPath}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", "Failed to download the report.");
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
//         <Text style={styles.sectionTitle}>Action Plan Based on Counseling</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter counseling-based plan here"
//           value={formData.counselingPlan}
//           onChangeText={(text) => handleInputChange("counselingPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={() =>
//             router.push({
//               pathname: "/FriendsAndEssayForm",
//               params: { studentInfo: JSON.stringify(combinedData) },
//             })
//           }
//           style={[styles.link, styles.previousButton]}
//         >
//           <Text style={styles.previousButtonText}>Previous</Text>
//         </TouchableOpacity>

//         <Button title="Download Report" onPress={handleDownload} color="#2196F3" />
//         <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
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
//     backgroundColor: "#FF6F61",
//   },
//   previousButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default MonthlyPlanForm;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData } = useAppData();
//   const [formData, setFormData] = useState({
//     actionPlan: "",
//     mentorComments: "",
//     counselingPlan: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   // Combine all data from different sections
//   // Replace getCombinedData() in MonthlyPlanForm.js with:

// const getCombinedData = () => {
//   return {
//     // Student Info (from Home.jsx)
//     thinkingExercise: sectionData?.home?.thinkingExercise,
//     month: sectionData?.home?.month,
//     college: sectionData?.home?.college,
//     yearOfStudy: sectionData?.home?.yearOfStudy,

//     // Academic Progress (array structure)
//     academicProgress: sectionData?.academicProgress || [],

//     // Co-Curricular (object with all fields)
//     coCurricular: {
//       realLifeProject: sectionData?.coCurricular?.realLifeProject,
//       extraEnglish: sectionData?.coCurricular?.extraEnglish,
//       CoandExtraCurricularProgressPlan: sectionData?.coCurricular?.CoandExtraCurricularProgressPlan,
//       examResults: sectionData?.coCurricular?.examResults,
//       financialRequirements: sectionData?.coCurricular?.financialRequirements,
//       difficulties: sectionData?.coCurricular?.difficulties,
//     },

//     // Health & Reading (all fields)
//     healthAndReading: {
//       exercise: sectionData?.healthAndReading?.exercise,
//       sleep: sectionData?.healthAndReading?.sleep,
//       diet: sectionData?.healthAndReading?.diet,
//       ladderBooks: sectionData?.healthAndReading?.ladderBooks,
//       otherBooks: sectionData?.healthAndReading?.otherBooks,
//       ladderStatus: sectionData?.healthAndReading?.ladderStatus,
//       reviewedBooks: sectionData?.healthAndReading?.reviewedBooks,
//     },

//     // Friends & Essay (all fields)
//     friendsAndEssay: {
//       friends: sectionData?.friendsAndEssay?.friends,
//       learnings: sectionData?.friendsAndEssay?.learnings,
//       essay: sectionData?.friendsAndEssay?.essay,
//     },

//     // Monthly Plan (current form)
//     monthlyPlan: formData,
//   };
// };
//   // Validate data (no checks required now)
//   const validateData = (data) => {
//     return true;
//   };

//   // Handle form field changes
//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   // Generate and share the file
//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);

//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert(
//         "Error",
//         `Failed to generate report: ${error.message || "Unknown error"}`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();

//     setIsLoading(true);
//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS !== "web") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Success", `File saved to ${downloadPath}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", "Failed to download the report.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Check data when component mounts
//   useEffect(() => {
//   const combined = getCombinedData();
//   console.log("Data being sent to Excel:", JSON.stringify(combined, null, 2));
// }, [sectionData, formData]);

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

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
//         <Text style={styles.sectionTitle}>Action Plan Based on Counseling</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter counseling-based plan here"
//           value={formData.counselingPlan}
//           onChangeText={(text) => handleInputChange("counselingPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={() => router.push("/FriendsAndEssayForm")}
//           style={[styles.button, styles.previousButton]}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleDownload}
//           style={[styles.button, styles.downloadButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Download Report"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleSubmit}
//           style={[styles.button, styles.submitButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Submit"}
//           </Text>
//         </TouchableOpacity>
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
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
//   loadingText: {
//     fontSize: 18,
//     color: "#333",
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
//   button: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   previousButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData } = useAppData();
//   const [formData, setFormData] = useState({
//     actionPlan: "",
//     mentorComments: "",
//     counselingPlan: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress: sectionData?.academicProgress || [],
//       coCurricular: {
//         realLifeProject: sectionData?.coCurricular?.realLifeProject,
//         extraEnglish: sectionData?.coCurricular?.extraEnglish,
//         CoandExtraCurricularProgressPlan:
//           sectionData?.coCurricular?.CoandExtraCurricularProgressPlan,
//         examResults: sectionData?.coCurricular?.examResults,
//         financialRequirements: sectionData?.coCurricular?.financialRequirements,
//         difficulties: sectionData?.coCurricular?.difficulties,
//       },
//       healthAndReading: {
//         exercise: sectionData?.healthAndReading?.exercise,
//         sleep: sectionData?.healthAndReading?.sleep,
//         diet: sectionData?.healthAndReading?.diet,
//         ladderBooks: sectionData?.healthAndReading?.ladderBooks,
//         otherBooks: sectionData?.healthAndReading?.otherBooks,
//         ladderStatus: sectionData?.healthAndReading?.ladderStatus,
//         reviewedBooks: sectionData?.healthAndReading?.reviewedBooks,
//       },
//       friendsAndEssay: {
//         friends: sectionData?.friendsAndEssay?.friends,
//         learnings: sectionData?.friendsAndEssay?.learnings,
//         essay: sectionData?.friendsAndEssay?.essay,
//       },
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);

//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert(
//         "Error",
//         `Failed to generate report: ${error.message || "Unknown error"}`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS !== "web") {
//         if (Platform.OS === "android") {
//           // Request permissions for Android Downloads folder
//           const permissions =
//             await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

//           if (permissions.granted) {
//             const downloadUri = permissions.directoryUri;
//             const newFileUri = `${downloadUri}/${fileName}`;

//             // Read the file content
//             const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//               encoding: FileSystem.EncodingType.Base64,
//             });

//             // Create the file in Downloads
//             await FileSystem.StorageAccessFramework.createFileAsync(
//               downloadUri,
//               fileName,
//               "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//             ).then(async (newUri) => {
//               await FileSystem.writeAsStringAsync(newUri, fileContent, {
//                 encoding: FileSystem.EncodingType.Base64,
//               });
//             });

//             Alert.alert(
//               "Download Complete",
//               `File saved to Downloads folder as ${fileName}`,
//               [
//                 {
//                   text: "Open File",
//                   onPress: () => Sharing.shareAsync(newFileUri),
//                 },
//                 {
//                   text: "OK",
//                   style: "cancel",
//                 },
//               ]
//             );
//           }
//         } else {
//           // For iOS, use document directory
//           const downloadPath = FileSystem.documentDirectory + fileName;
//           await FileSystem.copyAsync({
//             from: fileUri,
//             to: downloadPath,
//           });
//           Alert.alert("Download Complete", `File saved to: ${fileName}`, [
//             {
//               text: "Open File",
//               onPress: () => Sharing.shareAsync(downloadPath),
//             },
//             {
//               text: "OK",
//               style: "cancel",
//             },
//           ]);
//         }
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`, [
//         {
//           text: "OK",
//           style: "cancel",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const combined = getCombinedData();
//     console.log("Data being sent to Excel:", JSON.stringify(combined, null, 2));
//   }, [sectionData, formData]);

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>
//           Action Plan for the Coming Month
//         </Text>
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
//         <Text style={styles.sectionTitle}>Action Plan Based on Counseling</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter counseling-based plan here"
//           value={formData.counselingPlan}
//           onChangeText={(text) => handleInputChange("counselingPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={() => router.push("/FriendsAndEssayForm")}
//           style={[styles.button, styles.previousButton]}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleDownload}
//           style={[styles.button, styles.downloadButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Download Report"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleSubmit}
//           style={[styles.button, styles.submitButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Submit"}
//           </Text>
//         </TouchableOpacity>
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
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
//   loadingText: {
//     fontSize: 18,
//     color: "#333",
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
//   button: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   previousButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData(); // Fix: Ensure updates are saved
//   const [formData, setFormData] = useState({
//     actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
//     mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
//     counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   // Save form data to context whenever it changes
//   useEffect(() => {
//     updateSectionData("monthlyPlan", formData);
//   }, [formData]);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress: academicProgress,
//       coCurricular: sectionData?.coCurricular || {},
//       healthAndReading: sectionData?.healthAndReading || {},
//       friendsAndEssay: sectionData?.friendsAndEssay || {},
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     if (!data.monthlyPlan.actionPlan.trim()) {
//       Alert.alert("Validation Error", "Action Plan cannot be empty.");
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);

//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert(
//         "Error",
//         `Failed to generate report: ${error.message || "Unknown error"}`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS === "android") {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         if (permissions.granted) {
//           const downloadUri = permissions.directoryUri;
//           const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           await FileSystem.StorageAccessFramework.createFileAsync(
//             downloadUri,
//             fileName,
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//           ).then(async (newUri) => {
//             await FileSystem.writeAsStringAsync(newUri, fileContent, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           });

//           Alert.alert(
//             "Download Complete",
//             `File saved to Downloads folder as ${fileName}`
//           );
//         }
//       } else if (Platform.OS === "ios") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({
//           from: fileUri,
//           to: downloadPath,
//         });
//         Alert.alert("Download Complete", `File saved to: ${fileName}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

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
//         <Text style={styles.sectionTitle}>Action Plan Based on Counseling</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter counseling-based plan here"
//           value={formData.counselingPlan}
//           onChangeText={(text) => handleInputChange("counselingPlan", text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={() => router.push("/FriendsAndEssayForm")}
//           style={[styles.button, styles.previousButton]}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleDownload}
//           style={[styles.button, styles.downloadButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Download Report"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleSubmit}
//           style={[styles.button, styles.submitButton]}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? "Processing..." : "Submit"}
//           </Text>
//         </TouchableOpacity>
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
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
//   loadingText: {
//     fontSize: 18,
//     color: "#333",
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
//   button: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   previousButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const [formData, setFormData] = useState({
//     actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
//     mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
//     counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     updateSectionData("monthlyPlan", formData);
//   }, [formData]);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress,
//       coCurricular: sectionData?.coCurricular || {},
//       healthAndReading: sectionData?.healthAndReading || {},
//       friendsAndEssay: sectionData?.friendsAndEssay || {},
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     if (!data.monthlyPlan.actionPlan.trim()) {
//       Alert.alert("Validation Error", "Action Plan cannot be empty.");
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);
//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert("Error", `Failed to generate report: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS === "android") {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         if (permissions.granted) {
//           const downloadUri = permissions.directoryUri;
//           const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           await FileSystem.StorageAccessFramework.createFileAsync(
//             downloadUri,
//             fileName,
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//           ).then(async (newUri) => {
//             await FileSystem.writeAsStringAsync(newUri, fileContent, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           });

//           Alert.alert("Download Complete", `File saved as ${fileName}`);
//         }
//       } else if (Platform.OS === "ios") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Complete", `File saved as ${fileName}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.card}>
//           <Text style={styles.title}>Action Plan for the Coming Month</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your action plan here"
//             value={formData.actionPlan}
//             onChangeText={(text) => handleInputChange("actionPlan", text)}
//             multiline
//           />
//         </View>
//         {/*

//         <View style={styles.card}>
//           <Text style={styles.title}>Comments by the Mentor</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter mentor's comments here"
//             value={formData.mentorComments}
//             onChangeText={(text) => handleInputChange("mentorComments", text)}
//             multiline
//           />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.title}>Action Plan Based on Counseling</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter counseling-based plan here"
//             value={formData.counselingPlan}
//             onChangeText={(text) => handleInputChange("counselingPlan", text)}
//             multiline
//           />
//         </View>
//         */}

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => router.push("/FriendsAndEssayForm")}
//             style={[styles.button, styles.backButton]}
//           >
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleDownload}
//             style={[styles.button, styles.downloadButton]}
//           >
//             <Text style={styles.buttonText}>Download</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleSubmit}
//             style={[styles.button, styles.submitButton]}
//           >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     padding: 20,
//     backgroundColor: "#f0f2f5",
//     justifyContent: "center",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f2f5",
//     padding: 20,
//   },
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     minHeight: 100,
//     backgroundColor: "#fefefe",
//     fontSize: 15,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//     marginTop: 10,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   backButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const [formData, setFormData] = useState({
//     actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
//     mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
//     counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     updateSectionData("monthlyPlan", formData);
//   }, [formData]);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress,
//       coCurricular: sectionData?.coCurricular || {},
//       healthAndReading: sectionData?.healthAndReading || {},
//       friendsAndEssay: sectionData?.friendsAndEssay || {},
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     if (!data.monthlyPlan.actionPlan.trim()) {
//       Alert.alert("Validation Error", "Action Plan cannot be empty.");
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);
//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert("Error", `Failed to generate report: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS === "android") {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         if (permissions.granted) {
//           const downloadUri = permissions.directoryUri;
//           const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           await FileSystem.StorageAccessFramework.createFileAsync(
//             downloadUri,
//             fileName,
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//           ).then(async (newUri) => {
//             await FileSystem.writeAsStringAsync(newUri, fileContent, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           });

//           Alert.alert("Download Complete", `File saved as ${fileName}`);
//         }
//       } else if (Platform.OS === "ios") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Complete", `File saved as ${fileName}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={[styles.card, styles.centeredCard]}>
//           <Text style={[styles.title, styles.centeredText]}>
//             Action Plan for the Coming Month
//           </Text>
//           <TextInput
//             style={[styles.input, styles.centeredInput]}
//             placeholder="Enter your action plan here"
//             value={formData.actionPlan}
//             onChangeText={(text) => handleInputChange("actionPlan", text)}
//             multiline
//           />
//         </View>

//         {/* Mentor Comments and Counseling Plan are hidden in UI */}
//         {/* 
//         <View style={styles.card}>
//           <Text style={styles.title}>Comments by the Mentor</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter mentor's comments here"
//             value={formData.mentorComments}
//             onChangeText={(text) => handleInputChange("mentorComments", text)}
//             multiline
//           />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.title}>Action Plan Based on Counseling</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter counseling-based plan here"
//             value={formData.counselingPlan}
//             onChangeText={(text) => handleInputChange("counselingPlan", text)}
//             multiline
//           />
//         </View>
//         */}

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => router.push("/FriendsAndEssayForm")}
//             style={[styles.button, styles.backButton]}
//           >
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleDownload}
//             style={[styles.button, styles.downloadButton]}
//           >
//             <Text style={styles.buttonText}>Download</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleSubmit}
//             style={[styles.button, styles.submitButton]}
//           >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     padding: 20,
//     backgroundColor: "#f0f2f5",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f2f5",
//     padding: 20,
//   },
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     minHeight: 100,
//     backgroundColor: "#fefefe",
//     fontSize: 15,
//     textAlignVertical: "top",
//   },
//   centeredCard: {
//     alignItems: "center",
//     width: "100%",
//     maxWidth: 500,
//   },
//   centeredText: {
//     textAlign: "center",
//   },
//   centeredInput: {
//     textAlign: "center",
//     width: "100%",
//     width: "90%",
//     maxWidth: 400,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//     marginTop: 10,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   backButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const [formData, setFormData] = useState({
//     actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
//     mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
//     counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     updateSectionData("monthlyPlan", formData);
//   }, [formData]);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress,
//       coCurricular: sectionData?.coCurricular || {},
//       healthAndReading: sectionData?.healthAndReading || {},
//       friendsAndEssay: sectionData?.friendsAndEssay || {},
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     if (!data.monthlyPlan.actionPlan.trim()) {
//       Alert.alert("Validation Error", "Action Plan cannot be empty.");
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);
//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert("Error", `Failed to generate report: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS === "android") {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         if (permissions.granted) {
//           const downloadUri = permissions.directoryUri;
//           const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           await FileSystem.StorageAccessFramework.createFileAsync(
//             downloadUri,
//             fileName,
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//           ).then(async (newUri) => {
//             await FileSystem.writeAsStringAsync(newUri, fileContent, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           });

//           Alert.alert("Download Complete", `File saved as ${fileName}`);
//         }
//       } else if (Platform.OS === "ios") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Complete", `File saved as ${fileName}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={styles.keyboardView}
//     >
//       <View style={styles.centerContainer}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={[styles.card, styles.centeredCard]}>
//             <Text style={[styles.title, styles.centeredText]}>
//               Action Plan for the Coming Month
//             </Text>
//             <TextInput
//               style={[styles.input, styles.centeredInput]}
//               placeholder="Enter your action plan here"
//               value={formData.actionPlan}
//               onChangeText={(text) => handleInputChange("actionPlan", text)}
//               multiline
//             />
//           </View>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               onPress={() => router.push("/FriendsAndEssayForm")}
//               style={[styles.button, styles.backButton]}
//             >
//               <Text style={styles.buttonText}>Previous</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={handleDownload}
//               style={[styles.button, styles.downloadButton]}
//             >
//               <Text style={styles.buttonText}>Download</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={handleSubmit}
//               style={[styles.button, styles.submitButton]}
//             >
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   keyboardView: {
//     flex: 1,
//   },
//   centerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   scrollContainer: {
//     padding: 20,
//     backgroundColor: "#f0f2f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f2f5",
//     padding: 20,
//   },
//   loadingContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     minHeight: 100,
//     backgroundColor: "#fefefe",
//     fontSize: 15,
//     textAlignVertical: "top",
//   },
//   centeredCard: {
//     alignItems: "center",
//     width: "100%",
//     maxWidth: 500,
//   },
//   centeredText: {
//     textAlign: "center",
//   },
//   centeredInput: {
//     textAlign: "center",
//     width: "90%",
//     maxWidth: 400,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//     marginTop: 10,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   backButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#4CAF50",
//   },
// });

// export default MonthlyPlanForm;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import { generateExcelFile } from "../../utils/generateExcelFile";
// import { useAppData } from "../../contexts/AppDataContext";

// const MonthlyPlanForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const [formData, setFormData] = useState({
//     actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
//     mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
//     counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     updateSectionData("monthlyPlan", formData);
//   }, [formData]);

//   const getCombinedData = () => {
//     const academicProgress = Array(8)
//       .fill()
//       .map((_, index) => {
//         const item = sectionData?.academicProgress?.[index] || {};
//         return {
//           subject: item.subject || `Subject ${index + 1}`,
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//         };
//       });
//     return {
//       thinkingExercise: sectionData?.home?.thinkingExercise,
//       month: sectionData?.home?.month,
//       college: sectionData?.home?.college,
//       yearOfStudy: sectionData?.home?.yearOfStudy,
//       academicProgress,
//       coCurricular: sectionData?.coCurricular || {},
//       healthAndReading: sectionData?.healthAndReading || {},
//       friendsAndEssay: sectionData?.friendsAndEssay || {},
//       monthlyPlan: formData,
//     };
//   };

//   const validateData = (data) => {
//     if (!data.monthlyPlan.actionPlan.trim()) {
//       Alert.alert("Validation Error", "Action Plan cannot be empty.");
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     const combinedData = getCombinedData();
//     if (!validateData(combinedData)) return;

//     setIsLoading(true);
//     try {
//       const { fileUri } = await generateExcelFile(combinedData);
//       if (Platform.OS === "web") {
//         Alert.alert("Success", "Report downloaded automatically!");
//       } else if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert("Success", "Report saved to your device!");
//       }

//       router.replace("/Home");
//     } catch (error) {
//       console.error("Submission error:", error);
//       Alert.alert("Error", `Failed to generate report: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = async () => {
//     const combinedData = getCombinedData();
//     setIsLoading(true);

//     try {
//       const { fileUri, fileName } = await generateExcelFile(combinedData);

//       if (Platform.OS === "android") {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         if (permissions.granted) {
//           const downloadUri = permissions.directoryUri;
//           const fileContent = await FileSystem.readAsStringAsync(fileUri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           await FileSystem.StorageAccessFramework.createFileAsync(
//             downloadUri,
//             fileName,
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//           ).then(async (newUri) => {
//             await FileSystem.writeAsStringAsync(newUri, fileContent, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           });

//           Alert.alert("Download Complete", `File saved as ${fileName}`);
//         }
//       } else if (Platform.OS === "ios") {
//         const downloadPath = FileSystem.documentDirectory + fileName;
//         await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
//         Alert.alert("Download Complete", `File saved as ${fileName}`);
//       }
//     } catch (error) {
//       console.error("Download error:", error);
//       Alert.alert("Error", `Failed to download: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Generating Report...</Text>
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Action Plan for the Coming Month</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Describe your action plan:</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your detailed action plan here..."
//             value={formData.actionPlan}
//             onChangeText={(text) => handleInputChange("actionPlan", text)}
//             multiline
//             numberOfLines={6}
//           />
//         </View>

//         <View style={styles.navigationContainer}>
//           <TouchableOpacity
//             style={[styles.navButton, styles.prevButton]}
//             onPress={() => router.push("/FriendsAndEssayForm")}
//           >
//             <Text style={styles.navButtonText}>Previous</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.navButton, styles.downloadButton]}
//             onPress={handleDownload}
//           >
//             <Text style={styles.navButtonText}>Download</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.navButton, styles.submitButton]}
//             onPress={handleSubmit}
//           >
//             <Text style={styles.navButtonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   headerContainer: {
//     marginBottom: 30,
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: "#555",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 15,
//     minHeight: 150,
//     textAlignVertical: "top",
//     fontSize: 16,
//     backgroundColor: "#fafafa",
//   },
//   navigationContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   navButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     minWidth: 100,
//   },
//   navButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   prevButton: {
//     backgroundColor: "#FF6F61",
//   },
//   downloadButton: {
//     backgroundColor: "#2196F3",
//   },
//   submitButton: {
//     backgroundColor: "#28a745",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#555",
//   },
// });

// export default MonthlyPlanForm;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { generateExcelFile } from "../../utils/generateExcelFile";
import { useAppData } from "../../contexts/AppDataContext";

const MonthlyPlanForm = () => {
  const router = useRouter();
  const { sectionData, updateSectionData } = useAppData();

  const [formData, setFormData] = useState({
    actionPlan: sectionData?.monthlyPlan?.actionPlan || "",
    mentorComments: sectionData?.monthlyPlan?.mentorComments || "",
    counselingPlan: sectionData?.monthlyPlan?.counselingPlan || "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateSectionData("monthlyPlan", formData);
  }, [formData]);

  const getCombinedData = () => {
    const academicProgress = Array(8)
      .fill()
      .map((_, index) => {
        const item = sectionData?.academicProgress?.[index] || {};
        return {
          subject: item.subject || `Subject ${index + 1}`,
          selfAssessment: item.selfAssessment || "",
          justification: item.justification || "",
        };
      });
    return {
      thinkingExercise: sectionData?.home?.thinkingExercise,
      month: sectionData?.home?.month,
      college: sectionData?.home?.college,
      yearOfStudy: sectionData?.home?.yearOfStudy,
      academicProgress,
      coCurricular: sectionData?.coCurricular || {},
      healthAndReading: sectionData?.healthAndReading || {},
      friendsAndEssay: sectionData?.friendsAndEssay || {},
      monthlyPlan: formData,
    };
  };

  const validateData = (data) => {
    if (!data.monthlyPlan.actionPlan.trim()) {
      Alert.alert("Validation Error", "Action Plan cannot be empty.");
      return false;
    }
    return true;
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const combinedData = getCombinedData();
    if (!validateData(combinedData)) return;

    setIsLoading(true);
    try {
      const { fileUri } = await generateExcelFile(combinedData);
      if (Platform.OS === "web") {
        Alert.alert("Success", "Report downloaded automatically!");
      } else if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Success", "Report saved to your device!");
      }

      router.replace("/Home");
    } catch (error) {
      console.error("Submission error:", error);
      Alert.alert("Error", `Failed to generate report: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    const combinedData = getCombinedData();
    setIsLoading(true);

    try {
      const { fileUri, fileName } = await generateExcelFile(combinedData);

      if (Platform.OS === "android") {
        const permissions =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (permissions.granted) {
          const downloadUri = permissions.directoryUri;
          const fileContent = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          await FileSystem.StorageAccessFramework.createFileAsync(
            downloadUri,
            fileName,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ).then(async (newUri) => {
            await FileSystem.writeAsStringAsync(newUri, fileContent, {
              encoding: FileSystem.EncodingType.Base64,
            });
          });

          Alert.alert("Download Complete", `File saved as ${fileName}`);
        }
      } else if (Platform.OS === "ios") {
        const downloadPath = FileSystem.documentDirectory + fileName;
        await FileSystem.copyAsync({ from: fileUri, to: downloadPath });
        Alert.alert("Download Complete", `File saved as ${fileName}`);
      }
    } catch (error) {
      console.error("Download error:", error);
      Alert.alert("Error", `Failed to download: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Generating Report...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Action Plan for the Coming Month</Text>
          </View>

          <Text style={styles.label}>Describe your action plan:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your detailed action plan here..."
            value={formData.actionPlan}
            onChangeText={(text) => handleInputChange("actionPlan", text)}
            multiline
            numberOfLines={6}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.navButton, styles.prevButton]}
              onPress={() => router.push("/FriendsAndEssayForm")}
            >
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.navButton, styles.downloadButton]}
              onPress={handleDownload}
            >
              <Text style={styles.navButtonText}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.navButton, styles.submitButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.navButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    minHeight: 150,
    textAlignVertical: "top",
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  navButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  prevButton: {
    backgroundColor: "#FF6F61",
  },
  downloadButton: {
    backgroundColor: "#2196F3",
  },
  submitButton: {
    backgroundColor: "#28a745",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default MonthlyPlanForm;