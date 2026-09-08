# BahaRescue 2.5D: Metro Deluge (Philippine Disaster Side-Scrolling Adventure)

> 🇵🇭 **An Action-Packed 2.5D Side-Scrolling Adventure & Disaster Resilience Game**  
> Play as **Captain Bayani**, leading the DRRM ground rescue team through typhoon-flooded Philippine streets. Jump across submerged rooftops, navigate floating rescue boats, wade and swim through rising floodwaters, dodge live electric wires and drain whirlpools, unclog drainage culverts, collect emergency relief packs, and rescue stranded citizens before reaching the Evacuation Command Center!

---

> [!NOTE]
> ### 🚧 PROJECT STATUS: ACTIVE DEVELOPMENT (WORK IN PROGRESS)
> This game is built using the **6-Pillar 2.5D Game Development Framework** (Game Concept & Story, Visual & Texture Engine, Gameplay Mechanics & Physics, Minimal HUD, Procedural Sound & Feedback, and Responsive Deployment).
> 
> *Note: The strategic isometric city-builder simulator is preserved in [`bahasim_isometric.html`](bahasim_isometric.html).*

---

## 🎮 The 6 Pillars Implemented

### 1. 🕹️ Game Concept, Narrative & 10-Level Campaign Progression
- **Cinematic Prologue Narrative (The Mega-Dike Failure)**:
  - **Act I: The Mega-Dike Collapse**: Documents the catastrophic failure of the ₱250 Billion automated flood control system. The massive DPWH sluice gates jam open at 45% capacity, retaining walls fissure under torrential rainfall, and millions of cubic meters of water blast over river embankments.
  - **Act II: The Submerged Metropolis**: City government advisories came too late. Roads transform into raging rivers, trapping families, lolas, crying children, and domestic pets on submerged rooftops with power grids blacked out.
  - **Act III: Captain Bayani's Vow**: Close-up hero cutscene where Captain Bayani refuses to let citizens drown in bureaucratic failure:  
    *"The flood controls failed us. Bureaucracy washed its hands. But WE will NOT abandon our people! If the dikes won't hold the deluge... our courage will. Grab your life vests, team. We are wading into the storm. Leave no one behind!"*
  - **Cinematic Experience**: Authentic widescreen 21:9 letterbox bars, retro typewriter text animation with sound clicks, emergency siren wails, dramatic bass rumbles, skip options (`[ESC]`), and a replayable `🎬 Story` button in the HUD!
- **10-Level Progressive Campaign (Easy ➔ Hard Tiers)**:
  - **Tier 1: Easy / Gentle Waters (Levels 1–3)**:
    - *Level 1: Barangay Riverside (Signal #1 - Habagat Swell)*: Ankle-deep waters (100px), calm winds, stalled tricycles & jeepneys, 4 rescues.
    - *Level 2: Midtown Estero & Market (Signal #1 - Tropical Depression)*: Knee-deep waters (130px), mild rain, wading through street markets, 5 rescues.
    - *Level 3: San Roque Lowland Subdivisions (Signal #2 - Monsoon Influx)*: Waist-deep waters (170px), intro to swimming, residential stilt homes, 6 rescues.
  - **Tier 2: Moderate / Deep Floodwaters & Floating Vessels (Levels 4–5)**:
    - *Level 4: Boulevard Floodway & Commercial Strip (Signal #2 - Tropical Storm)*: Chest-deep waters (210px), introduction of DRRMC rubber rescue dinghies and bangka canoes, 7 rescues.
    - *Level 5: Highway Overpass & River Delta (Signal #2 - Severe Storm)*: High flood crest (240px), leaping across moving floating vessels and submerged buses, 8 rescues.
  - **Tier 3: Hard / Storm Surge & Dynamic Hazards (Levels 6–8)**:
    - *Level 6: Coastal Port & Fisherfolk Village (Signal #3 - Typhoon Approaching)*: Storm surge waters (270px), high wind gusts (65 km/h), live 220V electrical wire hazard zones, 9 rescues.
    - *Level 7: Industrial District & Drain Culverts (Signal #3 - Typhoon Torrent)*: Torrential deluge (300px), treacherous whirlpool drain vortices with downward suction, 10 rescues.
    - *Level 8: Central City Mega-Dike Breach (Signal #4 - Severe Typhoon)*: Critical crest (330px), heavy lightning flashes, violent gales (95 km/h), combined electrical & whirlpool hazards, 11 rescues.
  - **Tier 4: Extreme / Super Typhoon Cataclysm (Levels 9–10)**:
    - *Level 9: CAMANAVA Polder Lowland Basin (Signal #4 - Catastrophic Surge)*: Massive floodwaters (360px), gale winds (115 km/h), rooftop-to-boat platforming, 12 rescues.
    - *Level 10: Grand Metropolitan Evacuation Corridor (Signal #5 - Super Typhoon Peak)*: Maximum inundation (400px), extreme winds (140 km/h), torrential downpour, continuous hazards, 14 critical rescues to reach the Main Evacuation Command Center!
- **Instant Level Select Dropdown**: A dropdown menu in the HUD (`#levelSelectDropdown`) allows players and testers to jump straight to any of the 10 levels instantly!

---

### 2. 🎨 Visual & Texture Engine (5 Building Styles + Floating Boats + Philippine Assets)
- **Floating Vessels (Buoyancy Platform Mechanics)**:
  - **DRRMC Orange Inflatable Rubber Zodiac**: Heavy-duty rescue dinghy with outboard motor, black grab ropes, and *"DRRMC RESCUE"* lettering. Bobs on water waves and acts as a solid floating platform.
  - **Traditional Filipino Bangka**: Authentic wooden canoe in sea-blue with bamboo outrigger floats (*katig*) and lashed crossbars.
- **5 Diverse Architectural Styles**:
  - **Bahay Kubo**: Traditional rural dwelling on elevated bamboo stilts above water, woven bamboo *sawali* walls, and nipa palm thatched *pawid* gable roof.
  - **Bahay na Bato**: 19th-century Spanish-Filipino heritage house with volcanic adobe tuff stone ground floor, *volada* wooden upper floor, sliding translucent capiz shell windows, and terracotta tile roof.
  - **Sari-Sari Store (*"Tindahan ni Nena"*)**: Authentic neighborhood convenience store with corrugated iron *yero* awning, storefront window security grille, painted signboard, and hanging snack chip bags (*chichirya*).
  - **Commercial Shophouse**: Multi-level concrete urban building with rolled-down steel security shutter (*rolling door*), aircon compressor bracket, and rooftop billboard.
  - **Barangay Hall**: Official municipal government satellite post with blue-and-white facade, Public Address horn loudspeaker, and community health clinic banner.
- **Submerged Street & Roadway Visibility**:
  - **Translucent Floodwater Shader**: Calibrated water transparency (35% surface to 45% street depth) so players can clearly see the flooded city street below rather than a pitch-black abyss!
  - **Double Solid Yellow Highway Centerlines** & **White Pedestrian Zebra Crosswalks**.
  - **Concrete Sidewalk Curbs with Black-and-Yellow Hazard Markings**.
  - **Submerged Sewer Infrastructure**: Circular cast-iron manhole covers (*"MAYNILAD DRAINAGE"*) and submerged drainage curb grates.
  - **Subsurface Caustics & Runoff Debris**: Moving lightning caustic refraction lines, floating styrofoam coolers, translucent blue plastic sando bags, and green water hyacinths bobbing on the surface.
- **Overhauled Rescuer Character Sprite (Captain Bayani)**:
  - **Prone Horizontal Swimming Posture**: Character rotates horizontally with kicking legs and water wake bubble trails when submerged.
  - **Upright Running Stride**: Animated running legs, 3M reflective yellow safety stripes across high-visibility orange DRRMC vest, yellow rescue helmet, shoulder walkie-talkie with blinking status LED, mounted lifebuoy backpack, and a real-time helmet headlamp spotlight cone!

---

### 3. ⚙️ Diverse Rescues, Dynamic Hazards & Water Physics
- **5 Diverse Philippine Rescue Targets**:
  - **Infant in Floating Batya (+1,000 pts)**: Baby drifting in a galvanized metal washbasin with swaddling blanket (`sound.playBabyRescue()`).
  - **Lola with Healing Blessing (+600 pts & +1 Heart!)**: Filipino grandmother in floral duster with umbrella who blesses Captain Bayani, restoring +1 Heart HP (`sound.playHeal()`).
  - **Philippine Carabao (+1,500 pts)**: Heavy stranded water buffalo on levee requiring high courage to secure (`sound.playCarabaoRescue()`).
  - **Stranded Aspin Puppy (+800 pts)**: Floating on a white Styrofoam cooler box with floppy ears (`sound.playDogRescue()`).
  - **Stranded Stray Cat (+800 pts)**: Clinging tightly to a utility telephone pole (`sound.playCatRescue()`).
  - **Residents & Children (+500 pts)**: Stranded citizens waving with animated exclamation balloons.
- **Dynamic Environmental Hazards**:
  - **220V Live Wire Cable**: Fallen utility line that periodically pulses high-voltage electric arcs. Touching water within 75px during active discharge deals damage (`sound.playSparks()`).
  - **Drain Whirlpool Vortex**: Swirling storm drain vortex that exerts inward and downward gravitational suction on the player (`sound.playWhirlpool()`).
- **Interactive Storm Drains**: Unclogging drainage grates (`[E]`) physically lowers the floodwater level by 30 pixels!
- **Dual-State Hydrodynamics**:
  - Shallow Wading: Slows movement speed by 35% with dynamic water splashes.
  - Deep Swimming: Reduced gravity, directional swim controls (`[W]`/`[S]`), and an Oxygen Depletion Meter with surfacing refill.

---

### 4. 📊 Minimal Glassmorphic HUD
- **Difficulty & Tier Badge**: Displays `EASY`, `MODERATE`, `HARD`, or `EXTREME` based on current level.
- **Level Select Dropdown (`#levelSelectDropdown`)**: Direct navigation between all 10 levels.
- **Health Bar**: 3 Heart icons with invulnerability flashing upon damage.
- **Oxygen Meter**: Slides smoothly into view only when swimming submerged.
- **Citizen Rescue Counter**: Real-time counter (`👥 Rescued: X / Y`).
- **Arcade Score Counter**: Retro golden score display with animated points popups.
- **Mission Progress Bar**: Dynamic track showing player position relative to the Evacuation Command Center.

---

### 5. 🔊 Procedural Audio Engine (Web Audio API)
- 100% procedural Web Audio API synthesis (zero external `.mp3`/`.wav` downloads):
  - **Dynamic 8-Bit Chiptune BGM**: Arpeggiated melody with driving bassline.
  - **Cinematic Audio**: Two-tone oscillating emergency siren, mechanical typewriter key clicks during prologue lore, and dramatic bass stabs.
  - **Diverse SFX**: Baby coos, Lola prayer chime, Carabao moo low-frequency rumble, puppy bark, kitten meow, live wire electrical zaps, whirlpool suction hum, water splashes, jumping, and 6-note victory fanfare.

---

### 6. 📱 Responsive Deployment & Controls
- Single-file zero-dependency `index.html` runnable directly in any browser.
- **Controls**:

| Action | Desktop Keyboard | Mobile Touch Control |
| :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` or `◀` / `▶` | Touch `◀` / `▶` buttons |
| **Jump / Swim Up** | `W` / `Space` / `▲` | Touch `▲` button |
| **Dive / Duck** | `S` / `▼` | Touch `▼` button |
| **Rescue / Interact** | `E` / `F` / `Enter` | Touch `🛠️` button |
| **Level Jump** | HUD Dropdown | HUD Dropdown |
| **Toggle Sound / BGM**| `[🔊]` HUD button | `[🔊]` HUD button |
| **Replay Story Cutscene**| `[🎬 Story]` HUD button | `[🎬 Story]` HUD button |
| **Restart Mission** | `[↺]` HUD button | `[↺]` HUD button |

---

## 🔮 Upcoming Roadmap (Why It's Not Yet Finished)

- [x] **10-Level Progressive Campaign**: Easy (1–3), Moderate (4–5), Hard (6–8), Extreme (9–10) with level select dropdown.
- [x] **Floating Rescue Vessels**: DRRMC rubber Zodiac boats & wooden Bangka outriggers with wave bobbing physics.
- [x] **5 Philippine Architectural Archetypes**: Bahay Kubo, Bahay na Bato, Sari-Sari Store, Commercial Shophouse, Barangay Hall.
- [x] **Diverse Rescues**: Baby in Batya, Lola with healing prayer (+1 HP), Carabao, Aspin puppy, stray cat.
- [x] **Dynamic Obstacles & Hazards**: 220V live electrical cables with spark zones, drain whirlpool vortices.
- [x] **Rescuer Overhaul**: Prone swimming posture, kicking legs, water wake, reflective 3M stripes, walkie-talkie.
- [x] **Submerged Street Visibility & Translucent Hydro-Shader**: Road centerlines, crosswalks, hazard curbs, manholes.
- [x] **Cinematic Narrative Prologue Cutscenes**: 3-act story intro with typewriter audio and siren.
- [ ] **Regional Philippine Level Packs**:
  - *Level Pack: Marikina River Gorge & Tumana Bridge*
  - *Level Pack: CAMANAVA Coastal Polders & Navotas Fish Port*
- [ ] **Controllable DRRMC Motorboat Vehicle Stages**: Piloting an outboard motorboat down flooded expressways.
- [ ] **Boss Encounters / Levee Breaches**: Dynamic dam failure waves where players race against a rising wall of water.

---

## 🚀 How to Run

Double-click `index.html` to open it in **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Safari**—no web server, installation, or dependencies required!
