---
title: Minecraft AI v9.1.0 — BDS Seed 1 Setup, MCP Integration, 20 TPS Tick Optimization, Ladder Ascent & Streamlined Menu
source: conversation
captured: 2026-10-21
tags: [session, minecraft, bedrock, gemini, ai-agent, mcp, performance]
---

# Session Summary — Minecraft AI Companion (v9.1.0)

## Goal
Resolve in-game navigation, building, and mining blockers discovered during playtesting in `c:\dev\minecraft-ai` (`v9.1.0`), set up a local Bedrock Dedicated Server (`BDS`) with `seed = 1` and Antigravity MCP tool integration, diagnose and eliminate severe Add-On tick lag (`1.5 TPS` $\rightarrow$ `20 TPS`), fix vertical ladder shaft climbing from deep mines, and streamline the in-game UI menu for focused feature testing.

## Key Technical Decisions & Findings

1. **Leaf Clearing, Anti-Stacked Farms, Player-Anchored Builds & Climbeable Watchtowers (`v9.1.0`)**:
   - **Leaf Clearing (`botController.ts`, `pathfinder3D.ts`, `idleHumanizer.ts`)**: Bots now treat tree leaves and vines as passable in 3D A* and step checks, and `clearBlockingLeavesAroundBot()` breaks leaves at feet, head, and overhead height while walking or chopping trees.
   - **Preventing Stacked Farms (`buildingSkill.ts`, `villageManager.ts`)**: `findExistingFarmNear()` checks within `18` blocks for an existing irrigated farm (`>= 8` farmland blocks) and switches the bot to `FarmingSkill` (`harvest_and_replant`) instead of building a second farm layer on top. `footprintOverlapsExistingStructure()` shifts new build origins onto clear terrain, and `repairStackedFarmLayers()` removes floating farmland and frees trapped bots.
   - **Player-Anchored Building (`buildingSkill.ts`, `botController.ts`, `dialogEngine.ts`, `uiMenu.ts`)**: When a player requests a build via chat or the UI menu, `BuildingSkill.start()` anchors the build `4` blocks in front of the requesting player's position and view direction rather than defaulting to the Beacon Bot Station.
   - **Villager-Style Watchtower (`buildingSkill.ts`)**: Redesigned the `"tower"` preset with a 2-block-tall walk-in North doorway (`(1, 0..1, 0)`), a full interior ladder shaft (`(1, 0..height-1, 1)`) mounted to the solid South wall (`facing_direction: 2`), an overhanging `5x5` lookout deck with a ladder hatch, and crenellated battlements. `retrofitExistingWatchtowers()` patches previously built sealed towers in the world.

2. **Bedrock Dedicated Server (`BDS`) with Seed `1` & Single-Flight GameTest Lock**:
   - Automated `bds/bedrock_server.exe` setup (`scripts/setup-bds.mjs`, `scripts/start-bds.mjs`, `npm run start:bds`) with `level-seed=1` in `server.properties` and binary little-endian NBT patching of `bds/worlds/Bedrock level/level.dat` (`RandomSeed = 1`, `SpawnX = 163, SpawnY = 32767, SpawnZ = 170`, `cheatsEnabled = 1`, and Beta API experiments `gametest` + `upcoming_creator_features`).
   - Added a static single-flight lock (`BotController.gameTestLoadInFlightUntilMs`) around `/gametest clearall` + `/gametest run ai:bot` so spawning multiple bots simultaneously never fires concurrent GameTest structure loads (which previously caused an unhandled native exception `0xC0000005` in `bedrock_server.exe`).

3. **Antigravity MCP Integration (`scripts/mcp-server.mjs`)**:
   - Registered the `minecraft-ai` MCP server in `C:\Users\mpurs\.gemini\antigravity\mcp_config.json` with 4 tools: `get_bots_status`, `chat_with_bot`, `command_bot`, and `get_recent_logs`.
   - Added deterministic file-backed IPC (`bds/worlds/Bedrock level/ai_ipc/latest_state.json`, `events.jsonl`) alongside `stdin` `scriptevent ai:cmd` / `scriptevent ai:chat` injection into `bedrock_server.exe` and `http://localhost:3000` bridge fallback.

4. **Follow Mode Sprint-Jumping & Ramp Obstacle Mining**:
   - Fixed slow 1-block-at-a-time walking in Follow Mode (`botController.ts`, `idleHumanizer.ts`, `pathfinder3D.ts`): `Pathfinder3D.resolveNextSteeringWaypoint()` now checks `hasDirectWalkableLineOfSight()` (`1–5` blocks ahead) and steers directly toward the target without 1-block A* grid zig-zags when the path is clear; sprint-jumping activates at `>= 4.5` blocks in Follow Mode; and the `idleHumanizer` gaze controller yields to movement yaw whenever `distToPlayer > followDistance + 0.6`.
   - Fixed bots getting trapped in staircase ramps (`miningSkill.ts`, `pathfinder3D.ts`, `botController.ts`): `placeLadderAt()` and `tryScaffoldOrBridge()` never place cobblestone in the ramp behind the bot or on underground step-downs (`by < 62`), and `breakBlockingObstaclesAroundBot()` mines out obstructing cobblestone/stone/dirt in the bot's path or overhead ceiling.

5. **Add-On Tick Performance Optimization (`1.5 TPS` $\rightarrow$ `20 TPS`)**:
   - Diagnosed `ContentLog2026-10-21_18-54-25_1.txt` where the 60-tick `heartbeat` slowed from `3.0s` (`20 TPS`) to `28–40s` (`1.5–2.0 TPS`, ~500 ms/tick) once 4 bots spawned:
     1. **Fixed `FarmingSkill` / `BotController.stopSkill` Infinite Same-Tick Loop**: `stopSkill()` now matches `"No more farmable plots"` and transitions specialist farmers to `explore` scouting instead of restarting `applyRoleDefaultTask()` $\rightarrow$ `FarmingSkill.start()` on the same tick.
     2. **Replaced 42,525-Block Cube Scan in `MiningSkill.findNearestTargetBlock()`**: Now scans outward in concentric horizontal shells (`r = 1..12`, `yOffsets = [0, 1, -1, 2, -2, 3, -3, 4]`) and exits immediately on the closest shell with a valid block (`< 300` reads), throttles scouting scans to once every `8` ticks, and only calls `findNearestDryShore()` when `bot.isInWater` is true.
     3. **Added In-Memory Parsed Caching in `WorldStore` (`worldStore.ts`)**: Added `parsedCache` and `initializedKeys` so `getVillageData`, `getLandmarks`, `getServerConfig`, `getDialogLog`, and `getHomes` do not call `world.getDynamicProperty` and `JSON.parse` on every tick.
     4. **Optimized `emitTelemetry()` & `getTechTreeSummary()`**: `getTechTreeSummary()` reads `getInventorySummary()` once instead of `17` separate container scans (`576` fewer native slot reads per call); `emitTelemetry()` caches `nearbyNotableBlocks` for `8s` and throttles non-priority telemetry to `2.5s`.
     5. **Bounded 3D A* & Repair Cooldowns**: Added a per-search `walkableCache` (`maxIterations = 32`) in `Pathfinder3D.computeBoundedAStarPath()` and `90s` static cooldowns on `repairStackedFarmLayers()` and `retrofitExistingWatchtowers()`.

6. **Vertical Ladder Shaft Ascent Fix (`miningSkill.ts`, `botController.ts`)**:
   - Diagnosed why `Buddy` stayed at `Y = 10.1` (`Climbing ladder shaft to surface (Y=10/69)`) with dropped ladders on the ground:
     - A `minecraft:ladder` hitbox is `0.1875` blocks thick against its wall, while a `SimulatedPlayer` (`0.6` wide) positioned at block center (`+0.5, +0.5`) spans `[0.20, 0.80]` and does not touch the ladder. Between 6-tick (`0.3s`) main-loop intervals, gravity pulled the bot `1.05` blocks back down in freefall to `Y = 10.1`.
     - Async `setblock ... air destroy` commands and attaching ladders to non-solid blocks (such as tunnel torches) or overwriting existing ladders caused ladders to pop off as item drops.
   - **Fix**: `BotController.tickWaterSwim()` now runs `MiningSkill.tickFastAscent()` every `2` ticks (`0.1s`), tracking `ascentCurrentY` monotonically, synchronously clearing `by .. by + 3` overhead (`setType("minecraft:air")`), ensuring a solid `minecraft:cobblestone` backing block on the consistent left tunnel wall before placing each ladder, skipping blocks that already contain `minecraft:ladder`, and positioning the bot `+0.22` toward the ladder wall with `moveRelative(0, 1, 1.0)`.

7. **Streamlined In-Game UI Menu (`uiMenu.ts`)**:
   - Simplified `BotUiMenu.showMainForm()` to 5 core options for step-by-step feature testing: **Explorer Mode** (`ON/OFF`), **Follow Me** (`ON/OFF`), **Teleport to Me**, **Build Structures...**, and **Mine Shaft...**, while preserving the remaining modals commented in `uiMenu.ts` to re-enable incrementally.
