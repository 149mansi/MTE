// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const HealthAndReading = () => {
//   const router = useRouter();
//   const { updateSectionData } = useAppData(); // Function to update global state

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState({
//     exercise: "",
//     sleep: "",
//     diet: "",
//     ladderBooks: "",
//     otherBooks: "",
//     ladderStatus: "",
//     reviewedBooks: "",
//   });

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "Exercise, Sleep, and Diet",
//       fields: [
//         { key: "exercise", placeholder: "Enter your exercise routine", value: data.exercise },
//         { key: "sleep", placeholder: "Enter your sleep duration", value: data.sleep },
//         { key: "diet", placeholder: "Describe your diet", value: data.diet },
//       ],
//     },
//     {
//       title: "Books Read and Ladder Progress",
//       fields: [
//         { key: "ladderBooks", placeholder: "List books from the ladder", value: data.ladderBooks },
//         { key: "otherBooks", placeholder: "List other books read", value: data.otherBooks },
//       ],
//     },
//     {
//       title: "Ladder Progress and Reviewed Books",
//       fields: [
//         { key: "ladderStatus", placeholder: "Enter your ladder progress status", value: data.ladderStatus },
//         { key: "reviewedBooks", placeholder: "Books you've reviewed", value: data.reviewedBooks },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     // Validate data before proceeding
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }

//     // Update global state with health and reading data
//     updateSectionData("healthAndReading", data);

//     // Navigate to the next page
//     router.push("/FriendsAndEssayForm");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{sections[currentSection].title}</Text>
//       {sections[currentSection].fields.map((field) => (
//         <TextInput
//           key={field.key}
//           style={styles.input}
//           placeholder={field.placeholder}
//           value={field.value}
//           onChangeText={(text) => handleInputChange(field.key, text)}
//           multiline
//         />
//       ))}

//       <View style={styles.buttonContainer}>
//         {currentSection > 0 ? (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => setCurrentSection((prev) => prev - 1)}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => router.push("/Co-Curricular section")}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         )}
//         {currentSection < sections.length - 1 ? (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => setCurrentSection((prev) => prev + 1)}
//           >
//             <Text style={styles.nextButton}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.link} onPress={handleSaveAndNext}>
//             <Text style={styles.nextButton}>Save and Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HealthAndReading;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     minHeight: 50,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
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
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });




// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const HealthAndReading = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData(); // Access global state and update function

//   // Load existing data from global state or initialize
//   const previousData = sectionData.healthAndReading || {
//     exercise: "",
//     sleep: "",
//     diet: "",
//     ladderBooks: "",
//     otherBooks: "",
//     ladderStatus: "",
//     reviewedBooks: "",
//   };

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState(previousData);

//   useEffect(() => {
//     // Save data to global state whenever it changes
//     updateSectionData("healthAndReading", data);
//   }, [data, updateSectionData]);

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "Exercise, Sleep, and Diet",
//       fields: [
//         { key: "exercise", placeholder: "Enter your exercise routine", value: data.exercise },
//         { key: "sleep", placeholder: "Enter your sleep duration", value: data.sleep },
//         { key: "diet", placeholder: "Describe your diet", value: data.diet },
//       ],
//     },
//     {
//       title: "Books Read and Ladder Progress",
//       fields: [
//         { key: "ladderBooks", placeholder: "Names of the ladder books/videos read", value: data.ladderBooks },
//         { key: "otherBooks", placeholder: "Names of the other books/videos read", value: data.otherBooks },
//       ],
//     },
//     {
//       title: "Ladder Progress and Reviewed Books",
//       fields: [
//         { key: "ladderStatus", placeholder: "Ladder staus(books-videos read/ books-videos to be read)", value: data.ladderStatus },
//         { key: "reviewedBooks", placeholder: "Books/ videos reviewedcl", value: data.reviewedBooks },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     // Validate data before proceeding
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }

//     // Navigate to the next page
//     router.push("/FriendsAndEssayForm");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{sections[currentSection].title}</Text>
//       {sections[currentSection].fields.map((field) => (
//         <TextInput
//           key={field.key}
//           style={styles.input}
//           placeholder={field.placeholder}
//           value={field.value}
//           onChangeText={(text) => handleInputChange(field.key, text)}
//           multiline
//         />
//       ))}

//       <View style={styles.buttonContainer}>
//         {currentSection > 0 ? (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => setCurrentSection((prev) => prev - 1)}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => router.push("/CoCurricularSection")}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         )}
//         {currentSection < sections.length - 1 ? (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => setCurrentSection((prev) => prev + 1)}
//           >
//             <Text style={styles.nextButton}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.link} onPress={handleSaveAndNext}>
//             <Text style={styles.nextButton}>Save and Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HealthAndReading;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     minHeight: 50,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
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
//   nextButton: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });








// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const HealthAndReading = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData(); // Access global state and update function

//   const previousData = sectionData.healthAndReading || {
//     exercise: "",
//     sleep: "",
//     diet: "",
//     ladderBooks: "",
//     otherBooks: "",
//     ladderStatus: "",
//     reviewedBooks: "",
//   };

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState(previousData);

//   useEffect(() => {
//     updateSectionData("healthAndReading", data);
//   }, [data]);

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "Exercise, Sleep, and Diet",
//       fields: [
//         { key: "exercise", placeholder: "Describe your exercise routine", value: data.exercise },
//         { key: "sleep", placeholder: "Enter your average sleep duration", value: data.sleep },
//         { key: "diet", placeholder: "Describe your daily diet", value: data.diet },
//       ],
//     },
//     {
//       title: "Books and Videos Read",
//       fields: [
//         { key: "ladderBooks", placeholder: "Ladder books/videos read", value: data.ladderBooks },
//         { key: "otherBooks", placeholder: "Other books/videos read", value: data.otherBooks },
//       ],
//     },
//     {
//       title: "Ladder Status and Reviews",
//       fields: [
//         { key: "ladderStatus", placeholder: "Books/videos read & to be read", value: data.ladderStatus },
//         { key: "reviewedBooks", placeholder: "Books/Videos Reviewed", value: data.reviewedBooks },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }
//     router.push("/FriendsAndEssayForm");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{sections[currentSection].title}</Text>
//       {sections[currentSection].fields.map((field) => (
//         <TextInput
//           key={field.key}
//           style={styles.input}
//           placeholder={field.placeholder}
//           value={field.value}
//           onChangeText={(text) => handleInputChange(field.key, text)}
//           multiline
//         />
//       ))}

//       <View style={styles.buttonContainer}>
//         {currentSection > 0 ? (
//           <TouchableOpacity style={styles.link} onPress={() => setCurrentSection((prev) => prev - 1)}>
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.link} onPress={() => router.push("/CoCurricularSection")}>
//             <Text style={styles.buttonText}>Previous</Text>
//           </TouchableOpacity>
//         )}
//         {currentSection < sections.length - 1 ? (
//           <TouchableOpacity style={styles.link} onPress={() => setCurrentSection((prev) => prev + 1)}>
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.link} onPress={handleSaveAndNext}>
//             <Text style={styles.buttonText}>Save and Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HealthAndReading;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     minHeight: 50,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   link: {
//     padding: 12,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     flex: 0.48,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const HealthAndReading = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const previousData = sectionData.healthAndReading || {
//     exercise: "",
//     sleep: "",
//     diet: "",
//     ladderBooks: "",
//     otherBooks: "",
//     ladderStatus: "",
//     reviewedBooks: "",
//   };

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState(previousData);

//   useEffect(() => {
//     updateSectionData("healthAndReading", data);
//   }, [data]);

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "Exercise, Sleep, and Diet",
//       fields: [
//         { key: "exercise", placeholder: "Describe your exercise routine", value: data.exercise },
//         { key: "sleep", placeholder: "Enter your average sleep duration", value: data.sleep },
//         { key: "diet", placeholder: "Describe your daily diet", value: data.diet },
//       ],
//     },
//     {
//       title: "Books and Videos Read",
//       fields: [
//         { key: "ladderBooks", placeholder: "Ladder books/videos read", value: data.ladderBooks },
//         { key: "otherBooks", placeholder: "Other books/videos read", value: data.otherBooks },
//       ],
//     },
//     {
//       title: "Ladder Status and Reviews",
//       fields: [
//         { key: "ladderStatus", placeholder: "Books/videos read & to be read", value: data.ladderStatus },
//         { key: "reviewedBooks", placeholder: "Books/Videos Reviewed", value: data.reviewedBooks },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }
//     router.push("/FriendsAndEssayForm");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.innerContainer}>
//           <Text style={styles.title}>{sections[currentSection].title}</Text>
//           {sections[currentSection].fields.map((field) => (
//             <TextInput
//               key={field.key}
//               style={styles.input}
//               placeholder={field.placeholder}
//               value={field.value}
//               onChangeText={(text) => handleInputChange(field.key, text)}
//               multiline
//             />
//           ))}

//           <View style={styles.buttonContainer}>
//             {currentSection > 0 ? (
//               <TouchableOpacity style={styles.link} onPress={() => setCurrentSection((prev) => prev - 1)}>
//                 <Text style={styles.buttonText}>Previous</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity style={styles.link} onPress={() => router.push("/CoCurricularSection")}>
//                 <Text style={styles.buttonText}>Previous</Text>
//               </TouchableOpacity>
//             )}
//             {currentSection < sections.length - 1 ? (
//               <TouchableOpacity style={styles.link} onPress={() => setCurrentSection((prev) => prev + 1)}>
//                 <Text style={styles.buttonText}>Next</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity style={styles.link} onPress={handleSaveAndNext}>
//                 <Text style={styles.buttonText}>Save and Next</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default HealthAndReading;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 30,
//     backgroundColor: "#f8f9fa",
//   },
//   innerContainer: {
//     width: "90%",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     minHeight: 50,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   link: {
//     padding: 12,
//     backgroundColor: "#FF6F61",
//     borderRadius: 5,
//     flex: 0.48,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });



import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useAppData } from "../../contexts/AppDataContext";

const HealthAndReading = () => {
  const router = useRouter();
  const { sectionData, updateSectionData } = useAppData();

  const previousData = sectionData.healthAndReading || {
    exercise: "",
    sleep: "",
    diet: "",
    ladderBooks: "",
    otherBooks: "",
    ladderStatus: "",
    reviewedBooks: "",
  };

  const [currentSection, setCurrentSection] = useState(0);
  const [data, setData] = useState(previousData);

  useEffect(() => {
    updateSectionData("healthAndReading", data);
  }, [data]);

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
        { key: "exercise", placeholder: "Describe your exercise routine", value: data.exercise },
        { key: "sleep", placeholder: "Enter your average sleep duration", value: data.sleep },
        { key: "diet", placeholder: "Describe your daily diet", value: data.diet },
      ],
    },
    {
      title: "Books and Videos Read",
      fields: [
        { key: "ladderBooks", placeholder: "Ladder books/videos read", value: data.ladderBooks },
        { key: "otherBooks", placeholder: "Other books/videos read", value: data.otherBooks },
      ],
    },
    {
      title: "Ladder Status and Reviews",
      fields: [
        { key: "ladderStatus", placeholder: "Books/videos read & to be read", value: data.ladderStatus },
        { key: "reviewedBooks", placeholder: "Books/Videos Reviewed", value: data.reviewedBooks },
      ],
    },
  ];

  const handleSaveAndNext = () => {
    const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
    if (!isAnyFieldFilled) {
      Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
      return;
    }
    router.push("/FriendsAndEssayForm");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
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
              <TouchableOpacity style={styles.button} onPress={() => setCurrentSection((prev) => prev - 1)}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={() => router.push("/CoCurricularSection")}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {currentSection < sections.length - 1 ? (
              <TouchableOpacity style={styles.button} onPress={() => setCurrentSection((prev) => prev + 1)}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleSaveAndNext}>
                <Text style={styles.buttonText}>Save and Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HealthAndReading;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f6f8",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 4, // for Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fefefe",
    fontSize: 16,
    minHeight: 50,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#FF6F61",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
