# Goal Tracker Workflow & Development Guide

This document outlines the standard workflow and operational procedures for developing and maintaining the Goal Tracker application.

## 1. Project Scripts
All operational scripts are located in the `scripts/` directory to keep the root directory clean. Common scripts include:
- `scripts/deploy.sh` - Builds and deploys the web version of the application to Google Cloud Run (dev/prod).
- `scripts/sync-whitelist.sh` - Synchronizes the users in `whitelist.txt` up to Firestore database rules.
- `scripts/manage.sh` - (If applicable) Starts, stops, or manages the local background service/dev server.
- `scripts/build-android.sh` - Automates syncing the web assets to Capacitor and opens Android Studio for testing.

*Note: You can usually execute these via npm commands like `npm run sync:whitelist` or `npm run dev`.*

## 2. Standard Development Workflow
When making changes or adding features to this app, please follow this step-by-step process:

1. **Make the Changes**
   - Write your code, update your UI components, or fix the bug.
   - If utilizing native APIs (like Health Connect), ensure you update `android/app/src/main/AndroidManifest.xml` permissions if needed.

2. **Update State and Database Rules (If Applicable)**
   - If you are adding new fields or updating the data model in `src/store.ts`, you **MUST** also update the domain validation functions in `firestore.rules`. 
   - Firestore security rules strictly validate all incoming data via `hasOnlyAllowedFields`. Failing to update the rules will result in "insufficient permissions" errors when the app attempts to sync to Firebase.

3. **Bump the Version & Create a Dev Branch**
   - Open `package.json` and bump the `"version"` (e.g., `1.2.6` -> `1.2.7`).
   - Open `android/app/build.gradle` and bump the `versionCode` (increment the integer) and `versionName` (to match `package.json`).
   - Open `ios/App/App.xcodeproj/project.pbxproj` and bump `CURRENT_PROJECT_VERSION` (increment the integer) and `MARKETING_VERSION` (to match `package.json`).
   - Open `ios/App/App/Info.plist` and bump `CFBundleVersion` (increment the integer) and `CFBundleShortVersionString` (to match `package.json`).
   - Open `docs/RELEASE_NOTES.md` and append a summary of the changes made in this version. This will be used for the Google Play and iOS App Store release notes.
   - Run `./scripts/version.sh` to verify that all platform version numbers and build numbers are perfectly aligned.
   - **Important:** Create and checkout a new dev branch named after the new version (e.g., `git checkout -b v1.2.7-dev`) before continuing work.

4. **Commit to Git**
   - Run `git status` and `git diff` to review your changes.
   - Stage your files using `git add .` and commit them using standard branch commit naming conventions. Your commit messages should declare the nature of the change:
     - `feat:` for new features (e.g., `feat: sync 7 days of health history on startup`)
     - `fix:` for bug fixes (e.g., `fix: resolve health connect permissions bug`)
     - `docs:` for documentation updates
     - `chore:` for routine bumps, dependency updates, and maintenance

5. **Deploy to Dev Environment for Testing**
   - Before shipping to production or Android, push your web bundle to the Cloud Run `dev` branch.
   - Run: `./scripts/deploy.sh dev`.
   - Wait for the image to build and verify it scales/works correctly in the browser.

6. **Build and Test Native Android**
   - Sync Capacitor using `npx cap sync android` (or via your IDE).
   - Build a new `.aab` or `.apk` via Android Studio and push it to your personal device.
   - Test the background tracking natively on your device.

7. **Submit for Review (Google Play)**
   - If the Android update requires new permissions, *remember to update your App Content declarations* (like Data Safety and Health Apps) in the Google Play Console!
   - Ensure you send the new App Bundle AND any App Content declarations to the queue simultaneously by hitting the "Send changes for review" button on the Publishing Overview page.

## 3. Agent Skills
Agent skills are formalized, executable scripts that the AI (via the Gemini CLI) can use to automate parts of this workflow. 

While this `WORKFLOW.md` file serves as persistent contextual knowledge for the AI, actual executable "skills" are stored in the `.gemini/skills/` directory.

- `.gemini/skills/release.md` - Automates the bumping of version numbers across `package.json`, Android, and iOS build files, and helps stage the commit for release.
