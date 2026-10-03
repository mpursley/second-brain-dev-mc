# Deployment Guide for Assistant Fitness

This document outlines the branching strategy and deployment process for the Assistant Fitness application to Google Cloud Run across different environments.

## Environments and Branch Mapping

We utilize three primary environments, each mapped to a specific git branch and Google Cloud Run service:

| Environment | Git Branch | Cloud Run Service Name        | Purpose                                                                 |
| :---------- | :--------- | :---------------------------- | :---------------------------------------------------------------------- |
| **Dev**     | `dev`      | `dev-assistant-fitness-com`   | Active development, rapid iteration, and initial testing of new code.   |
| **Test**    | `test`     | `test-assistant-fitness-com`  | Staging environment for QA, integration testing, and final review.      |
| **Prod**    | `main`     | `assistant-fitness-com`       | Production environment serving live users. Must be stable and verified. |

## Deployment Process

Deployments are handled via bash scripts that use Google Cloud Buildpacks to containerize the application and deploy it to Cloud Run.

### Prerequisites
- Google Cloud CLI (`gcloud`) installed and authenticated.
- Correct project selected (`gcloud config set project YOUR_PROJECT_ID`).
- A `.env` file containing required secrets (like `GEMINI_API_KEY`) must be present locally before deploying.

### 1. Deploying to Development (Dev)

When working on new features or bug fixes, commit your changes to the `dev` branch.

**To deploy:**
1. Ensure you are on the `dev` branch: `git checkout dev`
2. Run the dev deployment script:
   ```bash
   bash scripts/deploy-dev.sh
   ```
This script deploys the application to the `dev-assistant-fitness-com` service.

### 2. Deploying to Testing/Staging (Test)

Once a feature is stable in `dev` and ready for QA, merge `dev` into the `test` branch.

**To deploy:**
1. Create/switch to the `test` branch: `git checkout test` (or create a PR from `dev` to `test`)
2. Pull latest changes if necessary.
3. Ensure you have a `deploy-test.sh` script (similar to dev/prod but targeting `test-assistant-fitness-com`).
4. Run the test deployment script:
   ```bash
   bash scripts/deploy-test.sh
   ```

### 3. Deploying to Production (Prod)

When the `test` environment is verified and approved, create a Pull Request (PR) from `test` (or `dev` depending on the flow) to the `main` branch.

**To deploy:**
1. Merge the PR into the `main` branch.
2. Checkout the `main` branch locally: `git checkout main`
3. Pull the latest changes: `git pull origin main`
4. Run the production deployment script:
   ```bash
   bash scripts/deploy.sh
   ```
This script deploys the application to the `assistant-fitness-com` service.

## Environment Variables

All deployment scripts inject environment variables (like `GEMINI_API_KEY`) directly into the Cloud Run build and runtime environments using the `--set-env-vars` and `--set-build-env-vars` flags. Ensure your local `.env` file is up-to-date before running a deployment script, as the script reads from it.

## Native App Store Deployment (iOS & Android)

### Building for iOS (Apple App Store)
1. Build the web assets and sync to the iOS project using the helper script:
   ```bash
   bash scripts/sync-ios.sh
   ```
2. Open the project in Xcode:
   ```bash
   npx cap open ios
   ```
3. In Xcode, ensure your target device is set to **Any iOS Device (arm64)**.
4. Go to the top menu bar and click **Product** -> **Archive**.
5. Once archived, the **Archives Organizer** window will automatically pop up.
6. Select your newly created archive and click **Distribute App** -> **App Store Connect** -> **Upload**.
7. Follow the prompts to upload the build to App Store Connect.

### Building for Android (Google Play Store)
1. Build the web assets and sync to the Android project using the helper script:
   ```bash
   bash scripts/sync-android.sh
   ```
2. Open the project in Android Studio:
   ```bash
   npx cap open android
   ```
3. In Android Studio, go to the top menu bar and click **Build** -> **Generate Signed Bundle / APK**.
4. Select **Android App Bundle** and click Next.
5. Provide the keystore credentials and build the release bundle.
6. Upload the generated `app-release.aab` file to the Google Play Console for your new release.
