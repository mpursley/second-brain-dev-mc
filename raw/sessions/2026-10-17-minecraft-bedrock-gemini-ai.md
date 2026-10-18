---
title: Bootstrap and build Gemini AI Companion for Minecraft Bedrock Edition (v1.0)
source: conversation
captured: 2026-10-17
tags: [session, minecraft, bedrock, gemini, ai-agent]
---

# Session Summary — Minecraft Bedrock Gemini AI Companion (v1.0)

## Goal
Bootstrap and build an AI-driven Minecraft Bedrock Edition Addon and local companion bridge (`c:\dev\minecraft-bedrock-gemini-ai`) that adds an autonomous in-game character (`SimulatedPlayer` named `Gemini`) capable of exploring, gathering resources, mining, building, hunting, defending, farming, crafting, and sharing items, connected to Google Gemini (`gemini-3.8-flash`) with live game screen vision, two-way voice chat, customizable TTS, and in-game slash/UI controls.

## Key Technical Findings & Decisions

1. **Windows GDK vs. UWP Paths for Minecraft Bedrock**:
   - Modern Minecraft for Windows installations use the GDK path under `%APPDATA%\Minecraft Bedrock\Users\<user-id>\games\com.mojang` (with logs in `%APPDATA%\Minecraft Bedrock\logs`) rather than only the legacy UWP `%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang` path.
   - `scripts/deploy-addon.mjs` and `bridge/src/contentLogWatcher.ts` were configured to target and monitor both GDK and UWP directories automatically.

2. **Minecraft Bedrock Script API Version Compatibility (`2.11.0-beta`)**:
   - The installed Minecraft Bedrock build requires `@minecraft/server` `2.11.0-beta`, `@minecraft/server-gametest` `1.0.0-beta`, and `@minecraft/server-ui` `2.3.0-beta`.
   - In `@minecraft/server` 2.x, `entity.isValid` is a boolean property (previously `isValid()` method in 1.x) and `dimension.runCommand` replaces `runCommandAsync` in synchronous contexts. Wrapper helpers (`isEntityValid`, `runDimensionCommand`) handle both cleanly.
   - Native custom slash commands (`/gemini:ai`) are registered inside `system.beforeEvents.startup.subscribe` via `init.customCommandRegistry.registerCommand` with `CommandPermissionLevel.Any`.

3. **`SimulatedPlayer` World-Space Navigation & Physics**:
   - GameTest's built-in `navigateToBlock` and `lookAtBlock` interpret coordinates relative to the 3x3x3 GameTest structure origin (`gemini:bot_anchor`), which caused the bot to stare straight up and fail to pathfind outside the structure.
   - Replaced all movement and rotation with world-space helpers (`lookAtWorldPos` and `walkTowardWorldPos` using `bot.setRotation`, `bot.setBodyRotation`, and `bot.moveRelative(0, 1, speed)`).

4. **Survival Instincts (`SurvivalInstinct`)**:
   - **Anti-Drowning (`0.1s` / 2-tick loop)**: `SimulatedPlayer` sinks in rivers if jump only fires every 6 ticks and underwater foliage (`seagrass`, `kelp`) isn't treated as water. Added `isWaterBlock()`, a 2-tick buoyancy loop (`tickFastReflexes`) that keeps the bot at `surfaceY - 0.55` so its head stays in air, emergency `water_breathing` when submerged under overhangs, and automatic shore-seeking (`findNearestDryShore`) with bank step-up assistance.
   - **Cliff & Hazard Avoidance**: `isSafeStepColumn()` inspects look-ahead columns before stepping, steering around drops `> 3` blocks (fall damage threshold) and hazards (`lava`, `fire`, `magma`, `cactus`, `sweet_berry_bush`, `powder_snow`). Mid-air drops `>= 2.8` blocks trigger a `slow_falling` cushion. Mining and exploration skills forbid digging straight down under the bot's feet.
   - **Combat Kiting & Creeper Evasion**: Automatically flees Creepers within `8` blocks, kites hostile mobs at `2.7–3.5` block reach by backpedaling and circle-strafing while swinging, retreats at `<= 8 HP`, and auto-consumes food to recover health.

5. **Gemini API & Live Vision HUD (`http://localhost:3000`)**:
   - The `AQ.Ab8RN6...` API key is bound to an AI Studio service account (`ais-gemini-key-...`) with `generativelanguage.googleapis.com` enabled; it works with `new GoogleGenAI({ apiKey })` (without `vertexai: true`) and model `gemini-3.8-flash`.
   - Windows GDI `CopyFromScreen` captures black frames on DirectX 12 Minecraft windows. Added WebRTC `getDisplayMedia` live window sharing (`📺 Share Minecraft Window`) in the browser HUD that streams JPEG frames to `POST /api/frame` every `1.5s`.
   - Added customizable TTS settings (Voice selector sorting English/Natural voices first, Speaking Speed `0.5x–2.0x`, Pitch `0.50–1.50`, `🔊 Test Voice`, `🔇 Mute Now`, `localStorage` persistence, and per-message `🔊` Re-speak buttons).
   - Fixed live conversation auto-updates in `pollStatus()` by tracking unique turn timestamps (`seenTurnKeys`) instead of comparing against the capped `recentTurns.slice(-50).length`.

## Open Threads & Next Steps
Documented in `c:\dev\minecraft-bedrock-gemini-ai\FEATURE_ROADMAP.md` (and current state in `CURRENT_VERSION.md`):
- Phase 1: Smart Chest storage (`StorageSkill`), Furnace smelting (`SmeltingSkill`), auto-torch placement, and bed/nighttime handling.
- Phase 2: Persistent world waypoints (`DynamicProperties`) and Voyager/Mindcraft-style hierarchical tech-tree goal planner.
- Phase 3: Local 3D A* voxel pathfinder (`mineflayer-pathfinder` / Baritone style), scaffolding/bridging, and door interaction.
- Phase 4: Auto-equipping armor/shields, player co-op combat assist on `entityHurt`, and ranged bow/crossbow combat.
- Phase 5: Proactive AI voice callouts and Gemini Live API full-duplex audio.
