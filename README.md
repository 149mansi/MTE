# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## 📄 Project Overview

This app guides students through:

📚 Academic Progress

🎯 Monthly Plans

🧠 co-curricular section

🧘‍♀️ Health and Reading Tracking

📝 Friends and Essay Reflections

🧾 Excel File Generation (with exceljs)

All user input is collected through a screen-by-screen form flow and saved in context or storage, then compiled into a structured Excel file.

## 📂 Project Structure

```
  /my-app
 ┣ /android                 # Android-specific files
 ┣ /app                     # Screens and main app files
 ┃ ┣ AcademicProgress.jsx
 ┃ ┣ Co-Curricular section.jsx
 ┃ ┣ FriendsAndEssayForm.jsx
 ┃ ┣ HealthAndReading.jsx
 ┃ ┣ MonthlyPlanForm.jsx
 ┃ ┣ home.jsx
 ┃ ┣ login.jsx
 ┃ ┣ signUp.jsx
 ┃ ┣ welcome.jsx
 ┃ ┣ _layout.jsx
 ┃ ┗ index.jsx
 ┣ /assets
 ┃ ┣ /fonts
 ┃ ┗ /icons                # Custom SVG icons
 ┃     ┣ ArrowLeft.jsx
 ┃     ┣ Comment.jsx
 ┃     ┗ ...
 ┣ /components             # Reusable UI components
 ┃ ┣ BackButton.jsx
 ┃ ┣ Button.jsx
 ┃ ┣ Input.jsx
 ┃ ┣ LoadingScreen.jsx
 ┃ ┗ screenWrapper.jsx
 ┣ /constants              # Constants like theme and values
 ┃ ┣ index.js
 ┃ ┗ theme.js
 ┣ /contexts               # Global state management
 ┃ ┣ AppDataContext.js
 ┃ ┗ AuthContext.js
 ┣ /helpers or /lib
 ┃ ┣ supabase.js
 ┃ ┗ ...
 ┣ /scripts                # Project reset script
 ┣ /services               # API services
 ┃ ┗ userService.js
 ┣ /utils
 ┃ ┣ generateExcelFile.js
 ┃ ┗ generateWordFile.js
 ┣ .gitignore
 ┣ app.json
 ┣ expo-env.d.ts
 ┣ metro.config.js
 ┣ package.json
 ┣ README.md
 ┣ shim.js
 ┗ tsconfig.json
```

## ✅ Features
✔️ Easy navigation with Next/Previous buttons

✔️ State saved using global context (AppDataContext)

✔️ Export to Excel with matching format

✔️ File upload (Firebase/Supabase)

✔️ Designed for mobile-first use

## 📄 Excel File Generation
The app uses the exceljs library to:

📐 Format the output like the official .xls template

🧾 Export all inputs into one downloadable file

✅ It generates a structured Excel file similar to the official format.

☁️ Optionally upload it to Supabase or Firebase Storage

## 🐞 Known Issues

 🔁 Maximum Update Depth Exceeded
Cause: useEffect without correct dependencies

Fix: Use stable dependency array or conditionally call setState

🔄 Data Lost on Navigation
Cause: Data stored only with useState, not globally

Fix: Use AppDataContext to store values across screens

🌐 Network Request Failed
Cause: Offline or misconfigured API (Supabase/Firebase)

Fix: Check credentials and internet access
## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## 🙋‍♀️ Author

**Mansi Utane**  
📩 mansiutane811@gmail.com

### 🎓 Guided by

**Prof. Piyush Mehta wowwill.in**  
(Mentor & Project Guide)

## 🙏 Acknowledgements

I would like to express my sincere gratitude to **Prof. Piyush Mehta wowwill.in**  
for his continuous guidance, encouragement, and expert advice during the development of this project.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
