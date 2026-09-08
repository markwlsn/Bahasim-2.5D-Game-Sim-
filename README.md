# BahaRescue 2.5D: Metro Deluge (Philippine Disaster Side-Scrolling Adventure)

> 🇵🇭 **An Action-Packed 2.5D Side-Scrolling Adventure & Disaster Resilience Game**  
> Play as **Captain Bayani**, leading the DRRM ground rescue team through typhoon-flooded Philippine streets. Jump across submerged rooftops, wade and swim through rising floodwaters, unclog drainage culverts, collect emergency relief packs, and rescue stranded citizens before reaching the Evacuation Command Center!

---

> [!WARNING]
> ### 🚧 PROJECT STATUS: ACTIVE DEVELOPMENT (WORK IN PROGRESS)
> This game was built using the **6-Pillar 2.5D Game Development Framework** (Game Concept, Visual Style, Gameplay Mechanics, UI/HUD, Sound & Feedback, and Deployment). While Level 1 to Level 3 are fully playable with parallax scrolling, water swimming physics, citizen rescue interactions, procedural 8-bit chiptune BGM, and mobile touch controls, advanced features like boss floodways, boat vehicle stages, and regional Philippine level packs are actively in progress.
> 
> *Note: The strategic isometric city-builder simulator is preserved in [`bahasim_isometric.html`](bahasim_isometric.html).*

---

## 🎮 The 6 Pillars Implemented

### 1. 🕹️ Game Concept, Cinematic Story & Adventure Progression
- **Cinematic Prologue Narrative (The Mega-Dike Failure)**:
  - **Act I: The Mega-Dike Collapse**: Documents the catastrophic failure of the ₱250 Billion automated flood control system. The massive DPWH sluice gates jam open at 45% capacity, retaining walls fissure under torrential rainfall, and millions of cubic meters of water blast over river embankments.
  - **Act II: The Submerged Metropolis**: City government advisories came too late. Roads transform into raging rivers, trapping families, lolas, crying children, and domestic pets on submerged rooftops with power grids blacked out.
  - **Act III: Captain Bayani's Vow**: Close-up hero cutscene where Captain Bayani refuses to let citizens drown in bureaucratic failure:  
    *"The flood controls failed us. Bureaucracy washed its hands. But WE will NOT abandon our people! If the dikes won't hold the deluge... our courage will. Grab your life vests, team. We are wading into the storm. Leave no one behind!"*
  - **Cinematic Experience**: Authentic widescreen 21:9 letterbox bars, retro typewriter text animation with sound clicks, emergency siren wails, dramatic bass rumbles, skip options (`[ESC]`), and a replayable `🎬 Story` button in the HUD!
- **3 Escalating Typhoon Levels**:
  - **Level 1: Barangay Riverside (Signal #1 - Habagat Swell)**: Moderate street flooding, stalled tricycles and jeepneys, picking up first-aid kits, and rescuing stranded residents on front porches.
  - **Level 2: Midtown Estero & Highway Overpass (Signal #2 - Monsoon Surge)**: Rapidly rising floodwaters, swimming through deep esteros, leaping across submerged buses, and unclogging storm drainage grates.
  - **Level 3: Downtown Coastal Deluge (Signal #4 - Typhoon Landfall)**: Violent gales (110 km/h), thunder and lightning flashes, floating cargo debris, live fallen power lines, and rescuing citizens from second-floor balconies to reach the main Evacuation Gym!
- **Scoring System**: Points awarded for rescuing citizens (+500 pts), companion animals (+800 pts), dredging clogged drains (+300 pts), collecting relief supplies (+100 to +200 pts), and level completion health bonuses.

### 2. 🎨 Visual & Art Style (Submerged Street Visibility + Procedural Textures + Philippine Street Assets)
- **Submerged Street & Roadway Visibility Overhaul**:
  - **Translucent Floodwater Shader**: Calibrated water transparency (35% surface to 45% street depth) so players can clearly see the flooded city street below rather than a pitch-black abyss!
  - **Double Solid Yellow Highway Centerline**: Vivid road centerlines running down the flooded roadway.
  - **White Pedestrian Crosswalks (Zebra Stripes)**: High-visibility crosswalk markings and white stop bars spaced across street segments.
  - **Concrete Sidewalk Curbs with Hazard Markings**: Black-and-yellow hazard striped raised curb edges alongside buildings.
  - **Submerged Sewer Infrastructure**: Circular cast-iron manhole covers (*"MAYNILAD DRAINAGE"*) and submerged drainage curb grates.
  - **Subsurface Caustics & Runoff Debris**: Moving sun/lightning caustic refraction lines over the submerged asphalt, with floating styrofoam containers, translucent blue plastic sando bags, and green water hyacinths bobbing on the surface.
- **100% Free Procedural Texture Engine (Zero Asset Loading / Offline Ready)**:
  - **Corrugated Galvanized Iron (*Yero*)**: Procedural vertical ridges in Manila Red, Coastal Blue, and weathered Rusty Orange for authentic rooftop shanties and homes.
  - **Adobe Volcanic Tuff (*Bahay na Bato*)**: Staggered masonry block patterns with mortar lines for traditional ground-level walls.
  - **Gritty Asphalt Roadway**: Procedural speckled noise patterns for urban streets.
  - **Wood Plank Lumber**: Grain-textured wooden slats for storefront counters and stilt structures.
- **Iconic Philippine Street Assets**:
  - **Sari-Sari Store (*"Tindahan ni Nena"*)**: Wooden facade, corrugated yero awning, front window security grille, and hanging colorful snack bags (*chichirya*).
  - **Iconic Philippine Jeepney & Tricycle**: Stalled yellow/chrome jeepney with blinking hazards and painted mudflap (*"GOD BLESS"*), plus motorized tricycle with passenger sidecar sitting directly on the submerged pavement.
  - **Street Flood Level Markers**: Authentic flood depth warning signs (*"BAHA DITO! 1.5M"*, *"TAWIRAN NG TAO"*, *"EVACUATION ROUTE ➔"*).
  - **Wind-Swaying Coconut Palms**: Multi-joint organic coconut palm trees swaying with storm wind velocity.
  - **National Pride**: Waving animated Philippine flag mounted atop the Evacuation Command Center gymnasium.
- **Pixel-Art Character Sprites & Rescuable Animal Companions**:
  - **Captain Bayani**: DRRMC reflective life vest, blue tactical uniform, and yellow rescue helmet.
  - **Filipino Citizens**: Lolas, kids, and residents waving with animated exclamation bubbles.
  - **Stranded Aspin Puppy**: Floating on a white Styrofoam cooler box with floppy ears and whimpering alert (*"🦴 HELP!"*).
  - **Stranded Stray Cat**: Clinging tightly to a utility telephone pole (*"🐾 MEOW!"*). Rescuing animals grants massive +800 bonus points and playful synthesized pet sound effects!
- **Modern Lighting & Atmospheric VFX**:
  - Helmet headlamp spotlight casting a real-time cone of light through the storm.
  - Slanted wind-driven directional rain particles matching storm wind speeds.
  - Dynamic lightning screen flashes with synchronized procedural thunder rumbles.
  - Translucent animated floodwater surface with moving sine-wave ripples and white foam crests.

### 3. ⚙️ Gameplay Mechanics & Water Physics
- **Platformer Kinematics**: Smooth acceleration, variable jump heights, and ground collision detection (AABB).
- **Dual-State Hydrodynamics (Wading vs. Swimming)**:
  - **Shallow Wading**: Water below waist dampens running speed by 35% with dynamic splash particles.
  - **Deep Swimming**: Entering deep floodwaters smoothly activates swimming mode (reduced gravity, vertical swim controls `[W]`/`[S]`, and an **Oxygen Meter**). Surfacing quickly replenishes oxygen!
- **Interactive Objects**:
  - **Stranded Citizens**: Approach and press `[E]` (or mobile 🛠️ button) to rescue.
  - **Clogged Storm Drains**: Unclogging storm culverts physically drains floodwaters, lowering the water level by 30 pixels!
- **4-Layer Parallax Background**:
  - Layer 1 (0.08×): Distant Sierra Madre mountain silhouettes.
  - Layer 2 (0.25×): Mid-distance Philippine city skyline with flickering window lights.
  - Layer 3 (0.50×): Near background utility telephone poles, sagging power cables, and residential roofs.
  - Layer 4 (1.00×): Foreground playfield platforms, roads, houses, vehicles, hazards, and floodwaters.

### 4. 📊 Minimal HUD (Heads-Up Display)
- Semi-transparent top glassmorphic control bar:
  - **Health Bar**: 3 Heart icons with hit invulnerability blinking.
  - **Oxygen Meter**: Appears smoothly only when submerged underwater.
  - **Citizen Rescue Counter**: Real-time tracker (`👥 Rescued: X / Y`).
  - **Score**: Retro gold arcade score counter.
  - **Mission Distance Bar**: Real-time progress bar showing distance to the Evacuation Center.
  - **Floating Action Cues**: On-screen prompts appear when standing near interactable citizens or drains.

### 5. 🔊 Sound & Feedback (Zero External Dependencies)
- 100% procedural Web Audio API sound synthesis:
  - **Looping 8-Bit Chiptune Soundtrack**: Multi-voice synthesizer playing an energetic retro adventure arpeggio and bassline.
  - **Cinematic Audio**: Two-tone oscillating civil defense emergency siren, mechanical typewriter key clicks during narrative reveals, and deep dramatic bass stabs on scene transitions.
  - **Interactive SFX**: Square-wave jump sounds, filtered white-noise water splashes, two-tone item pickup chimes, cheerful citizen and pet rescue fanfares, crunchy hazard hit thuds, and thunderclaps.
  - **Victory Jingle**: 6-note triumphant 8-bit fanfare upon reaching the Evacuation Command Center.

### 6. 📱 Responsive Deployment & Mobile Touch Controls
- Single-file zero-dependency `index.html` runnable directly in any browser.
- **Touch Controls for Mobile / Tablets**:
  - Virtual D-pad (◀ Left, ▶ Right, ▼ Dive/Duck).
  - Virtual Action Buttons (▲ Jump / Swim Up, 🛠️ Interact / Rescue).
- Fully responsive canvas scaling supporting both desktop 16:9 displays and mobile portrait/landscape orientations.

---

## 🔮 Upcoming Roadmap (Why It's Not Yet Finished)

- [ ] **DRRMC Rubber Boat Vehicle Stages**: Transitioning into driving an inflatable rescue boat down flooded river floodways.
- [ ] **Regional Philippine Level Packs**:
  - *Level Pack: Marikina River Gorge & Tumana Bridge*
  - *Level Pack: CAMANAVA Coastal Polders & Navotas Fish Port*
- [x] **Procedural Textures & Authentic Philippine Street Decors**: Corrugated iron roofs (*yero*), adobe tuff walls, asphalt roads, sari-sari stores, tricycles, flood warning signs, and waving Philippine flag.
- [x] **Stranded Animal Rescues**: Rescuing Aspin puppy on floating cooler and stray cat on utility pole with custom SFX.
- [x] **Submerged Street Visibility & Translucent Hydro-Shader**: Double yellow highway centerlines, white pedestrian crosswalks, hazard curb striping, and sewer manholes fully visible underwater.
- [x] **Cinematic Narrative Prologue Cutscenes**: 3-act story intro covering the mega-dike collapse, submerged metropolis, and Captain Bayani's vow with typewriter audio, siren, and letterboxing.
- [ ] **Boss Encounters / Levee Breaches**: Overcoming massive flash surges and saving carabao livestock.

---

## 📋 Ready-to-Use All-in-One AI Prompt Template

If you want to generate similar 2.5D games in Phaser, GDevelop, or another AI assistant, use this master prompt template:

```text
You are an expert game designer, systems architect, and creative HTML5 game developer. Build a complete, single-file, zero-dependency 2.5D side-scrolling adventure game titled "BahaRescue 2.5D: Metro Deluge" runnable directly in any browser.

### 1. GAME CONCEPT & PROGRESSION
- 2.5D side-scrolling adventure where the player controls a disaster first responder navigating flooded urban environments across 3 escalating levels.
- Player must rescue stranded citizens on rooftops, collect emergency relief kits, and unclog storm drainage grates before reaching the Evacuation Center.

### 2. VISUALS & ART STYLE
- Retro arcade pixel-art style with modern lighting effects.
- Multi-layer parallax scrolling (at least 3-4 depth layers: distant mountains, city skyline, utility poles, foreground platforms).
- Dynamic floodwater layer with moving sine waves, foam crests, and depth gradients.
- Slanted directional rain particles and realistic lightning screen flashes.

### 3. GAMEPLAY & PHYSICS
- Character kinematics (walk, jump, fall) with collision detection on ground, rooftops, and vehicles.
- Water physics: wading dampens speed; deep water switches to swimming mode with reduced gravity and an oxygen depletion meter.
- Interaction key (E / touch action) to rescue citizens and dredge drainage grates to lower water levels.

### 4. MINIMAL HUD
- Top semi-transparent glass panel displaying Health (3 hearts), Oxygen Bar (when submerged), Citizen Rescue Counter, Score, and Mission Progress Bar.

### 5. SOUND & FEEDBACK (WEB AUDIO API)
- 100% procedural Web Audio API with zero external audio files.
- Looping retro 8-bit chiptune background music track.
- Jump, splash, item pickup, citizen rescue, damage hit, thunder, and victory jingle SFX.

### 6. DEPLOYMENT & TOUCH CONTROLS
- Single-file index.html with inline CSS (Tailwind via CDN) and HTML5 Canvas.
- Fully responsive on Desktop (WASD/Arrows + Space + E) and Mobile (virtual on-screen D-pad, Jump, and Action buttons).
```

---

## 🕹️ Controls Guide

| Action | Desktop Keyboard | Mobile Touch Control |
| :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` or `◀` / `▶` | Touch `◀` / `▶` buttons |
| **Jump / Swim Up** | `W` / `Space` / `▲` | Touch `▲` button |
| **Dive / Duck** | `S` / `▼` | Touch `▼` button |
| **Rescue / Interact** | `E` / `F` / `Enter` | Touch `🛠️` button |
| **Toggle Sound / BGM**| `[🔊]` HUD button | `[🔊]` HUD button |
| **Restart Mission** | `[↺]` HUD button | `[↺]` HUD button |

---

## 🚀 How to Run

Double-click `index.html` to open it in **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Safari**—no web server or dependencies required!
