// import React, { createContext, useContext, useState, useMemo } from "react";

// const AppDataContext = createContext();

// export const useAppData = () => {
//   const context = useContext(AppDataContext);
//   if (!context) {
//     throw new Error("useAppData must be used within an AppDataProvider");
//   }
//   return context;
// };

// export const AppDataProvider = ({ children }) => {
//   const [sections, setSections] = useState({
//     home: null,
//     academicProgress: null,
//     coCurricular: null,
//     healthAndReading: null,
//     friendsAndEssay: null,
//     monthlyPlan: null
//   });

//   // Combined data accessible through this getter
//   const combinedData = useMemo(() => {
//     return {
//       ...sections.home,
//       academicProgress: sections.academicProgress,
//       coCurricular: sections.coCurricular,
//       healthAndReading: sections.healthAndReading,
//       friendsAndEssay: sections.friendsAndEssay,
//       monthlyPlan: sections.monthlyPlan
//     };
//   }, [sections]);

//   const updateSectionData = (section, data) => {
//     if (!Object.keys(sections).includes(section)) {
//       console.error(`Invalid section name: ${section}`);
//       return;
//     }

//     setSections(prev => ({
//       ...prev,
//       [section]: { ...prev[section], ...data }
//     }));

//     console.log(`Updated ${section} with:`, data);
//   };

//   const resetAllData = () => {
//     setSections({
//       home: null,
//       academicProgress: null,
//       coCurricular: null,
//       healthAndReading: null,
//       friendsAndEssay: null,
//       monthlyPlan: null
//     });
//   };

//   return (
//     <AppDataContext.Provider 
//       value={{ 
//         sectionData: sections,
//         combinedData,
//         updateSectionData,
//         resetAllData
//       }}
//     >
//       {children}
//     </AppDataContext.Provider>
//   );
// };

// contexts/AppDataContext.js

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import * as SecureStore from 'expo-secure-store';

// const AppDataContext = createContext();

// export const AppDataProvider = ({ children }) => {
//   const [sectionData, setSectionData] = useState({
//     home: {},
//     academicProgress: [],
//     coCurricular: {},
//     healthAndReading: {},
//     friendsAndEssay: {},
//     monthlyPlan: {}
//   });

//   // Load saved data on initial render
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const savedData = await SecureStore.getItemAsync('appData');
//         if (savedData) {
//           setSectionData(JSON.parse(savedData));
//         }
//       } catch (error) {
//         console.error('Failed to load data:', error);
//       }
//     };
//     loadData();
//   }, []);

//   // Save data whenever it changes
//   useEffect(() => {
//     const saveData = async () => {
//       try {
//         await SecureStore.setItemAsync('appData', JSON.stringify(sectionData));
//       } catch (error) {
//         console.error('Failed to save data:', error);
//       }
//     };
//     saveData();
//   }, [sectionData]);

//   const updateSectionData = (section, data) => {
//     setSectionData(prev => ({
//       ...prev,
//       [section]: Array.isArray(data) ? [...data] : { ...data }
//     }));
//   };

//   return (
//     <AppDataContext.Provider value={{ sectionData, updateSectionData }}>
//       {children}
//     </AppDataContext.Provider>
//   );
// };

// export const useAppData = () => useContext(AppDataContext);




// import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// // LoadingScreen Component (Inline for simplicity)
// const LoadingScreen = () => (
//     <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text style={styles.loadingText}>Loading...</Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     loadingContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     loadingText: {
//         marginTop: 10,
//         fontSize: 16,
//         color: "#333",
//     },
// });

// // Create Context
// const AppDataContext = createContext();

// // Custom Hook for consuming AppDataContext
// export const useAppData = () => {
//     const context = useContext(AppDataContext);
//     if (!context) {
//         throw new Error("useAppData must be used within an AppDataProvider");
//     }
//     return context;
// };

// // AppDataProvider Component
// export const AppDataProvider = ({ children }) => {
//     const [sections, setSections] = useState({
//         home: null,
//         academicProgress: null,
//         coCurricular: null,
//         healthAndReading: null,
//         friendsAndEssay: null,
//         monthlyPlan: null,
//     });

//     const [loading, setLoading] = useState(true);

//     // Load saved data from AsyncStorage when the app starts
//     useEffect(() => {
//         const loadSavedData = async () => {
//             try {
//                 const savedSections = await AsyncStorage.getItem("appData");
//                 if (savedSections) {
//                     setSections(JSON.parse(savedSections));
//                 }
//             } catch (error) {
//                 console.error("Error loading saved data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadSavedData();
//     }, []);

//     // Save data to AsyncStorage whenever sections change
//     useEffect(() => {
//         const saveData = async () => {
//             try {
//                 await AsyncStorage.setItem("appData", JSON.stringify(sections));
//             } catch (error) {
//                 console.error("Error saving data:", error);
//             }
//         };

//         saveData();
//     }, [sections]);

//     // Combined data getter
//     const combinedData = useMemo(() => ({
//         ...sections.home,
//         academicProgress: sections.academicProgress,
//         coCurricular: sections.coCurricular,
//         healthAndReading: sections.healthAndReading,
//         friendsAndEssay: sections.friendsAndEssay,
//         monthlyPlan: sections.monthlyPlan,
//     }), [sections]);

//     // Update a specific section
//     // const updateSectionData = (section, data) => {
//     //     if (!Object.keys(sections).includes(section)) {
//     //         console.error(`Invalid section name: ${section}`);
//     //         return;
//     //     }

//     //     setSections((prev) => ({
//     //         ...prev,
//     //         [section]: { ...prev[section], ...data },
//     //     }));
//     // };


//     const updateSectionData = (section, data) => {
//   if (!Object.keys(sections).includes(section)) {
//     console.error(`Invalid section name: ${section}`);
//     return;
//   }

//   setSections((prev) => ({
//     ...prev,
//     [section]: data, // direct set for array types
//   }));
// };

//     // Reset all data
//     const resetAllData = async () => {
//         const defaultSections = {
//             home: null,
//             academicProgress: null,
//             coCurricular: null,
//             healthAndReading: null,
//             friendsAndEssay: null,
//             monthlyPlan: null,
//         };

//         try {
//             await AsyncStorage.setItem("appData", JSON.stringify(defaultSections));
//             setSections(defaultSections);
//         } catch (error) {
//             console.error("Error resetting data:", error);
//         }
//     };

//     if (loading) {
//         return <LoadingScreen />;
//     }

//     return (
//         <AppDataContext.Provider
//             value={{
//                 sectionData: sections,
//                 combinedData,
//                 updateSectionData,
//                 resetAllData,
//             }}
//         >
//             {children}
//         </AppDataContext.Provider>
//     );
// };







// import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
// import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // Make sure you have this import at the top

// const AppDataContext = createContext();

// export const AppDataProvider = ({ children }) => {
//   const [state, setState] = useState({
//     sections: {
//       home: null,
//       academicProgress: null,
//       coCurricular: null,
//       healthAndReading: null,
//       friendsAndEssay: null,
//       monthlyPlan: null,
//     },
//     loading: true
//   });

//   const loadSavedData = useCallback(async () => {
//     try {
//       const savedSections = await AsyncStorage.getItem("appData");
//       if (savedSections) {
//         setState(prev => ({
//           ...prev,
//           sections: JSON.parse(savedSections),
//           loading: false
//         }));
//       } else {
//         setState(prev => ({ ...prev, loading: false }));
//       }
//     } catch (error) {
//       console.error("Error loading saved data:", error);
//       setState(prev => ({ ...prev, loading: false }));
//     }
//   }, []);

//   useEffect(() => {
//     loadSavedData();
//   }, [loadSavedData]);

//   const saveData = useCallback(async (sections) => {
//     try {
//       await AsyncStorage.setItem("appData", JSON.stringify(sections));
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     if (!state.loading) {
//       saveData(state.sections);
//     }
//   }, [state.sections, state.loading, saveData]);

//   const updateSectionData = useCallback((section, data) => {
//     if (!Object.keys(state.sections).includes(section)) {
//       console.error(`Invalid section name: ${section}`);
//       return;
//     }

//     setState(prev => ({
//       ...prev,
//       sections: {
//         ...prev.sections,
//         [section]: data
//       }
//     }));
//   }, [state.sections]);

//   const resetAllData = useCallback(async () => {
//     const defaultSections = {
//       home: null,
//       academicProgress: null,
//       coCurricular: null,
//       healthAndReading: null,
//       friendsAndEssay: null,
//       monthlyPlan: null,
//     };

//     try {
//       await AsyncStorage.setItem("appData", JSON.stringify(defaultSections));
//       setState(prev => ({
//         ...prev,
//         sections: defaultSections
//       }));
//     } catch (error) {
//       console.error("Error resetting data:", error);
//     }
//   }, []);

//   const combinedData = useMemo(() => ({
//     ...state.sections.home,
//     academicProgress: state.sections.academicProgress,
//     coCurricular: state.sections.coCurricular,
//     healthAndReading: state.sections.healthAndReading,
//     friendsAndEssay: state.sections.friendsAndEssay,
//     monthlyPlan: state.sections.monthlyPlan,
//   }), [state.sections]);

//   const value = useMemo(() => ({
//     sectionData: state.sections,
//     combinedData,
//     updateSectionData,
//     resetAllData,
//     loading: state.loading
//   }), [state.sections, combinedData, updateSectionData, resetAllData, state.loading]);

//   return (
//     <AppDataContext.Provider value={value}>
//       {children}
//     </AppDataContext.Provider>
//   );
// };

// export const useAppData = () => {
//   const context = useContext(AppDataContext);
//   if (!context) {
//     throw new Error("useAppData must be used within an AppDataProvider");
//   }
//   return context;
// };



import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [state, setState] = useState({
    sections: {
      home: null,
      academicProgress: null,
      coCurricular: null,
      healthAndReading: null,
      friendsAndEssay: null,
      monthlyPlan: null,
    },
    loading: true,
  });

  const loadSavedData = useCallback(async () => {
    try {
      const savedSections = await AsyncStorage.getItem("appData");
      if (savedSections) {
        setState((prev) => ({
          ...prev,
          sections: JSON.parse(savedSections),
          loading: false,
        }));
      } else {
        setState((prev) => ({ ...prev, loading: false }));
      }
    } catch (error) {
      console.error("Error loading saved data:", error);
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  useEffect(() => {
    loadSavedData();
  }, [loadSavedData]);

  const saveData = useCallback(async (sections) => {
    try {
      await AsyncStorage.setItem("appData", JSON.stringify(sections));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, []);

  useEffect(() => {
    if (!state.loading) {
      saveData(state.sections);
    }
  }, [state.sections, state.loading, saveData]);

  const updateSectionData = useCallback((section, data) => {
    if (!Object.keys(state.sections).includes(section)) {
      console.error(`Invalid section name: ${section}`);
      return;
    }

    const currentData = state.sections[section];

    // Prevent redundant updates
    const isEqual = JSON.stringify(currentData) === JSON.stringify(data);
    if (isEqual) return;

    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: data,
      },
    }));
  }, [state.sections]);

  const resetAllData = useCallback(async () => {
    const defaultSections = {
      home: null,
      academicProgress: null,
      coCurricular: null,
      healthAndReading: null,
      friendsAndEssay: null,
      monthlyPlan: null,
    };

    try {
      await AsyncStorage.setItem("appData", JSON.stringify(defaultSections));
      setState((prev) => ({
        ...prev,
        sections: defaultSections,
      }));
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  }, []);

  const combinedData = useMemo(
    () => ({
      ...state.sections.home,
      academicProgress: state.sections.academicProgress,
      coCurricular: state.sections.coCurricular,
      healthAndReading: state.sections.healthAndReading,
      friendsAndEssay: state.sections.friendsAndEssay,
      monthlyPlan: state.sections.monthlyPlan,
    }),
    [state.sections]
  );

  const value = useMemo(
    () => ({
      sectionData: state.sections,
      combinedData,
      updateSectionData,
      resetAllData,
      loading: state.loading,
    }),
    [state.sections, combinedData, updateSectionData, resetAllData, state.loading]
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
};
