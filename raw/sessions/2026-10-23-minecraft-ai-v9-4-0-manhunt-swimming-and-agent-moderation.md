---
title: Minecraft AI v9.4.0 — Manhunt Modes, Water Swimming, 5x Building Speed, Agent Moderation & Colony Fix
source: conversation
captured: 2026-10-23
tags: [session, minecraft, bedrock, gemini, ai-agent]
---

## Goal
Refine in-game companion movement, building, water traversal, conversational routing, PvP Manhunt gameplay, and multi-agent moderation in `c:\dev\minecraft-ai`, culminating in `v9.4.0` deployed to both Bedrock Windows GDK and the local Bedrock Dedicated Server (`bds/bedrock_server.exe`).

## What We Built & Fixed (`v9.4.0`)

### 1. Smooth Follow Mode & Anti-Orbiting Hysteresis
- **Personal-Space & Follow Hysteresis (`botController.ts`)**: Widened the personal-space backoff hysteresis (`< 1.35` blocks to start backing off, `>= 2.15` blocks to stop) and the `follow` approach band (`> 3.8` blocks to start walking toward the player, `<= 2.85` blocks to stop).
- **Pathfinder3D Player-Target Exemption (`pathfinder3D.ts`)**: Exempted `Pathfinder3D` from penalizing nodes inside the player's 2-block personal-space ring when the path target itself is the player (`distTargetToPlayer < 2.2`), stopping bots from orbiting around the player in a circle.
- **Idle Fidget Suppression (`idleHumanizer.ts`)**: Disabled idle hotbar/sneak fidgeting while `activeSkill === "follow"` so Buddy stands calmly and tracks the player's gaze.

### 2. 5x Faster Building (`~17 blocks/sec`) & Walk-First Site Arrival
- **Walk to Build Origin First (`buildingSkill.ts`)**: Added `hasReachedBuildSite` so the bot walks once to within `5.5` blocks of `buildOrigin` before placing blocks, rather than walking onto every individual block coordinate.
- **Multi-Block Batch Placement**: Increased `BuildingSkill.tick()` placement rate to up to **5 blocks per `0.3s` tick** (`~17 blocks/sec`) while clearing non-air obstructions and lifting any entity standing inside the target block.

### 3. Smooth Ground Sprint-Walking & Dirt/Sand/Gravel Gathering
- **Removed Pogo-Stick Jumping (`botController.ts`)**: Removed the periodic 8-tick sprint-jump hop in `walkTowardWorldPos`. Bots now only call `bot.jump()` when stepping up a real 1-block solid obstacle (`footAhead` solid & `headAhead` passable) or swimming in water.
- **Terrain Resource Gathering (`miningSkill.ts`, `dialogEngine.ts`, `botController.ts`)**: Added `"dirt"`, `"sand"`, and `"gravel"` support across `MiningSkill`, `DialogEngine`, and `BotController` (`give_item` auto-gathers 16x if inventory has 0).

### 4. Intentional Water Swimming, Local Dig-Down & `Buddy:` Question Routing
- **Intentional Water Swimming (`survivalInstinct.ts`, `botController.ts`)**: Updated `SurvivalInstinct.tick()` (`allowWater`) and `walkTowardWorldPos()` (`ignoreWaterHazard`) so bots swim across rivers and lakes (`bot.jump()` + surface buoyancy at `surfaceY - 0.55`) when following or hunting a player in/across water, walking to a target coordinate, or mounting a boat.
- **Direct Dig-Down (`miningSkill.ts`)**: Added `MiningSkill.startDigDownHere()` and routed `dig_down` (`"Buddy: dig down"`) to dig a 2x1 stepped shaft directly at the bot's current coordinates rather than walking back to an old `last_mine_shaft` landmark.
- **`Buddy:` Conversational Question Fallback (`dialogEngine.ts`, `main.ts`, `aiAgent.ts`)**: When a player starts a message with `Buddy:` and no local action regex matches (e.g., `"Buddy: why are you standing in the water?"`), `parseFastDialogCommand()` returns `route: "buddy_ai"` so the question is answered by Gemini 3.8 Flash in-character.

### 5. Dual Manhunt Modes (`Manhunt: Hunt Me` & `Manhunt: Hunt You`)
- **Manhunt: Hunt Me (`combatMode: "hunt_player"`)**:
  - Toggleable from the Companion Menu (`Manhunt: Hunt Me: OFF / ON`), `/ai:bot huntme`, `!huntme`, or `"Buddy: hunt me"`.
  - Buddy equips his best melee weapon, sprints after the player (`speed = 1.0`), swings in melee range (`<= 2.9` blocks) applying held weapon damage (`getHeldWeaponDamage`), and **teleports to `50` blocks from the player** on safe dry ground (`findSafeHuntTeleportY`) whenever distance exceeds `100` blocks (`<= 10s` cooldown).
  - Automatically turns **OFF** with a `"GG!"` message when the hunted player dies (`entityDie`).
- **Manhunt: Hunt You (`combatMode: "evade_player"`)**:
  - Toggleable from the Companion Menu (`Manhunt: Hunt You: OFF / ON`), `/ai:bot huntyou`, `!huntyou`, or `"Buddy: i will hunt you"`.
  - The player hunts Buddy while Buddy sprints away (`speed = 1.0`), jukes at `55°` angles when the player closes within `12` blocks, **teleports to `50` blocks from the player** if distance exceeds `100` blocks, and automatically turns **OFF** when Buddy is defeated.

### 6. Agents in Game — Reset / Kick Menu & Multi-Agent Discovery
- **World-Wide `SimulatedPlayer` Discovery (`botManager.ts`, `botController.ts`)**: Added `BotManager.discoverAndSyncWorldBots()` and `BotController.getBot()` auto-reattachment so any `SimulatedPlayer` in `world.getAllPlayers()` is tracked even after `/reload`.
- **In-Game Moderation Submenu (`uiMenu.ts`)**: Added **`Agents in Game (X) — Reset / Kick...`** to the main Companion Menu, listing every active agent with role, active skill, distance, and coordinates, plus per-agent **Reset** (`resetBot`), per-agent **Kick** (`kickBot`), **Reset ALL Agents**, **Kick ALL Other Agents (Keep Buddy)**, and **Kick ALL Agents**.

### 7. Fixed Repeated `[AI Colony] Established Colony Center` Spam
- **Root Cause (`villageManager.ts`)**: Persisted `teamPlanModeEnabled: true` in `ai:village_state` from an earlier session caused `tickVillageEcosystem()` -> `runTeamHuddleAndExecutePlan()` -> `recenterVillageAtPlayerIfMoved()` to call `foundVillage()` every time the player moved `> 6` blocks during Manhunt.
- **Fix**: Cleared persisted `teamPlanModeEnabled` / `projectSidEnabled` on startup (`sessionTeamPlanEnabled = false`), updated `recenterVillageAtPlayerIfMoved()` to only update `vState.center` coordinates when `vState.founded` is already `true` (never re-broadcasting `[AI Colony] Established Colony Center & Shared Plaza`), and paused `tickVillageEcosystem()` during active Manhunt modes.
