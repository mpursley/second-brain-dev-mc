# Application Testing & Validation

This document outlines the standard functions and environments that must be tested and validated whenever a new version is bumped and deployed.

## The Standard Functions to Test

During any validation pass, ensure the following core functionalities are working correctly:

- **Login Screen:** 
  - Verify that the correct version number is displayed on the login screen.
  - Successfully log in using Google Authentication.
- **Home Screen:** 
  - Verify that daily activity, food items, and vitamins are properly populated and displayed.
- **Food Screen:** 
  - Confirm that today's logged food appears.
  - Verify that the last few days of food logs are accessible and accurate.
  - Successfully add a new food item (including testing the photo snap/AI parsing).
- **Activity Screen:** 
  - Check that activity data is successfully syncing from the Android or iOS phone (via Health Connect or Apple Health).
- **Vitamins Screen:** 
  - Ensure daily vitamins show up correctly.
  - Verify the daily summary calculations and checkmarks are accurate.
- **Chat Screen:** 
  - Successfully send a message to the AI agent and receive a valid, context-aware response.
- **Log Screen:** 
  - Verify that the unified log correctly displays recent items across all tracked categories (food, sleep, hydration, etc.).
- **Settings Screen:** 
  - Check that the correct version number is displayed in the UI.
  - Test the Data Management function to ensure the `export.zip` downloads properly and contains the correct formatted JSON data.

---

## Release Validation Workflow

After a version bump (`scripts/version.sh`), the "Standard Functions" above must be tested sequentially across the following environments:

### 1. Localhost
- Run the app locally (`npm run dev`) and test all standard functions.

### 2. Dev Environment
- Deploy to Dev and test all standard functions on **[dev.goal-tracker.live](https://dev.goal-tracker.live)**.

### 3. Test Environment
- Deploy to Test and test all standard functions on **[test.goal-tracker.live](https://test.goal-tracker.live)**.

### 4. Production Environment
Once deployed to Production, verify the deployment across all major platforms:
- **Web:** Test all standard functions on **[www.goal-tracker.live](https://www.goal-tracker.live)**.
- **Android:** Test all standard functions on a physical Android phone (or emulator).
- **iOS:** Test all standard functions on a physical iOS phone (or emulator).
