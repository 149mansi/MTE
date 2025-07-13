// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Button } from 'react-native';

// const AcademicProgress = () => {
//   const navigation = useNavigation();

//   const [rows, setRows] = useState([
//     { id: 1, subject: "Subject / Activity", selfAssessment: "Self-assessment", justification: "Justification" },
//     { id: 2, subject: "", selfAssessment: "", justification: "" },
//   ]);

//   const handleAddRow = () => {
//     setRows((prevRows) => [
//       ...prevRows,
//       { id: prevRows.length + 1, subject: "", selfAssessment: "", justification: "" },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     if (id === 1) {
//       alert("Cannot delete the header row.");
//       return;
//     }
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[
//           styles.input,
//           item.id === 1 ? styles.headerCell : null,
//         ]}
//         editable={item.id !== 1}
//         placeholder="Subject / Activity"
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.id === 1 ? styles.headerCell : null,
//         ]}
//         editable={item.id !== 1}
//         placeholder="Self-assessment"
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.id === 1 ? styles.headerCell : null,
//         ]}
//         editable={item.id !== 1}
//         placeholder="Justification"
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {item.id !== 1 && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>Delete</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Academic Progress</Text>
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>Add Row</Text>
//       </TouchableOpacity>
//       {/* <View style={styles.navigationButtons}>
//         <TouchableOpacity
//           style={styles.previousButton}
//           onPress={() => navigation.navigate("HomePersonalInfo")}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={() => navigation.navigate("CoExtraCurricularPlan")}
//         >
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View> */}
//       <View style={styles.buttonContainer}>
//                 <Button title="Previous" onPress={onPrevious} color="#FF6F61" />
//                 <Link
//                   href={{
//                     pathname: '/AcademicProgress',
//                     params: { studentInfo },
//                   }}
//                   style={styles.link}
//                 >
//                   <Text style={styles.nextButton}>Next</Text>
//                 </Link>
//               </View>
//     </View>
//   );
// };

// export default AcademicProgress;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: "#fff",
//   },
//   headerCell: {
//     fontWeight: "bold",
//     backgroundColor: "#e9ecef",
//   },
//   deleteButton: {
//     backgroundColor: "#dc3545",
//     padding: 10,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   addButton: {
//     marginTop: 20,
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   previousButton: {
//     flex: 1,
//     backgroundColor: "#ffc107",
//     padding: 15,
//     borderRadius: 5,
//     marginRight: 5,
//     alignItems: "center",
//   },
//   nextButton: {
//     flex: 1,
//     backgroundColor: "#6f42c1",
//     padding: 15,
//     borderRadius: 5,
//     marginLeft: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const AcademicProgress = () => {
//   const navigation = useNavigation();

//   const [rows, setRows] = useState([
//     { id: 1, subject: "Subject / Activity", selfAssessment: "Self-assessment", justification: "Justification" },
//     { id: 2, subject: "", selfAssessment: "", justification: "" },
//   ]);

//   const handleAddRow = () => {
//     setRows((prevRows) => [
//       ...prevRows,
//       { id: prevRows.length + 1, subject: "", selfAssessment: "", justification: "" },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     if (id === 1) {
//       alert("Cannot delete the header row.");
//       return;
//     }
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Subject / Activity"
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Self-assessment"
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Justification"
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {item.id !== 1 && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>Delete</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   const onPrevious = () => {
//     navigation.navigate("HomePersonalInfo"); // Navigate to HomePersonalInfo screen
//   };

//   const onNext = () => {
//     navigation.navigate("Co-Curricular section"); // Navigate to CoExtraCurricularPlan screen
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Academic Progress</Text>
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>Add Row</Text>
//       </TouchableOpacity>
//       <View style={styles.navigationButtons}>
//         <TouchableOpacity
//           style={styles.previousButton}
//           onPress={onPrevious}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={onNext}
//         >
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default AcademicProgress;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: "#fff",
//   },
//   headerCell: {
//     fontWeight: "bold",
//     backgroundColor: "#e9ecef",
//   },
//   deleteButton: {
//     backgroundColor: "#dc3545",
//     padding: 10,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   addButton: {
//     marginTop: 20,
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   previousButton: {
//     flex: 1,
//     backgroundColor: "#ffc107",
//     padding: 15,
//     borderRadius: 5,
//     marginRight: 5,
//     alignItems: "center",
//   },
//   nextButton: {
//     flex: 1,
//     backgroundColor: "#6f42c1",
//     padding: 15,
//     borderRadius: 5,
//     marginLeft: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });




// ok2
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state
// import { useRouter } from "expo-router"; // Update based on your navigation library

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData(); // Global state function
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       subject: "Subject / Activity",
//       selfAssessment: "Self-assessment",
//       justification: "Justification",
//     },
//     { id: 2, subject: "", selfAssessment: "", justification: "" },
//   ]);
//   const [homeData, setHomeData] = useState(null); // To store data from Home page

//   useEffect(() => {
//     // Access saved data from Home page and store it in local state
//     const savedHomeData = sectionData?.home;
//     if (savedHomeData) {
//       setHomeData(savedHomeData); // Save Home page data locally
//     }
//   }, [sectionData]); // Re-run when sectionData changes

//   const handleAddRow = () => {
//     setRows((prevRows) => [
//       ...prevRows,
//       {
//         id: prevRows.length + 1,
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//       },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     if (id === 1) {
//       Alert.alert("Action Denied", "Cannot delete the header row.");
//       return;
//     }
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   useEffect(() => {
//     updateSectionData("academicProgress", rows); // Save to global state
//   }, [rows]);

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Subject / Activity"
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Self-assessment"
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.id === 1 ? styles.headerCell : null]}
//         editable={item.id !== 1}
//         placeholder="Justification"
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {item.id !== 1 && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>Delete</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Academic Progress</Text>

//       {/* Display Home Data if available */}
//       {homeData && (
//         <View style={styles.homeDataContainer}>
//           <Text style={styles.homeDataText}>
//             Thinking Exercise: {homeData.thinkingExercise}
//           </Text>
//           <Text style={styles.homeDataText}>Month: {homeData.month}</Text>
//           <Text style={styles.homeDataText}>College: {homeData.college}</Text>
//           <Text style={styles.homeDataText}>Year of Study: {homeData.yearOfStudy}</Text>
//         </View>
//       )}

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>Add Row</Text>
//       </TouchableOpacity>
//       <View style={styles.navigationButtons}>
//         <TouchableOpacity
//           style={styles.previousButton}
//           onPress={() => router.push("/home")}
//         >
//           <Text style={styles.buttonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={() => router.push("/Co-Curricular section")}
//         >
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default AcademicProgress;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: "#fff",
//   },
//   headerCell: {
//     fontWeight: "bold",
//     backgroundColor: "#e9ecef",
//   },
//   deleteButton: {
//     backgroundColor: "#dc3545",
//     padding: 10,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   addButton: {
//     marginTop: 20,
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   previousButton: {
//     flex: 1,
//     backgroundColor: "#ffc107",
//     padding: 15,
//     borderRadius: 5,
//     marginRight: 5,
//     alignItems: "center",
//   },
//   nextButton: {
//     flex: 1,
//     backgroundColor: "#6f42c1",
//     padding: 15,
//     borderRadius: 5,
//     marginLeft: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   homeDataContainer: {
//     backgroundColor: "#f1f1f1",
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
//   homeDataText: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 5,
//   },
// });


// ok1


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       subject: "Subject / Activity",
//       selfAssessment: "Self-assessment",
//       justification: "Justification",
//       isHeader: true,
//     },
//     {
//       id: 2,
//       subject: "",
//       selfAssessment: "",
//       justification: "",
//       isHeader: false,
//     },
//   ]);

//   // Load data from context on mount
//   useEffect(() => {
//     const savedAcademicData = sectionData?.academicProgress;

//     if (Array.isArray(savedAcademicData) && savedAcademicData.length > 0) {
//       const updatedRows = [
//         rows[0], // Header row
//         ...savedAcademicData.map((item, index) => ({
//           id: index + 2,
//           subject: item.subject ?? "",
//           selfAssessment: item.selfAssessment ?? "",
//           justification: item.justification ?? "",
//           isHeader: false,
//         })),
//       ];
//       setRows(updatedRows);
//     }
//   }, []); // Run once

//   // Update context when rows change
//   useEffect(() => {
//     // Only save rows excluding header
//     const filteredRows = rows.filter((row) => !row.isHeader);
//     updateSectionData("academicProgress", filteredRows);
//   }, [rows]);

//   const handleAddRow = () => {
//     const newId = rows.length + 1;
//     setRows((prev) => [
//       ...prev,
//       {
//         id: newId,
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//         isHeader: false,
//       },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     if (id === 1) return; // Prevent deleting header
//     setRows((prev) => prev.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prev) =>
//       prev.map((row) =>
//         row.id === id && !row.isHeader ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Subject"}
//         value={item.subject ?? ""}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Assessment"}
//         value={item.selfAssessment ?? ""}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Justification"}
//         value={item.justification ?? ""}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.prevButton]}
//           onPress={() => router.push("/home")}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={() => router.push("/Co-Curricular section")}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 6,
//     padding: 10,
//     marginHorizontal: 4,
//     backgroundColor: "#fff",
//     fontSize: 14,
//   },
//   headerCell: {
//     backgroundColor: "#f1f3f5",
//     fontWeight: "600",
//   },
//   deleteButton: {
//     backgroundColor: "#ff6b6b",
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 5,
//   },
//   deleteButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     lineHeight: 20,
//   },
//   addButton: {
//     backgroundColor: "#4dabf7",
//     padding: 12,
//     borderRadius: 6,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   navButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 14,
//     borderRadius: 6,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: "center",
//   },
//   prevButton: {
//     backgroundColor: "#495057",
//   },
//   nextButton: {
//     backgroundColor: "#1971c2",
//   },
//   navButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
// });

// export default AcademicProgress;




// orginal code 

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       subject: "Subject / Activity",
//       selfAssessment: "Self-assessment",
//       justification: "Justification",
//       isHeader: true,
//     },
//     {
//       id: 2,
//       subject: "",
//       selfAssessment: "",
//       justification: "",
//       isHeader: false,
//     },
//   ]);

//   // Load data from context on mount
//   useEffect(() => {
//     const savedAcademicData = sectionData?.academicProgress || [];
//     if (Array.isArray(savedAcademicData) && savedAcademicData.length > 0) {
//       setRows([
//         rows[0], // Keep the header row
//         ...savedAcademicData.map((item, index) => ({
//           id: index + 2,
//           subject: item.subject || "",
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//           isHeader: false,
//         })),
//       ]);
//     }
//   }, []); // Empty dependency array ensures this runs only once

//   // Update context whenever rows change
//   useEffect(() => {
//     const filteredRows = rows.filter((row) => !row.isHeader);
//     updateSectionData("academicProgress", filteredRows);
//   }, [rows]);

//   const handleAddRow = () => {
//     setRows((prev) => [
//       ...prev,
//       {
//         id: prev.length + 1,
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//         isHeader: false,
//       },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     setRows((prev) => prev.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prev) =>
//       prev.map((row) =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Subject"}
//         value={item.subject ?? ""}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Assessment"}
//         value={item.selfAssessment ?? ""}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#666" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Justification"}
//         value={item.justification ?? ""}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.prevButton]}
//           onPress={() => router.push("/home")}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={() => router.push("/Co-Curricular section")}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
//   listContent: { paddingBottom: 20 },
//   row: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 6,
//     padding: 10,
//     marginHorizontal: 4,
//     backgroundColor: "#fff",
//     fontSize: 14,
//   },
//   headerCell: { backgroundColor: "#f1f3f5", fontWeight: "600" },
//   deleteButton: {
//     backgroundColor: "#ff6b6b",
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 5,
//   },
//   deleteButtonText: { color: "#fff", fontSize: 18 },
//   addButton: { backgroundColor: "#4dabf7", padding: 12, borderRadius: 6, alignItems: "center", marginTop: 10 },
//   addButtonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
//   navButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
//   navButton: { padding: 14, borderRadius: 6, flex: 1, marginHorizontal: 5, alignItems: "center" },
//   prevButton: { backgroundColor: "#495057" },
//   nextButton: { backgroundColor: "#1971c2" },
//   navButtonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
// });

// export default AcademicProgress;







// it is box struture code

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       subject: "Subject / Activity",
//       selfAssessment: "Self-assessment",
//       justification: "Justification",
//       isHeader: true,
//     },
//     {
//       id: 2,
//       subject: "",
//       selfAssessment: "",
//       justification: "",
//       isHeader: false,
//     },
//   ]);

//   // Load data from context on mount
//   useEffect(() => {
//     const savedAcademicData = sectionData?.academicProgress || [];
//     if (Array.isArray(savedAcademicData) && savedAcademicData.length > 0) {
//       setRows([
//         rows[0], // Keep the header row
//         ...savedAcademicData.map((item, index) => ({
//           id: index + 2,
//           subject: item.subject || "",
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//           isHeader: false,
//         })),
//       ]);
//     }
//   }, []);

//   // Update context whenever rows change
//   useEffect(() => {
//     const filteredRows = rows.filter((row) => !row.isHeader);
//     updateSectionData("academicProgress", filteredRows);
//   }, [rows]);

//   const handleAddRow = () => {
//     setRows((prev) => [
//       ...prev,
//       {
//         id: prev.length + 1,
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//         isHeader: false,
//       },
//     ]);
//   };

//   const handleDeleteRow = (id) => {
//     setRows((prev) => prev.filter((row) => row.id !== id));
//   };

//   const handleInputChange = (text, field, id) => {
//     setRows((prev) =>
//       prev.map((row) =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#000" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Subject"}
//         value={item.subject ?? ""}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#000" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Assessment"}
//         value={item.selfAssessment ?? ""}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[
//           styles.input,
//           item.isHeader && styles.headerCell,
//           item.isHeader && { color: "#000" },
//         ]}
//         editable={!item.isHeader}
//         placeholder={item.isHeader ? "" : "Justification"}
//         value={item.justification ?? ""}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => handleDeleteRow(item.id)}
//         >
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Boxed Section Header */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress / Vacation Plan</Text>
//       </View>

//       {/* Table Container with Border */}
//       <View style={styles.tableContainer}>
//         <FlatList
//           data={rows}
//           renderItem={renderRow}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.listContent}
//         />
//       </View>

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.addButtonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.prevButton]}
//           onPress={() => router.push("/home")}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={() => router.push("/Co-Curricular section")}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 20, 
//     backgroundColor: "#f8f9fa" 
//   },
//   sectionHeader: {
//     backgroundColor: "#ffffff",
//     borderWidth: 1,
//     borderColor: "#000",
//     borderBottomWidth: 0,
//     padding: 10,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   tableContainer: {
//     borderWidth: 1,
//     borderColor: "#000",
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
//   listContent: { 
//     paddingBottom: 20 
//   },
//   row: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     marginBottom: 8,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 4,
//     padding: 8,
//     marginHorizontal: 4,
//     backgroundColor: "#fff",
//     fontSize: 14,
//   },
//   headerCell: { 
//     backgroundColor: "#f1f3f5", 
//     fontWeight: "bold" 
//   },
//   deleteButton: {
//     backgroundColor: "#ff6b6b",
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 5,
//   },
//   deleteButtonText: { 
//     color: "#fff", 
//     fontSize: 18 
//   },
//   addButton: { 
//     backgroundColor: "#4dabf7", 
//     padding: 12, 
//     borderRadius: 6, 
//     alignItems: "center", 
//     marginTop: 10 
//   },
//   addButtonText: { 
//     color: "#fff", 
//     fontWeight: "600", 
//     fontSize: 16 
//   },
//   navButtons: { 
//     flexDirection: "row", 
//     justifyContent: "space-between", 
//     marginTop: 20 
//   },
//   navButton: { 
//     padding: 14, 
//     borderRadius: 6, 
//     flex: 1, 
//     marginHorizontal: 5, 
//     alignItems: "center" 
//   },
//   prevButton: { 
//     backgroundColor: "#495057" 
//   },
//   nextButton: { 
//     backgroundColor: "#1971c2" 
//   },
//   navButtonText: { 
//     color: "#fff", 
//     fontWeight: "600", 
//     fontSize: 16 
//   },
// });

// export default AcademicProgress;




// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const isInitializing = useRef(true);
//   const updateQueued = useRef(false);

//   // Initialize rows only once with context data
//   useEffect(() => {
//     if (isInitializing.current) {
//       const savedAcademicData = sectionData?.academicProgress || [];
//       setRows([
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...(savedAcademicData.length > 0
//           ? savedAcademicData.map((item, index) => ({
//               id: index + 2,
//               subject: item.subject || "",
//               selfAssessment: item.selfAssessment || "",
//               justification: item.justification || "",
//               isHeader: false,
//             }))
//           : [
//               {
//                 id: 2,
//                 subject: "",
//                 selfAssessment: "",
//                 justification: "",
//                 isHeader: false,
//               },
//             ]),
//       ]);
//       isInitializing.current = false;
//     }
//   }, []); // Empty dependency array ensures this runs only once

//   // Completely decouple context updates from state changes
//   const updateContext = useCallback((newRows) => {
//     const currentRows = newRows.filter(row => !row.isHeader);
//     updateSectionData("academicProgress", currentRows);
//   }, [updateSectionData]);

//   // Manual save button approach as last resort
//   const handleSave = useCallback(() => {
//     updateContext(rows);
//   }, [rows, updateContext]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => {
//       const newRows = [
//         ...prev,
//         {
//           id: Date.now(),
//           subject: "",
//           selfAssessment: "",
//           justification: "",
//           isHeader: false,
//         },
//       ];
//       // Queue context update without triggering immediate re-render
//       setTimeout(() => updateContext(newRows), 0);
//       return newRows;
//     });
//   }, [updateContext]);

//   const handleDeleteRow = useCallback((id) => {
//     setRows(prev => {
//       const newRows = prev.filter(row => row.id !== id);
//       // Queue context update
//       setTimeout(() => updateContext(newRows), 0);
//       return newRows;
//     });
//   }, [updateContext]);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev => {
//       const newRows = prev.map(row => 
//         row.id === id ? { ...row, [field]: text } : row
//       );
//       // Debounced context update
//       if (updateQueued.current) {
//         clearTimeout(updateQueued.current);
//       }
//       updateQueued.current = setTimeout(() => updateContext(newRows), 1000);
//       return newRows;
//     });
//   }, [updateContext]);

//   const renderRow = useCallback(({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   ), [handleInputChange, handleDeleteRow]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text>+ Add Row</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text>Save All Changes</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity onPress={() => router.push("/home")}>
//           <Text>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => router.push("/Co-Curricular section")}>
//           <Text>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   sectionHeader: { padding: 10, backgroundColor: '#f0f0f0' },
//   row: { flexDirection: 'row', marginBottom: 10 },
//   input: { flex: 1, borderWidth: 1, padding: 8, marginHorizontal: 4 },
//   headerCell: { backgroundColor: '#e0e0e0', fontWeight: 'bold' },
//   addButton: { padding: 10, backgroundColor: '#4CAF50', margin: 10 },
//   saveButton: { padding: 10, backgroundColor: '#2196F3', margin: 10 },
//   navButtons: { flexDirection: 'row', justifyContent: 'space-between' }
// });

// export default AcademicProgress;


// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const isInitializing = useRef(true);
//   const updateQueued = useRef(false);

//   // Initialize rows only once with context data
//   useEffect(() => {
//     if (isInitializing.current) {
//       const savedAcademicData = sectionData?.academicProgress || [];
//       setRows([
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...(savedAcademicData.length > 0
//           ? savedAcademicData.map((item, index) => ({
//               id: index + 2,
//               subject: item.subject || "",
//               selfAssessment: item.selfAssessment || "",
//               justification: item.justification || "",
//               isHeader: false,
//             }))
//           : [
//               {
//                 id: 2,
//                 subject: "",
//                 selfAssessment: "",
//                 justification: "",
//                 isHeader: false,
//               },
//             ]),
//       ]);
//       isInitializing.current = false;
//     }
//   }, []); // Empty dependency array ensures this runs only once

//   // Completely decouple context updates from state changes
//   const updateContext = useCallback((newRows) => {
//     const currentRows = newRows.filter(row => !row.isHeader);
//     updateSectionData("academicProgress", currentRows);
//   }, [updateSectionData]);

//   // Manual save button approach as last resort
//   const handleSave = useCallback(() => {
//     updateContext(rows);
//   }, [rows, updateContext]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => {
//       const newRows = [
//         ...prev,
//         {
//           id: Date.now(),
//           subject: "",
//           selfAssessment: "",
//           justification: "",
//           isHeader: false,
//         },
//       ];
//       // Queue context update without triggering immediate re-render
//       setTimeout(() => updateContext(newRows), 0);
//       return newRows;
//     });
//   }, [updateContext]);

//   const handleDeleteRow = useCallback((id) => {
//     setRows(prev => {
//       const newRows = prev.filter(row => row.id !== id);
//       // Queue context update
//       setTimeout(() => updateContext(newRows), 0);
//       return newRows;
//     });
//   }, [updateContext]);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev => {
//       const newRows = prev.map(row => 
//         row.id === id ? { ...row, [field]: text } : row
//       );
//       // Debounced context update
//       if (updateQueued.current) {
//         clearTimeout(updateQueued.current);
//       }
//       updateQueued.current = setTimeout(() => updateContext(newRows), 1000);
//       return newRows;
//     });
//   }, [updateContext]);

//   const renderRow = useCallback(({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   ), [handleInputChange, handleDeleteRow]);

//   // Navigation handlers - ONLY CHANGE MADE TO THE CODE
//   const handlePrevious = () => {
//     router.back();
//   };

//   const handleNext = () => {
//     router.push("/Co-Curricular section");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text>+ Add Row</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text>Save All Changes</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity 
//           style={[styles.navButton, styles.prevButton]}
//           onPress={handlePrevious}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={handleNext}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   sectionHeader: { padding: 10, backgroundColor: '#f0f0f0' },
//   row: { flexDirection: 'row', marginBottom: 10 },
//   input: { flex: 1, borderWidth: 1, padding: 8, marginHorizontal: 4 },
//   headerCell: { backgroundColor: '#e0e0e0', fontWeight: 'bold' },
//   addButton: { padding: 10, backgroundColor: '#4CAF50', margin: 10 },
//   saveButton: { padding: 10, backgroundColor: '#2196F3', margin: 10 },
//   navButtons: { flexDirection: 'row', justifyContent: 'space-between' },
//   // Added these new styles without modifying existing ones
//   navButton: {
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center'
//   },
//   prevButton: { 
//     backgroundColor: '#6c757d' 
//   },
//   nextButton: { 
//     backgroundColor: '#007bff' 
//   },
//   navButtonText: { 
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   deleteButtonText: {
//     color: 'red',
//     fontSize: 20,
//     paddingHorizontal: 10
//   },
//   listContent: {
//     paddingBottom: 15
//   }
// });

// export default AcademicProgress;









// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const isInitializing = useRef(true);
//   const prevRowsRef = useRef([]);

//   // Initialize rows only once with context data
//   useEffect(() => {
//     if (isInitializing.current) {
//       const savedAcademicData = sectionData?.academicProgress || [];
//       const initialRows = [
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...(savedAcademicData.length > 0
//           ? savedAcademicData.map((item, index) => ({
//               id: index + 2,
//               subject: item.subject || "",
//               selfAssessment: item.selfAssessment || "",
//               justification: item.justification || "",
//               isHeader: false,
//             }))
//           : [
//               {
//                 id: 2,
//                 subject: "",
//                 selfAssessment: "",
//                 justification: "",
//                 isHeader: false,
//               },
//             ]),
//       ];
//       setRows(initialRows);
//       prevRowsRef.current = initialRows;
//       isInitializing.current = false;
//     }
//   }, []);

//   // Safe context update with deep comparison
//   useEffect(() => {
//     if (isInitializing.current) return;

//     const currentRows = rows.filter(row => !row.isHeader);
//     const prevRows = prevRowsRef.current.filter(row => !row.isHeader);

//     const hasChanged = (a, b) => {
//       if (a.length !== b.length) return true;
//       return a.some((row, i) => 
//         row.subject !== b[i].subject ||
//         row.selfAssessment !== b[i].selfAssessment ||
//         row.justification !== b[i].justification
//       );
//     };

//     if (hasChanged(currentRows, prevRows)) {
//       updateSectionData("academicProgress", currentRows);
//       prevRowsRef.current = rows;
//     }
//   }, [rows, updateSectionData]);

//   const updateContext = useCallback((newRows) => {
//     const currentRows = newRows.filter(row => !row.isHeader);
//     updateSectionData("academicProgress", currentRows);
//   }, [updateSectionData]);

//   const handleSave = useCallback(() => {
//     updateContext(rows);
//   }, [rows, updateContext]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => {
//       const newRows = [
//         ...prev,
//         {
//           id: Date.now(),
//           subject: "",
//           selfAssessment: "",
//           justification: "",
//           isHeader: false,
//         },
//       ];
//       return newRows;
//     });
//   }, []);

//   const handleDeleteRow = useCallback((id) => {
//     setRows(prev => prev.filter(row => row.id !== id));
//   }, []);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev =>
//       prev.map(row =>
//         row.id === id ? { ...row, [field]: text } : row
//       )
//     );
//   }, []);

//   const renderRow = useCallback(({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   ), [handleInputChange, handleDeleteRow]);

//   const handlePrevious = () => {
//     router.back();
//   };

//   const handleNext = () => {
//     router.push("/Co-Curricular section");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.buttonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.buttonText}>Save All Changes</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity 
//           style={[styles.navButton, styles.prevButton]}
//           onPress={handlePrevious}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={handleNext}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 20,
//     backgroundColor: '#f8f9fa'
//   },
//   sectionHeader: { 
//     padding: 15, 
//     backgroundColor: '#e9ecef',
//     borderRadius: 5,
//     marginBottom: 10
//   },
//   sectionHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   row: { 
//     flexDirection: 'row', 
//     marginBottom: 8,
//     alignItems: 'center'
//   },
//   input: { 
//     flex: 1, 
//     borderWidth: 1, 
//     borderColor: '#ced4da',
//     borderRadius: 4,
//     padding: 10,
//     marginHorizontal: 4,
//     backgroundColor: '#fff'
//   },
//   headerCell: { 
//     backgroundColor: '#e9ecef', 
//     fontWeight: 'bold' 
//   },
//   deleteButtonText: { 
//     color: 'red', 
//     fontSize: 20,
//     paddingHorizontal: 10
//   },
//   addButton: { 
//     backgroundColor: '#28a745',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 8
//   },
//   saveButton: { 
//     backgroundColor: '#17a2b8',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 15
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   navButtons: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     marginTop: 10
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center'
//   },
//   prevButton: { 
//     backgroundColor: '#6c757d' 
//   },
//   nextButton: { 
//     backgroundColor: '#007bff' 
//   },
//   navButtonText: { 
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   listContent: {
//     paddingBottom: 15
//   }
// });

// export default AcademicProgress;









// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const initialRender = useRef(true);
//   const updateBlocked = useRef(false);

//   // Initialize rows only once with context data
//   useEffect(() => {
//     if (initialRender.current) {
//       const savedAcademicData = sectionData?.academicProgress || [];
//       setRows([
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...(savedAcademicData.length > 0
//           ? savedAcademicData.map((item, index) => ({
//               id: index + 2,
//               subject: item.subject || "",
//               selfAssessment: item.selfAssessment || "",
//               justification: item.justification || "",
//               isHeader: false,
//             }))
//           : [
//               {
//                 id: 2,
//                 subject: "",
//                 selfAssessment: "",
//                 justification: "",
//                 isHeader: false,
//               },
//             ]),
//       ]);
//       initialRender.current = false;
//     }
//   }, []);

//   // COMPLETELY SEPARATE CONTEXT UPDATES FROM STATE CHANGES
//   const updateContext = useCallback((newRows) => {
//     if (updateBlocked.current) return;
//     updateBlocked.current = true;
    
//     const currentRows = newRows.filter(row => !row.isHeader);
//     updateSectionData("academicProgress", currentRows);
    
//     setTimeout(() => {
//       updateBlocked.current = false;
//     }, 100);
//   }, [updateSectionData]);

//   // Manual save button
//   const handleSave = useCallback(() => {
//     updateContext(rows);
//   }, [rows, updateContext]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => {
//       const newRows = [
//         ...prev,
//         {
//           id: Date.now(),
//           subject: "",
//           selfAssessment: "",
//           justification: "",
//           isHeader: false,
//         },
//       ];
//       // No automatic context update here
//       return newRows;
//     });
//   }, []);

//   const handleDeleteRow = useCallback((id) => {
//     setRows(prev => {
//       const newRows = prev.filter(row => row.id !== id);
//       // No automatic context update here
//       return newRows;
//     });
//   }, []);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev => {
//       const newRows = prev.map(row =>
//         row.id === id ? { ...row, [field]: text } : row
//       );
//       // No automatic context update here
//       return newRows;
//     });
//   }, []);

//   const renderRow = useCallback(({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   ), [handleInputChange, handleDeleteRow]);

//   // Navigation handlers
//   const handlePrevious = () => router.back();
//   const handleNext = () => router.push("/Co-Curricular section");

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.buttonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.buttonText}>Save Changes</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity 
//           style={[styles.navButton, styles.prevButton]}
//           onPress={handlePrevious}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={handleNext}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 20,
//     backgroundColor: '#f8f9fa'
//   },
//   sectionHeader: { 
//     padding: 15, 
//     backgroundColor: '#e9ecef',
//     borderRadius: 5,
//     marginBottom: 10
//   },
//   sectionHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   row: { 
//     flexDirection: 'row', 
//     marginBottom: 8,
//     alignItems: 'center'
//   },
//   input: { 
//     flex: 1, 
//     borderWidth: 1, 
//     borderColor: '#ced4da',
//     borderRadius: 4,
//     padding: 10,
//     marginHorizontal: 4,
//     backgroundColor: '#fff'
//   },
//   headerCell: { 
//     backgroundColor: '#e9ecef', 
//     fontWeight: 'bold' 
//   },
//   deleteButtonText: { 
//     color: 'red', 
//     fontSize: 20,
//     paddingHorizontal: 10
//   },
//   addButton: { 
//     backgroundColor: '#28a745',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 8
//   },
//   navButtons: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     marginTop: 10
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center'
//   },
//   prevButton: { 
//     backgroundColor: '#6c757d' 
//   },
//   nextButton: { 
//     backgroundColor: '#007bff' 
//   },
//   navButtonText: { 
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   listContent: {
//     paddingBottom: 15
//   }
// });

// export default AcademicProgress;  now i used 11-07-2025


// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const hasInitialized = useRef(false);

//   useEffect(() => {
//     if (!hasInitialized.current) {
//       hasInitialized.current = true;
//       const savedAcademicData = Array.isArray(sectionData?.academicProgress)
//         ? sectionData.academicProgress
//         : [];

//       const newRows = [
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...savedAcademicData.map((item, index) => ({
//           id: index + 2,
//           subject: item.subject || "",
//           selfAssessment: item.selfAssessment || "",
//           justification: item.justification || "",
//           isHeader: false,
//         })),
//       ];

//       if (newRows.length === 1) {
//         newRows.push({
//           id: 2,
//           subject: "",
//           selfAssessment: "",
//           justification: "",
//           isHeader: false,
//         });
//       }

//       setRows(newRows);
//     }
//   }, []); // 🔧 Fix: empty dependency to avoid infinite re-renders

//   const handleSave = useCallback(() => {
//     const currentRows = rows.filter(row => !row.isHeader);
//     updateSectionData("academicProgress", currentRows);
//   }, [rows, updateSectionData]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//         isHeader: false,
//       },
//     ]);
//   }, []);

//   const handleDeleteRow = useCallback((id) => {
//     setRows(prev => prev.filter(row => row.id !== id));
//   }, []);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev => prev.map(row =>
//       row.id === id ? { ...row, [field]: text } : row
//     ));
//   }, []);

//   const renderRow = useCallback(({ item }) => (
//     <View style={styles.row}>
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.subject}
//         onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.selfAssessment}
//         onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//       />
//       <TextInput
//         style={[styles.input, item.isHeader && styles.headerCell]}
//         editable={!item.isHeader}
//         value={item.justification}
//         onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//       />
//       {!item.isHeader && (
//         <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//           <Text style={styles.deleteButtonText}>×</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   ), [handleInputChange, handleDeleteRow]);

//   const handlePrevious = () => router.back();
//   const handleNext = () => router.push("/Co-Curricular section");

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.buttonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.buttonText}>Save Changes</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity 
//           style={[styles.navButton, styles.prevButton]}
//           onPress={handlePrevious}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={handleNext}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 20,
//     backgroundColor: '#f8f9fa'
//   },
//   sectionHeader: { 
//     padding: 15, 
//     backgroundColor: '#e9ecef',
//     borderRadius: 5,
//     marginBottom: 10
//   },
//   sectionHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   row: { 
//     flexDirection: 'row', 
//     marginBottom: 8,
//     alignItems: 'center'
//   },
//   input: { 
//     flex: 1, 
//     borderWidth: 1, 
//     borderColor: '#ced4da',
//     borderRadius: 4,
//     padding: 10,
//     marginHorizontal: 4,
//     backgroundColor: '#fff'
//   },
//   headerCell: { 
//     backgroundColor: '#e9ecef', 
//     fontWeight: 'bold' 
//   },
//   deleteButtonText: { 
//     color: 'red', 
//     fontSize: 20,
//     paddingHorizontal: 10
//   },
//   addButton: { 
//     backgroundColor: '#28a745',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 8
//   },
//   saveButton: {
//     backgroundColor: '#ffc107',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 8
//   },
//   navButtons: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     marginTop: 10
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center'
//   },
//   prevButton: { 
//     backgroundColor: '#6c757d' 
//   },
//   nextButton: { 
//     backgroundColor: '#007bff' 
//   },
//   navButtonText: { 
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold'
//   },
//   listContent: {
//     paddingBottom: 15
//   }
// });

// export default AcademicProgress; // now i chnage 13-07-2025 time 20:35


import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useAppData } from "../../contexts/AppDataContext";
import { useRouter } from "expo-router";

const AcademicProgress = () => {
  const router = useRouter();
  const { sectionData, updateSectionData } = useAppData();
  const [rows, setRows] = useState([]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      const savedAcademicData = Array.isArray(sectionData?.academicProgress)
        ? sectionData.academicProgress
        : [];

      const newRows = [
        {
          id: 1,
          subject: "Subject / Activity",
          selfAssessment: "Self-assessment",
          justification: "Justification",
          isHeader: true,
        },
        ...savedAcademicData.map((item, index) => ({
          id: index + 2,
          subject: item.subject || "",
          selfAssessment: item.selfAssessment || "",
          justification: item.justification || "",
          isHeader: false,
        })),
      ];

      if (newRows.length === 1) {
        newRows.push({
          id: 2,
          subject: "",
          selfAssessment: "",
          justification: "",
          isHeader: false,
        });
      }

      setRows(newRows);
    }
  }, []);

  const handleSave = useCallback(() => {
    const currentRows = rows.filter(row => !row.isHeader);
    updateSectionData("academicProgress", currentRows);
  }, [rows, updateSectionData]);

  const handleAddRow = useCallback(() => {
    setRows(prev => [
      ...prev,
      {
        id: Date.now(),
        subject: "",
        selfAssessment: "",
        justification: "",
        isHeader: false,
      },
    ]);
  }, []);

  const handleDeleteRow = useCallback((id) => {
    setRows(prev => prev.filter(row => row.id !== id));
  }, []);

  const handleInputChange = useCallback((text, field, id) => {
    setRows(prev => prev.map(row =>
      row.id === id ? { ...row, [field]: text } : row
    ));
  }, []);

  const renderRow = useCallback(({ item }) => (
    <View style={styles.row}>
      <TextInput
        style={[styles.input, item.isHeader && styles.headerCell]}
        editable={!item.isHeader}
        value={item.subject}
        onChangeText={(text) => handleInputChange(text, "subject", item.id)}
      />
      <TextInput
        style={[styles.input, item.isHeader && styles.headerCell]}
        editable={!item.isHeader}
        value={item.selfAssessment}
        onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
      />
      <TextInput
        style={[styles.input, item.isHeader && styles.headerCell]}
        editable={!item.isHeader}
        value={item.justification}
        onChangeText={(text) => handleInputChange(text, "justification", item.id)}
      />
      {!item.isHeader && (
        <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
          <Text style={styles.deleteButtonText}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  ), [handleInputChange, handleDeleteRow]);

  // ✅ FIXED: Always go to /Home
  const handlePrevious = () => router.push("/home");

  // ✅ CLEAN PATH: Use correct name (change if needed)
  const handleNext = () => router.push("/CoCurricularSection");

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Academic Progress</Text>
      </View>

      <FlatList
        data={rows}
        renderItem={renderRow}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
        <Text style={styles.buttonText}>+ Add Row</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <View style={styles.navButtons}>
        <TouchableOpacity 
          style={[styles.navButton, styles.prevButton]}
          onPress={handlePrevious}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton]}
          onPress={handleNext}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  sectionHeader: { 
    padding: 15, 
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    marginBottom: 10
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  row: { 
    flexDirection: 'row', 
    marginBottom: 8,
    alignItems: 'center'
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#fff'
  },
  headerCell: { 
    backgroundColor: '#e9ecef', 
    fontWeight: 'bold' 
  },
  deleteButtonText: { 
    color: 'red', 
    fontSize: 20,
    paddingHorizontal: 10
  },
  addButton: { 
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8
  },
  saveButton: {
    backgroundColor: '#ffc107',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 8
  },
  navButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 10
  },
  navButton: {
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  prevButton: { 
    backgroundColor: '#6c757d' 
  },
  nextButton: { 
    backgroundColor: '#007bff' 
  },
  navButtonText: { 
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  listContent: {
    paddingBottom: 15
  }
});

export default AcademicProgress;





// /*import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();
//   const [rows, setRows] = useState([]);
//   const isMounted = useRef(false);
//   const updateTimeout = useRef(null);

//   // Initialize rows only once with context data
//   useEffect(() => {
//     if (!isMounted.current) {
//       const savedAcademicData = sectionData?.academicProgress || [];
//       setRows([
//         {
//           id: 1,
//           subject: "Subject / Activity",
//           selfAssessment: "Self-assessment",
//           justification: "Justification",
//           isHeader: true,
//         },
//         ...(savedAcademicData.length > 0
//           ? savedAcademicData.map((item, index) => ({
//               id: index + 2,
//               subject: item.subject || "",
//               selfAssessment: item.selfAssessment || "",
//               justification: item.justification || "",
//               isHeader: false,
//             }))
//           : [
//               {
//                 id: 2,
//                 subject: "",
//                 selfAssessment: "",
//                 justification: "",
//                 isHeader: false,
//               },
//             ]),
//       ]);
//       isMounted.current = true;
//     }

//     return () => {
//       if (updateTimeout.current) {
//         clearTimeout(updateTimeout.current);
//       }
//     };
//   }, [sectionData]);

//   // Debounced context update for rows
//   useEffect(() => {
//     if (!isMounted.current) return;

//     const debounceUpdate = () => {
//       const currentRows = rows.filter(row => !row.isHeader);
//       updateSectionData("academicProgress", currentRows);
//     };

//     if (updateTimeout.current) {
//       clearTimeout(updateTimeout.current);
//     }
//     updateTimeout.current = setTimeout(debounceUpdate, 300);

//     return () => {
//       if (updateTimeout.current) {
//         clearTimeout(updateTimeout.current);
//       }
//     };
//   }, [rows, updateSectionData]);

//   const handleAddRow = useCallback(() => {
//     setRows(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         subject: "",
//         selfAssessment: "",
//         justification: "",
//         isHeader: false,
//       },
//     ]);
//   }, []);

//   const handleDeleteRow = useCallback(id => {
//     setRows(prev => prev.filter(row => row.id !== id));
//   }, []);

//   const handleInputChange = useCallback((text, field, id) => {
//     setRows(prev =>
//       prev.map(row => (row.id === id ? { ...row, [field]: text } : row))
//     );
//   }, []);

//   const renderRow = useCallback(
//     ({ item }) => (
//       <View style={styles.row}>
//         <TextInput
//           style={[styles.input, item.isHeader && styles.headerCell]}
//           editable={!item.isHeader}
//           value={item.subject}
//           onChangeText={text => handleInputChange(text, "subject", item.id)}
//         />
//         <TextInput
//           style={[styles.input, item.isHeader && styles.headerCell]}
//           editable={!item.isHeader}
//           value={item.selfAssessment}
//           onChangeText={text => handleInputChange(text, "selfAssessment", item.id)}
//         />
//         <TextInput
//           style={[styles.input, item.isHeader && styles.headerCell]}
//           editable={!item.isHeader}
//           value={item.justification}
//           onChangeText={text => handleInputChange(text, "justification", item.id)}
//         />
//         {!item.isHeader && (
//           <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//             <Text style={styles.deleteButtonText}>×</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     ),
//     [handleInputChange, handleDeleteRow]
//   );

//   const handlePrevious = () => router.back();
//   const handleNext = () => router.push("/Co-Curricular section");

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>Academic Progress</Text>
//       </View>

//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.buttonText}>+ Add Row</Text>
//       </TouchableOpacity>

//       <View style={styles.navButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.prevButton]}
//           onPress={handlePrevious}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navButton, styles.nextButton]}
//           onPress={handleNext}
//         >
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// // /*











// export default AcademicProgress;

// import React, { useState, useCallback } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { useAppData } from "../../contexts/AppDataContext";
// import { useRouter } from "expo-router";

// const AcademicProgress = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const [rows, setRows] = useState(() => {
//     const academicProgress = Array.isArray(sectionData?.academicProgress)
//       ? sectionData.academicProgress
//       : [];
//     return [
//       { id: 1, subject: "Subject / Activity", selfAssessment: "Self-assessment", justification: "Justification", isHeader: true },
//       ...academicProgress.map((item, index) => ({ id: index + 2, ...item, isHeader: false })),
//     ];
//   });

//   const handleSave = useCallback(() => {
//     const dataToSave = rows.filter((row) => !row.isHeader);
//     updateSectionData("academicProgress", dataToSave);
//   }, [rows, updateSectionData]);

//   const handleAddRow = useCallback(() => {
//     setRows((prevRows) => [
//       ...prevRows,
//       { id: Date.now(), subject: "", selfAssessment: "", justification: "", isHeader: false },
//     ]);
//   }, []);

//   const handleDeleteRow = useCallback((id) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   }, []);

//   const handleInputChange = useCallback((value, field, id) => {
//     setRows((prevRows) =>
//       prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
//     );
//   }, []);

//   const handleNext = useCallback(() => {
//     handleSave();
//     router.push("/co-curricular");
//   }, [handleSave, router]);

//   const handlePrevious = useCallback(() => {
//     router.back();
//   }, [router]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={rows}
//         renderItem={({ item }) => (
//           <View style={styles.row}>
//             <TextInput
//               style={[styles.input, item.isHeader && styles.headerCell]}
//               editable={!item.isHeader}
//               value={item.subject}
//               onChangeText={(text) => handleInputChange(text, "subject", item.id)}
//             />
//             <TextInput
//               style={[styles.input, item.isHeader && styles.headerCell]}
//               editable={!item.isHeader}
//               value={item.selfAssessment}
//               onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
//             />
//             <TextInput
//               style={[styles.input, item.isHeader && styles.headerCell]}
//               editable={!item.isHeader}
//               value={item.justification}
//               onChangeText={(text) => handleInputChange(text, "justification", item.id)}
//             />
//             {!item.isHeader && (
//               <TouchableOpacity onPress={() => handleDeleteRow(item.id)}>
//                 <Text style={styles.deleteButton}>Delete</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
//         <Text style={styles.buttonText}>+ Add Row</Text>
//       </TouchableOpacity>
//       <View style={styles.navButtons}>
//         <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   row: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
//   input: { flex: 1, borderWidth: 1, borderColor: "#ced4da", marginHorizontal: 5 },
//   headerCell: { backgroundColor: "#e9ecef" },
//   deleteButton: { color: "red" },
//   addButton: { backgroundColor: "green", padding: 10 },
//   navButtons: { flexDirection: "row", justifyContent: "space-between" },
//   navButton: { backgroundColor: "blue", padding: 10 },
//   navButtonText: { color: "white" },
// });

// export default AcademicProgress;
