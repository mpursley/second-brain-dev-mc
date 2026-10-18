# Minecraft Bedrock AI Companion — Todo

Project page: [Minecraft Bedrock AI Companion](../wiki/projects/minecraft-bedrock-gemini-ai.md) (`c:\dev\minecraft-bedrock-ai`, `v0.0.1`)

## Open

### 1. Autonomous Survival & Progression
- [ ] **Independent Decision-Making**: AI companions set their own objectives and roam the world independently when not actively adventuring with you
- [ ] **Full Tech-Tree Progression**: Start from scratch (no starter kit required) by punching trees for wood, crafting initial wooden/stone/iron/diamond toolsets, and working up the survival tech tree (`GoalPlanner`)
- [ ] **Autonomous Mining & Caving**: Head underground independently to mine cobblestone, smelt ores, place torches, and dig down in search of iron and diamonds
- [ ] **Autonomous Combat, Hunting & Co-op Defense**: Actively hunt animals to maintain their own food supply, auto-equip best armor & offhand shield (`EntityEquippableComponent`), and defend themselves and the player (`entityHurt` bodyguard reflex) against hostile mobs

### 2. Social & Co-op Mechanics
- [ ] **Non-Verbal Communication**: Detect player crouching (sneak-tapping), jumping, or emoting near an AI companion to get their attention and dynamically team up / follow on adventures
- [ ] **Direct Inventory Sharing & Trading UI**: Interacting directly with an AI companion (`playerInteractWithEntity`) opens their inventory/gear menu so you can take gathered resources or equip them with better armor, weapons, food, and torches
- [ ] **Human-Like Quirkiness**: Behavior algorithms that mimic real multiplayer teammates—making smart plays, occasional goofy mistakes, playful look-arounds/crouch-greetings, and emergent multiplayer moments

### 3. Base Building & "AI Homes"
- [ ] **Bed Home Assignment**: Use the Admin Panel or Admin Tool on a specific bed to assign it as an AI companion's personal home base (`world.setDynamicProperty`)
- [ ] **Home Storage & Utility Use**: Automatically detect and use chests, crafting tables, and furnaces placed near their assigned bed—returning home to smelt ores (`SmeltingSkill`), craft upgrades, sleep at night, and deposit extra loot into chests (`StorageSkill`)

### 4. Simulated "AI Server" & Admin Controls
- [ ] **Craftable In-Game Admin Tool**: Custom item/tool recipe (e.g., crafted from a pickaxe, an axe, and a copper ingot) that opens the AI Admin Control Panel on right-click/use
- [ ] **AI Server Toggle**: Turn the simulated "AI Server" on or off at any time to control whether AI companions dynamically join/leave and populate the world
- [ ] **Player Invites Menu**: Invite menu (`@minecraft/server-ui`) to hand-pick specific AI characters/personas to bring into the current game session
- [ ] **Server Moderation Controls**:
  - [ ] **Teleport**: Instantly warp a specific AI companion to your coordinates
  - [ ] **Kick**: Remove an AI companion from the current session (allowing them to rejoin or be re-invited later)
  - [ ] **Ban**: Permanently remove a specific AI companion from the world (with an Unban list in Admin settings)

### 5. Navigation & Voice Enhancements
- [ ] **Local 3D A* Pathfinder & Scaffolding**: Navigate complex terrain, pillar/bridge across gaps, and open/close wooden doors and fence gates
- [ ] **Proactive AI Voice Callouts**: Unsolicited alerts for nearby Creepers, diamond discoveries, low health, and sunset

## Done
- [x] Release `v0.0.1` and rename project to `c:\dev\minecraft-bedrock-ai` (`Buddy`, `/ai:bot`, `minecraft_ai_bp` / `minecraft_ai_rp`)  <!-- done:2026-10-17 -->
- [x] Bootstrap Minecraft Bedrock Behavior/Resource Pack + Node.js Companion Bridge  <!-- done:2026-10-17 -->
- [x] Add WebRTC live game window capture, voice chat, customizable TTS voice/speed/pitch, and per-line `🔊` re-speak button  <!-- done:2026-10-17 -->
- [x] Implement `ExploreSkill` toggle, `once`/`count`/`continuous` repeat modes, `/ai:bot` slash command, and `@minecraft/server-ui` menu  <!-- done:2026-10-17 -->
- [x] Implement `SurvivalInstinct` (0.1s surface swimming, cliff/hazard avoidance, fall damage cushioning, Creeper evasion, mob kiting, auto-eating)  <!-- done:2026-10-17 -->
