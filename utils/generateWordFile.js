import { Document, Packer, Paragraph, TextRun } from "docx";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export const generateWordFile = async (data, filename = "MonthlyThinkingExercise.docx") => {
  try {
    // 1. Create document
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Monthly Thinking Exercise", bold: true, size: 32 })],
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Name: ", bold: true }),
                new TextRun(data.name || ""),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Date: ", bold: true }),
                new TextRun(data.date || new Date().toLocaleDateString()),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [new TextRun({ text: "Details", bold: true, size: 28 })],
            }),
            ...Object.entries(data).map(([key, value]) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${key}: `, bold: true }),
                  new TextRun(value || "N/A"),
                ],
              })
            ),
          ],
        },
      ],
    });

    // 2. Generate the Word file as a base64 string
    const base64String = await Packer.toBase64String(doc);

    const fileUri = FileSystem.documentDirectory + filename;

    // 3. Save the Word file
    await FileSystem.writeAsStringAsync(fileUri, base64String, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 4. Share the file
    await Sharing.shareAsync(fileUri, {
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      dialogTitle: "Share Monthly Thinking Exercise",
      UTI: "com.microsoft.word.doc",
    });

    console.log("Word file created and shared!");
  } catch (error) {
    console.error("Error generating Word file:", error);
  }
};
