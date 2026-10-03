# Release Notes

These notes are maintained to be easily copied into the Google Play Console and Apple App Store release pages.

---

<!--
### TEMPLATE FOR NEW RELEASES

🚀 Version X.X.X (Build XXX) - Release Notes

### Full Version

🌟 What's New with vX.X.X:

- **Feature Name**: Description of the new feature.
- **Improvement Name**: Description of the improvement.
- **Bug Fix**: Description of the bug fix.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with vX.X.X:

- Feature Name: Short description of the new feature.
- Improvement Name: Short description of the improvement.
- Bug Fix: Short description of the bug fix.

---
-->

🚀 Version 2.6.3 (Build 263) - Release Notes

### Full Version

🌟 What's New with v2.6.3:

- **Dynamic Fuel Insights**: Removed static status text from the Fuel view; fuel balance and eating patterns are now driven purely by your dynamic weekly data.
- **High-Contrast Analytics**: Upgraded custom question charts with high-contrast, saturated colors for crisp readability on light backgrounds, with rich option text in tooltips.
- **Admin & User Management Tools**: Added account creation date sorting and live recent-signup metrics to administrative tools.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.6.3:

- Fuel Polish: Cleaner Fuel dashboard with purely dynamic weekly eating patterns.
- High-Contrast Charts: Vibrant custom question graphs with high readability on light backgrounds.
- Stability and performance improvements across iOS and Android.

---

🚀 Version 2.6.2 (Build 262) - Release Notes

### Full Version

🌟 What's New with v2.6.2:

- **Check-in Orb Memory & Pre-population**: When opening the app in the morning to check in, the Orb and question pills now immediately reflect the values, colors, and shape of your previous check-in (including offline local caching), rather than defaulting to empty/drained states.
- **Resilient Check-in History Extraction**: Multi-check-in and custom question logs are now gracefully scanned so your base wellness scores (Energy, Mood, Sleep, Hunger, Joy) are preserved and visualized accurately.
- **Vibrant Custom Question Graph Colors**: Upgraded custom question charts with high-contrast, saturated colors (Teal, Rose, Amber, Indigo, Tangerine, Cerulean, Plum, Emerald, Violet, Terracotta) for crystal-clear readability against light backgrounds, plus rich option text in tooltips.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.6.2:

- Check-in Orb Memory: The morning check-in Orb and options instantly reflect your previous check-in values and vibrant state.
- Check-in History: Improved synchronization across multiple daily check-ins and custom questions.
- High-Contrast Charts: Vibrant custom question graphs with high readability on light backgrounds.

---

🚀 Version 2.6.1 (Build 261) - Release Notes

### Full Version

🌟 What's New with v2.6.1:

- **Firestore Reliability & Multi-part Chat Storage**: Fixed nested array serialization in cloud storage to allow seamless chat session logging with attached images and custom question responses without nested entity errors.
- **Enhanced Fig Slash Commands**: Added powerful new `/get` subcommands in Fig chat:
  - `/get summary <days>`: Complete 360° day snapshot combining Fuel, Burn, Net energy balance, Workouts, Sleep duration, Hydration, and Check-ins.
  - `/get health <days>`: Real-time overview of connected health sync data, tracked workout sessions, total steps, and vitals.
  - `/get hydration <days>`: View daily water intake logs and progress toward hydration goals.
  - `/get hr <days>`: Average daytime Heart Rate, Resting HR (RHR), and Heart Rate Variability (HRV) trends.
  - `/get targets`: Instant breakdown of your calculated BMR, TDEE, Calorie Goal, and Protein/Fat/Carb targets.
- **Health Connect Permissions & Stability**: Resolved Health Connect permission rationales and permissions window crashes on Android 14/15. Optimized vitals and calorie sync to seamlessly pull step counts, distance, heart rate, and workout history.
- **Robust AI Food Logging**: Hardened nutritional AI analysis with resilient JSON extraction across Fuel and Food logging tabs to ensure seamless meal estimations without parsing errors.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.6.1:

- Cloud Sync Reliability: Resolved Firestore save errors when saving chat sessions with images and check-in options.
- New Fig Commands: Added /get summary, /get health, /get hydration, /get hr, and /get targets in chat for instant 360° day snapshots.
- Health Connect Stability: Seamless permission setup and enhanced sync for workouts, steps, and vitals on Android 14/15.
- Robust Food Logging: Faster, more reliable AI nutrition estimations and meal analysis.

---

🚀 Version 2.6.0 (Build 260) - Release Notes

### Full Version

🌟 What's New with v2.6.0:

- **Enhanced Fig Slash Commands**: Added powerful new `/get` subcommands in Fig chat:
  - `/get summary <days>`: Complete 360° day snapshot combining Fuel, Burn, Net energy balance, Workouts, Sleep duration, Hydration, and Check-ins.
  - `/get health <days>`: Real-time overview of connected health sync data, tracked workout sessions, total steps, and vitals.
  - `/get hydration <days>`: View daily water intake logs and progress toward hydration goals.
  - `/get hr <days>`: Average daytime Heart Rate, Resting HR (RHR), and Heart Rate Variability (HRV) trends.
  - `/get targets`: Instant breakdown of your calculated BMR, TDEE, Calorie Goal, and Protein/Fat/Carb targets.
- **Health Connect Permissions & Stability**: Resolved Health Connect permission rationales and permissions window crashes on Android 14/15. Optimized vitals and calorie sync to seamlessly pull step counts, distance, heart rate, and workout history.
- **Robust AI Food Logging**: Hardened nutritional AI analysis with resilient JSON extraction across Fuel and Food logging tabs to ensure seamless meal estimations without parsing errors.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.6.0:

- New Fig Commands: Added /get summary, /get health, /get hydration, /get hr, and /get targets in chat for instant 360° day snapshots.
- Health Connect Stability: Seamless permission setup and enhanced sync for workouts, steps, and vitals on Android 14/15.
- Robust Food Logging: Faster, more reliable AI nutrition estimations and meal analysis.

---

🚀 Version 2.5.4 (Build 259) - Release Notes

### Full Version

🌟 What's New with v2.5.4:

- **Google Health Connect & Apple Health Hub**: Added a dedicated "Connected Apps" panel in the You settings tab. Easily connect your native health app, check live authorization status, view your last synced timestamp, and trigger manual syncs on demand.
- **Optimized Health Sync Engine**: Streamlined step, active calorie, workout, and sleep sync algorithms to reduce battery usage and avoid daily API rate limits while ensuring accurate daily wellness logs.
- **Health Connect Permission Controls**: Android users can now easily manage granular Health Connect permissions directly from app settings.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.5.4:

- Health Connect & Apple Health: New Connected Apps hub in settings to sync steps, active calories, and sleep.
- Live Sync Status: View authorization state and last-synced timestamp with one-tap sync.
- Optimized Sync: Faster, battery-efficient health data syncing.
- Permission Management: Direct access to Health Connect permission controls.

---

🚀 Version 2.5.3 (Build 258) - Release Notes

### Full Version

🌟 What's New with v2.5.3:

- **Multiple Check-ins Per Day**: You can now record multiple check-ins and log custom questions throughout the day without overwriting previous check-in data.
- **Chat Timestamps & History**: All Fig chat sessions now include clear timestamps (`YYYY-MM-DD HH:mm`) in session titles and the history dropdown selector.
- **Visual Contrast & Legibility**: Refined check-in category headers with darker, high-contrast typography for clean, effortless readability across light themes.
- **Android Chat Layout Polish**: Fixed header positioning and safe-area insets in full-screen Fig chat on Android devices, ensuring buttons clear the status bar and notch.
- **Reliable Cloud Sync**: Enhanced Firestore data serialization to reliably sync custom check-in questions, scheduled moves, and profile preferences without nested-data errors.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.5.3:

- Multiple Daily Check-ins: Log multiple check-ins and custom questions per day seamlessly.
- Chat Timestamps: Added timestamps to chat titles and session history.
- Better Readability: Deep, high-contrast typography on check-in headers.
- Android UI Polish: Fixed chat header safe areas and touch targets.
- Sync Fixes: Improved cloud data serialization and device permissions.

---

🚀 Version 2.5.2 (Build 257) - Release Notes

### Full Version

🌟 What's New with v2.5.2:

- **Notification Schedules**: You can now set exact times for Check-in Reminders, Routines & Supplements, and AI Messages from the Notifications settings page. This allows our backend to deliver push notifications exactly when you need them.
- **RDI Calculator Command**: Type `/get rdi` or `/get rdi all` in the chat to instantly calculate your Recommended Daily Intake (BMR, TDEE, macros) and view your tracked supplements.
- **Sticky Stats Controls**: The date picker on the Analytics page now sticks to the top of the screen as you scroll down, making it easy to change dates without losing your place.
- **Visual Cues**: The "Orb" send button now subtly pops every 3 seconds when you have text typed in, so it's always clear when Fig is waiting for you to hit send.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.5.2:

- Notification Schedules: Set exact delivery times for Check-in Reminders, Routines, and AI Messages.
- RDI Calculator: Instantly calculate your target macros by typing `/get rdi` in the chat.
- Sticky Stats: The Analytics date picker now stays visible while you scroll through charts.
- UI Polish: Added a subtle visual cue to the send button when typing.

---


🚀 Version 2.5.1 (Build 256) - Release Notes

### Full Version

🌟 What's New with v2.5.1:

- **AI Chat Experience**: Upgraded Fig's chat input to automatically expand as you type longer messages. Reduced the chat text size slightly and enforced minimum window dimensions to improve readability and usability.
- **Image Processing Fix**: We resolved a critical bug where uploading large camera images to Fig could trigger database size limit errors.
- **Smart Date Context**: Fig is now explicitly aware of the exact time and date when a conversation starts, completely eliminating confusion about what happened "today" vs "yesterday."
- **Notifications Hub**: Added the initial framework for managing Push Notifications. You can now toggle master alerts, check-in reminders, routine prompts, and AI messages right from the You tab.
- **Cross-Device Settings Sync**: Your preferred AI Speaking Rate now syncs perfectly across all your devices (iOS & Android).

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.5.1:

- AI Chat: The chat input now auto-expands as you type, and Fig is now fully aware of the exact date and time.
- Image Processing: Fixed a major crash when uploading large camera photos to Fig.
- Notifications: Built the foundation for Push Notifications, allowing you to fine-tune alerts.
- Settings Sync: AI voice speed preferences now sync perfectly across all your devices.

---


🚀 Version 2.4.10 (Build 254) - Release Notes

### Full Version

🌟 What's New with v2.4.10:

- **Build Instructions**: Added comprehensive Native Build Instructions (docs/BUILD.md) to help developers easily compile the app for iOS and Android.
- **Push Notifications**: Added Capacitor Push Notifications to the iOS SPM package to support native remote alerts.
- **Under the Hood**: Minor IDE and deployment target updates for Android.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.10:

- Push Notifications: Added more support for iOS push notifications.
- Under the Hood: Minor configuration updates.

---

🚀 Version 2.4.9 (Build 253) - Release Notes

### Full Version

🌟 What's New with v2.4.9:

- **Survey Page**: Added a new Feedback & Suggestions page where you can rate your app experience and submit ideas directly to our team! Access it from the "You" tab.
- **Backend**: Implemented new secure rules for processing user feedback anonymously or securely via your profile.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.9:

- New Feature: Added an app Feedback & Survey page! Tell us what you love and what you want us to build next, directly from the "You" tab.

🚀 Version 2.4.6 (Build 250) - Release Notes

### Full Version

🌟 What's New with v2.4.6:

- **Signup Alert Fix**: Restored real-time Google Cloud notification alerts when new users register their accounts.
- **Performance & System Polish**: Internal optimizations for faster authentication sync and improved reliability.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.6:

- Performance polish and internal system improvements!

---

🚀 Version 2.4.5 (Build 249) - Release Notes

### Full Version

🌟 What's New with v2.4.5:

- **UI Cleanup**: Removed an unfinished subscription testing button from the Settings menu to ensure a fully free experience for the initial release.
- **Store Assets**: Added new high-resolution App Store screenshots for iPad and iPhone.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.5:

- Cleaned up the settings menu and added beautiful new App Store visuals!

---

🚀 Version 2.4.4 (Build 244) - Release Notes

### Full Version

🌟 What's New with v2.4.4:

- **Check-in Responsiveness**: Fine-tuned the daily check-in questions to gracefully wrap on wider tablet and iPad screens.
- **UI Polish**: Improved the vertical spacing and line-height between the check-in prompts and answer buttons for a cleaner, more readable layout on all devices.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.4:

- Check-in Polish: Check-in questions now gracefully wrap on iPads and tablets.
- UI Enhancements: Added more breathing room between the check-in questions and the answer buttons for a cleaner look.

---

🚀 Version 2.4.2 (Build 242) - Release Notes

### Full Version

🌟 What's New with v2.4.2:

- **App Build Updates**: Configured native builds so iOS and Android apps correctly bundle and load their local web assets.
- **Intro Typography**: Scaled the new "HUNGER." logo with dynamic fluid typography so it fits perfectly on any phone screen, and updated the logo dot color.
- **Check-in Polish**: Re-styled the Check-in screens to guarantee your daily prompts fit cleanly on a single line, and removed the hidden debug menu.
- **Chat History Cleanup**: Fixed a bug where opening the Fig chat would auto-save empty chat sessions. Now, sessions only save to your history if you actually interact with Fig.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.2:

- App Build Updates: iOS and Android apps now fully bundle your local web assets.
- Fluid Typography: The new intro logo now seamlessly scales to fit any screen size.
- Check-in Polish: Ensured check-in questions always display beautifully on a single line, and removed legacy debug menus.
- Chat Cleanup: Fig no longer clogs your chat history with empty sessions!

---

🚀 Version 2.4.1 (Build 241) - Release Notes

### Full Version

🌟 What's New with v2.4.1:

- **Sleep Tracking in AI Chat**: Added the `/get sleep` command so the AI can analyze your sleep patterns.
- **CLI Updates**: The user management CLI now fully supports querying sleep data natively using NVM and Node 20.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.1:

- Sleep Tracking: The AI Assistant can now analyze your sleep data!

---

🚀 Version 2.4.0 (Build 240) - Release Notes

### Full Version

🌟 What's New with v2.4.0:

- **Routine Maintenance**: Routine bumps, dependency updates, and maintenance.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.4.0:

- Maintenance: Routine bumps, dependency updates, and under-the-hood maintenance.

---

🚀 Version 2.3.4 (Build 234) - Release Notes

### Full Version

🌟 What's New with v2.3.4:

- **Lightning Fast AI Greetings:** Redesigned Fig's AI chat initialization. Fig now bundles your 48-hour health data and securely generates your deep "Daily Insight" silently in the background exactly once per day.
- **Instant Chat & Dynamic Prompts:** Clearing or opening a chat is now instantaneous! You'll immediately receive your cached Daily Insight, followed by a smart, quick-action follow-up message that adapts to whether you've checked in today.
- **Advanced Health Connect Syncing:** Unlocked advanced Android Health Connect permissions. If you are on Android, you can now natively sync detailed Sleep, Vitals (Heart Rate, Blood Pressure, Oxygen), and Body Measurements (Weight, Body Fat) directly from your phone.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.3.4:

- AI Daily Insights: Fig now smartly generates your deep health insight once per day in the background.
- Instant Chat: Opening the chat is now lightning fast and features a new smart follow-up message based on your daily check-in status.
- Advanced Android Sync: Unlocked Health Connect permissions to sync your detailed Sleep, Vitals, and Body Measurements natively!

---

🚀 Version 2.3.3 (Build 233) - Release Notes

### Full Version

🌟 What's New with v2.3.3:

- **Floating Chat Redesign:** Re-engineered the floating Fig chat window to mathematically lock into your screen bounds, preventing iOS Safari from awkwardly pushing the window off-screen or cutting off the title bar when scrolling or toggling full screen.
- **Move History & Tracking:** You can now view, edit, and remove your logged 'Move' sessions directly from the Move page. We've also added a new "this week, in movement" tracker (featuring fresh green visual indicators!) to quickly see your active vs total calories.
- **Login & Onboarding Polish:** Fixed an issue where restarting the app would incorrectly drop users into the old v1 onboarding screen. The login screen also received a visual refresh, perfectly centering the content and adding the full-color Fig Orb.
- **UI Tweaks:** Locked the "Add Fuel/Move" floating buttons safely above the menu, added a "View past Checkins" quick-link next to the add buttons, and squashed a bug displaying a duplicate number in the Stats view.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.3.3:

- Chat Polish: The floating Fig chat window has been re-engineered to lock perfectly to your screen bounds, fixing cut-off title bars on iOS.
- Move Tracking: View, edit, and delete Move sessions directly. Added a new weekly movement tracker!
- Smooth Login: Fixed an onboarding loop bug and refreshed the login screen's layout.
- UI Tweaks: Fixed floating button placements and squashed a duplicate number bug in Stats.

---

🚀 Version 2.3.2 (Build 232) - Release Notes

### Full Version

🌟 What's New with v2.3.2:

- **Advanced Custom Moves**: You can now edit existing custom sessions right from your schedule list. We also added an AI-powered calorie estimation tool to guess how many calories your custom workout burns!
- **Detailed Move Logging**: The 'Log a Move Session' dialog now lets you track exactly _when_ the workout happened (morning, midday, late, evening) and _how it felt_ (steady, bright, even, lit, full), perfectly matching the Fuel logging experience.
- **Improved Check-ins**: Added the ability to record a past Move session straight from the daily Check-in screen.
- **UI Refresh**: Cleaned up page names, styling, colors, and fonts across the Move and Past Check-ins pages.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.3.2:

- Advanced Custom Moves: Edit custom sessions and use the new AI tool to estimate calories burned!
- Detailed Move Logging: Track when you worked out and how it felt, matching the Fuel experience.
- Improved Check-ins: Log past Moves directly from your daily Check-in screen.
- UI Refresh: Assorted cleanups for a cleaner, unified look.

---

🚀 Version 2.3.1 (Build 231) - Release Notes

### Full Version

🌟 What's New with v2.3.1:

- **Global Numbers Toggle**: You can now hide or show all calorie and macro numbers across the entire app with a single global setting.
- **Meal Log Numbers**: Added the Numbers toggle directly into the Meal Log dialog so you can easily show or hide kcals while logging your food.
- **UI Consistency**: Moved the "Show Numbers" toggle to a more prominent location on the Stats page, and updated "Calories & Macros" to "Numbers" on the You page for consistency.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.3.1:

- Global Numbers Toggle: Hide or show calorie and macro numbers across the entire app with one easy setting.
- Meal Log Integration: Added the Numbers toggle directly to the Meal Log dialog.
- UI Consistency: Better alignment on the Stats page and renamed sections on the You page for clarity.

---

🚀 Version 2.2.9 (Build 229) - Release Notes

### Full Version

🌟 What's New with v2.2.9:

- **Health API Expansion**: Expanded our integration with Health Connect and Apple Health to silently pull in high-resolution Vitals (hourly Heart Rate, Oxygen Saturation, Respiratory Rate, Temperature) and Body Measurements (Weight, Body Fat) directly into your private database.
- **Smart AI Context**: FIG has been upgraded to natively read and analyze your new vitals and body measurement data. Ask FIG questions like "How is my average heart rate trending this week?" for instant insights!
- **Extended Slash Commands**: Added new `/get vitals <days>` and `/get body <days>` slash commands to the chat interface so you can quickly pull up a timeline of your latest metrics.
- **UI & Layout Polish**: Upgraded the Weather forecast cards to use custom Light/Dark theme styling instead of generic card wrappers, refined the QuickChat panel layouts, and improved the live camera visualizer to automatically attach photos to context prompts.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.2.9:

- Expanded Health Sync: We now sync high-resolution hourly Vitals (Heart Rate, O2, etc.) and Body Measurements!
- Smarter AI: FIG can now read and analyze all your new vitals data to provide deeper health insights.
- New Slash Commands: Quickly pull up your metrics with `/get vitals` and `/get body`.
- UI Polish: Refined weather card themes, improved the QuickChat layouts, and upgraded live photo processing.

---

🚀 Version 2.2.7 (Build 227) - Release Notes

### Full Version

🌟 What's New with v2.2.7:

- **Theme Consistency:** Polished the "Intro" and "Start" onboarding screens to match the beautiful new V2 Light Theme aesthetics (`#E6DDD3` backgrounds, `#FAF7F2` cards).
- **FIG Chat Orb:** Replaced the chat waveform with a dynamic, animated FIG Orb that scales and pulses naturally while responding.
- **Clinical AI Guardrails:** Upgraded the AI architecture with a robust "Auditor" model that runs invisibly in the background to ensure all responses adhere strictly to clinical safety floors and an anti-diet worldview.
- **Contextual Grounding (Retention Engine):** The AI now intelligently references your trailing 14-day check-in history (Energy, Mood, Sleep) to push back against aggressive diet/fitness goals if your body needs rest.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New with v2.2.7:

- Theme Polish: Redesigned the Onboarding screens to match our sleek new light theme.
- Animated FIG Orb: A dynamic new chat visualizer while the AI is speaking.
- Clinical Guardrails: Added an invisible "Auditor" AI to ensure all responses adhere to safety guidelines.
- Intelligent Pushback: The AI now uses your 14-day check-in history to advise rest if your sleep or energy levels are chronically low.

---

🚀 Version 2.1.5 (Build 215) - Release Notes

### Full Version

🌟 What's New:

- **Smart Duplicate Meal Detection**: The app now intelligently checks for duplicate meals logged around the same time. Using a smart fuzzy-matching algorithm, it catches identical or similar food logs (even if the AI description is slightly different) and displays a seamless inline warning before you accidentally double-log.
- **Smarter Photo Time Imports**: When uploading a photo with EXIF data, we replaced the clunky browser popup with a sleek inline toggle. If enabled, it automatically pre-selects your meal time (morning, midday, evening, late) based on the exact hour the photo was taken!
- **Refined Fuel & Water Charts**: Added dynamic color feedback to the weekly Fuel chart to highlight days you successfully logged all your food, and introduced an interactive 7-day hydration tracker complete with an undo button to keep your water intake accurate.
- **Dark Mode Weather Adaptation**: Polished the weather forecast panels to fully adapt to your chosen custom light or dark theme seamlessly.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Smart Duplicate Meal Detection to prevent accidentally double-logging foods!
- Sleek inline toggle to import photo metadata, which now automatically categorizes your meal time (morning, midday, evening).
- Interactive 7-day hydration chart with an easy undo button.
- Dynamic color-coding for your weekly fuel chart.
- Weather forecast cards now adapt beautifully to dark mode.

---

🚀 Version 2.1.4 (Build 214) - Release Notes

### Full Version

🌟 What's New:

- **Photo Timestamp Extraction**: When you upload a photo to log a meal, the app now automatically checks the image's embedded metadata (EXIF). If the photo is over 5 minutes old, you'll get a prompt asking if you'd like to backdate the entry to the exact time the photo was taken!
- **Accurate Historical Editing**: Squashed a bug where editing past food logs would accidentally default the timestamp to the current time rather than the original logged time.
- **Improved Autocomplete**: Fixed a bug where the meal suggestion autocomplete was being too aggressive with optimization, allowing you to correctly search and find older past entries.
- **Vitamins mapped**: Added new mappings on the Stats page to view all tracked vitamins on your macro charts.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Smart Photo Timestamps: The app now automatically extracts the exact time a photo was taken and offers to backdate your food log.
- Better Editing: Fixed a bug that would overwrite historical meal times when editing past entries.
- Improved Autocomplete: You can now search your entire meal history when typing.
- Vitamins on Stats: View all tracked vitamins natively on your macro charts.

---

🚀 Version 2.1.3 (Build 213) - Release Notes

### Full Version

🌟 What's New:

- **Enhanced Past Check-ins:** The Home screen and Check-in modales are smarter! Past check-ins now display the exact check-in time alongside the date, display the check-in number (e.g. "Checkin 1 of 3"), and automatically toggle open your context notes and custom questions if you answered them.
- **Smarter Stats Charts:** Your Check-in History charts on the Stats page now format their labels as "TITLE: FULL QUESTION TEXT" (e.g., `MIND RACING: HOW'S YOUR MIND TODAY?`), and seamlessly display both legacy and new custom questions.
- **Chat Details:** The `/get checkins verbose` chat command now intelligently includes your custom context notes directly in the output.
- **Custom Move Sessions:** You can now design and save your own completely custom Move routines! Write out your circuits, reps, and warmups in the new Create Custom Move form and save them directly to your library.
- **Scheduled Moves:** Say goodbye to the static library. You can now schedule your library and custom moves for specific days and times. Your active schedules display right on the Move screen, and you can tap any custom scheduled move to expand it and read the exact workout routine you wrote!
- **Admin Tooling:** Added a `-c` flag to `manage-users.sh` allowing admins to test and pull raw `/get food`, `/get steps`, and `/get checkins` payload data directly from the terminal for debugging user data.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Seamless Check-ins: Past check-ins now display exact times, sequence numbers, and automatically expand to show your custom questions and context.
- Detailed Charts: Improved check-in chart labels across the Stats page to show both the title and the question.
- Insightful Chat: The AI will now pull your check-in context notes into chat summaries.
- Custom Moves: Create and save your own custom workout routines with detailed descriptions.
- Scheduled Moves: Schedule moves for specific days/times and view your routine directly on the Move screen!

---

🚀 Version 2.1.1 (Build 211) - Release Notes

### Full Version

🌟 What's New:

- **AI Interaction Control:** Take charge of your AI coach! You can now adjust the "AI Interaction" level on your Settings page with a sleek 1-to-5 slider, from quiet data tracking to full voice interaction.
- **Deeper Check-in Context:** When logging your daily check-in, you can now toggle on "Add some check-in context" and "Enable custom questions" directly from the modal. Need ideas? Our new AI suggestions will help you craft perfect custom check-ins like 'Wake Time', 'Skin Care', or 'Mindset'.
- **Suspected Correlations:** Added a brand new "Suspected Correlations" insights block to your Stats page, letting the AI analyze your data and find hidden connections between your habits.
- **Interactive Stacked Charts:** The check-in charts just got smarter. You can now tap on _any_ dot in both the standard and stacked views on the Stats page to instantly pop open and edit that specific day's check-in!
- **Weather Integration:** Added 3-day weather forecasts cleanly to your Move and Settings pages so you always know what to expect before heading out.
- **Chat & Fig Improvements:** Upgraded the floating Fig chat window! We've improved the AI's contextual greetings, fixed the visibility of the "Data to Review" section, and expanded the text input to comfortably fit 3 lines without cutting you off. You can also now select specific data points (Check-ins, Fuel, Movement, Weather) directly on the Home dashboard to instantly prompt Fig for insights.
- **Historical Water Logging:** You can now log water intake for past dates on the Fuel page!

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- AI Interaction: Set how chatty you want Fig to be with a new 1-5 slider.
- Deeper Check-ins: Add context notes and generate AI-suggested custom questions!
- Smart Insights: Discover "Suspected Correlations" between your habits on the Stats page.
- Interactive Charts: Tap any data point on your check-in graphs to view/edit it.
- Weather: New 3-day forecasts added to your Move page.
- Chat Polish: Expanded input box, better greetings, and easy "Data to Review" insight buttons.

---

🚀 Version 2.1.0 (Build 210) - Release Notes

### Full Version

🌟 What's New:

- **Custom Daily Check-ins**: You can now personalize your daily check-in with custom questions (e.g., "How did you wake?" or "Skin care routine?") and toggle on a context text box to jot down what you were doing right before checking in.
- **Interactive Check-in Charts**: The Check-in History charts on your Stats page are now fully interactive. Just tap any point on the graph to instantly view or edit that past check-in!
- **Advanced Fuel Logging**: Need to log a meal for yesterday? You can now toggle off "This entry is for now" to pick a specific date and time. Plus, a new quick-select dropdown lets you instantly re-log your 10 most recent meals.
- **Fuel Tracking Completion**: Added a satisfying new "Logged all my fuel for the day" toggle on the Fuel page to help you track your consistency.
- **Easy History Access**: Added a handy "See/edit past check-ins" link directly on the Home dashboard for quick access to your recent entries.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Custom Check-ins: Personalize your daily check-ins with custom questions and context notes.
- Interactive Charts: Tap any point on your Stats check-in chart to view or edit past logs!
- Advanced Fuel Logging: Log past meals with a custom date/time picker, and quickly re-log your 10 most recent foods.
- Completion Tracking: Track your consistency with the new "Logged all my fuel" toggle.
- Easy Access: New dashboard links to quickly review and edit your history.

---

🚀 Version 2.0.9 (Build 209) - Release Notes

### Full Version

🌟 What's New:

- **Touchscreen-Friendly Editing**: Editing or deleting fuel and supplement logs is easier than ever with permanently visible actions on your timeline (no hovering required).
- **Safe Deletions**: Deleting a log now safely directs you to a detailed confirmation modal, ensuring you never accidentally erase a moment again.
- **Brand Refresh**: The app has been officially renamed to **H\_\_\_\_.** and fitted with a sleek new app icon and splash screen.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Touchscreen Edits: Easily edit or delete logs with new, permanently visible buttons.
- Safe Deletions: A new confirmation modal ensures you never accidentally delete a log.
- Brand Refresh: Welcome to H\_\_\_\_. Check out our sleek new app icon and splash screen!

---

🚀 Version 2.0.8 (Build 208) - Release Notes

### Full Version

🌟 What's New:

- **Advanced Stats & Trends**: Visualizations have been thoroughly polished. Chart axes are now cleanly standardized with beautiful inline date labels.
- **Enhanced Tooltips**: Mouse-over tooltips now work flawlessly across both Stacked and Separated chart views.
- **Unified Macros**: Consolidated your Macro and Nutrient tracking into the Stats page for a cleaner, more focused analytical experience.
- **Supplement Synergy**: Vitamin and supplement logs now fully integrate into your daily Macro targets.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Chart Polish: Standardized axes, new inline dates, and flawless mouse-over tooltips!
- Unified Macros: Nutrient tracking is now consolidated onto the Stats page.
- Supplement Synergy: Vitamin and supplement logs now fully integrate into your daily Macro targets.

---

🚀 Version 2.0.7 (Build 207) - Release Notes

### Full Version

🌟 What's New:

- **Vitamin Timeline Integration**: Your logged vitamins now gracefully appear in the main "Fuel" timeline directly alongside your food logs.
- **Time of Day Selection**: When logging vitamins, you can now tag them with a specific time of day (morning, midday, late, evening).
- **Edit & Delete Vitamins**: You can now edit and delete your vitamin logs directly from the timeline with slick hover interactions.
- **Graph Shading Enhancements**: Improved the styling of the Stats page graphs with dynamic shaded areas beneath the lines in both the combined and stacked views.
- **UI Polish**: Fixed a visual overlap bug on the Fuel timeline cards by having the timestamp elegantly fade out when hovering to reveal the edit/delete options.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- **Vitamin Timeline**: Your supplements and vitamins now appear directly in your daily timeline alongside your meals!
- **Time of Day**: Tag your vitamins with the time of day (morning, midday, late, evening).
- **Edit & Delete**: Easily manage your vitamin logs straight from the dashboard.
- **Chart Polish**: Improved the styling and shading of the charts on the Stats page.
- **UI Tweaks**: Fixed minor overlap issues and refined hover interactions.

---

🚀 Version 2.0.6 (Build 206) - Release Notes

### Full Version

🌟 What's New:

- **Desktop & Tablet Layouts**: Rebuilt the Fuel, Home, and Move screens to gracefully expand into a gorgeous two-column layout on wider screens.
- **Fullscreen Food Images**: You can now tap any logged meal photo on the Fuel screen to view it in a full-screen, edge-to-edge modal.
- **UI Polish & Wrapping**: Fixed issues where right-side cards were sometimes getting clipped by the screen boundary. Improved category and feeling filter pills to wrap naturally to a second line.

---

🚀 Version 2.0.5 (Build 205) - Release Notes

### Full Version

🌟 What's New:

- **Health Connect Sync Improvements**: Syncing step and calorie data with Android devices now works seamlessly.
- **Accurate Total Calories**: Fixed an issue where only active calories were pulled from Health Connect. The app now accurately calculates total calories burned by prorating resting metabolic rate (BMR) with active calories automatically if direct total calorie reads fail.
- **Fuel UI Polish**: Tweaked the activity metrics display text to exactly match previous iterations and added an interactive sync button directly on the dashboard.

---

🚀 Version 2.0.4 (Build 204) - Release Notes

### Full Version

🌟 What's New:

- **Fig Chat Polish**: Complete visual reskin of the Fig chat panel (`QuickChat`) to dynamically match Light/Dark theme backgrounds and borders.
- **Glassmorphism & Depth**: Exponentiated dropshadow elevations using high-contrast shadows in Dark mode and warm charcoal-tinted shadows in Light mode. Added backdrop-blur filters for beautiful visual separation from background pages.
- **Corner Resize Handles**: Relocated the diagonal grey corner resize SVGs inside the curved boundary margins, making them fully visible in all corners.
- **Adaptive Select Options**: Added solid theme-based backgrounds to dropdown option tags for perfect readability.
- **Premium Serif Loader**: Upgraded the loading "Thinking..." bubble to use the Instrument Serif italic typography, matching the chat bubble styles.
- **Dynamic Check-in Greetings**: Fig now auto-populates the conversation history and dynamically checks your 5-question check-in status for today, either thanking you for checking in or gently reminding you to complete it.
- **Move Screen Redesign**: Completely overhauled the Move screen to match the high-fidelity Vercel mockup, featuring compact horizontal list cards, lowercase category filters, quick-check feeling suggestions, a header '+ log your own' link, and inline quick logging overlays.
- **Multimodal Food AI & Search**: Added camera scan analysis and magnifying glass nutrient/calorie estimation directly in the "Log a Meal" popup.
- **Food Entry Editing**: Added interactive edit options to daily food timeline cards, allowing users to modify logged names, estimated calories, categories, and images at any time.
- **Version Alignments**: Synchronized all Web, iOS, and Android platform packages and config files to version v2.0.4.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Chat Redesign: Sleek, theme-adaptive floating AI Fig chat panel with glassmorphism blur and rich high-contrast shadows.
- Move Redesign: Fresh high-fidelity layout with horizontal cards, suggested matches, and inline quick-loggers.
- Intelligent Greetings: Conversation starting greetings that dynamically track and remind you about your daily 5-question check-ins.
- Food Scanning & Editing: Added camera food scanning, query estimation, and interactive timeline log editing.
- Under-the-hood: Version alignment across all platform builds.

---

🚀 Version 2.0.3 (Build 203) - Release Notes

### Full Version

🌟 What's New:

- **Daily Check-ins:** Brought the new "Five Questions" daily check-in system to life! You can now log your Energy, Mood, Sleep, Hunger, and Joy.
- **Dynamic Greetings:** The app now automatically greets you properly based on the time of day.
- **Improved Workflows:** Removed manual food logging from the Home screen in favor of a clean "Jump to Fuel Screen" button, keeping your dashboard focused on your daily check-in.
- **UI Enhancements:** The submission button now dynamically highlights in red when all your answers are ready, and a new success banner confirms when your check-in is complete!
- **Data Integrity:** Added backend Firestore support to securely save your timestamped check-ins.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- New Feature: Log your daily Energy, Mood, Sleep, Hunger, and Joy with the new "Five Questions" check-in!
- UI Polish: Time-aware greetings and dynamic buttons improve your dashboard experience.
- Streamlined Tracking: Simplified the home screen by moving food logging directly to the Fuel tab.
- Stability: Added secure backend support for saving your daily check-ins.

---

🚀 Version 2.0.1 (Build 201) - Release Notes

### Full Version

🌟 What's New:

- **Onboarding Overhaul:** Complete redesign of the initial Start screen wizard to gather your goals, rhythm, and preferred reminders with sleek interactive components.
- **Support Settings:** New UI for opting into AI daily check-ins, morning pings, and help buttons.
- **Design & Layout Enhancements:** Refreshed dynamic "TRY ONE" UI states with auto-hover previews, and polished layout spacing on the main dashboard for a cleaner feel.
- **Bug Fixes:** Fixed Firestore permission errors for new user stat fields.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Onboarding Overhaul: Completely redesigned the new user flow for setting goals and routines.
- New Support Tools: Easy opt-in tools for daily check-ins and AI tracking prompts.
- UI Polish: Refreshed check-in UI and dashboard layout enhancements.
- Bug Fixes: Various bug fixes and stability improvements.

---

🚀 Version 1.9.4 (Build 94) - Release Notes

### Full Version

🌟 What's New:

- **Enhanced Nutritional Intelligence:** Upgraded the AI's data aggregation to distinctly handle `/get vitamins` (supplements only) and `/get vitamins-with-food` (supplements + food logs), allowing the AI to understand your entire micronutrient profile.
- **Accurate Calorie Tracking Sync:** Synced the AI's `/get calories` command to correctly account for your Base Metabolic Rate (BMR), ensuring that the AI's reported "Total Calories Burned" perfectly aligns with your Dashboard.
- **Centralized Calculation Engine:** Rewrote the underlying nutrient calculation logic to share a single source of truth across the Dashboard and AI Chat, ensuring 100% data parity.
- **Weather Integration:** Added comprehensive weather syncing to your Dashboard, providing up-to-date forecasts to help you plan your workouts.
- **UI & Bug Fixes:** Fixed a timezone rollover issue where dates could misalign in late-night chat sessions, and resolved a bug in the web interface where the "Up Arrow" command history navigation skipped recent messages.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- AI Intelligence: Combined food & supplement tracking for accurate vitamin analysis.
- Calories Sync: Dashboard BMR now fully integrates with the AI for exact calorie data.
- Weather Sync: Added live weather and forecasts directly to your Dashboard.
- Under-the-hood: New centralized engine ensures 100% data parity across the app.
- Bug Fixes: Resolved timezone misalignment and chat history navigation issues.

---

🚀 Version 1.9.3 (Build 93) - Release Notes

### Full Version

🌟 What's New:

- **Gemini Live Voice:** Introducing real-time voice streaming! You can now have fluid, real-time voice conversations with your AI coach directly in the Quick Chat interface.
- **Voice Visualizer & Playback:** Added a dynamic, volume-reactive waveform while you speak, plus instant audio-playback widgets appended to your chat history so you can review precisely what was said.
- **Custom AI Personas:** Choose from five distinct voice profiles (Aoede, Charon, Fenrir, Kore, or Puck) in Settings. Your AI will now introduce itself by its chosen name and maintain its character!
- **Extended Personality Customization:** Upgraded the AI Personality configuration to a massive scrollable paragraph format, allowing you to define your ideal coach with hundreds of words of custom rules and instructions.
- **Persistent Voice Sync:** Your selected voice persona is now securely saved and seamlessly synced across all your devices via the cloud.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- **Live Voice Coaching!** Have fluid, real-time voice conversations with your AI.
- **New Voices:** Choose between 5 unique AI voice profiles with distinct names.
- **Extended Personalities:** Write massive 600+ word custom rulesets for your ideal coach using the new multi-line paragraph editor.
- **Audio History:** Instant audio-playback widgets for both you and the AI right in the chat log.
- **Cloud Sync:** Your chosen voice saves to your profile across all devices.

---

🚀 Version 1.9.1 (Build 91) - Release Notes

### Full Version

🌟 What's New:

- **Custom Themes:** Added a brand new dynamic theming engine with customizable color palettes and background graphics, including the new "Metal" theme!
- **Cloud Preferences Sync:** Your chosen app theme, display mode, and settings are now securely saved to your account and automatically sync across all your devices.
- **Health Connect Improvements:** Upgraded our Health Connect synchronization logic with better fallback heuristics to ensure your historical activity data is reliably imported.
- **Mobile UX Refinements:** Fixed background graphics stretching on smaller phone screens and dramatically improved the touch-and-drag interactions on the Settings popup for mobile users.
- **Under the Hood:** Automated dependency management with Dependabot and resolved a symlink directory bug in our internal build tools.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- **New Themes!** Personalize your app with brand new color palettes and background graphics.
- **Cloud Sync:** Your theme and layout preferences now save to your profile and follow you across devices.
- **Health Connect:** Improved step and activity data syncing reliability.
- **Mobile Polish:** Smoother drag-and-drop menus and fixed visual stretching on mobile screens.

---

🚀 Version 1.8.8 (Build 88) - Release Notes

### Full Version

🌟 What's New:

- **Subscription Management:** Integrated RevenueCat for seamless subscription handling across iOS and Android. Added a brand new Paywall to easily upgrade to Pro or Max tiers!
- **Sticky Headers:** Improved navigation by making the date selector sticky at the top of the Dashboard, Activity, Food, and Vitamins pages.
- **Settings Enhancements:** Added a dedicated Subscription section in Settings to track your current tier and AI message usage with a new visual progress bar.
- **UI Refinements:**
  - Polished the login screen with official App Store and Google Play badges and refined button aesthetics.
  - Improved the layout and responsiveness of date selectors across the app.
- **Stability & Performance:** Robust version bumping script updates for macOS and underlying platform configuration refinements.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Subscriptions: New integrated Paywall for easy Pro/Max upgrades!
- Navigation: Sticky date headers for easier browsing of your history.
- Settings: New subscription dashboard with AI usage progress tracking.
- UI Polish: Refreshed login screen and refined layouts for a premium experience.
- Stability: Performance improvements and under-the-hood optimizations.

---

🚀 Version 1.9.0 (Build 90) - Release Notes

### Key Architecture Updates

- **AI Model Decoupling:** Implemented a new backend proxy routing system ("Virtual Models") to completely detach the mobile app from Google's Gemini version deprecation lifecycle, ensuring long-term stability without requiring app store updates.

### Full Version

🌟 What's New:

- **App Links:** Updated the login screen to include direct links to the App Store and Google Play Store.
- **Under the Hood:** Internal project provisioning and app signing updates for corporate account migration.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Updated the login screen with direct download links.
- Minor under the hood improvements and account transfer updates.

---

🚀 Version 1.8.5 (Build 85) - Release Notes

### Full Version

🌟 What's New:

- **Dashboard Redesign:** We've reorganized the main dashboard! Quick stats like Calories Eaten, Burned, and Balance are now front and center at the top. We've also added the Nutrition Information visualization directly to the main page to give you a complete daily snapshot at a glance.
- **Daily Reminders Expansion:** "Tracking Reminders" has been renamed to "Daily Reminders", and we've added a new reminder specifically for logging your Workouts!
- **UI & Theme Standardization:** Polished the entire app to ensure beautiful, consistent light and dark mode support. This includes fixing hard-locked dark colors in the Vitamins and Activity pages and standardizing the aesthetic of all background panels.
- **Date Picker Alignment:** The date selector rings across the Dashboard and Activity pages have been resized and aligned to perfectly match the sleek design of the Food page.
- **Mobile Polish:** Fixed minor font sizing and alignment offsets in the Android Settings menus for a pixel-perfect layout.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Dashboard Redesign: Your quick stats are now front and center, alongside brand new Nutrition visualizations!
- Daily Reminders: Added a new reminder option specifically for Workouts.
- UI Polish: Full aesthetic pass to ensure pixel-perfect alignment and beautiful Light/Dark mode consistency across the entire app.

---

🚀 Version 1.8.3 (Build 83) - Release Notes

### Full Version

🌟 What's New:

- **Tracking Reminders:** Introduced optional, highly customizable daily reminders for meals (breakfast, lunch, snack, dinner) and vitamins.
- **Smart Notifications:** Notifications are intelligent and won't bother you if you've already logged your meal or vitamins for that specific time!
- **Interactive Chat Reminders:** Clicking a reminder opens a direct chat thread (e.g., "Reminder: Vitamins for May 6th"), where you can just tell the AI what you ate or took, and it will instantly log it for you.
- **UI & Performance:** Eliminated the "Welcome" screen flash for logged-in users, providing a smooth transition directly to your Dashboard via a new loading spinner. Android users will also notice perfectly aligned toggle switches in Settings.
- **App Stability:** Resolved a critical bug causing a black screen on startup during Google Authentication.
- **AI Stability:** Added a smart fallback mechanism for the AI analyzer. If the primary model (`gemini-3.1-flash-lite-preview`) is too busy, it automatically switches to `gemini-2.5-flash` to ensure your photos are analyzed. If an error does occur, a new "Retry" button lets you immediately try again without uploading your photo twice!

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- New Feature: Added smart tracking reminders for meals and vitamins that only trigger if you haven't logged them yet!
- Chat Integration: Reply directly to a reminder notification via chat, and the AI will log your meals or vitamins for you!
- Smooth Loading: Eliminated the initial login screen flash for a much smoother app startup experience. Fixed UI alignment on Android.
- Bug Fixes: Resolved an issue causing a black screen during Google Sign-in.
- AI Reliability: Added an automatic model fallback to prevent timeouts during photo analysis, plus a handy Retry button.

---

🚀 Version 1.8.2 (Build 82) - Release Notes

### Full Version

🌟 What's New:

- **Privacy & Transparency:** Added an explicit consent step during user onboarding to ensure everyone is fully informed about how our AI features process data.
- **Settings Clarity:** Streamlined the Settings page for iOS users to focus purely on active features.
- **Under the Hood:** Minor bug fixes, deployment optimizations, and adjustments to our open beta testing limits.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Added an explicit AI privacy consent step during user onboarding.
- Streamlined the Settings page for a cleaner iOS experience.
- Minor bug fixes and under-the-hood optimizations.

---

🚀 Version 1.8.0 (Build 80) - Release Notes

### Full Version

🌟 What's New:

- **Dashboard Date Picker:** Added a scrolling 60-day calendar to the main Dashboard screen so you can review previous daily totals, sleep logs, and activities at a glance.
- **Improved Navigation:** Reordered the bottom menu for a more intuitive flow: Home, Activity, Food, Vitamins, Chat, Logs, Settings.
- **Data Citations:** Added medical and data source citations directly inside the 'Legal & Privacy' settings, providing clear links to AI nutritional models and BMR equations.
- **UI Enhancements:** Refined the color palette in the Food tab and optimized UI components for a smoother experience.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Added a new 60-day Date Picker to the Dashboard to easily view past logs and totals.
- Reordered bottom menu items for an improved user experience.
- Added detailed Data & Medical citations to the Settings tab.
- Minor bug fixes and visual refinements.

🚀 Version 1.7.8 (Build 78) - Release Notes

### Full Version

🌟 What's New:

- **App Store Compliance:** Implemented account deletion capabilities allowing users to permanently erase their profiles and data directly within the settings menu. Added native device-level deletion using `@capacitor-firebase/authentication`.
- **Legal & Privacy:** Introduced a "Legal & Privacy" section in the settings tab outlining a medical disclaimer and linking to the Privacy Policy and Terms of Service.
- **Medical Disclaimer:** Added a medical disclaimer note to the Onboarding flow to ensure safe usage of AI dietary tracking.
- **Admin Alerts:** Configured a backend notification trigger whenever a user deletes their account to ensure proper observability.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Added complete Account Deletion functionality.
- Added Medical Disclaimers to Onboarding and Settings pages.
- Added quick links to the Privacy Policy and Terms of Service.

🚀 Version 1.7.6 (Build 76) - Release Notes

### Full Version

🌟 What's New:

- **Sign in with Apple:** Added full native integration for Apple Sign-In on iOS, providing a seamless and secure login alternative that fully complies with App Store guidelines.
- **New App Icons:** Updated the Assistant Fitness brand logo and introduced beautiful, high-resolution app icons across all Android and iOS devices.
- **Enhanced Analytics:** Added secure per-user analytics tracking (via UID) so app interactions can be accurately monitored across web and mobile platforms using Firebase DebugView and User Explorer.
- **Authentication Resilience:** Resolved a persistent sign-in loop that occurred when users attempted to authenticate using a disabled or restricted Apple Sign-In or Google account.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Sign in with Apple: Easily securely sign in using your Apple ID!
- New App Icons: Enjoy our beautiful new app logo and branding.
- Stability Fix: Resolved a bug causing login loops for restricted accounts.
- Analytics Fix: Improved internal tracking for diagnostics.

🚀 Version 1.7.5 (Build 75) - Release Notes

### Full Version

🌟 What's New:

- **UI Overhaul:** Completely redesigned the daily activity dashboard components.
- **Improved Visualization:** Increased the size of the activity gauges and swapped to a bold, 'speedometer' style arc to give your stats more prominence.
- **Color Consistency:** Unified the color themes across Steps (Red), Move Minutes (Green), and Active Calories (Blue) so that daily logs, dashboard charts, and weekly trends map seamlessly to one another.
- **App Store Readiness:** Cleaned up "Coming Soon" badges specifically when using the native apps to provide a cleaner, distraction-free environment.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- UI Enhancement: Re-designed the daily activity dashboard to feature large, bold 'speedometer' style activity gauges!
- Color Updates: Sync'd our app-wide color palette so that Steps, Move Minutes, and Active Calories are always perfectly color-matched across all your charts and trend graphs.

---

🚀 Version 1.7.4 (Build 74) - Release Notes

🌟 What's New:

- **AI Analysis Feedback:** Added an intuitive, real-time progress bar while analyzing food photos and supplement labels to keep you informed during processing.
- **Improved AI Reliability:** Upgraded the AI backend connection timeout from 25s to 60s to completely eliminate the "Request aborted" timeout errors that occasionally occurred during heavy initial image analyses.
- **UI Clarifications:** Refined terminology across the app (e.g., updating "Scan Label" to "Upload Photo of the Label") to improve usability.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Performance Boost: Completely eliminated the "Request aborted" timeout errors when analyzing complex food and supplement photos.
- UI Enhancement: Added a dynamic progress bar during AI analysis to let you know exactly when your results are ready!

---

🚀 Version 1.7.3 (Build 73) - Release Notes

### Full Version

🌟 What's New:

- **Weekly Activity Trends:** Refreshed the Activity page with new responsive 7-day trend charts for Steps, Active Calories, and Energy Expended to match the Google Fit / Samsung Health experience.
- **Dynamic Onboarding:** Integrated a global settings master switch to dynamically adjust default subscription tiers and waitlist gating for new signups.
- **Waitlist UX Flow:** Overhauled the onboarding flow with a new branded "Waitlist" splash screen, allowing admin control over beta access via a command-line script.
- **Samsung Health Fallback:** Implemented a new calorie estimation fallback to accurately calculate Active Calories burned from distance/steps if Samsung Health fails to sync specific background active calorie records to Health Connect.
- **Dashboard Polish:** Cleaned up typography and layout on the main dashboard cards, ensuring calorie goals and balances are presented clearly without awkward text wrapping.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- UI Enhancement: Added new 7-day weekly trend charts for Steps and Calories to the Activity Dashboard.
- Sync Accuracy: Fixed an issue where background activity synced via Samsung Health would occasionally report zero active calories.
- Dashboard Polish: Improved layout and readability of the main dashboard summary cards.

🚀 Version 1.7.2 (Build 72) - Release Notes

### Full Version

🌟 What's New:

- **iOS App Store Launch Preparation:** Officially finalized the iOS application bundle for Apple App Store submission, resolving Xcode provisioning profile conflicts and updating the underlying deployment architecture.
- **Camera Crash Fix:** Resolved an issue where attempting to use the camera to snap a picture of food for the AI analyzer would cause the app to crash due to missing `NSCameraUsageDescription` privacy strings.

### App Store & Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Stability Fix: Resolved an application crash that occurred when trying to use the camera for AI food logging.
- iOS Optimization: Under-the-hood deployment and provisioning enhancements for Apple App Store compatibility and initial submission.

🚀 Version 1.6.9 (Build 69) - Release Notes

### Full Version

🌟 What's New:

- **Sync Stability:** Fixed a race condition where the app would accidentally run the Health Connect sync twice concurrently on startup, causing a quota limit breach. Also added granular error handling to the manual "Sync" button so that a rate limit on one specific metric doesn't crash the entire view.

🚀 Version 1.6.8 (Build 68) - Release Notes

### Full Version

🌟 What's New:

- **Extreme API Optimization:** Completely re-wrote Health Connect sync logic to batch requests instead of looping over days. Reduced the number of Health API calls from 28 down to just 5 per sync. This drastically minimizes the risk of hitting the 1,000 requests/day Android OS limit, especially over extended development sessions.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Stability Fix: Dramatically reduced Health Connect API usage by switching to batch requests, ensuring reliable syncing within Android OS limits.

🚀 Version 1.6.7 (Build 67) - Release Notes

### Full Version

🌟 What's New:

- **Health Connect Optimization:** Re-architected `useHealthSync` to prevent React hot-reloads from burning through the Android OS daily API quota during development.
- **Improved Sync Resiliency:** Added granular `try/catch` wrappers around individual Health Connect queries (steps, distance, workouts) so that if one metric gets rate-limited, the other metrics can still sync.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Stability Fix: Improved Health Connect background sync to prevent API quota usage during development.
- Robust Syncing: Added error handling to ensure data sync continues even if specific metrics are rate-limited.

🚀 Version 1.6.6 (Build 66) - Release Notes

### Full Version

🌟 What's New:

- **Health Connect Sync Optimization:** Resolved an issue where Health Connect would rate limit the application due to excessive background sync attempts. The app now properly pauses syncing while in the background and only fetches health data when in the active foreground, preventing "Rate Limited" and "Must be in foreground" errors.
- **Improved Error Visibility:** Added detailed Health Connect error messages directly to the sync failure modal to help identify permission or capability issues without requiring developer logs.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Stability Fix: Resolved an issue causing "Rate Limited" or "Foreground Required" errors when syncing with Health Connect by optimizing how background syncing is handled.
- Detailed Errors: Added clear error messages to the sync failure screen.

🚀 Version 1.6.5 (Build 65) - Release Notes

### Full Version

🌟 What's New:

- **UX Improvements:** The "Food Log" autocomplete dropdown has been completely rebuilt to render correctly on Android devices and will no longer get blocked by or render over the native software keyboard.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Keyboard Fix: Resolved a bug where the food suggestion dropdown would display incorrectly when the Android software keyboard was open.

🚀 Version 1.6.4 (Build 64) - Release Notes

### Full Version

🌟 What's New:

- **UX Improvements:** Added a recent foods dropdown to the "Name" field, showing your last 10 unique food logs for faster entry.
- **Bug Fixes:** Resolved an issue where the loading spinner on food AI analysis would never disappear.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Faster Logging: The Food Name input now suggests your 10 most recently logged foods for quick selection!
- Bug Fixes: Fixed the infinite loading spinner that could get stuck after an AI food analysis.

---

🚀 Version 1.6.3 (Build 63) - Release Notes

### Full Version

🌟 What's New:

- **UX Improvements:** The "Food Log" form now smoothly auto-scrolls into focus when adding or editing a meal, preventing the form from being hidden below the fold on smaller screens.
- **Enhanced Health Connect Integration:** When Health Connect isn't installed or configured correctly, the app now shows a helpful modal with a direct link to download the Google Health Connect app.
- **Pro Tier Default:** All new accounts now automatically start on the Pro tier for expanded AI access!

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- UX Polish: Improved auto-scrolling when adding food logs so the form is always in view!
- Health Connect: Enhanced error instructions with direct Play Store links.
- Pro Features: New accounts now automatically unlock the Pro Tier!

---

🚀 Version 1.6.2 (Build 62) - Release Notes

### Full Version

🌟 What's New:

- **Top Nutrients Dashboard:** Introduced a sleek "Top Nutrients" summary panel at the top of the Vitamins page, allowing you to instantly track key metrics (Vitamin A, C, Calcium, Potassium, Phosphorus, Iron) at a glance without scrolling.
- **Supplements + Food Tracking:** Added an intelligent "Supplements + Food" toggle! The app now estimates the vitamins you've gained from your logged meals using AI, seamlessly combining it with your supplement stack for a true "Total Daily Intake" picture.
- **Dynamic Color Indicators:** Nutrient percentage values are now dynamically color-coded (Orange for exceeding RDV, Emerald for on-track, Violet for zero intake) so you can visually gauge your nutrition progress instantly.
- **Dashboard Simplification:** The main dashboard's "Vitamins & Supplements" section will now only show vitamins that have been logged for today, rather than cluttering the screen with your entire master list!

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- **Top Nutrients Dashboard:** Added a sleek summary panel to track key vitamins instantly.
- **Supplements + Food:** New toggle uses AI to combine logged meal nutrients with your supplements!
- **Dynamic Colors:** Percentages are color-coded so you can gauge progress at a glance.
- **Clean Dashboard:** Simplified the main dashboard to only show vitamins logged today.

---

🚀 Version 1.6.1 (Build 61) - Release Notes

### Full Version

🌟 What's New:

- **AI Vitamin Analysis:** Added an intelligent "Auto-Fill" feature! When you add a new supplement, the app now uses AI to calculate the missing Recommended Daily Values (RDVs) and dosages specifically tailored to your age and gender.
- **Enhanced Accuracy:** We overhauled the way we calculate your total daily vitamin intake. The app now accurately combines multiple supplements and infers missing percentages, giving you a crystal-clear picture of your daily micronutrients.
- **Enhanced Visuals:** Dramatically improved the food logging interface by expanding meal photo previews to full width, making it much easier to verify the AI's food analysis at a glance.
- **Smart Local Storage:** Food images are now intelligently saved directly to your device for up to 7 days. This drastically speeds up load times when reviewing recent meals while completely eliminating cloud storage bloat and saving your internet bandwidth!

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- Smart Vitamins: AI now auto-calculates missing Recommended Daily Values (RDVs) tailored to your age & gender!
- Better Tracking: Overhauled daily vitamin aggregation for perfectly accurate micronutrient totals.
- Expanded Previews: Food logging photos now display at full width for a much richer visual experience.
- Offline Caching: Recent meal images are saved on your device for 7 days, giving ultra-fast loading times.

---

🚀 Version 1.5.8 (Build 58) - Release Notes

### Full Version

🌟 What's New:

- **Visual Upgrades:** Renamed "Snap Photo" to "Upload Photo" to better reflect gallery support, and cleaned up app icons across iOS and Android for a modern, unified aesthetic.
- **Better Data Exports:** Added a real-time progress bar when exporting your data from settings, so you know exactly when your backup zip file is ready!
- **Android AI Camera Fix:** Corrected system permissions on Android so the AI Food Analyzer and camera functions correctly.
- **Device Compatibility:** Restored support for Chromebooks, Tablets, and other devices without built-in cameras by making the camera feature optional.
- **Performance & Reliability:** Upgraded backend AI proxies for faster image processing and more robust cross-platform stability.

### Google Play Console (Short Version - under 500 chars)

🌟 What's New:

- **Visuals:** Updated to "Upload Photo" for clarity & refreshed app icons.
- **Exports:** Added a real-time progress bar when exporting data backups.
- **Android Fix:** Resolved camera permissions so AI Food Analyzer works flawlessly.
- **Compatibility:** Restored app support for Chromebooks and tablets without cameras.
- **Performance:** Upgraded AI proxy for faster cross-platform analysis.

---

🚀 Version 1.5.4 (Build 54) - Release Notes

🌟 What's New:

- Mobile UI Enhancements: The edit and delete buttons on your daily vitamin schedule are now fully visible and accessible on all mobile devices!
- iOS Login Reliability: Fix a loading issue that could occur during launch, ensuring fast database connections and seamless logins on iOS.
