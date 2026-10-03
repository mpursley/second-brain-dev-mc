---
title: Task and project structure from assistant app export
source: manual
captured: 2026-08-15
tags: [tasks, projects, export]
---

# Task and project structure — assistant app export

Extracted from `assistant_fitness_export_2026-08-16.zip`, supplied 2026-08-15.
The archive was an export from a fitness assistant app; the task and project
data lived inside saved chat transcripts (`log_chats.json`), not in any
structured task file.

**Only the task and project content is recorded here.** The archive also held
profile data, food logs, activity logs, and vitamin logs. Those were reviewed
but deliberately not ingested — see the note at the end.

## Staleness

The chats containing this structure are dated **2026-06-11 to 2026-06-23**. The
task queue and every due date below are a snapshot from that window, roughly two
months before capture. They have not been reconciled against what was actually
completed since.

## Projects

Verbatim from the `/get projects` response, 2026-06-11:

```
Add Contacts:
  - Add contacts

Site - Hunger:
  - V2.1.5 updates
  - Board/Influencers
  - v2.1.6 updates

Site - Focus:
  - UI Updates

Stay Fit:
  - Workouts
  - Track Food and Vitamins
  - Optimize workouts

Family Time!:
  - Touch grass!
  - Trip: Key Largo

Life Stuff: Home, car, etc:
  - Boat
  - Truck
  - House
  - Home Automation

Maintain Home Office and Tech:
  - Gemini and AntiGravity
```

## Task queue

Verbatim from the `/get tasks 10` response, 2026-06-11. Sub-project in
parentheses is as the app reported it.

```
- Replicate gemini-cli-server with antigravity (Gemini and AntiGravity)
- v2.1.6: Build IOS and Android version (v2.1.6 updates)
- Submit the android and ios version for download (UI Updates)
- Make the android and ios store listing images (UI Updates)
- Start social media accounts (UI Updates)
- Get the IOS version built and working (UI Updates)
- Home: Add an option to Review the tasks with the AI-Agent (UI Updates)
- Home: Add a summary, search and "Ask AI" option (UI Updates)
- Tasks: Get the + button to start a model with all the options (UI Updates)
- Goals: Show the full path (UI Updates)
```

The queue was requested twice and returned the first two items in a different
order each time, so the ordering is not a stable priority ranking.

## Upcoming tasks, 2026-06-11

From a separate chat the same day. Due dates are relative to 2026-06-11 and are
long past.

Time-sensitive:

- Book a Hotel in Homestead — due 2026-06-12
- Measure 4 days of jogging — due 2026-06-11
- Test an inflatable bed — due 2026-06-15

Life and personal:

- Boat: Replace the bimini top, add side shelves, and add a bilge pump
- Truck: Fix the rear door
- Trip: Key Largo: Plan days/nights, stops, and packing lists

Site and app:

- Home: Add a summary, search and "Ask AI" option — marked In-Progress
- Tasks: Get the + button to start a modal with all the options
- Build and get the iOS version working, then submit the new app store listings

Health and fitness:

- Load 4 days of jogging measurements into Google Drive
- Daily routine: tracking food, taking vitamins, getting runs in

## Not ingested

The archive also contained a profile (name, age, height, weight, goal, ZIP,
reminder schedule), 26 food entries (2026-05-23 to 2026-06-24), 81 activity
entries (2026-05-17 to 2026-08-15, all device-sync daily summaries), 10 vitamin
doses (2026-05-25 to 2026-05-29), two supplement/medication definitions, and
empty hydration and sleep logs.

That material is health data and was not carried into the repo. Only the
activity log is current; food and vitamin logging stopped in June.

The original `.zip` was not committed. It was extracted to a session scratchpad
that does not persist.
