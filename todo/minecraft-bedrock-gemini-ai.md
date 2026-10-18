# Minecraft Bedrock Gemini AI Companion — Todo

Project page: [Minecraft Bedrock Gemini AI Companion](../wiki/projects/minecraft-bedrock-gemini-ai.md)

## Open
- [ ] Auto-equip best armor & offhand shield (`EntityEquippableComponent`) + Player co-op combat assist on `entityHurt`
- [ ] Persistent world waypoints (`home`, `mine`, `farm`, `last_death`) via `world.setDynamicProperty`
- [ ] Smart Chest storage (`StorageSkill` auto-deposit when inventory full & restock on demand)
- [ ] Furnace smelting (`SmeltingSkill` for raw iron, raw gold, sand, and raw food)
- [ ] Auto-torch placement in dark caves/nighttime and wooden door/gate interaction
- [ ] Proactive AI voice callouts (Creeper alerts, diamond sightings, nighttime warnings)
- [ ] Voyager/Mindcraft-style hierarchical tech-tree goal planner & local 3D A* voxel pathfinder

## Done
- [x] Bootstrap Minecraft Bedrock Behavior/Resource Pack + Node.js Gemini 3.8 Flash Companion Bridge  <!-- done:2026-10-17 -->
- [x] Add WebRTC live game window capture, voice chat, customizable TTS voice/speed/pitch, and per-line `🔊` re-speak button  <!-- done:2026-10-17 -->
- [x] Implement `ExploreSkill` toggle, `once`/`count`/`continuous` repeat modes, `/gemini:ai` slash command, and `@minecraft/server-ui` menu  <!-- done:2026-10-17 -->
- [x] Implement `SurvivalInstinct` (0.1s surface swimming, cliff/hazard avoidance, fall damage cushioning, Creeper evasion, mob kiting, auto-eating)  <!-- done:2026-10-17 -->
