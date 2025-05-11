import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as XLSX from "xlsx";

export const generateExcelFile = async (
  formData,
  filename = "MonthlyThinkingExercise.xlsx"
) => {
  try {
    // 1. Prepare data layout (structured like a report)
    const sheetData = [
      ["Monthly Thinking Exercise"],
      [],
      ["Name", formData.name || ""],
      ["Date", formData.date || new Date().toLocaleDateString()],
      [],
      ["Section", "Response"],
      ["Academic Progress", formData.academicProgress || ""],
      ["Health and Reading", formData.healthAndReading || ""],
      ["Friends and Essay", formData.friendsAndEssay || ""],
      ["Action Plan", formData.actionPlan || ""],
      ["Mentor Comments", formData.mentorComments || ""],
      ["Counseling Plan", formData.counselingPlan || ""],
      ["Difficulties Faced", formData.difficulties || ""],
      ["Financial Requirements", formData.financial || ""],
      ["Exam Results", formData.examResults || ""],
      ["Co-curricular Activities", formData.activities || ""],
    ];

    // 2. Create worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

    // 3. Apply styling (basic — bold for headings)
    const boldCell = { font: { bold: true } };

    // Bold the main title
    worksheet["A1"].s = boldCell;

    // Bold metadata labels
    worksheet["A3"].s = boldCell;
    worksheet["A4"].s = boldCell;

    // Bold the table headers ("Section", "Response")
    worksheet["A6"].s = boldCell;
    worksheet["B6"].s = boldCell;

    // 4. Build workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "MonthlyReport");

    // 5. Convert to base64
    const base64Excel = XLSX.write(workbook, {
      type: "base64",
      bookType: "xlsx",
      cellStyles: true,
    });

    // 6. Save and share
    const fileUri = FileSystem.documentDirectory + filename;
    await FileSystem.writeAsStringAsync(fileUri, base64Excel, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Sharing.shareAsync(fileUri, {
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      dialogTitle: "Share Monthly Thinking Exercise",
      UTI: "com.microsoft.excel.xlsx",
    });

    console.log(" Excel file created and shared!");
  } catch (error) {
    console.error(" Error generating Excel file:", error);
  }
};
