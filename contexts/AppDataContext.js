import React, { createContext, useContext, useState } from "react";

// Create the context
const AppDataContext = createContext();

// Custom hook to use the AppDataContext
export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
};

// Provider component
export const AppDataProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    home: {},
    academicProgress: {},
    coCurricular: {},
    healthAndReading: {},
    friendsAndEssay: {},
    monthlyPlan: {},
  });

  const updateSectionData = (section, data) => {
    if (!section || typeof section !== "string") {
      console.error("Invalid section name provided:", section);
      return;
    }
    if (typeof data !== "object" || data === null) {
      console.error("Invalid data provided for section:", section, data);
      return;
    }
    setAppData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
    console.log(`Section '${section}' updated:`, data); // Debugging log
  };

  return (
    <AppDataContext.Provider value={{ appData, updateSectionData }}>
      {children}
    </AppDataContext.Provider>
  );
};
