---
title: Minecraft Bedrock Gemini AI Companion
type: project
tags: [minecraft, bedrock, gemini, ai-agent, typescript]
created: 2026-10-17
updated: 2026-10-19
sources:
  - raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md
  - raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md
---

# Minecraft Bedrock Gemini AI Companion

An AI-driven Minecraft Bedrock Edition Addon (Behavior Pack + Resource Pack) and local Node.js companion bridge located at `c:\dev\minecraft-bedrock-ai` (current version `v8.1.0`, `F0`–`F8`). It spawns up to 8 autonomous `SimulatedPlayer` companions led by `Buddy` (`Buddy`, `MinerMax`, `Oakley`, `Harvestia`, `Shieldra`, `Arrowyn`, `BuilderBen`, `ScoutSam`), powered by Google Gemini (`gemini-3.8-flash`) with live game screen vision, world telemetry, function calling, two-way voice chat, customizable text-to-speech, and cooperative multi-bot colony planning ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md), [2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).

## Architecture & Key Paths

- **Repository Root**: `c:\dev\minecraft-bedrock-ai`
  - `VERSION` — Single source of truth for the active semantic version (`8.1.0`).
  - `CURRENT_VERSION.md` — `v8.1.0` architecture and feature reference.
  - `TESTING_GUIDE.md` & `TODO.md` — `F0`–`F8` aligned feature checklists and test guide.
- **Minecraft Bedrock Addon (`addon/behavior_pack` & `addon/resource_pack`)**:
  - Uses `@minecraft/server` `2.11.0-beta`, `@minecraft/server-gametest` `1.0.0-beta`, and `@minecraft/server-ui` `2.3.0-beta`.
  - Deployed via `npm run deploy:addon` to both Windows GDK (`%APPDATA%\Minecraft Bedrock\Users\*\games\com.mojang`) and UWP (`%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`) development pack folders ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **Companion Bridge & Web HUD (`bridge/src`)**:
  - Runs on `http://localhost:3000` (Voice, TTS & Vision HUD) and `ws://localhost:8080` (Minecraft `/connect localhost:8080` WebSocket server).
  - Tails `%APPDATA%\Minecraft Bedrock\logs\ContentLog*.txt` for ASCII-sanitized `[AI_STATE]` and `[AI_EVENT]` JSON payloads emitted by the Behavior Pack ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).

## Technical Conventions & Constraints

- **Dry-Land Beacon Bot Station & Remote (`F8`)**:
  - `findDryLandStationSpot()` (`botController.ts`) scans concentric rings (`8–44` blocks) around the player for a `7x7` surface footprint at `Y >= 63` with zero water or aquatic foliage before running `/gametest run ai:bot`, and `cleanupUnderwaterStationBlocks()` (`botManager.ts`) removes any submerged legacy beacons ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
  - Players receive the `✦ AI Companion Remote ✦` (`minecraft:clock`) automatically on spawn/respawn, and right-clicking the station Beacon or Structure Block intercepts `playerInteractWithBlock` (`cancel = true`) to open `openBotStationMenu()` ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
- **World-Space Movement & 2-Block Personal Space**:
  - GameTest's built-in `navigateToBlock` and `lookAtBlock` operate in structure-relative coordinates (`3x3x3` `ai:bot_anchor`). All bot movement uses world-space rotation (`lookAtWorldPos`) and relative walking (`walkTowardWorldPos` with `bot.moveRelative(0, 1, speed)`) ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
  - `enforcePlayerPersonalSpaceAndClearance()` keeps bots `>= 2.0` blocks away from human players and mines out obstructing blocks when cornered. `walkTowardWorldPos()` checks `violatesPlayerPersonalSpace()` (`2.35`-block radius) and detours (`±45°/90°/135°`) or stops at the boundary so tasks near the player (such as staircase mineshafts, whose origins are offset `6` blocks away) never oscillate forward and backward ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
- **Continuous Explore Brain, Gesture Switching & Natural Dialogue (`v8.1.0`)**:
  - While `Explore Mode` is ON, `utilityGoalBrain.decideAndExecuteNextExploreAction()` and `[AI_EVENT: EXPLORE_DECISION_NEEDED]` run after each completed task (`stopSkill`) to chain autonomous survival and tech-tree progression until `Explore Mode` is toggled OFF ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
  - Proactive helpful questions (`tickProactiveQuestions`) fire `1–2` times per minute only in `Follow Mode`, never in `Explore Mode`. Players can toggle between `Explore Mode` and `Follow Mode` via double-crouch (`duck-duck` within `1.2s`) or performing an emote within `16` blocks of the bot ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
  - `DialogEngine` (`dialogEngine.ts`) provides a 5-stage live progression advisor (`handleWhatToDoNext`), multi-step gather/smelt/craft queues for tool requests (`handleNaturalCraftRequest`), food sharing/hunting handlers, and `64`-block expanded wood search with scouting walks when local trees are depleted ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
- **Team Planning & Colony Mode (`VillageManager` & `BuildingSkill`)**:
  - Toggling Team Planning Mode ON (`/ai:bot team`, `!team`, UI menu, or natural chat like `"talk with each other"` / `"come up with a plan"`) ensures a 4-bot specialist squad (`Buddy`, `Oakley`, `Harvestia`, `MinerMax`) is spawned, runs a staggered bot-to-bot huddle conversation in chat, and executes a 4-phase dry-land colony master plan: (1) `7x5x7` House with `2` functional beds, crafting table, furnace & chest (`preset: "house"`), (2) `5x5` irrigated farmland plot planted with wheat, carrots & potatoes (`preset: "farm_plot"`), (3) walk-down 3-block-tall staircase mineshaft (`mineMode: "staircase"`), and (4) cobblestone watchtower, perimeter torches, and inter-agent supply bartering ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
- **ASCII-Safe Telemetry Logging**:
  - Windows Bedrock `ContentLog` splits lines mid-JSON if multi-byte UTF-8 characters (`§`, `✦`, `•`, `—`, emojis) appear in `console.warn`. All `[AI_STATE]` and `[AI_EVENT]` payloads strip non-ASCII characters (`.replace(/[^\x20-\x7E]/g, "")`) prior to emission ([2026-10-19 session](../../raw/sessions/2026-10-19-minecraft-bedrock-ai-v8-1-0.md)).
- **Survival Instincts (`SurvivalInstinct`)**:
  - `0.1s` (2-tick) reflex loop keeps bots buoyant on water surfaces (`surfaceY - 0.55`), grants emergency `water_breathing` if submerged, cushions falls `>= 2.8` blocks with `slow_falling`, escapes lava/fire/cactus/magma, and breaks suffocating blocks at head height ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
  - `0.3s` (6-tick) threat loop flees Creepers within `8` blocks, kites hostile mobs at `2.7–3.5` blocks via backpedaling and circle-strafing, retreats at `<= 8 HP`, and auto-eats food to heal ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **Live Screen Capture & Voice HUD**:
  - DirectX 12 Minecraft windows return black frames with Windows GDI `CopyFromScreen`. The Web HUD uses WebRTC `getDisplayMedia` (`📺 Share Minecraft Window`) to stream live JPEG frames to `POST /api/frame` every `1.5s`, paired with Push-to-Talk (`0ms` look reflex) and customizable TTS controls ([2026-10-17 session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).

