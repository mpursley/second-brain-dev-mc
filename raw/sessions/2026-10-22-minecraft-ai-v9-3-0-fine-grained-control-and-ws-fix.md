---
title: Minecraft AI v9.2.0–v9.3.0 — Prefix Chat Routing, Quiet Mode, 256-Byte WebSocket Crash Fix, Auto-Orchestrated Gemini 4 Planner + Flash Executor & Fine-Grained Control
source: conversation
captured: 2026-10-22
tags: [session, minecraft, bedrock, gemini, ai-agent, typescript, websocket]
---

# Session Summary — Minecraft AI Companion (v9.2.0–v9.3.0)

## Goal
Add user-configurable Gemini API keys, prefix-based chat routing (`Buddy:`, `Gemini:` / `G:`, `Flash:` / `F:`), and a Quiet Mode toggle for autonomous agent chatter; diagnose and fix two Minecraft Bedrock client freezes during `/connect localhost:8080` sessions; and implement `v9.3.0` fine-grained atomic bot control with auto-orchestrated **Gemini 4** high-level goal planning (`ActiveGoalPlan`) and **Gemini 3.8 Flash** closed-loop micro-step execution.

## Key Technical Decisions & Findings

1. **User-Pasted Gemini API Key & Prefix Chat Routing (`v9.2.0`)**:
   - **API Key Management (`uiMenu.ts`, `adminMenu.ts`, `worldStore.ts`, `bridge/src/index.ts`, `bridge/src/public/index.html`)**: Added an in-game **"🔑 Set Gemini API Key..."** modal (`!apikey <key>`) and Web HUD API key input that emit `[AI_CONFIG]` and persist the key locally in `bridge/data/user_config.json` (git-ignored) without hardcoding keys in the addon.
   - **Explicit Chat Prefix Routing (`main.ts`, `aiAgent.ts`, `bridge/src/index.ts`, `start-bds.mjs`)**:
     - `Buddy: <msg>` routes directly to Buddy's in-game `DialogEngine` with immediate reply enabled (`allowImmediateReply`).
     - `Gemini: <msg>` or `G: <msg>` routes to **Gemini 4** (`gemini-3.1-pro-preview`, fallback `gemini-2.5-pro`) with `ThinkingLevel.HIGH`, triggering Buddy's standing thinking animation and replying with `§d[Gemini 4]`.
     - `Flash: <msg>` or `F: <msg>` routes to **Gemini 3.8 Flash** (`gemini-3-flash-preview`) with `§e[Gemini 3.8 Flash]`.

2. **Quiet Mode Toggle (`Agent Chat in Minecraft Chat: ON/OFF`)**:
   - Added `agentChatEnabled` to `WorldStore` (`worldStore.ts`), `BotController.say()` (`botController.ts`), `VillageChatBus` (`villageManager.ts`), and `BotUiMenu` (`uiMenu.ts`, plus `!agentchat` command).
   - When `OFF` (**Quiet Mode**), bots still converse and display status via overhead **Thought Bubbles**, while autonomous chatter is suppressed from the Minecraft chat window so the player can chat cleanly with `G:`, `F:`, or `Buddy:`.

3. **Root Cause & Fix for Bedrock WebSocket Freeze (`256-Byte` `commandRequest` Buffer Limit)**:
   - **Root Cause**: Two client freezes (`22:42:22` at `453` bytes and `00:06:34` at `477` bytes) occurred when the Bridge sent a single `/scriptevent ai:action <json>` over the Bedrock Automation WebSocket (`commandRequest`) containing either a long chat message or a nested 4-step `actionQueue` array. Payloads exceeding `~256` bytes overflow Minecraft Bedrock's native C++ WebSocket `commandRequest` buffer.
   - **Fix (`bridge/src/minecraftWsServer.ts`)**:
     - Added `MinecraftWsServer.flattenActionForBedrock()`, which splits any `action: "queue"` or `actionQueue[]` into individual flat commands (`appendQueue: true`), splits chat messages longer than `130` characters into sentence chunks, strips unused fields, and enforces a strict `<= 210`-byte JSON payload cap (`<= 235` bytes total `/scriptevent ai:action` command) with `90ms` pacing between WebSocket packets.

4. **SimulatedPlayer Inventory Stack Merging & True Vertical Staircase Depth (`v9.3.0`)**:
   - **Inventory Stack Merging (`botController.ts`)**: `SimulatedPlayer` inventory slots were filling with 36 separate `1x cobblestone` stacks from `breakObstacleBlockAt()`, blocking new item pickups. `addItemToBotInventory()` now merges into existing partial stacks (`amount < maxAmount`) before using empty slots.
   - **True Vertical Depth Tracking (`miningSkill.ts`)**: In `staircase` mode (`dig_down`), `MiningSkill` previously counted broken blocks (`10` broken blocks in a 3-block-tall staircase only descended `~3` vertical Y levels) and ended when `findNearestTargetBlock()` stopped scanning below `dy = -2`. `MiningSkill` now tracks `startDigY` and continues carving downward steps until `currentDepthDug = startDigY - by >= targetCount` before ascending back to `surfaceY` with ladders.

5. **Auto-Orchestrated Gemini 4 Planner + Gemini 3.8 Flash Closed-Loop Step Executor (`v9.3.0`)**:
   - **Auto-Orchestration (`aiAgent.ts`, `bridge/src/index.ts`)**: Multi-step, spatial, or creative requests automatically escalate to **Gemini 4 (`ThinkingLevel.HIGH`)** to formulate an `ActiveGoalPlan` via `set_active_goal_plan` (recording `steps[]`, `startPosition`, and `returnToPosition`).
   - **Closed-Loop Flash Execution (`stepActiveGoalWithFlash`)**: Whenever Buddy completes a step (`TASK_DONE` / `QUEUE_DONE`), **Gemini 3.8 Flash (`ThinkingLevel.LOW`)** inspects live telemetry (`position`, `inventory`, `spatialFeatures`) and executes the next micro-step until the goal is complete.
   - **Overhead Thought Bubble Progress**: Intermediate micro-steps (`[Step X/Y] ...`) are displayed on Buddy's overhead **Thought Bubble** (`action: "thought_bubble"`), keeping Minecraft chat limited to the initial plan and final completion summary.

6. **10 New Fine-Grained Atomic Control Tools & Spatial Telemetry (`v9.3.0`)**:
   - Added `botRotation` and `spatialFeatures` (`nearestWaterEdge`, `nearestFurnace`, `nearestChest`, `nearestTree`, `nearestBoat`, `houseBounds`) to `BotTelemetryState` (`types.ts`, `botController.ts`).
   - Implemented 10 new tools across `aiAgent.ts`, `botController.ts`, `miningSkill.ts`, and `buildingSkill.ts`:
     - `step_relative`: Steps `N` blocks `forward`, `back`, `left`, `right`, `up`, or `down` relative to Buddy's or the player's facing direction.
     - `chop_entire_tree` (`MiningSkill.startChopWholeTree`): 3D BFS flood-fill of up to `64` connected logs from bottom to top + sapling replant.
     - `dig_down_and_ladder`: Digs a staircase shaft down `N` vertical blocks and climbs back to the surface with ladders.
     - `climb_to_surface` (`MiningSkill.startClimbToSurface`): Ascends immediately from any underground cave or shaft to `surfaceY`, breaking ceiling blocks overhead and placing ladders/pillars underfoot.
     - `interact_with_block` (`BotController.tickInteractBlock`): Walks to a nearby furnace or chest to load fuel/ores (`load_furnace`), collect smelted output (`unload_furnace`), or deposit/withdraw items (`put_chest` / `take_chest`).
     - `ride_or_dismount_entity` (`BotController.tickRideEntity`): Walks to and mounts/dismounts nearby boats or minecarts (`EntityRideableComponent`).
     - `place_blocks_at` (`BuildingSkill.enqueueWorldBlock`): Walks within reach and places individual blocks or `"table"` combos at exact world coordinates.
     - `build_bridge_or_dock` (`BuildingSkill.startSpanBuild`): Builds a waterfront plank dock extending into water with oak log pilings and lanterns, or spans a bridge with safety fence railings across a ravine/river.
     - `decorate_house_or_area` (`BuildingSkill.startDecorateArea`): Detects nearby `houseBounds` and builds an exterior flower border (`flowers_around`), an interior corner table and chair (`corner_table`), or a creative house upgrade (`house_upgrade` — front porch awning with hanging lanterns, stone-brick chimney with campfire smoke, and interior bookshelf study nook).
     - `spawn_items_for_bot`: Directly spawns requested items/tools/blocks into Buddy's inventory and auto-equips gear, paired with transparent inventory reporting when materials are missing.
