import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";
import { saveAs } from "file-saver"; // For web
import XLSX from "xlsx";

export const generateExcelFile = async (data) => {
  try {
    // 1. Prepare Excel workbook
    const workbook = XLSX.utils.book_new();

    // Add a sheet with sample data for testing
    const worksheet = XLSX.utils.json_to_sheet(data || [{ Name: "Test", Value: 1 }]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    const fileName = `StudentReport_${Date.now()}.xlsx`;

    // 2. Platform-specific logic
    if (Platform.OS === "web") {
      // For Web: Create Blob and trigger download
      const excelBuffer = XLSX.write(workbook, {
        type: "array", // Correct type for modern browsers
        bookType: "xlsx",
      });
      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      saveAs(blob, fileName); // Trigger download
      return { fileUri: null, fileName };
    } else {
      // For Mobile: Write to file system and share
      const excelData = XLSX.write(workbook, {
        type: "base64",
        bookType: "xlsx",
      });

      const fileUri = FileSystem.cacheDirectory + fileName;

      await FileSystem.writeAsStringAsync(fileUri, excelData, {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri); // Share the file
      } else {
        console.warn("Sharing is not available on this device.");
      }

      return { fileUri, fileName };
    }
  } catch (error) {
    console.error("Error generating Excel file:", error);
    throw error;
  }
};
