// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext"; // Import global state

// const FriendsAndEssayForm = () => {
//   const router = useRouter();
//   const { updateSectionData } = useAppData(); // Function to update global state

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState({
//     friends: "",
//     learnings: "",
//     essay: "",
//   });

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "New friends or acquaintances made and what you learned from them",
//       fields: [
//         {
//           key: "friends",
//           placeholder: "Enter names of new friends or acquaintances",
//           value: data.friends,
//         },
//         {
//           key: "learnings",
//           placeholder: "Enter what you learned from them",
//           value: data.learnings,
//         },
//       ],
//     },
//     {
//       title:
//         "Essay on a topic of your choice including learning from the books read (Please write in your own words, don’t copy from the internet)",
//       fields: [
//         {
//           key: "essay",
//           placeholder: "Write your essay here",
//           value: data.essay,
//         },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     console.log("Save and Next button clicked");

//     // Validate data before proceeding
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }

//     // Update global state with friends and essay data
//     updateSectionData("friendsAndEssay", data);

//     console.log("Global state updated with: ", data);
//     console.log("Navigating to MonthlyPlanForm...");

//     // Navigate to the next page
//     router.push("/MonthlyPlanForm");
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
//             onPress={() => router.push("/HealthAndReading")}
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

// export default FriendsAndEssayForm;

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
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const FriendsAndEssayForm = () => {
//   const router = useRouter();
//   const { sectionData, updateSectionData } = useAppData();

//   const previousData = sectionData.friendsAndEssay || {
//     friends: "",
//     learnings: "",
//     essay: "",
//   };

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState(previousData);

//   useEffect(() => {
//     // Sync data with global state on each change
//     updateSectionData("friendsAndEssay", data);
//   }, [data, updateSectionData]);

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const sections = [
//     {
//       title: "New friends or acquaintances made and what you learned from them",
//       fields: [
//         {
//           key: "friends",
//           placeholder: "Enter names of new friends or acquaintances",
//           value: data.friends,
//         },
//         {
//           key: "learnings",
//           placeholder: "Enter what you learned from them",
//           value: data.learnings,
//         },
//       ],
//     },
//     {
//       title:
//         "Essay on a topic of your choice including learning from the books read (Please write in your own words, don’t copy from the internet)",
//       fields: [
//         {
//           key: "essay",
//           placeholder: "Write your essay here",
//           value: data.essay,
//         },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }
//     router.push("/MonthlyPlanForm");
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
//             onPress={() => router.push("/HealthAndReading")}
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

// export default FriendsAndEssayForm;

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


// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useAppData } from "../../contexts/AppDataContext";

// const FriendsAndEssayForm = () => {
//   const router = useRouter();
//   const scrollRef = useRef(null);
//   const { sectionData, updateSectionData } = useAppData();

//   const previousData = sectionData.friendsAndEssay || {
//     friends: "",
//     learnings: "",
//     essay: "",
//   };

//   const [currentSection, setCurrentSection] = useState(0);
//   const [data, setData] = useState(previousData);

//   useEffect(() => {
//     updateSectionData("friendsAndEssay", data);
//   }, [data]);

//   const handleInputChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const scrollToTop = () => {
//     scrollRef?.current?.scrollTo({ y: 0, animated: true });
//   };

//   const sections = [
//     {
//       title: "New friends or acquaintances made and what you learned from them",
//       fields: [
//         {
//           key: "friends",
//           placeholder: "Enter names of new friends or acquaintances",
//           value: data.friends,
//         },
//         {
//           key: "learnings",
//           placeholder: "Enter what you learned from them",
//           value: data.learnings,
//         },
//       ],
//     },
//     {
//       title: "Essay on a topic of your choice including learning from the books read (Please write in your own words, don’t copy from the internet)",
//       fields: [
//         {
//           key: "essay",
//           placeholder: "Write your essay here",
//           value: data.essay,
//         },
//       ],
//     },
//   ];

//   const handleSaveAndNext = () => {
//     const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
//     if (!isAnyFieldFilled) {
//       Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
//       return;
//     }
//     router.push("/MonthlyPlanForm");
//   };

//   return (
//     <ScrollView style={styles.container} ref={scrollRef}>
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
//             onPress={() => {
//               setCurrentSection((prev) => prev - 1);
//               scrollToTop();
//             }}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => router.push("/HealthAndReading")}
//           >
//             <Text style={styles.previousButton}>Previous</Text>
//           </TouchableOpacity>
//         )}

//         {currentSection < sections.length - 1 ? (
//           <TouchableOpacity
//             style={styles.link}
//             onPress={() => {
//               setCurrentSection((prev) => prev + 1);
//               scrollToTop();
//             }}
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

// export default FriendsAndEssayForm;

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
//     minWidth: 120,
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




import React, { useState, useEffect, useRef } from "react";
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

const FriendsAndEssayForm = () => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const { sectionData, updateSectionData } = useAppData();

  const previousData = sectionData.friendsAndEssay || {
    friends: "",
    learnings: "",
    essay: "",
  };

  const [currentSection, setCurrentSection] = useState(0);
  const [data, setData] = useState(previousData);

  useEffect(() => {
    updateSectionData("friendsAndEssay", data);
  }, [data]);

  const handleInputChange = (key, value) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const scrollToTop = () => {
    scrollRef?.current?.scrollTo({ y: 0, animated: true });
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
      title: "Essay on a topic of your choice including learning from the books read (Please write in your own words, don’t copy from the internet)",
      fields: [
        {
          key: "essay",
          placeholder: "Write your essay here",
          value: data.essay,
        },
      ],
    },
  ];

  const handleSaveAndNext = () => {
    const isAnyFieldFilled = Object.values(data).some((value) => value.trim() !== "");
    if (!isAnyFieldFilled) {
      Alert.alert("Validation Error", "Please fill in at least one field before proceeding.");
      return;
    }
    router.push("/MonthlyPlanForm");
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollRef}>
        <View style={styles.innerContainer}>
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
                style={styles.button}
                onPress={() => {
                  setCurrentSection((prev) => prev - 1);
                  scrollToTop();
                }}
              >
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/HealthAndReading")}
              >
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}

            {currentSection < sections.length - 1 ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setCurrentSection((prev) => prev + 1);
                  scrollToTop();
                }}
              >
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

export default FriendsAndEssayForm;

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    minHeight: 60,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#FF6F61",
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
