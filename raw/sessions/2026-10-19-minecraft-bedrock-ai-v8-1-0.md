---
title: Minecraft Bedrock AI Companion v8.0.0–v8.1.0 — Dry-Land Station, Continuous Explore Brain, Natural Dialogue & Team Planning Mode
source: conversation
captured: 2026-10-19
tags: [session, minecraft, bedrock, gemini, ai-agent]
---

# Session Summary — Minecraft Bedrock AI Companion (v8.0.0–v8.1.0)

## Goal
Upgrade `c:\dev\minecraft-bedrock-ai` from `v7.3.3` through `v8.1.0` (`F8`) to resolve in-game navigation, station placement, and dialogue issues discovered during live playtesting, add Gemini-driven continuous `Explore Mode` with gesture mode switching, and implement **Team Planning & Colony Mode** where multiple bots converse in chat, formulate master plans, and build a colony together.

## Key Technical Decisions & Findings

1. **Dry-Land Beacon Bot Station & Handheld Remote (`v8.0.0`)**:
   - Fixed GameTest station spawning in water by adding `findDryLandStationSpot()` (`botController.ts`), which scans concentric rings (`8–44` blocks) around the player for a `7x7` surface footprint at `Y >= 63` with zero liquid or aquatic plant blocks.
   - Added `isPositionUnderwater()` and `cleanupUnderwaterStationBlocks()` (`botManager.ts`) to automatically purge legacy submerged beacons and relocate the station to dry land.
   - Intercepted `world.beforeEvents.playerInteractWithBlock` (`cancel = true`) on the station Beacon and Structure Block so right-clicking opens `openBotStationMenu()` instead of the vanilla Beacon UI.
   - Added automatic delivery of the `✦ AI Companion Remote ✦` (`minecraft:clock`) on player spawn/respawn.

2. **2-Block Player Personal Space & Mineshaft Anti-Oscillation (`v8.0.0–v8.1.0`)**:
   - Added `enforcePlayerPersonalSpaceAndClearance()` (`botController.ts`) so bots maintain a `>= 2.0`-block buffer from human players and mine out obstructing non-protected blocks if cornered.
   - Resolved a forward/backward oscillation loop during staircase mining (`fdc1181`): when a staircase origin or waypoint lay near the player, `walkTowardWorldPos()` previously walked into the `2.0`-block personal-space bubble and triggered `enforcePlayerPersonalSpaceAndClearance()` to back up every other tick. Fixed by placing new staircase origins `6` blocks away from the nearest human player (`miningSkill.ts`) and adding `violatesPlayerPersonalSpace()` (`2.35`-block radius) with `±45°/90°/135°` detour steering inside `walkTowardWorldPos()`.

3. **Wood Search Radius Expansion & ASCII-Safe Telemetry JSON (`v8.1.0`)**:
   - Fixed a loop where `Buddy` repeatedly started and stopped `collect_resource: wood` when no trees existed within `26` blocks (`bb80b4d`): `MiningSkill.findNearestTargetBlock()` now expands its search radius up to `64` blocks (`±16 Y`) when the local radius is empty, and walks a `15`-second scouting leg before halting if the biome is treeless.
   - Fixed `SyntaxError: Unterminated string in JSON` in `bridge/src/contentLogWatcher.ts`: Minecraft Bedrock's `ContentLog` splits lines mid-JSON when multi-byte UTF-8 characters (`§`, `✦`, `•`, `—`, emojis) appear in `[AI_STATE]` or `[AI_EVENT]`. Stripping non-ASCII characters (`.replace(/[^\x20-\x7E]/g, "")`) before logging guarantees clean JSON parsing.

4. **Continuous Explore Brain, Gesture Switching & Natural Progression Advisor (`v8.1.0`)**:
   - In `Explore Mode`, `utilityGoalBrain.decideAndExecuteNextExploreAction()` and `[AI_EVENT: EXPLORE_DECISION_NEEDED]` run after each completed skill (`stopSkill`), chaining autonomous survival and tech-tree actions continuously until `Explore Mode` is turned OFF.
   - Restricted proactive questions (`tickProactiveQuestions`) to `Follow Mode` (`followModeEnabled && !autoExploreEnabled`).
   - Added gesture detection (`checkPlayerGestureModeSwitch` for double-crouch `duck-duck` within `1.2s` and `checkPlayerEmoteGesture` for emotes) to toggle the bot between `Explore Mode` and `Follow Mode` with context-aware spoken announcements (`MODE_SWITCHED`).
   - Upgraded `DialogEngine` (`dialogEngine.ts`) to answer natural progression questions (`"what should I made next?"`), auto-chain gathering/smelting/crafting for tool requests (`"we need an iron pickax to get this gold"`), share or hunt food on request (`"does anyone have any food?"`), and parse quantities (`"lets get more logs.. 64 logs"`).

5. **Team Planning & Colony Mode (`v8.1.0`)**:
   - Added `toggleTeamPlanMode()` and `runTeamHuddleAndExecutePlan()` in `VillageManager` (`villageManager.ts`), plus `"house"`, `"beds"`, and `"farm_plot"` blueprints in `BuildingSkill` (`buildingSkill.ts`) (`e65d275`).
   - When enabled via UI menu, Beacon Station, `/ai:bot team`, `!team`, or natural chat (`"talk with each other"`, `"come up with a plan"`), `VillageManager` ensures a 4-bot specialist squad (`Buddy`, `Oakley`, `Harvestia`, `MinerMax`) is spawned, runs a staggered 4-part bot-to-bot huddle conversation in chat, and executes a 4-phase dry-land colony plan:
     1. `house_and_beds`: `7x5x7` House with cobblestone floor, oak log corners, glass windows, pitched roof, crafting table, furnace, shared chest, and `2` functional beds (`setblock ... bed 0` + `home_bed` landmark).
     2. `irrigated_farm`: `5x5` irrigated farmland plot with central water, planted `wheat`/`carrots`/`potatoes`, and lit corner fences.
     3. `mineshaft`: Walk-down 3-block-tall staircase mineshaft (`mineMode: "staircase"`).
     4. `watchtower_and_patrol`: Cobblestone watchtower, perimeter torches, and inter-agent supply bartering.

## Open Threads
- PR #10 (`dev_v8.1.0` $\rightarrow$ `main`) is open on `mpursley/minecraft-bedrock-ai` and updated through commit `e65d275`.
- In-game verification of the 4-phase Team Planning & Colony Mode (`House + Beds` $\rightarrow$ `Irrigated Farm` $\rightarrow$ `Staircase Mineshaft` $\rightarrow$ `Watchtower`).
