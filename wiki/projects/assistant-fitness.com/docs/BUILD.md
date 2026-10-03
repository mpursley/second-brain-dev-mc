# Native Build Instructions (iOS & Android)

This guide provides step-by-step instructions on how to build, test, and release the Assistant Fitness application for both iOS and Android. The project relies on [Capacitor](https://capacitorjs.com/) to wrap our React/Vite web application into native mobile apps.

## Prerequisites

Before building natively, ensure you have the following installed:
1. **Node.js** and **npm** (for web assets)
2. **Android Studio** (for Android builds)
3. **Xcode** (for iOS builds - requires a Mac)
4. **Capacitor CLI**: Available via `npx cap` once `npm install` is run.

---

## General Workflow

Every time you make a change to the web app (`src/`), you must build the web bundle and sync it to your native projects before building the apps.

1. Install dependencies: `npm install`
2. Build the web app: `npm run build`
3. Sync to native projects:
   - Android: `npm run sync:android`
   - iOS: `npm run sync:ios`

---

## 🤖 Android Build Guide

### 1. Sync the project
Run the custom helper script that builds the web app and copies assets to the `android/` directory:
```bash
npm run build
npm run sync:android
```

### 2. Open Android Studio
You can open the project in Android Studio by running:
```bash
npx cap open android
```
*Alternatively, launch Android Studio manually and open the `android/` folder in your project.*

### 3. Run on a Device or Emulator
1. Wait for Android Studio to finish "Syncing Gradle" (watch the progress bar at the bottom).
2. Select your target device (Physical Phone or Emulator) from the dropdown at the top.
3. Click the **Run** button (green play icon) or press `Shift + F10`.

### 4. Create a Release Build (.aab / .apk)
To create a production build for the Google Play Store:
1. In Android Studio, go to **Build** > **Generate Signed Bundle / APK...**
2. Choose **Android App Bundle** (required for Google Play).
3. Select your Keystore file, enter your alias and passwords.
4. Select the `release` build variant and click **Finish**.
5. Upload the resulting `.aab` file to the Google Play Console.

---

## 🍏 iOS Build Guide

### 1. Sync the project
Run the custom helper script that builds the web app and copies assets to the `ios/` directory:
```bash
npm run build
npm run sync:ios
```

### 2. Open Xcode
You can open the project in Xcode by running the built-in script:
```bash
npm run open:ios
```
*Alternatively, run `npx cap open ios` or double click `ios/App/App.xcworkspace` to open directly in Xcode.*

### 3. Run on a Device or Simulator
1. In Xcode, select your target device (e.g., iPhone 15 Pro simulator or your connected iPhone) from the top device dropdown menu.
2. Ensure you have a valid Apple Developer Team selected under the **App** > **Signing & Capabilities** tab.
3. Click the **Run** button (Play icon) or press `Cmd + R`.

### 4. Create a Release Build (.ipa)
To create a production build for the Apple App Store / TestFlight:
1. In Xcode, select **Any iOS Device (arm64)** from the device dropdown.
2. From the top menu bar, select **Product** > **Archive**.
3. Once the archive completes, the Organizer window will open.
4. Click **Distribute App** and follow the prompts to upload directly to App Store Connect / TestFlight.
