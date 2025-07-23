// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { Link } from "expo-router"; // Assuming you're using Expo Router
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const CoCurricularsection = ({ route }) => {
//   const { updateSectionData } = useAppData(); // Get global state update function
//   const academicData = route?.params?.academicData || {}; // Get academic data from previous page

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//     ...academicData, // Pre-populate with any passed academic data
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "CoandExtraCurricularProgressPlan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "CoandExtraCurricularProgressPlan",
//     },
//     {
//       label: "Results of the exams (Regular college/university and other exams):",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements for the next 3 months (Details Please):",
//       key: "financialRequirements",
//       placeholder: "Enter your financial requirements",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter the difficulties you face",
//     },
//   ];

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const handleSave = () => {
//     alert("Data saved successfully!");

//     // Save the current combinedData to global state
//     if (updateSectionData) {
//       updateSectionData("coCurricular", combinedData);
//     }

//     // You can add logic for file generation or further actions here
//   };

//   return (
//     <View style={styles.container}>
//       {sections[currentSection] && (
//         <View style={styles.section}>
//           <Text style={styles.label}>{sections[currentSection].label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={sections[currentSection].placeholder}
//             value={combinedData[sections[currentSection].key]}
//             onChangeText={(text) => handleChange(sections[currentSection].key, text)}
//             multiline
//           />
//         </View>
//       )}

//       <View style={styles.buttonContainer}>
//         <View style={styles.buttonWrapper}>
//           {currentSection === 0 ? (
//             <Link
//               href={{
//                 pathname: "/AcademicProgress",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Previous</Text>
//             </Link>
//           ) : (
//             <Button title="Previous" onPress={handlePrevious} color="#FF6F61" />
//           )}
//         </View>
//         <View style={styles.buttonWrapper}>
//           {currentSection < sections.length - 1 ? (
//             <Button title="Next" onPress={handleNext} color="#FF6F61" />
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Next</Text>
//             </Link>
//           )}
//         </View>
//       </View>

//       {currentSection === sections.length - 1 && (
//         <TouchableOpacity style={styles.generateButton} onPress={handleSave}>
//           <Text style={styles.generateButtonText}>Save Data</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//  fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: "#fff",
//     minWidth: 300,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonWrapper: {
//     marginHorizontal: 10,
//   },
//   link: {
//     padding: 10,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   generateButton: {
//     marginTop: 20,
//     backgroundColor: "#28a745",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   generateButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CoCurricularsection;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { Link } from "expo-router"; // Assuming you're using Expo Router
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData(); // Get global state functions
//   const previousData = sectionData.coCurricular || {}; // Load existing data for this section
//   const academicData = route?.params?.academicData || {}; // Get academic data from previous page

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//     ...previousData, // Pre-fill with global state data
//     ...academicData, // Pre-fill with data passed from AcademicProgress
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "CoandExtraCurricularProgressPlan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "CoandExtraCurricularProgressPlan",
//     },
//     {
//       label: "Results of the exams (Regular college/university and other exams):",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements for the next 3 months (Details Please):",
//       key: "financialRequirements",
//       placeholder: "Enter your financial requirements",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter the difficulties you face",
//     },
//   ];

//   // Sync combinedData with the global context whenever it changes
//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData, updateSectionData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {sections[currentSection] && (
//         <View style={styles.section}>
//           <Text style={styles.label}>{sections[currentSection].label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={sections[currentSection].placeholder}
//             value={combinedData[sections[currentSection].key]}
//             onChangeText={(text) => handleChange(sections[currentSection].key, text)}
//             multiline
//           />
//         </View>
//       )}

//       <View style={styles.buttonContainer}>
//         <View style={styles.buttonWrapper}>
//           {currentSection === 0 ? (
//             <Link
//               href={{
//                 pathname: "/AcademicProgress",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Previous</Text>
//             </Link>
//           ) : (
//             <Button title="Previous" onPress={handlePrevious} color="#FF6F61" />
//           )}
//         </View>
//         <View style={styles.buttonWrapper}>
//           {currentSection < sections.length - 1 ? (
//             <Button title="Next" onPress={handleNext} color="#FF6F61" />
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Next</Text>
//             </Link>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: "#fff",
//     minWidth: 300,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonWrapper: {
//     marginHorizontal: 10,
//   },
//   link: {
//     padding: 10,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CoCurricularsection;



// import React, { useState, useEffect, useCallback } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [localData, setLocalData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//     ...previousData,
//     ...academicData,
//   });

//   const sections = [
//     { label: "Real Life Project:", key: "realLifeProject", placeholder: "Enter your real-life project details" },
//     { label: "Extra English:", key: "extraEnglish", placeholder: "Enter your extra English details" },
//     { label: "CoandExtraCurricularProgressPlan:", key: "CoandExtraCurricularProgressPlan", placeholder: "CoandExtraCurricularProgressPlan" },
//     { label: "Results of the exams (Regular college/university and other exams):", key: "examResults", placeholder: "Enter your exam results" },
//     { label: "Financial Requirements for the next 3 months (Details Please):", key: "financialRequirements", placeholder: "Enter your financial requirements" },
//     { label: "Difficulties (Social, Family, etc.):", key: "difficulties", placeholder: "Enter the difficulties you face" },
//   ];

//   // Update context only when moving to next/previous or submitting
//   const saveData = useCallback(() => {
//     updateSectionData("coCurricular", localData);
//   }, [localData, updateSectionData]);

//   const handleChange = (key, value) => {
//     setLocalData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//       saveData(); // Save when moving to next section
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//       saveData(); // Save when moving to previous section
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {sections[currentSection] && (
//         <View style={styles.section}>
//           <Text style={styles.label}>{sections[currentSection].label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={sections[currentSection].placeholder}
//             value={localData[sections[currentSection].key]}
//             onChangeText={(text) => handleChange(sections[currentSection].key, text)}
//             multiline
//           />
//         </View>
//       )}

//       <View style={styles.buttonContainer}>
//         <View style={styles.buttonWrapper}>
//           {currentSection === 0 ? (
//             <Link
//               href={{
//                 pathname: "/AcademicProgress",
//                 params: { combinedData: localData },
//               }}
//               asChild
//             >
//               <TouchableOpacity style={styles.link}>
//                 <Text style={styles.nextButton}>Previous</Text>
//               </TouchableOpacity>
//             </Link>
//           ) : (
//             <Button title="Previous" onPress={handlePrevious} color="#FF6F61" />
//           )}
//         </View>
//         <View style={styles.buttonWrapper}>
//           {currentSection < sections.length - 1 ? (
//             <Button title="Next" onPress={handleNext} color="#FF6F61" />
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData: localData },
//               }}
//               asChild
//             >
//               <TouchableOpacity style={styles.link}>
//                 <Text style={styles.nextButton}>Next</Text>
//               </TouchableOpacity>
//             </Link>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: "#fff",
//     minWidth: 300,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonWrapper: {
//     marginHorizontal: 10,
//   },
//   link: {
//     padding: 10,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CoCurricularsection;






// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "CoandExtraCurricularProgressPlan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "CoandExtraCurricularProgressPlan",
//     },
//     {
//       label: "Results of the exams (Regular college/university and other exams):",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements for the next 3 months (Details Please):",
//       key: "financialRequirements",
//       placeholder: "Enter your financial requirements",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter the difficulties you face",
//     },
//   ];

//   // Initialize combinedData only once on mount
//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   // Sync combinedData to global context only if data changes
//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {sections[currentSection] && (
//         <View style={styles.section}>
//           <Text style={styles.label}>{sections[currentSection].label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={sections[currentSection].placeholder}
//             value={combinedData[sections[currentSection].key]}
//             onChangeText={(text) => handleChange(sections[currentSection].key, text)}
//             multiline
//           />
//         </View>
//       )}

//       <View style={styles.buttonContainer}>
//         <View style={styles.buttonWrapper}>
//           {currentSection === 0 ? (
//             <Link
//               href={{
//                 pathname: "/AcademicProgress",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Previous</Text>
//             </Link>
//           ) : (
//             <Button title="Previous" onPress={handlePrevious} color="#FF6F61" />
//           )}
//         </View>
//         <View style={styles.buttonWrapper}>
//           {currentSection < sections.length - 1 ? (
//             <Button title="Next" onPress={handleNext} color="#FF6F61" />
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData },
//               }}
//               style={styles.link}
//             >
//               <Text style={styles.nextButton}>Next</Text>
//             </Link>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: "#fff",
//     minWidth: 300,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonWrapper: {
//     marginHorizontal: 10,
//   },
//   link: {
//     padding: 10,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CoCurricularsection;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Platform,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "Co and Extra Curricular Progress Plan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "Enter your co and extracurricular plan",
//     },
//     {
//       label: "Results of the exams:",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements (next 3 months):",
//       key: "financialRequirements",
//       placeholder: "Enter financial requirement details",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter any difficulties you're facing",
//     },
//   ];

//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const current = sections[currentSection];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.label}>{current.label}</Text>
//         <TextInput
//           style={styles.input}
//           placeholder={current.placeholder}
//           placeholderTextColor="#aaa"
//           value={combinedData[current.key]}
//           onChangeText={(text) => handleChange(current.key, text)}
//           multiline
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.navButton, currentSection === 0 && styles.disabled]}
//           onPress={handlePrevious}
//           disabled={currentSection === 0}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>

//         {currentSection < sections.length - 1 ? (
//           <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <Link
//             href={{
//               pathname: "/HealthAndReading",
//               params: { combinedData },
//             }}
//             asChild
//           >
//             <TouchableOpacity style={styles.navButton}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </Link>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#f0f4f8",
//     justifyContent: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 30,
//     ...Platform.select({
//       ios: {
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     minHeight: 100,
//     textAlignVertical: "top",
//     backgroundColor: "#fafafa",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   navButton: {
//     backgroundColor: "#FF6F61",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: "center",
//   },
//   disabled: {
//     backgroundColor: "#ccc",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CoCurricularsection;




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "Co and Extra Curricular Progress Plan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "Enter your co and extracurricular plan",
//     },
//     {
//       label: "Results of the exams:",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements (next 3 months):",
//       key: "financialRequirements",
//       placeholder: "Enter financial requirement details",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter any difficulties you're facing",
//     },
//   ];

//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const current = sections[currentSection];

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.card}>
//           <Text style={styles.label}>{current.label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={current.placeholder}
//             placeholderTextColor="#aaa"
//             value={combinedData[current.key]}
//             onChangeText={(text) => handleChange(current.key, text)}
//             multiline
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.navButton, currentSection === 0 && styles.disabled]}
//             onPress={handlePrevious}
//             disabled={currentSection === 0}
//           >
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>

//           {currentSection < sections.length - 1 ? (
//             <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData },
//               }}
//               asChild
//             >
//               <TouchableOpacity style={styles.navButton}>
//                 <Text style={styles.buttonText}>Next</Text>
//               </TouchableOpacity>
//             </Link>
//           )}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f8",
//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 30,
//     ...Platform.select({
//       ios: {
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     minHeight: 100,
//     textAlignVertical: "top",
//     backgroundColor: "#fafafa",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   navButton: {
//     backgroundColor: "#FF6F61",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: "center",
//   },
//   disabled: {
//     backgroundColor: "#ccc",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CoCurricularsection;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project:",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English:",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "Co and Extra Curricular Progress Plan:",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "Enter your co and extracurricular plan",
//     },
//     {
//       label: "Results of the exams:",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements (next 3 months):",
//       key: "financialRequirements",
//       placeholder: "Enter financial requirement details",
//     },
//     {
//       label: "Difficulties (Social, Family, etc.):",
//       key: "difficulties",
//       placeholder: "Enter any difficulties you're facing",
//     },
//   ];

//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const current = sections[currentSection];

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Text style={styles.stepText}>
//           Step {currentSection + 1} of {sections.length}
//         </Text>

//         <View style={styles.card}>
//           <Text style={styles.label}>{current.label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={current.placeholder}
//             placeholderTextColor="#aaa"
//             value={combinedData[current.key]}
//             onChangeText={(text) => handleChange(current.key, text)}
//             multiline
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[
//               styles.navButton,
//               currentSection === 0 && styles.disabledButton,
//             ]}
//             onPress={handlePrevious}
//             disabled={currentSection === 0}
//           >
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>

//           {currentSection < sections.length - 1 ? (
//             <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           ) : (
//             <Link
//               href={{
//                 pathname: "/HealthAndReading",
//                 params: { combinedData },
//               }}
//               asChild
//             >
//               <TouchableOpacity style={styles.navButton}>
//                 <Text style={styles.buttonText}>Next</Text>
//               </TouchableOpacity>
//             </Link>
//           )}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f8",
//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   stepText: {
//     fontSize: 16,
//     fontWeight: "500",
//     textAlign: "center",
//     marginBottom: 12,
//     color: "#666",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 30,
//     ...Platform.select({
//       ios: {
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     minHeight: 100,
//     textAlignVertical: "top",
//     backgroundColor: "#fafafa",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   navButton: {
//     backgroundColor: "#FF6F61",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: "center",
//   },
//   disabledButton: {
//     backgroundColor: "#ccc",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CoCurricularsection;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "Co- & Extra-Curricular Progress Plan",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "Describe your progress plans",
//     },
//     {
//       label: "Exam Results",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements",
//       key: "financialRequirements",
//       placeholder: "Enter your financial needs for next 3 months",
//     },
//     {
//       label: "Difficulties",
//       key: "difficulties",
//       placeholder: "Mention social, family or personal challenges",
//     },
//   ];

//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const section = sections[currentSection];

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.card}>
//           <Text style={styles.label}>{section.label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={section.placeholder}
//             value={combinedData[section.key]}
//             onChangeText={(text) => handleChange(section.key, text)}
//             multiline
//             textAlignVertical="top"
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <View style={styles.buttonWrapper}>
//             {currentSection === 0 ? (
//               <Link
//                 href={{
//                   pathname: "/AcademicProgress",
//                   params: { combinedData },
//                 }}
//                 style={styles.navButton}
//               >
//                 <Text style={styles.navButtonText}>Previous</Text>
//               </Link>
//             ) : (
//               <TouchableOpacity onPress={handlePrevious} style={styles.navButton}>
//                 <Text style={styles.navButtonText}>Previous</Text>
//               </TouchableOpacity>
//             )}
//           </View>

//           <View style={styles.buttonWrapper}>
//             {currentSection < sections.length - 1 ? (
//               <TouchableOpacity onPress={handleNext} style={styles.navButton}>
//                 <Text style={styles.navButtonText}>Next</Text>
//               </TouchableOpacity>
//             ) : (
//               <Link
//                 href={{
//                   pathname: "/HealthAndReading",
//                   params: { combinedData },
//                 }}
//                 style={styles.navButton}
//               >
//                 <Text style={styles.navButtonText}>Next</Text>
//               </Link>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: "#F2F4F8",
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 6,
//   },
//   label: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 12,
//     color: "#333",
//   },
//   input: {
//     backgroundColor: "#fdfdfd",
//     borderRadius: 12,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     padding: 14,
//     fontSize: 16,
//     height: 150,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//   },
//   buttonWrapper: {
//     flex: 1,
//   },
//   navButton: {
//     backgroundColor: "#FF6F61",
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   navButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CoCurricularsection;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const CoCurricularsection = ({ route }) => {
//   const { sectionData, updateSectionData } = useAppData();
//   const previousData = sectionData.coCurricular || {};
//   const academicData = route?.params?.academicData || {};

//   const [currentSection, setCurrentSection] = useState(0);
//   const [combinedData, setCombinedData] = useState({
//     realLifeProject: "",
//     extraEnglish: "",
//     CoandExtraCurricularProgressPlan: "",
//     examResults: "",
//     financialRequirements: "",
//     difficulties: "",
//   });

//   const sections = [
//     {
//       label: "Real Life Project",
//       key: "realLifeProject",
//       placeholder: "Enter your real-life project details",
//     },
//     {
//       label: "Extra English",
//       key: "extraEnglish",
//       placeholder: "Enter your extra English details",
//     },
//     {
//       label: "Co- & Extra-Curricular Progress Plan",
//       key: "CoandExtraCurricularProgressPlan",
//       placeholder: "Describe your progress plans",
//     },
//     {
//       label: "Exam Results",
//       key: "examResults",
//       placeholder: "Enter your exam results",
//     },
//     {
//       label: "Financial Requirements",
//       key: "financialRequirements",
//       placeholder: "Enter your financial needs for next 3 months",
//     },
//     {
//       label: "Difficulties",
//       key: "difficulties",
//       placeholder: "Mention social, family or personal challenges",
//     },
//   ];

//   useEffect(() => {
//     setCombinedData((prev) => ({
//       ...prev,
//       ...previousData,
//       ...academicData,
//     }));
//   }, []);

//   useEffect(() => {
//     updateSectionData("coCurricular", combinedData);
//   }, [combinedData]);

//   const handleChange = (key, value) => {
//     setCombinedData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSection < sections.length - 1) {
//       setCurrentSection((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSection > 0) {
//       setCurrentSection((prev) => prev - 1);
//     }
//   };

//   const section = sections[currentSection];

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.card}>
//           <Text style={styles.label}>{section.label}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder={section.placeholder}
//             value={combinedData[section.key]}
//             onChangeText={(text) => handleChange(section.key, text)}
//             multiline
//             textAlignVertical="top"
//           />
          
//           <View style={styles.buttonContainer}>
//             <View style={styles.buttonWrapper}>
//               {currentSection === 0 ? (
//                 <Link
//                   href={{
//                     pathname: "/AcademicProgress",
//                     params: { combinedData },
//                   }}
//                   style={styles.navButton}
//                 >
//                   <Text style={styles.navButtonText}>Previous</Text>
//                 </Link>
//               ) : (
//                 <TouchableOpacity onPress={handlePrevious} style={styles.navButton}>
//                   <Text style={styles.navButtonText}>Previous</Text>
//                 </TouchableOpacity>
//               )}
//             </View>

//             <View style={styles.buttonWrapper}>
//               {currentSection < sections.length - 1 ? (
//                 <TouchableOpacity onPress={handleNext} style={styles.navButton}>
//                   <Text style={styles.navButtonText}>Next</Text>
//                 </TouchableOpacity>
//               ) : (
//                 <Link
//                   href={{
//                     pathname: "/HealthAndReading",
//                     params: { combinedData },
//                   }}
//                   style={styles.navButton}
//                 >
//                   <Text style={styles.navButtonText}>Next</Text>
//                 </Link>
//               )}
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: "#F2F4F8",
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 6,
//   },
//   label: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 12,
//     color: "#333",
//   },
//   input: {
//     backgroundColor: "#fdfdfd",
//     borderRadius: 12,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     padding: 14,
//     fontSize: 16,
//     height: 150,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//     marginTop: 10,
//   },
//   buttonWrapper: {
//     flex: 1,
//   },
//   navButton: {
//     backgroundColor: "#FF6F61",
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   navButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CoCurricularsection;


import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import { useAppData } from "../../contexts/AppDataContext";

const CoCurricularsection = ({ route }) => {
  const { sectionData, updateSectionData } = useAppData();
  const previousData = sectionData.coCurricular || {};
  const academicData = route?.params?.academicData || {};

  const [currentSection, setCurrentSection] = useState(0);
  const [combinedData, setCombinedData] = useState({
    realLifeProject: "",
    extraEnglish: "",
    CoandExtraCurricularProgressPlan: "",
    examResults: "",
    financialRequirements: "",
    difficulties: "",
  });

  const sections = [
    {
      label: "Real Life Project",
      key: "realLifeProject",
      placeholder: "Enter your real-life project details",
    },
    {
      label: "Extra English",
      key: "extraEnglish",
      placeholder: "Enter your extra English details",
    },
    {
      label: "Co- & Extra-Curricular Progress Plan",
      key: "CoandExtraCurricularProgressPlan",
      placeholder: "Describe your progress plans",
    },
    {
      label: "Exam Results",
      key: "examResults",
      placeholder: "Enter your exam results",
    },
    {
      label: "Financial Requirements",
      key: "financialRequirements",
      placeholder: "Enter your financial needs for next 3 months",
    },
    {
      label: "Difficulties",
      key: "difficulties",
      placeholder: "Mention social, family or personal challenges",
    },
  ];

  useEffect(() => {
    setCombinedData((prev) => ({
      ...prev,
      ...previousData,
      ...academicData,
    }));
  }, []);

  useEffect(() => {
    updateSectionData("coCurricular", combinedData);
  }, [combinedData]);

  const handleChange = (key, value) => {
    setCombinedData((prev) => ({
      ...prev,
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

  const section = sections[currentSection];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>{section.label}</Text>
          <TextInput
            style={styles.input}
            placeholder={section.placeholder}
            value={combinedData[section.key]}
            onChangeText={(text) => handleChange(section.key, text)}
            multiline
            textAlignVertical="top"
          />
          
          <View style={[
            styles.buttonContainer,
            currentSection === 0 && styles.firstSectionButtons,
            currentSection === sections.length - 1 && styles.lastSectionButtons
          ]}>
            {currentSection === 0 ? (
              <View style={styles.centeredButton}>
                <Link
                  href={{
                    pathname: "/AcademicProgress",
                    params: { combinedData },
                  }}
                  style={styles.navButton}
                >
                  <Text style={styles.navButtonText}>Previous</Text>
                </Link>
              </View>
            ) : (
              <TouchableOpacity onPress={handlePrevious} style={styles.navButton}>
                <Text style={styles.navButtonText}>Previous</Text>
              </TouchableOpacity>
            )}

            {currentSection === sections.length - 1 ? (
              <View style={styles.centeredButton}>
                <Link
                  href={{
                    pathname: "/HealthAndReading",
                    params: { combinedData },
                  }}
                  style={styles.navButton}
                >
                  <Text style={styles.navButtonText}>Next</Text>
                </Link>
              </View>
            ) : (
              <TouchableOpacity onPress={handleNext} style={styles.navButton}>
                <Text style={styles.navButtonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#F2F4F8",
    flexGrow: 1,
    justifyContent: "center",
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
  label: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  input: {
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 14,
    fontSize: 16,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  firstSectionButtons: {
    justifyContent: "center",
  },
  lastSectionButtons: {
    justifyContent: "center",
  },
  centeredButton: {
    width: "50%",
    alignSelf: "center",
  },
  navButton: {
    backgroundColor: "#FF6F61",
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
});

export default CoCurricularsection;