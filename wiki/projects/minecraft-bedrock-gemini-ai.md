---
title: Minecraft Bedrock Gemini AI Companion
type: project
tags: [minecraft, bedrock, gemini, ai-agent, typescript]
created: 2026-10-17
updated: 2026-10-17
sources:
  - raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md
---

# Minecraft Bedrock Gemini AI Companion

An AI-driven Minecraft Bedrock Edition Addon (Behavior Pack + Resource Pack) and local Node.js companion bridge located at `c:\dev\minecraft-bedrock-gemini-ai`. It spawns an autonomous in-game character (`SimulatedPlayer` named `Gemini`) powered by Google Gemini (`gemini-3.8-flash`) with live game screen vision, world telemetry, function calling, two-way voice chat, and customizable text-to-speech ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).

## Architecture & Key Paths

- **Repository Root**: `c:\dev\minecraft-bedrock-gemini-ai`
  - `CURRENT_VERSION.md` — v1.0 architecture and feature reference.
  - `FEATURE_ROADMAP.md` — Phase 1–6 roadmap for upcoming agent upgrades.
- **Minecraft Bedrock Addon (`addon/behavior_pack` & `addon/resource_pack`)**:
  - Uses `@minecraft/server` `2.11.0-beta`, `@minecraft/server-gametest` `1.0.0-beta`, and `@minecraft/server-ui` `2.3.0-beta`.
  - Deployed via `npm run deploy:addon` to both Windows GDK (`%APPDATA%\Minecraft Bedrock\Users\*\games\com.mojang`) and UWP (`%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`) development pack folders ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **Companion Bridge & Web HUD (`bridge/src`)**:
  - Runs on `http://localhost:3000` (Voice, TTS & Vision HUD) and `ws://localhost:8080` (Minecraft `/connect localhost:8080` WebSocket server).
  - Tails `%APPDATA%\Minecraft Bedrock\logs\ContentLog*.txt` for `[GEMINI_STATE]` JSON telemetry emitted by the Behavior Pack ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).

## Technical Conventions & Constraints

- **World-Space Movement**: GameTest's built-in `navigateToBlock` and `lookAtBlock` operate in structure-relative coordinates (`3x3x3` `gemini:bot_anchor`). All bot movement uses custom world-space rotation (`lookAtWorldPos`) and relative walking (`walkTowardWorldPos` with `bot.moveRelative(0, 1, speed)`) ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **Repeat Modes**: All skills, tools, HUD actions, and commands support `once` (`1x`), `count` (`Few`), and `continuous` (`Until Exhausted`).
- **Survival Instincts (`SurvivalInstinct`)**:
  - `0.1s` (2-tick) reflex loop keeps the bot buoyant on water surfaces (`surfaceY - 0.55`), grants emergency `water_breathing` if submerged, cushions falls `>= 2.8` blocks with `slow_falling`, escapes lava/fire/cactus/magma, and breaks suffocating blocks at head height.
  - `0.3s` (6-tick) threat loop flees Creepers within `8` blocks, kites hostile mobs at `2.7–3.5` blocks via backpedaling and circle-strafing, retreats at `<= 8 HP`, and auto-eats food to heal.
  - Look-ahead cliff checks (`isSafeStepColumn`) steer around drops `> 3` blocks, and mining/exploring skills never dig straight down under the bot's feet ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **Live Screen Capture**: DirectX 12 Minecraft windows return black frames with Windows GDI `CopyFromScreen`. The Web HUD uses WebRTC `getDisplayMedia` (`📺 Share Minecraft Window`) to stream live JPEG frames to `POST /api/frame` every `1.5s` ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
- **In-Game Controls**:
  - Native slash command `/gemini:ai <option>` (registered via `system.beforeEvents.startup` `customCommandRegistry`), `/function ai/*` shortcuts, `!` chat commands, and an `@minecraft/server-ui` graphical menu (`/gemini:ai menu`).
- **Voice & TTS Controls**:
  - Push-to-Talk (Mic button or Spacebar) and Hands-Free Continuous mode, plus AI Voice selector, Speaking Speed slider (`0.5x–2.0x`), Voice Pitch slider (`0.50–1.50`), `localStorage` persistence, and per-message `🔊` Re-speak buttons ([session](../../raw/sessions/2026-10-17-minecraft-bedrock-gemini-ai.md)).
