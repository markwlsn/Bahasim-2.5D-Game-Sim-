# BahaSim 2.5D: Metro Resilient (Philippine DRRM & Flood Control Simulator)

> 🇵🇭 **A 2.5D Isometric City-Building and Disaster Resilience Simulation**  
> Act as the City Mayor & DRRM Chief of a vulnerable Philippine river delta basin. Balance economic growth against relentless monsoon seasons, tidal surges, and escalating typhoons.

---

> [!WARNING]
> ### 🚧 PROJECT STATUS: WORK IN PROGRESS (NOT YET FINISHED)
> **BahaSim 2.5D** is actively under development. While the core 2.5D isometric engine, hydrodynamic shallow-water simulation, Doppler radar, and disaster toolkits are fully playable, additional features, regional maps, and deep logistics systems are actively being built. See the [Upcoming Roadmap](#-upcoming-roadmap--in-development) below.

---

## 📊 Development Progress & Implemented Features

### ✅ 1. 26×26 Sprawling Philippine Basin Map
- **Topographic Elevation Gradient (676 Tiles)**:
  - **Upland Watershed (Elevation 5–7)**: High Sierra Madre mountain ridges, natural headwaters, and dense tropical rainforest canopy.
  - **Midtown Urban Core (Elevation 2–4)**: Dense commercial CBD glass skyscrapers, residential barangays (*Bahay na Bato* & stilt homes), multi-lane asphalt highway networks, and sponge basins.
  - **CAMANAVA Coastal Delta & Manila Bay (Elevation 0–1)**: Coastal fisherfolk stilt communities, mangrove wetland buffer belt, and open ocean tidewater.
- **Meandering River System**: A natural river basin winding from the northern mountains to the coastal sea with realistic bridges.

### ✅ 2. Next-Gen 2.5D Volumetric Graphics & Philippine Urban Life
- **Volumetric Building Prisms**: Directional sunlight highlights on roofs and ambient shadow walls.
- **Glass Skyscrapers**: Illuminated window grids, rooftop helipads, and telecom masts with pulsating red aviation warning beacons.
- **Living Philippine Mobility**:
  - Moving yellow, blue, and red stainless-steel jeepneys, tricycles with sidecars, and commuter buses.
  - Submerged vehicle stalling physics with flashing amber hazard lights when streets flood (>0.35m).
  - **Inflatable Orange DRRMC Rescue Rubber Boats**: Dynamically deploy from shelters and cruise flooded streets to rescue stranded citizens.
- **Translucent Water VFX**: Multi-tier depth coloration (azure river $\to$ turbid silt floodwaters $\to$ deep navy bay) with surface wave ripples and directional flow chevrons.
- **Atmospheric Visuals**: Drifting 3D cloud shadows, directional wind-driven rain particles, and sudden realistic lightning screen flashes.

### ✅ 3. Advanced Hydrodynamic Physics Simulation
- **Shallow-Water Cellular Automaton ($H = z + h$)**:
  - Hydraulic head differential flow computed across neighboring tiles.
  - **Manning Roughness Friction**: Drainage canals ($0.38\times$) and rivers ($0.26\times$) provide rapid flow conveyance; asphalt roads allow moderate sheet flow; forests ($0.06\times$) provide high resistance and continuous infiltration.
- **Levee Crest Overtopping**: Concrete dikes ($+2.5\text{m}$) block water up to crest height; overtopping occurs if floodwaters exceed barrier elevation.
- **Manila Bay Tidal Surge Dynamics**:
  - **High Tide (+1.8m)**: Seawater pushes back into the river delta, slowing river discharge and flooding unprotected esteros.
  - **Automated Sluice Tidal Gates**: Mayors can automate gates to close during high tide to stop ocean backflow.
- **Active MMDA High-Volume Pumps**: Pumping hubs actively lift floodwaters over dikes directly into outfall channels ($0.32\text{m/s}$ pumping power).

### ✅ 4. Adaptive Weather Engine & Live Doppler Radar
- **15-Day PAGASA Typhoon Progression**:
  1. **Days 1–4 (Amihan Dry Prep)**: Clear skies, calm winds (12–15 km/h), low tides—ideal for unhurried planning and construction.
  2. **Days 5–8 (Habagat Showers & Signal #1)**: Overcast skies, drifting 3D cloud shadows, intermittent rain squalls, and rising river baseline.
  3. **Days 9–13 (Typhoon Landfall & Signal #4 Deluge)**: Violent tempest indigo skies, howling gales (90–160 km/h) visibly bending trees, directional slanted rain, thunder booms, and **realistic lightning screen flashes**!
  4. **Days 14–15 (Relief & Recovery)**: Skies clear, floodwaters recede into the bay, and national calamity grants are awarded.
- **Interactive Live PAGASA Doppler Weather Radar**:
  - A real-time circular HUD radar displaying the rotating cyclone spiral bands with radar reflectivity (green $\to$ yellow $\to$ red core) approaching the metropolitan basin.
- **Wind & Tide Telemetry**: Live wind speed (km/h) and coastal tide gauges.

### ✅ 5. Mayoral DRRM Construction Arsenal & Strategic Edicts
- **Infrastructure & Nature-Based Solutions**:
  - `Sierra Forest` (₱250k): Upland tree sponge absorbing mountain rainwater.
  - `Mangrove Belt` (₱350k): Coastal wave breaker against storm surges.
  - `Sponge Basin` (₱900k): Urban retention basin drinking $0.45\text{m/s}$ runoff.
  - `Flood Canal` (₱400k): Concrete drainage trench for high-speed water conveyance.
  - `Concrete Dike` (₱750k): Floodwall levee with hazard stripes.
  - `MMDA Pump Hub` (₱1.8M): Active mechanical pump station.
  - `Evac Shelter` (₱600k): Designated school gym shelter (2,000 evacuee capacity).
  - `Elevated Road` (₱120k) & `Demolish` (₱50k).
- **Strategic Operations & Edicts**:
  - **Preemptive Evacuation** (₱350k, cuts flood casualty penalty by 80%).
  - **Oplan Linis Estero Dredging** (₱500k, doubles canal flow speed).
  - **Automate Coastal Tidal Gates** (auto-closes sluice gates during high tide surge).
  - **DSWD Relief Food & Medical Packs** (₱400k, bolsters happiness by +20%).

### ✅ 6. Civic Economy, Pacing & Game Balance
- **Manual Turn Planning by Default**: The mayor has unlimited time each day to inspect and build. Days advance only when you click `[End Day ➔ Day X]`. An optional `[Auto (28s)]` mode is also available.
- **Highway Gridlock & Tax Collapse**: If >35% of roads are submerged, commuter vehicles stall, commercial tax revenue collapses to ₱0, and emergency sirens sound.
- **Concrete Trap Factor**: Commercial skyscrapers increase impermeable runoff (+18% to +50%), punishing reckless overdevelopment without sponge retention basins.
- **Citizen Satisfaction & Impeachment**: Citizens voice concerns on a live social feed (`@MalandayRider`, `@MarikinaResident`, etc.). Defeat occurs if satisfaction reaches 0%.
- **Endless Escalation**: Surviving a 15-day season awards a ₱8.0M Calamity Fund grant and advances to the next typhoon with escalated rainfall severity (*Aghon $\to$ Butchoy $\to$ Carina $\to$ Dindo...*).

---

## 🔮 Upcoming Roadmap (Why It's Not Yet Done)

The following systems are currently planned or in development:

- [ ] **Power Grid & Substation Resilience**: Submerged electrical substations causing blackouts in flooded sectors, temporarily disabling MMDA pumping stations.
- [ ] **Evacuation Route Logistics**: Animated evacuee sprites walking and barangay disaster shuttles picking up families to transport them to school shelters.
- [ ] **Regional Philippine Map Presets**:
  - *Marikina Valley Scenario*: Severe river canyon overtopping and Manggahan Floodway spillway diversion.
  - *CAMANAVA (Navotas-Malabon) Scenario*: Low-elevation tidal basin requiring heavy seawall and polder dike networks.
  - *Cagayan de Oro Flash Flood Basin*: Steep mountain slopes requiring rapid reforestation and retention dams.
- [ ] **Custom Scenario & Disaster Sandbox Editor**: Ability to draw custom elevations, rivers, and test extreme rainfall events.
- [ ] **NDRRMC Post-Disaster Damage Audit Report**: End-of-season breakdown detailing economic damages prevented, lives sheltered, and floodway efficiency.

---

## 🚀 How to Run & Play

### Option 1: Direct Browser Launch (Zero Dependencies)
Because **BahaSim 2.5D** is engineered as a completely self-contained single file, you do not need to install Node.js, databases, or build tools to play:
1. Clone or download this repository.
2. Double-click `index.html` to open it in **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Safari**.
3. Accept the Mayoral Mandate in the disaster briefing modal and begin planning!

### Option 2: Local HTTP Server
If you prefer running via a local web server:
```bash
# Clone the repository
git clone https://github.com/markwlsn/Bahasim-2.5D-Game-Sim-.git
cd Bahasim-2.5D-Game-Sim-

# Start the lightweight Node.js server
node serve.cjs
```
Then navigate to `http://localhost:8080` in your web browser.

---

## 🎮 Controls & Gameplay Tips

| Action | Control |
| :--- | :--- |
| **Pan Camera** | Click + Drag (Mouse) / Touch + Drag (Mobile) |
| **Zoom In / Out** | Mouse Wheel / On-screen `[+]` `[-]` buttons / Pinch-to-zoom |
| **Focus Bookmarks** | Click `[🏔️ Up]` (Watershed), `[🏙️ Mid]` (CBD), or `[🌊 Bay]` (Coast) |
| **Advance Day** | Click the green **`[End Day ➔ Day X]`** button in the top bar |
| **Toggle Auto Mode** | Click **`[⏱️ Mode: Manual / Auto]`** to toggle timer progression |
| **Inspect / Build** | Select any tool on the bottom dock, then click any grid parcel |
| **Toggle Doppler Radar** | Click **`[📡 Radar]`** in the top navigation bar |
| **Pause Simulation** | Click **`[⏸️ Pause]`** to freeze time and inspect freely |

---

## 🛠️ Architecture & Tech Stack

- **Rendering Engine**: Pure HTML5 Canvas 2D with custom 2.5D isometric projection math, depth sorting, and volumetric prism rasterization.
- **Styling**: Tailwind CSS via official CDN with custom glassmorphism and mobile-responsive layouts.
- **Audio**: Web Audio API with 100% procedural sound synthesis (synthesized white-noise rain with lowpass filters, low-frequency thunder, siren oscillators, and fanfares). **Zero external audio files**.
- **Hydraulics**: Real-time shallow-water cellular automaton tracking hydraulic surface heads, Manning roughness, and tidal levels.
- **No Bundlers / Zero Bloat**: No Webpack, Vite, or npm dependencies required to run the game.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details. Built with pride for Philippine disaster risk reduction and climate resilience education. 🇵🇭
