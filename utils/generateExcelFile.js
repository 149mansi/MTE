// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     // Create a new workbook
//     const workbook = XLSX.utils.book_new();

//     // Create the structured worksheet similar to "Monthly Thinking Exercise"
//     const worksheetData = [
//       [null, null, null, null, null, null],
//       [null, "Thinking Exercise of Student: _______________________ for the month of _________", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "College: ____________________________        Year of Study (ex XII Science, B Tech 3rd year) _________", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Academic Progress / Vacation Plan", null, null, null, "Co and Extra Curricular Progress-Plan"],
//       [null, null, null, null, null, null],
//       [null, "Subject / Activity", "Self-assessment", "Justification", null, null],
//       [null, null, null, null, null, null],
//       [null, "1", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "2", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "3", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "4", null, null, null, "Fin Reqm for the next 3 months (Details Please)"],
//       [null, null, null, null, null, "1"],
//       [null, "5", null, null, null, "2"],
//       [null, null, null, null, null, "3"],
//       [null, "6", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "7 Real Life Project", null, null, null, "Difficulties (Social, Family, etc.)"],
//       [null, null, null, null, null, null],
//       [null, "8 Extra English", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Results of the exams (Regular college / university and other exams):", null, null, null, "Reading Books / Watching Videos"],
//       [null, null, null, null, null, "Names of the ladder books/videos read:"],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, "Names of the other books/videos:"],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, "Ladder status (books-videos read / books-videos to be read):"],
//       [null, "Its very important to exercise regularly and eat and sleep properly", null, null, null, null],
//       [null, "Exercise:", null, null, null, "Books / Videos reviewed"],
//       [null, "Sleep:", null, null, null, null],
//       [null, "Eat:", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "New friends or acquaintances made and what you learnt from them", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Action Plan for the coming month", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Comments by the mentor", null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Action Plan based on the counseling", null, null, null, null]
//     ];

//     // Create worksheet from the structured data
//     const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

//     // Add the worksheet to the workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Thinking Exercise");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${Date.now()}.xlsx`;

//     // Platform-specific file generation
//     if (Platform.OS === "web") {
//       // For web: create and download the file
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], {
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       return { fileUri: url, fileName };
//     } else {
//       // For mobile: save to file system
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
      
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
      
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };

// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     // Validate input data
//     if (!data || typeof data !== "object") {
//       throw new Error("Invalid data provided for Excel generation.");
//     }

//     // 1. Create a new workbook
//     const workbook = XLSX.utils.book_new();

//     // 2. Prepare worksheet data with fallbacks
//     const worksheetData = [
//       ["Student Monthly Report"],
//       [],
//       ["Student Name", data.studentName || "N/A"],
//       ["Month", data.month || "N/A"],
//       ["College", data.college || "N/A"],
//       ["Year of Study", data.yearOfStudy || "N/A"],
//       [],
//       ["Academic Progress"],
//       ["Subject", "Self-Assessment", "Justification"],
//       ...(Array.isArray(data.academicProgress)
//         ? data.academicProgress.map((item) => [
//             item.subject || "N/A",
//             item.selfAssessment || "N/A",
//             item.justification || "N/A",
//           ])
//         : [["N/A", "N/A", "N/A"]]),
//       [],
//       ["Monthly Plan"],
//       ["Action Plan", data.monthlyPlan?.actionPlan || "N/A"],
//       ["Mentor Comments", data.monthlyPlan?.mentorComments || "N/A"],
//       ["Counseling Plan", data.monthlyPlan?.counselingPlan || "N/A"],
//     ];

//     // 3. Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

//     // 4. Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Student Report");

//     // 5. Generate file
//     const fileName = `Student_Report_${Date.now()}.xlsx`;

//     if (Platform.OS === "web") {
//       // Web implementation
//       const excelBuffer = XLSX.write(workbook, {
//         type: "array",
//         bookType: "xlsx",
//       });
//       const blob = new Blob([excelBuffer], {
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       // Mobile implementation
//       const excelData = XLSX.write(workbook, {
//         type: "base64",
//         bookType: "xlsx",
//       });
//       const fileUri = FileSystem.cacheDirectory + fileName;

//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });

//       if (Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(fileUri);
//       }

//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("CoandExtraCurricularProgressPlan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows (1-6)
//     for (let i = 0; i < 6; i++) {
//       reportSheet.push(
//         ["", 
//          borderedCell(data.academicProgress[i]?.subject || (i + 1)), 
//          borderedCell(data.academicProgress[i]?.selfAssessment || ""), 
//          borderedCell(data.academicProgress[i]?.justification || ""), 
//          "", 
//          i === 4 ? borderedCell(data.coCurricular?.financialRequirements || "") : ""
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     }

//     // Real Life Project Section
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
//     );

//     // Extra English Section - CORRECTED FROM reportPush to reportSheet
//     reportSheet.push(
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Exam Results Section
//     reportSheet.push(
//       ["", borderedCell(`Results of the exams: ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Reading Section
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
//       ["", "", "", "", "", borderedCell(`Ladder status: ${data.healthAndReading?.ladderStatus || ""}`)]
//     );

//     // Health Section
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
//       ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Friends Section
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Essay Section
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = data.friendsAndEssay?.essay 
//       ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
//       : [];
    
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // Action Plan Section
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform, Alert } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     // Validate input data
//     if (!data || typeof data !== 'object') {
//       throw new Error('No data provided for Excel generation');
//     }

//     // Create workbook and worksheet
//     const workbook = XLSX.utils.book_new();
    
//     // Create worksheet data with all fields properly mapped
//     const worksheetData = [
//       [null, null, null, null, null, null],
//       [null, `Thinking Exercise of Student: ${data.studentName || "_______________________"} for the month of ${data.month || "_________"}`, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, `College: ${data.college || "____________________________"}        Year of Study: ${data.yearOfStudy || "_________"}`, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Academic Progress / Vacation Plan", null, null, null, "Co and Extra Curricular Progress-Plan"],
//       [null, null, null, null, null, null],
//       [null, "Subject / Activity", "Self-assessment", "Justification", null, null],
//       [null, null, null, null, null, null],
//       [null, "1", data.subject1?.assessment || null, data.subject1?.justification || null, null, null],
//       [null, null, null, null, null, null],
//       [null, "2", data.subject2?.assessment || null, data.subject2?.justification || null, null, null],
//       [null, null, null, null, null, null],
//       [null, "3", data.subject3?.assessment || null, data.subject3?.justification || null, null, null],
//       [null, null, null, null, null, null],
//       [null, "4", data.subject4?.assessment || null, data.subject4?.justification || null, "Fin Reqm for the next 3 months (Details Please)", null],
//       [null, "5", data.subject5?.assessment || null, data.subject5?.justification || null, data.financialReq1 || null, null],
//       [null, null, null, null, null, data.financialReq2 || null],
//       [null, "6", data.subject6?.assessment || null, data.subject6?.justification || null, data.financialReq3 || null, null],
//       [null, null, null, null, null, null],
//       [null, "7 Real Life Project", data.realLifeProject?.assessment || null, data.realLifeProject?.justification || null, null, "Difficulties (Social, Family, etc.)"],
//       [null, null, null, null, null, data.difficulties || null],
//       [null, "8 Extra English", data.extraEnglish?.assessment || null, data.extraEnglish?.justification || null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Results of the exams (Regular college / university and other exams):", data.examResults || null, null, null, "Reading Books / Watching Videos"],
//       [null, null, null, null, null, "Names of the ladder books/videos read:"],
//       [null, null, null, null, null, data.ladderBooks || null],
//       [null, null, null, null, null, "Names of the other books/videos:"],
//       [null, null, null, null, null, data.otherBooks || null],
//       [null, null, null, null, null, "Ladder status (books-videos read / books-videos to be read):"],
//       [null, "Its very important to exercise regularly and eat and sleep properly", null, null, null, null],
//       [null, `Exercise: ${data.exercise || ""}`, null, null, null, "Books / Videos reviewed"],
//       [null, `Sleep: ${data.sleep || ""}`, null, null, null, data.booksReviewed || null],
//       [null, `Eat: ${data.eat || ""}`, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "New friends or acquaintances made and what you learnt from them", data.newFriends || null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)", null, null, null, null],
//       ...(data.essay ? data.essay.split('\n').map(line => [null, line, null, null, null, null]) : Array(20).fill([null, null, null, null, null, null])),
//       [null, "Action Plan for the coming month", data.actionPlan || null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Comments by the mentor", data.mentorComments || null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, null, null, null, null, null],
//       [null, "Action Plan based on the counseling", data.counselingActionPlan || null, null, null, null]
//     ];

//     // Convert to worksheet and add to workbook
//     const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Thinking Exercise");

//     // Add empty sheets
//     XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([[]]), "Sheet2");
//     XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([[]]), "Sheet3");

//     // Generate file
//     const fileName = `Monthly_Thinking_Exercise_${data.studentName || "Student"}_${data.month || "Month"}.xlsx`;
    
//     if (Platform.OS === "web") {
//       // Web implementation
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       setTimeout(() => {
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url);
//       }, 100);
//       return { fileUri: url, fileName, success: true };
//     } else {
//       // Mobile implementation
//       const excelBase64 = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.documentDirectory + fileName;
      
//       await FileSystem.writeAsStringAsync(fileUri, excelBase64, {
//         encoding: FileSystem.EncodingType.Base64,
//       });

//       // Verify file creation
//       const fileInfo = await FileSystem.getInfoAsync(fileUri);
//       if (!fileInfo.exists) {
//         throw new Error('File was not created successfully');
//       }

//       // Share the file
//       if (Platform.OS === 'ios') {
//         await Sharing.shareAsync(fileUri);
//       } else {
//         Alert.alert(
//           'Success', 
//           'File saved successfully',
//           [
//             { text: 'Share', onPress: () => Sharing.shareAsync(fileUri) },
//             { text: 'Open', onPress: () => FileSystem.getContentUriAsync(fileUri)
//               .then(uri => Sharing.shareAsync(uri))
//               .catch(e => console.log('Open error:', e))
//             }
//           ]
//         );
//       }

//       return { fileUri, fileName, success: true };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     Alert.alert(
//       "Error",
//       `Failed to generate file: ${error.message}`,
//       [{ text: 'OK' }]
//     );
//     return { success: false, error: error.message };
//   }
// };

// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

    // // Academic Progress Rows (1-8)
    // for (let i = 0; i < 8; i++) {
    //   const financialReqContent = 
    //     i === 4 ? "Fin Reqm for the next 3 months (Details Please)" :
    //     i === 5 ? `1. ${data.coCurricular?.financialRequirements?.[0] || ""}` :
    //     i === 6 ? `2. ${data.coCurricular?.financialRequirements?.[1] || ""}` :
    //     i === 7 ? `3. ${data.coCurricular?.financialRequirements?.[2] || ""}` :
    //     "";

    //   reportSheet.push(
    //     ["", 
    //      borderedCell(data.academicProgress[i]?.subject || (i < 7 ? i + 1 : "")), 
    //      borderedCell(data.academicProgress[i]?.selfAssessment || ""), 
    //      borderedCell(data.academicProgress[i]?.justification || ""), 
    //      "", 
    //      borderedCell(financialReqContent)
    //     ]
    //   );
    //   reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
    // }

    // // Real Life Project Section
    // reportSheet.push(
    //   ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
    //   ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
    // );

    // Extra English Section
    // reportSheet.push(
    //   ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );

    // // Exam Results Section
    // reportSheet.push(
    //   ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Reading Section
    // reportSheet.push(
    //   ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
    //   ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
    //   ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
    //   ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
    //   ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
    //   ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${data.healthAndReading?.ladderStatus || ""}`)]
    // );

    // // Health Section
    // reportSheet.push(
    //   ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
    //   ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
    //   ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Friends Section
    // reportSheet.push(
    //   ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Essay Section
    // reportSheet.push(
    //   ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );
    
    // const essayLines = data.friendsAndEssay?.essay 
    //   ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
    //   : [];
    
    // essayLines.forEach(line => {
    //   reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
    // });

    // Action Plan Section
    // reportSheet.push(
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );

    // // Create worksheet
    // const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
    // // Set column widths
    // worksheet["!cols"] = [
    //   { width: 5 },  // Column A
    //   { width: 30 }, // Column B
    //   { width: 20 }, // Column C
    //   { width: 20 }, // Column D
    //   { width: 5 },  // Column E
    //   { width: 30 }  // Column F
    // ];

    // Add worksheet to workbook
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

    // // Generate file name
    // const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

    // if (Platform.OS === "web") {
    //   const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
    //   const blob = new Blob([excelBuffer], { 
    //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
    //   });
    //   const url = URL.createObjectURL(blob);
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.download = fileName;
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    //   return { fileUri: url, fileName };
    // } else {
    //   const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
    //   const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };

// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows (1-8)
//     for (let i = 0; i < 8; i++) {
//       const financialReqContent = 
//         i === 4 ? "Fin Reqm for the next 3 months (Details Please)" :
//         i === 5 ? `1. ${data.coCurricular?.financialRequirements?.[0] || ""}` :
//         i === 6 ? `2. ${data.coCurricular?.financialRequirements?.[1] || ""}` :
//         i === 7 ? `3. ${data.coCurricular?.financialRequirements?.[2] || ""}` :
//         "";

//       reportSheet.push(
//         ["", 
//          borderedCell(data.academicProgress[i]?.subject || (i < 7 ? i + 1 : "")), 
//          borderedCell(data.academicProgress[i]?.selfAssessment || ""), 
//          borderedCell(data.academicProgress[i]?.justification || ""), 
//          "", 
//          borderedCell(financialReqContent)
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     }

//     // Co and Extra Curricular Progress-Plan Section (ADDED THIS SECTION)
//     reportSheet.push(
//       ["", borderedCell("Co and Extra Curricular Progress-Plan"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.CoandExtraCurricularProgressPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Real Life Project Section
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
//     );
    

//     // Rest of your existing code remains the same...
//     // Extra English Section
//     reportSheet.push(
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Exam Results Section
//     reportSheet.push(
//       ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Reading Section
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
//       ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${data.healthAndReading?.ladderStatus || ""}`)]
//     );

//     // Health Section
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
//       ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Friends Section
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Essay Section
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = data.friendsAndEssay?.essay 
//       ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
//       : [];
    
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // Action Plan Section
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };



// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows (1-8)
//     for (let i = 0; i < 8; i++) {
//       let rightColumnContent = "";
      
//       if (i === 4) {
//         rightColumnContent = "Fin Reqm for the next 3 months (Details Please)";
//       } else if (i === 5) {
//         rightColumnContent = `1. ${data.coCurricular?.financialRequirements?.[0] || ""}`;
//       } else if (i === 6) {
//         rightColumnContent = `2. ${data.coCurricular?.financialRequirements?.[1] || ""}`;
//       } else if (i === 7) {
//         rightColumnContent = `3. ${data.coCurricular?.financialRequirements?.[2] || ""}`;
//       } else if (i === 0) {
//         // Add the Co and Extra Curricular Progress-Plan content in the first row's right column
//         rightColumnContent = data.coCurricular?.CoandExtraCurricularProgressPlan || "";
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(data.academicProgress[i]?.subject || (i < 7 ? i + 1 : "")), 
//          borderedCell(data.academicProgress[i]?.selfAssessment || ""), 
//          borderedCell(data.academicProgress[i]?.justification || ""), 
//          "", 
//          borderedCell(rightColumnContent)
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     }

//     // Remove the separate section for "Co and Extra Curricular Progress-Plan" that was in Column B
//     // It's now handled in the first row of the academic progress section

//     // Real Life Project Section
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
//     );

//     // Extra English Section
//     reportSheet.push(
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Exam Results Section
//     reportSheet.push(
//       ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Reading Section
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
//       ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${data.healthAndReading?.ladderStatus || ""}`)]
//     );

//     // Health Section
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
//       ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Friends Section
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Essay Section
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = data.friendsAndEssay?.essay 
//       ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
//       : [];
    
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // Action Plan Section
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };


// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows (1-8)
//     for (let i = 0; i < 8; i++) {
//       let rightColumnContent = "";
      
//       if (i === 4) {
//         // Display financial requirements as a single line
//         rightColumnContent = `Fin Reqm: ${data.coCurricular?.financialRequirements || ""}`;
//         // Skip the next two financial requirement rows
//         i = 6; // This will make the loop skip i=5 and i=6
//       } else if (i === 0) {
//         // Add the Co and Extra Curricular Progress-Plan content
//         rightColumnContent = data.coCurricular?.CoandExtraCurricularProgressPlan || "";
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(data.academicProgress[i]?.subject || (i < 7 ? i + 1 : "")), 
//          borderedCell(data.academicProgress[i]?.selfAssessment || ""), 
//          borderedCell(data.academicProgress[i]?.justification || ""), 
//          "", 
//          borderedCell(rightColumnContent)
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     }

//     // Real Life Project Section
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
//     );

//     // Rest of the code remains exactly the same...
//     // Extra English Section
//     reportSheet.push(
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Exam Results Section
//     reportSheet.push(
//       ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Reading Section
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
//       ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${data.healthAndReading?.ladderStatus || ""}`)]
//     );

//     // Health Section
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
//       ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Friends Section
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Essay Section
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = data.friendsAndEssay?.essay 
//       ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
//       : [];
    
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // Action Plan Section
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };







// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${data.thinkingExercise || "_________"} for the month of ${data.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${data.college || "_________"}        Year of Study: ${data.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows - Dynamic handling of all subjects
//     let financialReqAdded = false;
//     data.academicProgress.forEach((subject, index) => {
//       let rightColumnContent = "";
      
//       // Add Co-curricular content in first row
//       if (index === 0) {
//         rightColumnContent = data.coCurricular?.CoandExtraCurricularProgressPlan || "";
//       }
      
//       // Add financial requirements after 4 subjects (row 5)
//       if (index === 4 && !financialReqAdded) {
//         rightColumnContent = `Fin Reqm: ${data.coCurricular?.financialRequirements || ""}`;
//         financialReqAdded = true;
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(subject.subject || (index + 1)), 
//          borderedCell(subject.selfAssessment || ""), 
//          borderedCell(subject.justification || ""), 
//          "", 
//          borderedCell(rightColumnContent)
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     });

//     // Fill remaining rows if there are fewer than 8 subjects
//     const remainingRows = 8 - data.academicProgress.length;
//     for (let i = 0; i < remainingRows; i++) {
//       const emptyIndex = data.academicProgress.length + i;
//       let rightColumnContent = "";
      
//       // Add financial requirements in row 5 if not already added
//       if (emptyIndex === 4 && !financialReqAdded) {
//         rightColumnContent = `Fin Reqm: ${data.coCurricular?.financialRequirements || ""}`;
//         financialReqAdded = true;
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(emptyIndex + 1), 
//          borderedCell(""), 
//          borderedCell(""), 
//          "", 
//          borderedCell(rightColumnContent)
//         ]
//       );
//       reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
//     }

//     // Real Life Project Section
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(data.coCurricular?.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(data.coCurricular?.difficulties || "")]
//     );

//     // Extra English Section
//     reportSheet.push(
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.coCurricular?.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Rest of the sections remain exactly the same...
//     // Exam Results Section
//     reportSheet.push(
//       ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${data.coCurricular?.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Reading Section
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.ladderBooks || "")],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(data.healthAndReading?.otherBooks || "")],
//       ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${data.healthAndReading?.ladderStatus || ""}`)]
//     );

//     // Health Section
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(data.healthAndReading?.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(data.healthAndReading?.sleep || ""), borderedCell(""), "", borderedCell(data.healthAndReading?.reviewedBooks || "")],
//       ["", borderedCell("Eat:"), borderedCell(data.healthAndReading?.diet || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Friends Section
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.friendsAndEssay?.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(data.friendsAndEssay?.learnings || ""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Essay Section
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = data.friendsAndEssay?.essay 
//       ? data.friendsAndEssay.essay.match(/.{1,80}/g) || []
//       : [];
    
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // Action Plan Section
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(data.monthlyPlan?.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${data.thinkingExercise || "Student"}_${data.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };









// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     console.log("Generating Excel with data:", JSON.stringify(data, null, 2));

//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Helper function to create bordered cells
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" }
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top"
//         }
//       }
//     });

//     // Initialize data with proper fallbacks
//     const safeData = {
//       ...data,
//       academicProgress: Array.isArray(data?.academicProgress) 
//         ? data.academicProgress 
//         : Array(8).fill({}).map((_, i) => ({ subject: i+1 })),
//       coCurricular: data?.coCurricular || {},
//       healthAndReading: data?.healthAndReading || {},
//       friendsAndEssay: data?.friendsAndEssay || {},
//       monthlyPlan: data?.monthlyPlan || {}
//     };

//     // Header Section
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${safeData.thinkingExercise || "_________"} for the month of ${safeData.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${safeData.college || "_________"}        Year of Study: ${safeData.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Main Sections Header
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // Academic Progress Table Header
//     reportSheet.push(
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows - Dynamic handling of all subjects
//     let financialReqAdded = false;
//     safeData.academicProgress.forEach((subject, index) => {
//       let rightColumnContent = "";
      
//       // Add Co-curricular content in first row
//       if (index === 0) {
//         rightColumnContent = safeData.coCurricular.CoandExtraCurricularProgressPlan || "";
//       }
      
//       // Add financial requirements after 4 subjects (row 5)
//       if (index === 4 && !financialReqAdded) {
//         rightColumnContent = `Fin Reqm: ${safeData.coCurricular.financialRequirements || ""}`;
//         financialReqAdded = true;
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(subject.subject || (index + 1)), 
//          borderedCell(subject.selfAssessment || ""), 
//          borderedCell(subject.justification || ""), 
//          "", 
//          borderedCell(rightColumnContent)
//         ]
//       );
    //   reportSheet.push(["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]);
    // });

    // // Real Life Project Section
    // reportSheet.push(
    //   ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
    //   ["", borderedCell(safeData.coCurricular.realLifeProject || ""), borderedCell(""), borderedCell(""), "", borderedCell(safeData.coCurricular.difficulties || "")]
    // );

    // // Extra English Section
    // reportSheet.push(
    //   ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(safeData.coCurricular.extraEnglish || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );

    // // Exam Results Section
    // reportSheet.push(
    //   ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${safeData.coCurricular.examResults || ""}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Reading Section
    // reportSheet.push(
    //   ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
    //   ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
    //   ["", "", "", "", "", borderedCell(safeData.healthAndReading.ladderBooks || "")],
    //   ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
    //   ["", "", "", "", "", borderedCell(safeData.healthAndReading.otherBooks || "")],
    //   ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${safeData.healthAndReading.ladderStatus || ""}`)]
    // );

    // // Health Section
    // reportSheet.push(
    //   ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell("Exercise:"), borderedCell(safeData.healthAndReading.exercise || ""), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
    //   ["", borderedCell("Sleep:"), borderedCell(safeData.healthAndReading.sleep || ""), borderedCell(""), "", borderedCell(safeData.healthAndReading.reviewedBooks || "")],
    //   ["", borderedCell("Eat:"), borderedCell(safeData.healthAndReading.diet || ""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Friends Section
    // reportSheet.push(
    //   ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(safeData.friendsAndEssay.friends || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell("Learnings:"), borderedCell(safeData.friendsAndEssay.learnings || ""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    // );

    // // Essay Section
    // reportSheet.push(
    //   ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );
    
    // const essayLines = safeData.friendsAndEssay.essay 
    //   ? safeData.friendsAndEssay.essay.match(/.{1,80}/g) || []
    //   : [];
    
    // essayLines.forEach(line => {
    //   reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
    // });

    // // Action Plan Section
    // reportSheet.push(
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(safeData.monthlyPlan.actionPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(safeData.monthlyPlan.mentorComments || ""), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
    //   ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
    //   ["", borderedCell(safeData.monthlyPlan.counselingPlan || ""), borderedCell(""), borderedCell(""), "", borderedCell("")]
    // );

//     // Create worksheet
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
//     // Set column widths
//     worksheet["!cols"] = [
//       { width: 5 },  // Column A
//       { width: 30 }, // Column B
//       { width: 20 }, // Column C
//       { width: 20 }, // Column D
//       { width: 5 },  // Column E
//       { width: 30 }  // Column F
//     ];

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // Generate file name
//     const fileName = `Monthly_Thinking_Exercise_${safeData.thinkingExercise || "Student"}_${safeData.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("Error generating Excel file:", error);
//     throw error;
//   }
// };














// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Platform } from "react-native";
// import * as XLSX from "xlsx";

// export const generateExcelFile = async (data) => {
//   try {
//     // Debugging: Log the incoming data structure
//     console.log("INCOMING DATA:", JSON.stringify(data, null, 2));

//     // Data validation and normalization
//     const validatedData = {
//       ...data,
//       // Ensure academicProgress is always an array with 8 items
//       academicProgress: Array.isArray(data?.academicProgress)
//         ? data.academicProgress.map((item, index) => ({
//             subject: item?.subject || `Subject ${index + 1}`,
//             selfAssessment: item?.selfAssessment || "",
//             justification: item?.justification || "",
//           }))
//         : Array(8).fill({}).map((_, i) => ({
//             subject: `Subject ${i + 1}`,
//             selfAssessment: "",
//             justification: "",
//           })),
//       // Ensure all sections have proper fallbacks
//       coCurricular: data?.coCurricular || {
//         CoandExtraCurricularProgressPlan: "",
//         financialRequirements: "",
//         realLifeProject: "",
//         difficulties: "",
//         extraEnglish: "",
//         examResults: "",
//       },
//       healthAndReading: data?.healthAndReading || {
//         ladderBooks: "",
//         otherBooks: "",
//         ladderStatus: "",
//         exercise: "",
//         sleep: "",
//         diet: "",
//         reviewedBooks: "",
//       },
//       friendsAndEssay: data?.friendsAndEssay || {
//         friends: "",
//         learnings: "",
//         essay: "",
//       },
//       monthlyPlan: data?.monthlyPlan || {
//         actionPlan: "",
//         mentorComments: "",
//         counselingPlan: "",
//       },
//     };

//     console.log("VALIDATED DATA:", JSON.stringify(validatedData, null, 2));

//     const workbook = XLSX.utils.book_new();
//     const reportSheet = [];

//     // Styled cell generator
//     const borderedCell = (value) => ({
//       v: value,
//       s: {
//         border: {
//           top: { style: "thin" },
//           bottom: { style: "thin" },
//           left: { style: "thin" },
//           right: { style: "thin" },
//         },
//         alignment: {
//           wrapText: true,
//           vertical: "top",
//         },
//       },
//     });

//     // ===== HEADER SECTION =====
//     reportSheet.push(
//       [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`Thinking Exercise of Student: ${validatedData.thinkingExercise || "_________"} for the month of ${validatedData.month || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell(`College: ${validatedData.college || "_________"}        Year of Study: ${validatedData.yearOfStudy || "_________"}`), "", "", "", ""],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // ===== MAIN CONTENT SECTION =====
//     reportSheet.push(
//       ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
//     );

//     // Academic Progress Rows
//     let financialReqAdded = false;
//     validatedData.academicProgress.forEach((subject, index) => {
//       let rightColumnContent = "";
      
//       // First row gets co-curricular content
//       if (index === 0) {
//         rightColumnContent = validatedData.coCurricular.CoandExtraCurricularProgressPlan;
//       }
      
//       // Fifth row gets financial requirements
//       if (index === 4 && !financialReqAdded) {
//         rightColumnContent = `Fin Reqm: ${validatedData.coCurricular.financialRequirements}`;
//         financialReqAdded = true;
//       }

//       reportSheet.push(
//         ["", 
//          borderedCell(subject.subject), 
//          borderedCell(subject.selfAssessment), 
//          borderedCell(subject.justification), 
//          "", 
//          borderedCell(rightColumnContent)
//         ],
//         ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//       );
//     });

//     // ===== CO-CURRICULAR SECTIONS =====
//     reportSheet.push(
//       ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
//       ["", borderedCell(validatedData.coCurricular.realLifeProject), borderedCell(""), borderedCell(""), "", borderedCell(validatedData.coCurricular.difficulties)],
//       ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(validatedData.coCurricular.extraEnglish), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${validatedData.coCurricular.examResults}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // ===== READING SECTION =====
//     reportSheet.push(
//       ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
//       ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
//       ["", "", "", "", "", borderedCell(validatedData.healthAndReading.ladderBooks)],
//       ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
//       ["", "", "", "", "", borderedCell(validatedData.healthAndReading.otherBooks)],
//       ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${validatedData.healthAndReading.ladderStatus}`)]
//     );

//     // ===== HEALTH SECTION =====
//     reportSheet.push(
//       ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Exercise:"), borderedCell(validatedData.healthAndReading.exercise), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
//       ["", borderedCell("Sleep:"), borderedCell(validatedData.healthAndReading.sleep), borderedCell(""), "", borderedCell(validatedData.healthAndReading.reviewedBooks)],
//       ["", borderedCell("Eat:"), borderedCell(validatedData.healthAndReading.diet), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // ===== FRIENDS SECTION =====
//     reportSheet.push(
//       ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(validatedData.friendsAndEssay.friends), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell("Learnings:"), borderedCell(validatedData.friendsAndEssay.learnings), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
//     );

//     // ===== ESSAY SECTION =====
//     reportSheet.push(
//       ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );
    
//     const essayLines = validatedData.friendsAndEssay.essay?.match(/.{1,80}/g) || [];
//     essayLines.forEach(line => {
//       reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
//     });

//     // ===== ACTION PLAN SECTION =====
//     reportSheet.push(
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(validatedData.monthlyPlan.actionPlan), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(validatedData.monthlyPlan.mentorComments), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
//       ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
//       ["", borderedCell(validatedData.monthlyPlan.counselingPlan), borderedCell(""), borderedCell(""), "", borderedCell("")]
//     );

//     // ===== FINALIZE WORKSHEET =====
//     const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
//     worksheet["!cols"] = [
//       { width: 5 }, { width: 30 }, { width: 20 }, 
//       { width: 20 }, { width: 5 }, { width: 30 }
//     ];
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

//     // ===== FILE GENERATION =====
//     const fileName = `Monthly_Thinking_Exercise_${validatedData.thinkingExercise || "Student"}_${validatedData.month || "Month"}.xlsx`;

//     if (Platform.OS === "web") {
//       const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
//       const blob = new Blob([excelBuffer], { 
//         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
//       });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = fileName;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       return { fileUri: url, fileName };
//     } else {
//       const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
//       const fileUri = FileSystem.cacheDirectory + fileName;
//       await FileSystem.writeAsStringAsync(fileUri, excelData, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       return { fileUri, fileName };
//     }
//   } catch (error) {
//     console.error("FATAL ERROR IN EXCEL GENERATION:", error);
//     throw error;
//   }
// };







import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";
import * as XLSX from "xlsx";

export const generateExcelFile = async (data) => {
  try {
    console.log("RAW INPUT DATA:", JSON.stringify(data, null, 2));

    // Normalize academic data - ensure we have exactly 8 subjects
    const academicData = Array(8).fill().map((_, index) => {
      // Check if data exists and has academicProgress array with current index
      if (data?.academicProgress?.[index]) {
        const item = data.academicProgress[index];
        return {
          subject: item.subject || `Subject ${index + 1}`,
          selfAssessment: item.selfAssessment || "",
          justification: item.justification || ""
        };
      }
      // Return default row if no data
      return {
        subject: `Subject ${index + 1}`,
        selfAssessment: "",
        justification: ""
      };
    });

    // Prepare complete data structure with fallbacks
    const validatedData = {
      thinkingExercise : data?.thinkingExercise || "_________",
      month: data?.month || "_________",
      college: data?.college || "_________",
      yearOfStudy: data?.yearOfStudy || "_________",
      academicProgress: academicData,
      coCurricular: {
        CoandExtraCurricularProgressPlan: data?.coCurricular?.CoandExtraCurricularProgressPlan || "",
        financialRequirements: data?.coCurricular?.financialRequirements || "",
        realLifeProject: data?.coCurricular?.realLifeProject || "",
        difficulties: data?.coCurricular?.difficulties || "",
        extraEnglish: data?.coCurricular?.extraEnglish || "",
        examResults: data?.coCurricular?.examResults || ""
      },
      healthAndReading: {
        ladderBooks: data?.healthAndReading?.ladderBooks || "",
        otherBooks: data?.healthAndReading?.otherBooks || "",
        ladderStatus: data?.healthAndReading?.ladderStatus || "",
        exercise: data?.healthAndReading?.exercise || "",
        sleep: data?.healthAndReading?.sleep || "",
        diet: data?.healthAndReading?.diet || "",
        reviewedBooks: data?.healthAndReading?.reviewedBooks || ""
      },
      friendsAndEssay: {
        friends: data?.friendsAndEssay?.friends || "",
        learnings: data?.friendsAndEssay?.learnings || "",
        essay: data?.friendsAndEssay?.essay || ""
      },
      monthlyPlan: {
        actionPlan: data?.monthlyPlan?.actionPlan || "",
        mentorComments: data?.monthlyPlan?.mentorComments || "",
        counselingPlan: data?.monthlyPlan?.counselingPlan || ""
      }
    };

    console.log("PROCESSED DATA FOR EXCEL:", JSON.stringify(validatedData, null, 2));

    const workbook = XLSX.utils.book_new();
    const reportSheet = [];

    // Helper function for styled cells
    const borderedCell = (value) => ({
      v: value,
      s: {
        border: {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" }
        },
        alignment: {
          wrapText: true,
          vertical: "top"
        }
      }
    });

    // ===== HEADER SECTION =====
    reportSheet.push(
      [borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell(`Thinking Exercise of Student: ${validatedData.thinkingExercise} for the month of ${validatedData.month}`), "", "", "", ""],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell(`College: ${validatedData.college} Year of Study: ${validatedData.yearOfStudy}`), "", "", "", ""],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    );

    // ===== MAIN CONTENT SECTION =====
    reportSheet.push(
      ["", borderedCell("Academic Progress / Vacation Plan"), "", "", "", borderedCell("Co and Extra Curricular Progress-Plan")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell("Subject / Activity"), borderedCell("Self-assessment"), borderedCell("Justification"), "", ""]
    );

    // ===== ACADEMIC PROGRESS ROWS =====
    validatedData.academicProgress.forEach((subject, index) => {
      let rightColumnContent = "";
      
      // First row gets co-curricular content
      if (index === 0) {
        rightColumnContent = validatedData.coCurricular.CoandExtraCurricularProgressPlan;
      }
      
      // Fifth row gets financial requirements
      if (index === 4) {
        rightColumnContent = `Fin Reqm: ${validatedData.coCurricular.financialRequirements}`;
      }

      reportSheet.push(
        ["", 
         borderedCell(subject.subject), 
         borderedCell(subject.selfAssessment), 
         borderedCell(subject.justification), 
         "", 
         borderedCell(rightColumnContent)
        ],
        ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
      );
    });

    // [Rest of your sections remain exactly the same...]
    // Co-Curricular, Reading, Health, Friends, Essay, Action Plan sections...
     // ===== CO-CURRICULAR SECTIONS =====
    reportSheet.push(
      ["", borderedCell("7 Real Life Project"), borderedCell(""), borderedCell(""), "", borderedCell("Difficulties (Social, Family, etc.)")],
      ["", borderedCell(validatedData.coCurricular.realLifeProject), borderedCell(""), borderedCell(""), "", borderedCell(validatedData.coCurricular.difficulties)],
      ["", borderedCell("8 Extra English"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(validatedData.coCurricular.extraEnglish), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(`Results of the exams (Regular college / university and other exams): ${validatedData.coCurricular.examResults}`), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    );

    // ===== READING SECTION =====
    reportSheet.push(
      ["", "", "", "", "", borderedCell("Reading Books / Watching Videos")],
      ["", "", "", "", "", borderedCell("Names of the ladder books/videos read:")],
      ["", "", "", "", "", borderedCell(validatedData.healthAndReading.ladderBooks)],
      ["", "", "", "", "", borderedCell("Names of the other books/videos:")],
      ["", "", "", "", "", borderedCell(validatedData.healthAndReading.otherBooks)],
      ["", "", "", "", "", borderedCell(`Ladder status (books-videos read / books-videos to be read): ${validatedData.healthAndReading.ladderStatus}`)]
    );

    // ===== HEALTH SECTION =====
    reportSheet.push(
      ["", borderedCell("Its very important to exercise regularly and eat and sleep properly"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell("Exercise:"), borderedCell(validatedData.healthAndReading.exercise), borderedCell(""), "", borderedCell("Books / Videos reviewed")],
      ["", borderedCell("Sleep:"), borderedCell(validatedData.healthAndReading.sleep), borderedCell(""), "", borderedCell(validatedData.healthAndReading.reviewedBooks)],
      ["", borderedCell("Eat:"), borderedCell(validatedData.healthAndReading.diet), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    );

    // ===== FRIENDS SECTION =====
    reportSheet.push(
      ["", borderedCell("New friends or acquaintances made and what you learnt from them"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(validatedData.friendsAndEssay.friends), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell("Learnings:"), borderedCell(validatedData.friendsAndEssay.learnings), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")]
    );

    // ===== ESSAY SECTION =====
    reportSheet.push(
      ["", borderedCell("Essay on a topic of your choice including learning from the books read (Pl write in your own words, don't copy from the internet)"), borderedCell(""), borderedCell(""), "", borderedCell("")]
    );
    
    const essayLines = validatedData.friendsAndEssay.essay?.match(/.{1,80}/g) || [];
    essayLines.forEach(line => {
      reportSheet.push(["", borderedCell(line), borderedCell(""), borderedCell(""), "", borderedCell("")]);
    });

    // ===== ACTION PLAN SECTION =====
    reportSheet.push(
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell("Action Plan for the coming month"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(validatedData.monthlyPlan.actionPlan), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell("Comments by the mentor"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(validatedData.monthlyPlan.mentorComments), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(""), borderedCell(""), borderedCell(""), borderedCell(""), borderedCell("")],
      ["", borderedCell("Action Plan based on the counseling"), borderedCell(""), borderedCell(""), "", borderedCell("")],
      ["", borderedCell(validatedData.monthlyPlan.counselingPlan), borderedCell(""), borderedCell(""), "", borderedCell("")]
    );

    // Create worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(reportSheet);
    
    // Set column widths
    worksheet["!cols"] = [
      { width: 5 },  // Column A
      { width: 30 }, // Column B
      { width: 20 }, // Column C
      { width: 20 }, // Column D
      { width: 5 },  // Column E
      { width: 30 }  // Column F
    ];

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Monthly Report");

    // Generate file name
    const fileName = `Monthly_Thinking_Exercise_${validatedData.thinkingExercise || "Student"}_${validatedData.month || "Month"}.xlsx`;
    if (Platform.OS === "web") {
      const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
      const blob = new Blob([excelBuffer], { 
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return { fileUri: url, fileName };
    } else {
      const excelData = XLSX.write(workbook, { type: "base64", bookType: "xlsx" });
      const fileUri = FileSystem.cacheDirectory + fileName;
      await FileSystem.writeAsStringAsync(fileUri, excelData, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return { fileUri, fileName };
    }
  } catch (error) {
    console.error("Error generating Excel file:", error);
    throw error;
  }
};



