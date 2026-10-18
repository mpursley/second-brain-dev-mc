# Minecraft Bedrock AI Companion — Todo (`v0.0.1`)

Project page: [Minecraft Bedrock AI Companion](../wiki/projects/minecraft-bedrock-gemini-ai.md) (`c:\dev\minecraft-bedrock-ai`)

## Priority & Dependency Summary
- **`P0 Quick Wins` (Human-Like Brain & Reflexes)**:
  - **F0.1** Pre-Planned Action Queues (`action_queue[]`) & Event-Driven Hooks (`TASK_DONE`, Player Activity Mirroring, High-Value Discovery) *(Depends on: Base `v0.0.1`)*
  - **F0.2** Procedural Human Micro-Behaviors (`idleHumanizer.ts` — 60/25/15 Gaze, Sprint-Jump, Reciprocal Double-Crouch, Item Inspection & 0ms Push-to-Talk Look Reflex) *(Depends on: Base `v0.0.1`)*
  - **F0.3** Dual-Loop Brain (`Loops A/B/C`), Rolling 10-Event Episodic Memory (`recent_events[]`) & Spatial Landmarks *(Depends on: F0.1, F0.2)*
- **`P0 Multi-Agent Core` (AI Server & Specialists)**:
  - **F1** Multi-Agent `BotManager` Registry & In-Game Admin Panel + Craftable Admin Tool $\rightarrow$ **F2** Random Player vs. 5 Specialist Roles (`Miner`, `Farmer`, `Bodyguard`, `Hunter`, `Forester`)
- **`P1` (Co-op Trading, AI Homes & Tech-Tree Progression)**:
  - **F3** Direct Companion Inventory/Gear UI (*depends on F1*) + **F4** Base Building & AI Homes (*depends on F0.3, F1, F2*) + **F5** Scratch-to-Diamond Tech-Tree `GoalPlanner` (*depends on F0.1, F2, F4*)
- **`P2` (Emergent Multi-Agent World)**:
  - **F6** Autonomous AI Village (*depends on F1, F2, F4, F5*) + **F7** Local 3D A* Pathfinder, Scaffolding & Door Interaction

---

## Open

### F0.1. `[P0 Quick Win #1]` Pre-Planned Action Queues & Event-Driven Hooks *(Depends on: Base `v0.0.1`)*
- [ ] **Pre-Planned Action Queue (`action_queue: BotActionCommand[]`)**: Upgrade `types.ts`, `botController.ts`, and `aiAgent.ts` so a single AI turn can enqueue `2–4` chained steps (e.g., `chop oak x4` $\rightarrow$ `craft planks x16` $\rightarrow$ `craft crafting_table x1` $\rightarrow$ `follow player`) executed back-to-back at native `20 TPS` without pausing between steps
- [ ] **Task Completion Hook (`onSkillFinished` / `[AI_EVENT: TASK_DONE]`)**: Emit an instant event packet to `contentLogWatcher.ts` $\rightarrow$ `aiAgent.ts` the exact tick a skill finishes so the AI immediately chains the next logical action and speaks over TTS without waiting to be asked
- [ ] **Player Activity Mirroring (`playerBreakBlock` / `playerPlaceBlock`)**: If the player breaks `>= 3` logs or stone/ore blocks within `5s` while Buddy is in `follow`/`idle` mode, automatically switch Buddy to `chop` or `mine` nearby matching blocks to help out
- [ ] **High-Value Discovery & Near-Death Reaction Packets**: Emit instant `[AI_EVENT]` triggers when `diamond_ore` is uncovered, a tough mob is killed, or HP drops to `<= 6`, triggering a celebratory crouch-jump + natural TTS reaction

### F0.2. `[P0 Quick Win #2]` Procedural Human Micro-Behaviors (`idleHumanizer.ts`) & Mic Reflex *(Depends on: Base `v0.0.1`)*
- [ ] **Dynamic Gaze Tracking (`lookAtWorldPos`, every `10–30` ticks)**: Cycle head target dynamically—`60%` movement waypoint/block, `25%` player eye level (boosted to `90%` when within `5` blocks or speaking on mic), `15%` nearby moving entities/items/caves
- [ ] **Sprint-Jumping Overworld Traversal**: When walking `> 10` blocks across safe terrain (`isSafeStepColumn`), sprint and tap `bot.jump()` every `~1.2s` so Buddy moves like a real gamer
- [ ] **Reciprocal Crouch-Greeting ("Universal Minecraft Language")**: Detect when the player looks at Buddy and double-crouches (`player.isSneaking`) within `1s`; immediately make Buddy look at the player, double-crouch back, punch the air (`bot.attack()`), and team up (`0ms` LLM latency)
- [ ] **Curious Item Inspection & Hotbar Fidgeting**: When an item is dropped near Buddy, walk to `2` blocks away, pitch head down at the item for `1s`, pick it up, and swap it into his main hand (`selectedSlotIndex`)
- [ ] **Instant Push-to-Talk "Look & Acknowledge" Reflex**: When Spacebar/Mic is pressed in `index.html`, send an immediate WebSocket ping (`scriptevent ai:cmd look_at_player`) so Buddy stops walking and looks at you while you speak

### F0.3. `[P0 Quick Win #3]` Dual-Loop Brain, Episodic Memory & Spatial Landmarks *(Depends on: F0.1, F0.2)*
- [ ] **Rolling 10-Event Action Log (`recent_events[]` in `[AI_STATE]`)**: Include timestamped recent events (`["[45s ago] Mined 8 iron_ore", "[20s ago] Attacked by skeleton, HP 12"]`) in `[AI_STATE]` to prevent amnesia between turns
- [ ] **Named Spatial Landmarks & Sunset Routine (`waypoints` + `timeOfDay`)**: Persist named coordinates (`home_bed`, `last_mine_shaft`, `village_center`, `player_death_spot`) and trigger proactive sunset return (`timeOfDay > 12500`)
- [ ] **Asynchronous 3-Loop Cognitive Architecture**: Decouple **Loop A** (`0ms` Bedrock Script reflexes), **Loop B** (`~350ms` fast reactive tool call + 1-sentence TTS), and **Loop C** (`every 20s` Background Autonomous Director updating the 3-step intention queue)

### F1. `[P0 Core]` Simulated "AI Server" & In-Game Admin Panel *(Depends on: Base `v0.0.1`)*
- [ ] **Multi-Agent `BotManager` Registry**: Manage `1..N` simultaneous named `SimulatedPlayer` agents with independent roles, action queues, inventories, and home coordinates
- [ ] **In-Game Admin Panel (`@minecraft/server-ui`)**:
  - [ ] **AI Server Toggle**: Turn the simulated server `ON/OFF` at any time (controls dynamic AI join/leave & max population cap)
  - [ ] **Player Invites & Spawner**: Spawn/invite AI companions by choosing **🎲 Random Generalist Player** or a **Specialist Role**
  - [ ] **Agent Roster Inspector**: View active companions' roles, health, coordinates, current task, and inventory
  - [ ] **Server Moderation**: **Teleport** (to player / to bot), **Reassign Role**, **Kick** (remove from session), and **Ban / Unban** (permanently remove from world)
- [ ] **Craftable In-Game Admin Tool**: Craftable item (e.g., Pickaxe + Axe + Copper Ingot) that opens the Admin Panel on right-click or assigns Beds/Chests when used directly on blocks

### F2. `[P0 Core]` Agent Archetypes: Random Player vs. Specialist Roles *(Depends on: F1, F0.1)*
- [ ] **🎲 Random Generalist Player**: Balanced survivalist with randomized name/quirks who dynamically switches between woodcutting, mining, hunting, crafting, and building
- [ ] **⛏️ Miner Specialist**: Prioritizes underground caving & staircase mining, auto-places torches in dark tunnels, smelts ores in furnaces, crafts pickaxes first, and stocks stone/ore chests
- [ ] **🌾 Farmer Specialist**: Tills soil near water, plants/harvests wheat, carrots, potatoes, and beetroots, applies bone meal, bakes bread, and stocks village food chests
- [ ] **🛡️ Bodyguard Specialist**: Escorts the player (`4–6` blocks) or patrols the village perimeter, auto-equips best armor/shield/weapon, triggers instant `entityHurt` co-op defense, and tosses emergency food to low-HP allies
- [ ] **🏹 Hunter Specialist**: Hunts food animals (`cow`, `pig`, `sheep`, `chicken`, `rabbit`) by day, cooks raw meat, gathers leather/wool/feathers/bones, and clears hostile mobs at dusk
- [ ] **🪓 Forester (Lumberjack) Specialist**: Chops trees, collects saplings, **automatically replants saplings** where trees were felled so forests regenerate, and supplies logs/planks/sticks/charcoal

### F3. `[P1]` Direct Inventory Sharing & Trading UI *(Depends on: F1)*
- [ ] **Direct Entity Interaction (`playerInteractWithEntity`)**: Interacting directly with an AI companion opens their inventory/gear UI to take excess resources or equip them with armor, weapons, food, and torches

### F4. `[P1]` Base Building & "AI Homes" *(Depends on: F0.3, F1, F2)*
- [ ] **Bed Home Assignment (`HomeManager`)**: Use the Admin Panel or Admin Tool on a specific bed to assign it as an AI companion's personal home base (`world.setDynamicProperty`)
- [ ] **Home Storage & Utility Use (`StorageSkill` & `SmeltingSkill`)**: Automatically detect chests, crafting tables, and furnaces near their assigned bed—returning home when inventory is full or night falls to smelt ores, cook food, craft upgrades, sleep, and deposit extra loot into chests (`BlockInventoryComponent`)

### F5. `[P1]` Autonomous Survival & Tech-Tree Progression *(Depends on: F0.1, F2, F4)*
- [ ] **Full Tech-Tree Progression (`GoalPlanner`)**: Start from scratch by punching trees for wood, crafting initial wooden toolsets, and working up the survival tech tree (`wooden` $\rightarrow$ `stone` $\rightarrow$ `iron` $\rightarrow$ `diamond`)
- [ ] **Auto-Equip Armor & Shield**: Automatically equip best helmet, chestplate, leggings, boots, and offhand shield via `EntityEquippableComponent`

### F6. `[P2]` Autonomous AI Village: Chat, Trading & Co-op Building *(Depends on: F1, F2, F4, F5)*
- [ ] **Village Center & Zoning (`VillageManager`)**: Designate a Village Center with shared Town Hall / Market Chests and residential plots for multiple specialists
- [ ] **Agent-to-Agent Communication (`VillageChatBus`)**: Agents talk to each other in chat to announce harvests/mining runs, request missing supplies (e.g., Miner asking Forester for sticks or Farmer for bread), and warn of mob attacks
- [ ] **Inter-Agent Bartering & Trading (`AgentTradeSkill`)**: Specialists meet at the Village Center or exchange via market chests (`Forester` wood $\leftrightarrow$ `Miner` tools/ores $\leftrightarrow$ `Farmer/Hunter` food $\leftrightarrow$ `Bodyguard` gear/protection)
- [ ] **Cooperative Village Building (`VillageBuilder`)**: Agents collaboratively build and expand village houses (with beds/chests), storage barns, blacksmith smelteries, irrigated farms, watchtowers, and lit pathways

### F7. `[P2]` 3D Navigation & Scaffolding *(Depends on: Base `v0.0.1`)*
- [ ] **Local 3D A* Pathfinder, Scaffolding & Doors**: Navigate around walls/houses, pillar/bridge across terrain gaps, and open/close wooden doors and fence gates

---

## Done
- [x] Release `v0.0.1`, rename project to `c:\dev\minecraft-bedrock-ai`, add `release-notes.md`, and open PR #1 on GitHub  <!-- done:2026-10-17 -->
- [x] Bootstrap Minecraft Bedrock Behavior/Resource Pack + Node.js Companion Bridge  <!-- done:2026-10-17 -->
- [x] Add WebRTC live game window capture, voice chat, customizable TTS voice/speed/pitch, and per-line `🔊` re-speak button  <!-- done:2026-10-17 -->
- [x] Implement `ExploreSkill` toggle, `once`/`count`/`continuous` repeat modes, `/ai:bot` slash command, and `@minecraft/server-ui` menu  <!-- done:2026-10-17 -->
- [x] Implement `SurvivalInstinct` (0.1s surface swimming, cliff/hazard avoidance, fall damage cushioning, Creeper evasion, mob kiting, auto-eating)  <!-- done:2026-10-17 -->
