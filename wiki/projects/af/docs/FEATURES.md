# HUNGER App MVP Features

HUNGER is an AI-powered, holistic health tracking application designed to monitor your nutritional intake, emotional well-being, and physical activity with minimal friction.

## Platform Support

- `[In-Progress]` **Web Frontend**: Fully responsive progressive web application.
- `[In-Progress]` **Android App**: Native Android device support.
- `[In-Progress]` **iOS App**: Native iOS device support.

## Core Features

### 1. Wellness Check-in (Home)

- `[Done]` **Daily State Tracking**: A 5-question daily check-in that tracks Energy, Mood, Sleep, Hunger, and Joy levels.
- `[Done]` **Persistent State Display**: Your most recent check-in is kept visible, providing a clear reference of your state throughout the day.
- `[Done]` **Activity Summary**: At-a-glance view of daily `KCAL IN`, `STEPS`, `MOVE MINS`, and `KCAL BURNED`, with the option to hide numbers for a more mindful experience.

### 2. Intelligent Nutrition Logging (Fuel)

- `[Done]` **AI Photo Analysis**: Upload a photo of your meal and let Google Gemini AI automatically estimate its name, caloric value, and complete macro/micronutrient profile.
- `[Done]` **Smart Text Search**: Type in a meal description and the AI will estimate the nutritional content.
- `[Done]` **Your Daily Macros**: A detailed breakdown of your daily intake vs targets for:
  - Protein (g)
  - Fiber (g)
  - Vitamin A (mcg)
  - Vitamin C (mg)
  - Potassium (mg)
  - Calcium (mg)
- `[Done]` **Weekly Patterns Graph**: An interactive bar graph visualizing your fueling consistency over the last 7 days, color-coded based on how close you are to your caloric baseline.
- `[Done]` **Hydration Tracking**: A simple, stress-free 8-glass water tracker.
- `[Suggested]` **Vitamins & Supplements Logging**: Ability to manually log vitamins and seamlessly combine macros/vitamins with food intake.

### 3. Fig: Your AI Companion

- `[Done]` **Proactive Insights**: "Fig Noticed" cards appear throughout the app, offering gentle, data-driven observations (e.g., correlating high-calorie days with high-mood days).
- `[Done]` **Quick Chat Support**: An on-demand text chat interface allowing you to talk to Fig about your fueling habits, under-fueling patterns, or general wellness advice.
- `[In Progress]` **Voice Chat Support**: Make sure the AI (voice and chat) can "lookup" all the checked in data for the user.
- `[In Progress]` **Live Voice Chat**: Interactive live voice conversation feature powered by Gemini.
- `[Planned]` **AI Customization**: Custom AI Chat/Voice System Messages, behavior fine-tuning, and persona adjustments.

### 4. Activity & Health Sync (Move)

- `[Done]` **Health Connect Integration**: Automatically syncs daily steps, move minutes, and calories burned directly from your device's health data.
- `[Done]` **Activity Timeline**: A detailed log of your workouts and physical activities.
- `[In Progress]` **Movements**: The overall Move section is currently `[In Progress]` as we are conducting market research before fully building out its expanded capabilitie

### 5. Stats & Trends

- `[Done]` **Comprehensive Trend Charts**: Visualizations for Check-in History (with Separated and Stacked views), Fuel logging, and Water intake.
- `[Done]` **Timeframe Controls**: View stats on a Today, 7-Day, or 30-Day sliding window.
- `[Done]` **Macro & Nutrient Breakdown**: Detailed stacked bar charts for macros, alongside an itemized list of all nutrient and supplement sources for any given day.


### 6. Customization & Settings (You)

- `[Done]` **Auto-BMR Calculation**: Automatically calculates a recommended daily caloric baseline (KCAL goal) based on your age, sex, weight, and height.
- `[Done]` **Adaptive UI**: Built-in Dark Mode and Light Mode toggles.
- `[Done]` **Customizable Goals**: Manually override step targets, move minutes, and nutrition targets to fit your specific lifestyle.

### 7. Backend/Infra Features

- `[Done]` **Realtime Database**: Uses Firebase Firestore for real-time data synchronization across devices.
- `[Done]` **Secure Authentication**: Uses Firebase Authentication to securely identify users and manage authentication state.
- `[Validation]` **Disaster Recovery**: Automated Firebase backup and disaster recovery infrastructure setup.
