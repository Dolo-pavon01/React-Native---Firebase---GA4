# React Native APP

## Description
This is a React Native application. It is connected to Firebase for Google Analytics 4 (GA4) has been integrated to measure and analyze user interactions with the app.

## Features

- **Analytics**: GA4 integration to track user events, such as app navigation, interactions, and key conversions.

## Installation
To install and run the app locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dolo-pavon01/React-Native-APP.git
   cd React-Native-APP

2. **Install dependencies:**

   ```bash
   npm install

3. **Firebase Setup:**

   - Create a project in the Firebase Console.
   - Set up Authentication, Firestore, and Storage.
   - Download the google-services.json file and place it in the android/app directory for Android.
   - For iOS, download the GoogleService-Info.plist file and add it to your project in Xcode.
  
4. **Start the application:**

   ```bash
   npm run start

5. **Run on simulator or device::**

   ```bash
   npm run android
   npm run ios

## Google Analytics 4 Usage
We have configured GA4 to track events such as:

- User logins
- New user registrations
- nteractions and preferences
- Navigation between screens


These insights help us understand how users interact with the app and improve the user experience
