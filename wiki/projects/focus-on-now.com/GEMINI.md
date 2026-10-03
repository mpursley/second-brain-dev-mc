# Gemini AI Coding Guidelines

This document serves as the project-specific system context and ruleset for Gemini (and any other AI coding assistant) working on the Assistant Fitness application. 

**Whenever instructed to implement new features, edit existing mechanisms, or debug the Assistant Fitness repository, YOU MUST adhere to the following rules:**

## 1. Core Technology Stack
- **Frontend Framework:** React with TypeScript, built via Vite.
- **Native Wrapper:** Capacitor (specifically targeting Android for now).
- **Styling:** Vanilla CSS (`index.css`) exclusively. Do **NOT** use TailwindCSS or any utility-class UI framework unless explicitly instructed.
- **Backend:** Google Cloud Run (Hosting/Web) & Firebase/Firestore (Database, Auth rules).

## 2. Design & Aesthetics
- Maintain a premium, dark-mode native interface aesthetic. 
- Use harmonious color palettes, subtle micro-animations (glassmorphism/hover effects), and modern typography. Unstyled, generic HTML elements are prohibited.
- Responsive design is mandatory: components must gracefully scale from mobile phone layouts up to wider tablet/web formats.

## 3. Native Device APIs (Health Connect)
- We use the `@capgo/capacitor-health` plugin to interface with Android Health Connect.
- **Platform Checks:** Always aggressively wrap native API calls in `if (Capacitor.isNativePlatform())` to prevent the web build from crashing.
- **Permissions:** Android `AndroidManifest.xml` controls access. If you add a new health data request in JS, you **MUST** ensure the corresponding `<uses-permission>` exists in the manifest.
- **Known Quirks:** 
  - `totalCalories` cannot be safely aggregated via `queryAggregated` without throwing a `java.lang.IllegalArgumentException` on some Android versions. Always read calories via `readSamples` and merge data by source name to avoid crashes.
  - Native Health logic should fail gracefully, catching exceptions so the UI loop continues uninterrupted for manual inputs.

## 4. Development Workflow
- **Script Executions:** Defer to the scripts folder (`scripts/deploy.sh`, `sync-whitelist.sh`).
- **TODO Management:** All feature requests, bugs, and project tasks MUST be tracked in `docs/TODO.md`. Never create a new TODO file in the root directory.
- **Shell Environment:** The default non-interactive shell may lack paths for `npm` or `npx`. If `npm` commands fail with "command not found", you MUST explicitly append the homebrew bin paths to your command: `export PATH=$PATH:/opt/homebrew/bin:/usr/local/bin && npm ...`.
- **Version Bumping:** Whenever completing an increment to the app logic, you MUST strictly follow the exact version bumping, release notes, and git commit steps outlined in Section 2 of `WORKFLOW.md`. Do not skip any steps.
- Always verify the user is logged into `gcloud` locally for deployment, and `application-default login` for isolated Node scripts interacting with Firestore Admin.

## 5. Security & White-labeling
- This app utilizes a `whitelist.txt` driven Firestore security rule policy. Any database architecture modifications must ensure `whitelist` access scopes aren't broken.
- Ensure that the app remains branded under "Assistant Fitness" instead of internal operational code names.
