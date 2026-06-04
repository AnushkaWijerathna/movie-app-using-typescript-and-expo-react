# 📱 MovieApp | React Native Expo App

> **Note:** A mobile-responsive application developed as part of my Mobile Communication studies. Built using Expo (React Native) with TypeScript, focusing on mobile UI, responsiveness, and core communication concepts.

---

## 📸 Screenshots

https://github.com/user-attachments/assets/3cc6273a-d7f1-4c2d-83a4-41fe718d052b

---

## 📋 Table of Contents

* [🚀 Key Features](#-key-features)
* [⚙️ Tech Stack](#️-tech-stack)
* [🏗️ Project Structure](#️-project-structure)
* [🤸 Quick Start — Local Development](#-quick-start--local-development)
* [📱 How to View the App](#-how-to-view-the-app)
* [📸 Screenshots](#-screenshots)
* [📄 License](#-license)

---

## 🚀 Key Features

* **Cross-Platform Compatibility:** Runs seamlessly on both iOS and Android devices from a single codebase.
* **Fully Responsive UI:** Adapts to different screen sizes and orientations, ensuring a smooth user experience on any mobile device.
* **Type-Safe Architecture:** Built entirely with TypeScript for early error catching and highly maintainable code.
* **Core Mobile Concepts:** Implements essential mobile communication patterns and UI/UX best practices.
* **Fast Refresh:** Utilizes Expo's fast refresh for rapid UI iteration and development.

---

## ⚙️ Tech Stack

* **Framework:** React Native
* **Environment:** Expo
* **Language:** TypeScript
* **Package Manager:** npm (or Yarn)
* **Version Control:** Git & GitHub

---

## 🏗️ Project Structure

```text
MobileComm/
│
├── assets/          # Images, fonts, and icons
├── src/             # Source code (if using a src directory)
│   ├── components/  # Reusable UI components
│   ├── screens/     # Full-screen views/pages
│   └── utils/       # Helper functions and hooks
├── App.tsx          # Main application entry point
├── app.json         # Expo configuration file
├── package.json     # Project dependencies
└── README.md
```
##🤸 Quick Start — Local Development
Follow these steps to set up the project locally on your machine.

### 1. Prerequisites
Make sure you have the following installed:

* Node.js (LTS version recommended)

* Git

* A mobile device with the Expo Go app installed (available on iOS App Store & Google Play Store), OR an Android Studio / Xcode emulator setup on your computer.

### 2. Clone the Repository
```Bash
git clone [https://github.com/YourUsername/YourRepoName.git](https://github.com/YourUsername/YourRepoName.git)
cd YourRepoName
```
### 3. Install Dependencies
```Bash
npm install
```

### 4. Start the Expo Development Server
```Bash
npx expo start
(Alternatively, you can use npm start)
```
##📱 How to View the App
* Once you run npx expo start, a terminal window will open displaying a large QR code and a list of command shortcuts.

### Option A: View on a Physical Device (Easiest)
* Download the Expo Go app on your iPhone or Android device.

* Make sure your phone and your computer are on the same Wi-Fi network.

* On Android: Open the Expo Go app and tap "Scan QR Code".

* On iOS: Open your default iPhone Camera app, point it at the QR code in your terminal, and tap the "Open in Expo Go" notification.

### Option B: View on a Desktop Emulator
* If you have Android Studio or Xcode installed and configured on your machine:

* Press a in your terminal to open the app in the Android Emulator.

* Press i in your terminal to open the app in the iOS Simulator (Mac only).

* Press w in your terminal to open the app in a web browser (if web support is enabled).

## 📄 License
This project was developed for educational purposes as part of my Mobile Communication studies.
