# Minecraft Bedrock AI Companion — Todo & Aligned Version Plan (`F0 / v0.x` $\rightarrow$ `F7 / v7.x`)

Project page: [Minecraft Bedrock AI Companion](../wiki/projects/minecraft-bedrock-gemini-ai.md) (`c:\dev\minecraft-bedrock-ai`)

## 1-to-1 Feature ID $\leftrightarrow$ Version Series Alignment

| Feature ID | Version Series | Major Feature Pillar | Priority | Depends On |
| :---: | :---: | :--- | :---: | :--- |
| **`F0`** | **`v0.x.x`** | **Project Setup, Baseline Bot (`v0.0.1`), Version Plan (`v0.0.2`), Diagnostics (`v0.0.3`), Persistence (`v0.1.0`)** | **P0 (Setup)** | — |
| **`F1.0`** | **`v1.0.x`** | **Pre-Planned Action Queues (`action_queue[]`) & Event-Driven Hooks (`TASK_DONE`, Activity Mirroring, Discovery)** | **P0 (Major 1.0)** | `F0` (`v0.x`) |
| **`F1.1`** | **`v1.1.x`** | **Procedural Human Micro-Behaviors (`idleHumanizer.ts`) & Instant Push-to-Talk "Look at Player" Reflex** | **P0 (Major 1.1)** | `F1.0` (`v1.0.x`) |
| **`F1.2`** | **`v1.2.x`** | **Dual-Loop Brain (`Loops A/B/C`), Place-Bound Conversational Memory (Coords, Landscape View, Player Stats/Inventory) & Landmarks** | **P0 (Major 1.2)** | `F1.0`, `F1.1` |
| **`F2.0–F2.2`** | **`v2.0.x–2.2.x`** | **Multi-Agent `BotManager`, Simulated "AI Server" Toggle, Craftable Admin Tool, Invites & `TP / Kick / Ban`** | **P0 (Major 2.x)** | `F1` (`v1.x`) |
| **`F3.0–F3.2`** | **`v3.0.x–3.2.x`** | **Random Player vs. 5 Specialist Roles (`Miner`, `Forester`, `Farmer`, `Bodyguard`, `Hunter`), Auto-Armor & Inventory UI** | **P0 (Major 3.x)** | `F2` (`v2.x`) |
| **`F4.0–F4.2`** | **`v4.0.x–4.2.x`** | **Base Building & "AI Homes" (Bed Assignment, Smart Chest Auto-Deposit, Furnace Smelting, Sunset Routine)** | **P1 (Major 4.x)** | `F1.2`, `F2`, `F3` |
| **`F5.0–F5.2`** | **`v5.0.x–5.2.x`** | **Autonomous Survival (`UtilityBrain`) & Scratch-to-Diamond Tech-Tree Progression (`GoalPlanner`)** | **P1 (Major 5.x)** | `F1.0`, `F3`, `F4` |
| **`F6.0–F6.2`** | **`v6.0.x–6.2.x`** | **Local 3D A* Voxel Pathfinding, Block Scaffolding/Bridging & Wooden Door/Gate Interaction** | **P1 (Major 6.x)** | `F4` (`v4.x`) |
| **`F7.0–F7.3`** | **`v7.0.x–7.3.x`** | **Autonomous AI Village Ecosystem (Village Zones, Agent-to-Agent Chat, Bartering & Co-op Building)** | **P2 (Major 7.x)** | `F3`, `F4`, `F5`, `F6` |

---

## Open Checklists by Aligned Feature & Version Series

### `F0` (`v0.x.x`) — Project Setup, Diagnostics & Persistence Plumbing
- [ ] **`v0.0.3` (`F0.0.3`)**: Add `/ai:bot status` & `/ai:bot queue` diagnostic commands + live `[AI_EVENT]` inspector in Web HUD
- [ ] **`v0.1.0` (`F0.1.0`)**: Build `WorldStore` wrapper around `world.setDynamicProperty` for persistent waypoints, bed homes, and banned/invited bot lists
- [ ] **`v0.1.1` (`F0.1.1`)**: Pre-`v1.0.0` movement, chunk-loading, and WebSocket reconnect stabilization

### `F1` (`v1.x.x`) — Human-Like Brain, Reflexes & Episodic Continuity
- [x] **`v1.0.0`–`v1.0.3` (`F1.0` Core built in `v0.0.2` branch)**: Pre-Planned Action Queue (`action_queue[]`), `TASK_DONE` / `QUEUE_DONE` hooks, Player Activity Mirroring (`playerBreakBlock` x3), and High-Value Discovery / Mob Kill / Critical HP reactions
- [ ] **`v1.1.0` (`F1.1.0`)**: `idleHumanizer.ts` with Dynamic Gaze Tracking (`60%` waypoint/block, `25%` player eyes, `15%` nearby entities/items/caves)
- [ ] **`v1.1.1` (`F1.1.1`)**: Sprint-Jumping overworld traversal (`> 10` blocks on safe terrain) + Reciprocal Double-Crouch Greeting (`0ms` LLM latency)
- [ ] **`v1.1.2` (`F1.1.2`)**: Curious Item Inspection & Hotbar Fidgeting (walk up to dropped items, look down `1s`, pick up, hold in main hand)
- [ ] **`v1.1.3` (`F1.1.3`)**: Instant Push-to-Talk "Look & Acknowledge" Reflex (`0ms` WS ping when Spacebar/Mic is pressed)
- [ ] **`v1.2.0` (`F1.2.0`)**: Rolling 10-Event Episodic Memory (`recent_events[]` in `[AI_STATE]`)
- [ ] **`v1.2.1` (`F1.2.1`)**: Named Spatial Landmarks (`home_bed`, `last_mine_shaft`, `player_death_spot`) + `timeOfDay` sunset return
- [ ] **`v1.2.2` (`F1.2.2`)**: **Place-Bound Conversational & Contextual "Flashbulb" Memory (`EpisodicMemoryStore`)** — Remember what Players said to the AI bot at specific places/points along with `[x, y, z]` coordinates, landscape view (voxel terrain/raycast vista + AI Vision scene summary), and player/bot stats & inventory items (HP, hunger, armor, mainhand, inventory counts) + automatic recall within `15` blocks
- [ ] **`v1.2.3` (`F1.2.3`)**: Asynchronous 3-Loop Cognitive Architecture (`Loop A` 0ms script, `Loop B` ~350ms fast reactive turn, `Loop C` 20s Background Director)
- [ ] **`v1.2.4` (`F1.2.4`)**: Human-like quirkiness, nostalgic spatial recall & `v1.x` tuning

### `F2` (`v2.x.x`) — Simulated "AI Server", Admin Panel & Moderation
- [ ] **`v2.0.0`–`v2.0.3` (`F2.0`)**: Multi-Agent `BotManager` Registry (`1..N` simultaneous named `SimulatedPlayer` bots), AI Server Toggle (`ON/OFF`), population cap (`1–8`), and dynamic join/leave announcements
- [ ] **`v2.1.0`–`v2.1.3` (`F2.1`)**: Craftable In-Game Admin Tool (Pickaxe + Axe + Copper Ingot), `/ai:bot admin` UI, Bed/Chest block-targeting assignment, and Web HUD Admin Tab
- [ ] **`v2.2.0`–`v2.2.3` (`F2.2`)**: Player Invites Roster menu & Server Moderation (**Teleport**, **Kick**, **Ban / Unban**)

### `F3` (`v3.x.x`) — Agent Archetypes (Random vs. Specialists) & Co-op Inventory Trading
- [ ] **`v3.0.0` (`F3.0.0`)**: Role Spawner & **🎲 Random Generalist Player**
- [ ] **`v3.0.1` (`F3.0.1`)**: **⛏️ Miner Specialist** (underground caving/staircase mining, auto-torches, ore focus)
- [ ] **`v3.0.2` (`F3.0.2`)**: **🪓 Forester Specialist** (tree felling, leaf-drop collection, **automatic sapling replanting**)
- [ ] **`v3.0.3` (`F3.0.3`)**: **🌾 Farmer Specialist** (tilling, planting/harvesting crops, bone meal, baking bread)
- [ ] **`v3.1.0` (`F3.1.0`)**: **🛡️ Bodyguard Specialist** (player escort, perimeter patrol, `entityHurt` co-op defense, tossing food to allies)
- [ ] **`v3.1.1` (`F3.1.1`)**: **🏹 Hunter Specialist** (daytime animal hunting, meat cooking, dusk monster clearing)
- [ ] **`v3.1.2`–`v3.1.3` (`F3.1.2`)**: Auto-Equipping Armor & Offhand Shield (`EntityEquippableComponent`) + Bow/Crossbow ranged combat
- [ ] **`v3.2.0`–`v3.2.3` (`F3.2`)**: Direct Inventory Sharing & Gear Trading UI (`playerInteractWithEntity`)

### `F4` (`v4.x.x`) — Base Building & "AI Homes"
- [ ] **`v4.0.0`–`v4.0.1` (`F4.0`)**: Bed Home Assignment (`HomeManager`) & Home Zone Scanner
- [ ] **`v4.1.0`–`v4.1.1` (`F4.1`)**: Smart Chest Storage (`StorageSkill` auto-deposit when full & restock on demand)
- [ ] **`v4.2.0`–`v4.2.3` (`F4.2`)**: Furnace Smelting & Cooking (`SmeltingSkill`), Sunset Home Routine (`timeOfDay >= 12500`), and Cave/Base Torch Lighting

### `F5` (`v5.x.x`) — Autonomous Survival & Scratch-to-Diamond Tech-Tree Progression
- [ ] **`v5.0.0`–`v5.0.1` (`F5.0`)**: Independent Decision-Making (`UtilityBrain`)
- [ ] **`v5.1.0`–`v5.1.3` (`F5.1`)**: Hierarchical `GoalPlanner` — Tier 1 (Scratch-to-Stone) & Tier 2 (Stone-to-Iron + auto tool replacement)
- [ ] **`v5.2.0`–`v5.2.2` (`F5.2`)**: Tier 3 (Autonomous Deep Caving & Iron-to-Diamond progression)

### `F6` (`v6.x.x`) — Local 3D A* Pathfinding, Scaffolding & Doors
- [ ] **`v6.0.0`–`v6.0.1` (`F6.0`)**: Local 3D A* Voxel Pathfinder (`Pathfinder3D`)
- [ ] **`v6.1.0`–`v6.1.1` (`F6.1`)**: Block Bridging & Vertical Pillar Scaffolding
- [ ] **`v6.2.0`–`v6.2.1` (`F6.2`)**: Wooden Door & Fence Gate Interaction (`bot.interactWithBlock`)

### `F7` (`v7.x.x`) — Autonomous AI Village Ecosystem
- [ ] **`v7.0.0`–`v7.0.1` (`F7.0`)**: `VillageManager` Center, Zoning, Shared Market Chests & Resource Ledger
- [ ] **`v7.1.0`–`v7.1.1` (`F7.1`)**: `VillageChatBus` Agent-to-Agent Communication, Task Coordination & Raid Alerts
- [ ] **`v7.2.0`–`v7.2.1` (`F7.2`)**: `AgentTradeSkill` Physical Bartering Meetups & Specialist Economy (`Forester` $\leftrightarrow$ `Miner` $\leftrightarrow$ `Farmer/Hunter` $\leftrightarrow$ `Bodyguard`)
- [ ] **`v7.3.0`–`v7.3.3` (`F7.3`)**: `VillageBuilder` Cooperative Village Construction (Cottages, Storage Barn, Smeltery, Farms, Watchtowers, Lit Roads & Walls)

---

## Done
- [x] **`v0.0.2` (`F0.0.2`)**: Create aligned `F0`–`F7` (`v0.x`–`v7.x`) `VERSION_PLAN.md` and implement `action_queue[]` + `[AI_EVENT]` hooks on `feat/v0.0.2-action-queue-hooks`  <!-- done:2026-10-18 -->
- [x] **`v0.0.1` (`F0.0.1`)`**: Release `v0.0.1`, rename project to `c:\dev\minecraft-bedrock-ai`, add `release-notes.md`, and open PR #1 on GitHub  <!-- done:2026-10-17 -->
- [x] Bootstrap Minecraft Bedrock Behavior/Resource Pack + Node.js Companion Bridge  <!-- done:2026-10-17 -->
- [x] Add WebRTC live game window capture, voice chat, customizable TTS voice/speed/pitch, and per-line `🔊` re-speak button  <!-- done:2026-10-17 -->
- [x] Implement `ExploreSkill` toggle, `once`/`count`/`continuous` repeat modes, `/ai:bot` slash command, and `@minecraft/server-ui` menu  <!-- done:2026-10-17 -->
- [x] Implement `SurvivalInstinct` (0.1s surface swimming, cliff/hazard avoidance, fall damage cushioning, Creeper evasion, mob kiting, auto-eating)  <!-- done:2026-10-17 -->
