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
//     navigation.navigate("CoExtraCurricularPlan"); // Navigate to CoExtraCurricularPlan screen
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



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router"; // Replace with your navigation library if not using expo-router

const AcademicProgress = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      subject: "Subject / Activity",
      selfAssessment: "Self-assessment",
      justification: "Justification",
    },
    { id: 2, subject: "", selfAssessment: "", justification: "" },
  ]);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        subject: "",
        selfAssessment: "",
        justification: "",
      },
    ]);
  };

  const handleDeleteRow = (id) => {
    if (id === 1) {
      alert("Cannot delete the header row.");
      return;
    }
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleInputChange = (text, field, id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: text } : row
      )
    );
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <TextInput
        style={[styles.input, item.id === 1 ? styles.headerCell : null]}
        editable={item.id !== 1}
        placeholder="Subject / Activity"
        value={item.subject}
        onChangeText={(text) => handleInputChange(text, "subject", item.id)}
      />
      <TextInput
        style={[styles.input, item.id === 1 ? styles.headerCell : null]}
        editable={item.id !== 1}
        placeholder="Self-assessment"
        value={item.selfAssessment}
        onChangeText={(text) => handleInputChange(text, "selfAssessment", item.id)}
      />
      <TextInput
        style={[styles.input, item.id === 1 ? styles.headerCell : null]}
        editable={item.id !== 1}
        placeholder="Justification"
        value={item.justification}
        onChangeText={(text) => handleInputChange(text, "justification", item.id)}
      />
      {item.id !== 1 && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteRow(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Academic Progress</Text>
      <FlatList
        data={rows}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
        <Text style={styles.addButtonText}>Add Row</Text>
      </TouchableOpacity>
      <View style={styles.navigationButtons}>
        <Link href="/home" style={styles.previousButton}>
          <Text style={styles.buttonText}>Previous</Text>
        </Link>
        <Link href="/Co-Curricular section" style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </Link>
      </View>
    </View>
  );
};

export default AcademicProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#e9ecef",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  previousButton: {
    flex: 1,
    backgroundColor: "#ffc107",
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#6f42c1",
    padding: 15,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
