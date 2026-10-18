# Minecraft AI Companion (`v7.3.3`) — Startup & Feature Testing Plan (`F0` $\rightarrow$ `F7`)

Follow this step-by-step checklist to start up the **Minecraft Bedrock AI Companion (`v7.3.3`)** and test every feature series from **`F0` (`v0.x`)** through **`F7` (`v7.x`)**.

---

## Part 1: Startup & Pre-Flight Checklist

### 1. Build, Deploy & Start the Bridge Server
Open a terminal in `c:\dev\minecraft-bedrock-ai` and run:
```powershell
npm run deploy:addon
npm run bridge
```
- [ ] Verify the terminal prints:
  - `[WS] Minecraft Bedrock WebSocket Server listening on ws://localhost:19131`
  - `[HTTP] Multimodal Voice & Vision HUD running at http://localhost:3000`
  - `[ContentLog] Watching: ...`

### 2. Open the Multimodal Web HUD (`http://localhost:3000`)
Open **http://localhost:3000** in Chrome or Edge:
- [ ] **API Key**: Confirm the top-right badge shows **`AI Ready`** (or paste your key and click **Save Key**).
- [ ] **Live Screen Vision (`👁️ Share Screen`)**: Click **👁️ Share Screen**, select your **Minecraft window** (or Entire Screen), and confirm your live video preview appears in the left panel.
- [ ] **Voice & TTS (`🔊`)**: Expand **🔊 Voice & TTS Settings**, pick your preferred voice/pitch/rate, and click **🔊 Test Voice** to confirm audio output works.

### 3. Launch Minecraft Bedrock & Connect `/wsserver`
1. Create or Edit a World in Minecraft Bedrock:
   - **Game $\rightarrow$ Cheats**: Turn **Activate Cheats ON**
   - **Experiments $\rightarrow$ Beta APIs**: Turn **Beta APIs ON**
   - **Behavior Packs**: Activate **Minecraft AI Companion BP (`v7.3.3`)**
   - **Resource Packs**: Activate **Minecraft AI Companion RP (`v7.3.3`)**
2. Load into the world and run in chat:
   ```text
   /wsserver localhost:19131
   ```
- [ ] Verify the Web HUD badge turns green (**`MC Connected`**).
- [ ] Run `/ai:bot` (or type `!spawn` in chat) to spawn **Buddy** right next to you!

---

## Part 2: Feature-by-Feature Testing Plan (`F0` $\rightarrow$ `F7`)

### Test Suite `F0` (`v0.x.x`) — Baseline Companion, Survival Instincts & Diagnostics
- [ ] **1. Spawn & Command Menu (`/ai:bot` & `/ai:bot menu`)**:
  - **Action**: Run `/ai:bot menu` (or `!menu`) in Minecraft chat.
  - **Expected**: The in-game `@minecraft/server-ui` Companion Control Menu pops up on screen.
- [ ] **2. Diagnostics & Status (`/ai:bot status` & `/ai:bot queue`)**:
  - **Action**: Run `/ai:bot status` (or `!status`) and `/ai:bot queue` (or `!queue`).
  - **Expected**: Buddy prints his current version (`v7.3.3`), role, active skill, queue length, and saved landmarks in chat, and the Web HUD **Live `[AI_EVENT]` Stream** updates.
- [ ] **3. `0.1s` Survival Instincts (Anti-Drowning, Cliff Avoidance & Combat)**:
  - **Action**: Lure Buddy near water or spawn a Zombie near him (`/summon zombie ~3 ~ ~`).
  - **Expected**: Buddy swims to dry shore if in water, steers away from cliffs/lava, kites/attacks the Zombie with his best weapon, and eats food automatically if injured.

---

### Test Suite `F1` (`v1.x.x`) — Human-Like Brain, Reflexes, Micro-Behaviors & Episodic Memory

#### `F1.0` (`v1.0.x`) — Pre-Planned Action Queues & Event-Driven Hooks
- [ ] **1. Multi-Step Pre-Planned Action Queue (`action_queue[]`)**:
  - **Action**: Say on mic (or type in Web HUD): *"Chop 3 wood, craft planks, craft a crafting table, and then follow me."*
  - **Expected**:
    - Buddy announces a **4-step plan** (`📋 Executing 4-step plan: collect_resource(wood x3) → craft(planks) → craft(crafting_table) → follow`).
    - Look at the Web HUD telemetry card under **📋 Next Queued**—each step pops off automatically at `20 TPS` with zero pause between tasks!
- [ ] **2. Task Completion Hook (`[AI_EVENT: TASK_DONE / QUEUE_DONE]`)**:
  - **Action**: Watch the **⚡ Live `[AI_EVENT]` Stream** in the Web HUD when Buddy finishes chopping or completes his queue.
  - **Expected**: A `TASK_DONE` / `QUEUE_DONE` event fires immediately and Buddy speaks a natural follow-up over TTS.
- [ ] **3. Player Activity Mirroring (`playerBreakBlock`)**:
  - **Action**: Put Buddy in follow mode (`/ai:bot follow`), walk up to a tree or stone cliff, and break **3 logs** (or **3 stone blocks**) in a row yourself.
  - **Expected**: Buddy immediately says *"Saw you chopping wood—pitching in to help!"* and switches to harvesting nearby trees/stone alongside you.
- [ ] **4. High-Value Discovery Celebration (`diamond_ore`)**:
  - **Action**: Place a `diamond_ore` block near Buddy (`/setblock ~2 ~ ~ diamond_ore`) and have him mine it (`/ai:bot mine diamond 1`) or break it yourself near him.
  - **Expected**: Buddy performs a celebratory double crouch-jump + air-punch in-game and blurts out an excited reaction over TTS!

#### `F1.1` (`v1.1.x`) — Procedural "Human Micro-Behaviors" (`idleHumanizer.ts`)
- [ ] **5. Instant Push-to-Talk "Look at Player" Reflex (`0ms` Latency)**:
  - **Action**: While Buddy is walking around, press and hold **Spacebar** (or click **🎙️ Hold Spacebar or Click to Talk**) in the Web HUD.
  - **Expected**: Within `0.1s`—before you even finish speaking—Buddy stops walking and turns his head to lock eye contact with you.
- [ ] **6. Reciprocal Crouch-Greeting (`0ms` LLM Latency)**:
  - **Action**: Stand within 10 blocks of Buddy, look at him, and **double-crouch (sneak twice)** quickly within 1 second.
  - **Expected**: Buddy immediately looks at your eyes, double-crouches back, and punches the air in the universal Minecraft greeting!
- [ ] **7. Curious Item Inspection & Sprint-Jumping**:
  - **Action**: Toss an item (`Q`) on the ground within 5 blocks of Buddy while he is idle/following. Then walk 20 blocks away across flat ground.
  - **Expected**: Buddy walks up to the dropped item, pitches his head down (`+35°`) for 1 second to inspect it on the ground, picks it up, and holds it in his hand. When catching up to you across open ground, he **sprint-jumps** like a real player.

#### `F1.2` (`v1.2.x`) — Place-Bound Conversational "Flashbulb" Memory & Landmarks
- [ ] **8. Named Spatial Landmarks (`save_landmark` & `goto_landmark`)**:
  - **Action**: Run `/ai:bot landmark base_camp` (or tell Buddy: *"Save this spot as our base camp"*). Walk 25 blocks away and run `/ai:bot goto base_camp` (or say *"Go back to base camp"*).
  - **Expected**: Buddy saves the exact `[x, y, z]` coordinates in `WorldStore` and walks back to `base_camp`.
- [ ] **9. Place-Bound Conversational Memory (Coords, Landscape View & Player Stats/Inventory)**:
  - **Action**: Hold a specific item (e.g., an Iron Sword or Golden Apple), look at a notable feature, and say to Buddy via the Web HUD: *"Remember that we planned to build a castle right here overlooking the water."*
  - **Expected**:
    - Check the **📍 Place-Bound Memories & Landmarks** panel in the Web HUD (or `GET http://localhost:3000/api/memories`).
    - Verify the saved engram records your exact quote, `[x, y, z]` coordinates, pitch/yaw, **Voxel & Vision Landscape View**, and your **Player HP, Armor, Mainhand Item & Inventory** at that moment!
    - Ask Buddy later: *"What did we talk about building here, and what was I holding?"*—Buddy recalls both the conversation and what gear you had!

---

### Test Suite `F2` (`v2.x.x`) — Simulated "AI Server", Craftable Admin Tool & Moderation
- [ ] **1. Craft or Open the In-Game Admin Panel (`AI Server Admin Tool`)**:
  - **Action**:
    - Craft the **AI Server Admin Tool** at a Crafting Table (`1x Wooden Pickaxe` + `1x Wooden Axe` + `1x Copper Ingot` $\rightarrow$ Clock), **or** hold any Clock / sneak-use a Copper Ingot or Compass, **or** run `/ai:bot admin` (`!admin`).
  - **Expected**: The **✦ AI Server Admin Panel ✦** (`@minecraft/server-ui`) opens with buttons for **Server Settings**, **Player Invites Roster**, **Active Bots (TP / Kick / Ban)**, and **Unban**.
- [ ] **2. Invite Additional Named AI Companions (`/ai:bot invite`)**:
  - **Action**: Open **Player Invites Roster** in the Admin Panel (or run `/ai:bot invite MinerMax miner` and `/ai:bot invite Oakley forester`).
  - **Expected**: Multiplayer-style join announcements appear in chat (`§eMinerMax joined the game [MINER]`, `§eOakley joined the game [FORESTER]`) and multiple named `SimulatedPlayer` bots spawn simultaneously!
- [ ] **3. Teleport, Kick & Ban/Unban Moderation**:
  - **Action**: Use the Admin Panel **Active Bots** menu (or `/ai:bot tp MinerMax`, `/ai:bot kick Oakley`, `/ai:bot ban Oakley`, `/ai:bot unban Oakley`).
  - **Expected**:
    - **Teleport** warps the bot to you (or warps you to the bot).
    - **Kick** despawns the bot with `§eOakley left the game`.
    - **Ban** despawns and blocks the bot from spawning until unbanned.
- [ ] **4. Block-Targeting Bed & Chest Assignment**:
  - **Action**: Place a Bed and a Chest on the ground. Look directly at the Bed within 5 blocks and right-click/use the **Clock** (or sneak-use a Copper Ingot / Compass).
  - **Expected**: The **Assign AI Home Bed** modal pops up letting you pick which companion owns that bed! Repeat while looking at the Chest to assign it as a shared storage chest.

---

### Test Suite `F3` (`v3.x.x`) — Agent Archetypes (Random vs. 5 Specialists) & Co-op Trading UI
- [ ] **1. ⛏️ Miner Specialist (`role: "miner"`) — Auto-Torches Underground**:
  - **Action**: Run `/ai:bot role miner` (or invite `MinerMax`) and run `/ai:bot mine stone 12 staircase`.
  - **Expected**: While mining below `Y < 58`, the Miner automatically places torches every 8 blocks (`tryPlaceMinerTorch`) to keep the tunnel lit.
- [ ] **2. 🪓 Forester Specialist (`role: "forester"`) — Automatic Sapling Replanting**:
  - **Action**: Run `/ai:bot role forester` (or invite `Oakley`) and tell him to chop trees (`/ai:bot collect wood 4`).
  - **Expected**: Whenever the Forester breaks the bottom log of a tree above dirt/grass, a matching sapling (`minecraft:oak_sapling`, etc.) is automatically planted in its place!
- [ ] **3. 🌾 Farmer Specialist (`role: "farmer"`) — Crop Tending & Auto-Bread Baking**:
  - **Action**: Run `/ai:bot role farmer` (or invite `Harvestia`) near wheat crops (`/ai:bot farm harvest_and_replant wheat`).
  - **Expected**: Harvests and replants crops, and when carrying `>= 6` wheat, automatically bakes fresh `bread` loaves!
- [ ] **4. 🛡️ Bodyguard & 🏹 Hunter + Auto-Armor & Shield (`equipmentManager.ts`)**:
  - **Action**: Give Buddy an Iron Chestplate, Iron Helmet, Shield, and Bow, or run `/ai:bot equip` (`!equip`).
  - **Expected**: Buddy automatically equips the armor onto his Head/Chest/Legs/Feet slots and puts the Shield in his Offhand slot (`EntityEquippableComponent`), uses ranged bow attacks at `6–16` blocks, and tosses food to you if your HP drops `<= 12` in Bodyguard mode!
- [ ] **5. Right-Click Companion Inventory & Gear Trading UI (`playerInteractWithEntity`)**:
  - **Action**: Walk up to Buddy (or any AI companion) and **right-click / interact** directly with him.
  - **Expected**: The **Companion Inventory & Gear Manager** UI opens showing his equipped armor, offhand item, and inventory slots—allowing you to **Take** gathered items, **Give** your currently held item, or **Switch Role** on the fly!

---

### Test Suite `F4` (`v4.x.x`) — Base Building & "AI Homes" (Bed, Chests & Furnace Smelting)
- [ ] **1. Smart Chest Auto-Deposit & Restock (`deposit_items` & `restock_items`)**:
  - **Action**: Place a Chest near Buddy (or at his assigned Home Bed) and say *"Deposit your extra items in the chest"* (or run `/scriptevent ai:action {"action":"deposit_items"}`).
  - **Expected**: Buddy walks to the chest, swings his arm, and transfers surplus cobblestone, dirt, logs, and ores into the chest's `BlockInventoryComponent` container while keeping his tools, weapons, armor, food, and torches!
- [ ] **2. Automated Furnace Smelting & Cooking (`smelt_items`)**:
  - **Action**: Place a Furnace near Buddy, give him `raw_iron` (or raw `beef`) + `coal`, and say *"Smelt your iron in the furnace"* (or run `/scriptevent ai:action {"action":"smelt_items","itemName":"iron"}`).
  - **Expected**: Buddy walks to the Furnace, consumes fuel, and smelts `raw_iron` $\rightarrow$ `iron_ingot` (and cooks raw meats into cooked meats).
- [ ] **3. Sunset Home Routine (`sleep_in_bed` / Dusk Return)**:
  - **Action**: Set time to dusk (`/time set 12900`) or say *"Go home for the night and sleep"* (`/scriptevent ai:action {"action":"sleep_in_bed"}`).
  - **Expected**: Buddy walks back to his assigned `home_bed`, smelts any raw ores/food, deposits surplus loot in the Home Chest, places a perimeter torch (`LightingInstinct`), and rests at his bed!

---

### Test Suite `F5` (`v5.x.x`) — Autonomous Survival (`UtilityBrain`) & Tech-Tree (`GoalPlanner`)
- [ ] **1. Tier 1 Scratch-to-Stone Tech-Tree (`stone_age`)**:
  - **Action**: Tell Buddy *"Progress to the Stone Age"* (or run `/scriptevent ai:action {"action":"progress_tech_tree","techGoal":"stone_age"}`).
  - **Expected**: `GoalPlanner` inspects Buddy's inventory and queues the missing prerequisite chain (`collect_resource wood` $\rightarrow$ `craft planks` $\rightarrow$ `craft stick` $\rightarrow$ `craft crafting_table` $\rightarrow$ `craft wooden_pickaxe` $\rightarrow$ `mine stone` $\rightarrow$ `craft stone_pickaxe`, `stone_sword`, `furnace`, and `torch`).
- [ ] **2. Tier 2 Stone-to-Iron (`iron_age`) & Tier 3 Iron-to-Diamond (`diamond_age`)**:
  - **Action**: Tell Buddy *"Progress to the Iron Age"* (`"techGoal":"iron_age"`) or *"Progress to the Diamond Age"* (`"techGoal":"diamond_age"`).
  - **Expected**:
    - `iron_age`: Chains iron mining $\rightarrow$ furnace smelting $\rightarrow$ crafting `iron_pickaxe`, `iron_sword`, `shield`, `iron_chestplate` $\rightarrow$ `auto_equip`.
    - `diamond_age`: Ensures iron pickaxe & torches, staircase-mines underground for diamonds, and crafts diamond gear!

---

### Test Suite `F6` (`v6.x.x`) — Local 3D A* Pathfinding, Scaffolding & Doors
- [ ] **1. Local 3D A* Obstacle Bypass (`Pathfinder3D`)**:
  - **Action**: Build an L-shaped wall between you and Buddy and tell him to `/ai:bot follow`.
  - **Expected**: Buddy computes a 3D A* path around the wall corners rather than getting stuck walking into the blocks.
- [ ] **2. Vertical Pillar Scaffolding & Horizontal Gap Bridging**:
  - **Action**: Stand on a 3-block-high pillar or across a 2-block trench while Buddy has `cobblestone` or `dirt` in his inventory.
  - **Expected**: When stuck trying to reach you, Buddy places blocks underfoot while jumping (`tryScaffoldOrBridge`) or bridges across the gap/water!
- [ ] **3. Wooden Door & Fence Gate Interaction**:
  - **Action**: Walk inside a house with a wooden door (`oak_door`) or fence gate and close it behind you while Buddy is following you.
  - **Expected**: Buddy walks up to the closed wooden door, opens it (`interactWithBlock` / `open_bit`), walks inside, and closes the door behind himself 2 seconds later so monsters cannot follow!

---

### Test Suite `F7` (`v7.x.x`) — Autonomous AI Village Ecosystem
- [ ] **1. Found the AI Village Center & Market Plaza (`found_village`)**:
  - **Action**: Say *"Establish a village center here"* (or run `/scriptevent ai:action {"action":"village_action","villageTask":"found_village"}`).
  - **Expected**: `VillageManager` establishes the **AI Village Center & Market Plaza** at Buddy's coordinates, placing **2 Shared Market Chests**, a **Crafting Table**, a **Furnace**, and a **Town Lantern Post**, and announces the village founding in chat!
- [ ] **2. Inter-Agent Bartering & Specialist Economy Loop (`trade_meetup`)**:
  - **Action**: Make sure at least 2 companions are spawned (e.g., `/ai:bot invite Oakley forester` and `/ai:bot invite Harvestia farmer`), then run `/scriptevent ai:action {"action":"village_action","villageTask":"trade_meetup"}` (or wait 35s).
  - **Expected**: `[Village Barter Bus]` transfers surplus planks/wood, bread/cooked beef, and torches between specialists and prints the **Village Resource Ledger** (`Wood`, `Stone`, `Iron`, `Coal`, `Food`, `Torches`).
- [ ] **3. Village Chat Bus & Collective Raid Alerts (`broadcast_need`)**:
  - **Action**: Run `/scriptevent ai:action {"action":"village_action","villageTask":"broadcast_need","itemName":"sticks & bread"}` or spawn 2 Zombies near the village (`/summon zombie ~4 ~ ~`).
  - **Expected**:
    - Companions broadcast supply requests over `[Village Chat Bus]`.
    - When `>= 2` hostile monsters approach within 16 blocks, `[Village Raid Alert]` announces the attack in chat and rallies the Bodyguard/Hunter to clear the raiders!
- [ ] **4. Cooperative Multi-Agent Village Building (`build_village`)**:
  - **Action**: Say *"Build a village cottage"* or *"Build a village watchtower"* (or run `/scriptevent ai:action {"action":"village_action","villageTask":"build_village","itemName":"cottage"}`).
  - **Expected**: `[VillageBuilder]` lays out a radial structure plot (`cottage` or `watchtower`) around the Village Center and constructs the building block-by-block!
