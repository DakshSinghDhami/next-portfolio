import type { Project } from "./data";

/**
 * Per-project guide data. The keys match the slugs in `data.ts`.
 * If a slug isn't in this map, `getProjectGuide` falls back to a
 * derived default built from the project itself.
 */
const GUIDES: Record<
  string,
  {
    detailedDescription: string;
    howToUse: string[];
    enrichedFeatures: string[];
  }
> = {
  galaxy: {
    detailedDescription:
      "An interactive 3D galaxy rendered in real time with thousands of GPU-driven particles. Tweak the parameters to control density, spin, and the shape of the arms.",
    howToUse: [
      "Drag to rotate the camera around the galaxy.",
      "Scroll to zoom in and out of the core.",
      "Use the panel to adjust particle count, spin, and color.",
    ],
    enrichedFeatures: [
      "Up to 10,000 particles on desktop",
      "Mouse-driven camera parallax",
      "Adjustable spiral arms and spin",
      "Real-time GLSL shader for soft glow",
    ],
  },
  waveform: {
    detailedDescription:
      "A real-time spectral audio visualizer. Drop a track in and watch the frequencies bloom into layered, generative animations.",
    howToUse: [
      "Click anywhere to enable the microphone.",
      "Or drop an audio file onto the canvas.",
      "Switch between visualization modes in the corner.",
    ],
    enrichedFeatures: [
      "FFT-based frequency analysis",
      "Multiple visualization modes",
      "Drop-file or microphone input",
      "Responsive to any aspect ratio",
    ],
  },
  "pixel-studio": {
    detailedDescription:
      "A focused pixel art editor that runs entirely in the browser. Layers, animation frames, and a tight color picker — nothing extra.",
    howToUse: [
      "Pick a color from the palette.",
      "Click and drag on the canvas to draw pixels.",
      "Use the timeline at the bottom to add animation frames.",
    ],
    enrichedFeatures: [
      "Multi-layer composition",
      "Animation timeline with frames",
      "Export to PNG and GIF",
      "Custom palette support",
    ],
  },
  codesnap: {
    detailedDescription:
      "Drop in a snippet, pick a theme, and ship a beautiful image of your code to social media. No design skills required.",
    howToUse: [
      "Paste a code snippet into the editor.",
      "Choose a syntax theme and background.",
      "Click export to save as PNG.",
    ],
    enrichedFeatures: [
      "Dozens of syntax themes",
      "Custom backgrounds and padding",
      "One-click PNG export",
      "Shareable permalinks",
    ],
  },
  gitviz: {
    detailedDescription:
      "An interactive visualization of Git history. Drop in a repo URL and watch your branches weave into a tree you can actually read.",
    howToUse: [
      "Paste a GitHub repository URL.",
      "Click any commit to inspect the diff.",
      "Drag to pan, scroll to zoom.",
    ],
    enrichedFeatures: [
      "Branch tree visualization",
      "Commit-by-commit navigation",
      "Inline diff viewer",
      "Smooth zoom and pan",
    ],
  },
  orbit: {
    detailedDescription:
      "A 3D solar system simulator with accurate orbital mechanics. Speed up time, focus on a planet, and learn the clockwork of the solar system.",
    howToUse: [
      "Drag to rotate, scroll to zoom.",
      "Use the time slider to speed up or slow down time.",
      "Click a planet to focus on it.",
    ],
    enrichedFeatures: [
      "Accurate Keplerian orbits",
      "Realistic planetary data",
      "Time-scale controls",
      "Click-to-focus camera",
    ],
  },
  fractal: {
    detailedDescription:
      "Dive into the Mandelbrot and Julia sets. Zoom in to discover new shapes, palette-map the depths, and save your favorites.",
    howToUse: [
      "Scroll to zoom, drag to pan.",
      "Switch between Mandelbrot and Julia in the panel.",
      "Adjust the iteration count for deeper detail.",
    ],
    enrichedFeatures: [
      "Mandelbrot and Julia sets",
      "Deep zoom with arbitrary precision",
      "Custom color palettes",
      "Screenshot capture",
    ],
  },
  typerush: {
    detailedDescription:
      "A minimal typing speed test. Real words, real-time WPM, and just enough pressure to make you want to do it again.",
    howToUse: [
      "Start typing as soon as the first word appears.",
      "Press space to commit a word.",
      "Race mode pits you against a friend locally.",
    ],
    enrichedFeatures: [
      "Live WPM and accuracy",
      "Multiple word sets",
      "Race mode for two players",
      "Minimal, focused UI",
    ],
  },
  weather: {
    detailedDescription:
      "A 3D weather visualization that mirrors real-time conditions for any city on Earth. Day-night cycle, atmosphere, the works.",
    howToUse: [
      "Search for a city in the input.",
      "Watch the diorama reflect live conditions.",
      "Toggle between metric and imperial units.",
    ],
    enrichedFeatures: [
      "Real-time OpenWeather data",
      "3D atmospheric effects",
      "Day-night cycle",
      "Global city search",
    ],
  },
  gradient: {
    detailedDescription:
      "A focused gradient generator with multi-stop control, real-time preview, and clean CSS output. Stop fighting gradient UIs that try to do too much.",
    howToUse: [
      "Click anywhere on the bar to add a stop.",
      "Drag stops to reposition them.",
      "Click a stop to pick its color.",
    ],
    enrichedFeatures: [
      "Multi-stop linear and radial",
      "Real-time CSS preview",
      "One-click copy",
      "Saved presets",
    ],
  },
  neural: {
    detailedDescription:
      "An interactive playground for understanding how neural networks learn. Watch weights shift, layers activate, and decisions form.",
    howToUse: [
      "Pick a dataset from the dropdown.",
      "Adjust the learning rate and epochs.",
      "Watch the loss curve and decision boundary evolve.",
    ],
    enrichedFeatures: [
      "Live training animation",
      "Decision boundary visualization",
      "Weight inspection",
      "Multiple toy datasets",
    ],
  },
  graphite: {
    detailedDescription:
      "A modern note-taking app with markdown, a graph view of your notes, and real-time collaboration. Built for thinking in connections.",
    howToUse: [
      "Create a new note with the + button.",
      "Use [[double brackets]] to link notes.",
      "Switch to graph view to see your network.",
    ],
    enrichedFeatures: [
      "Markdown-first editor",
      "Bidirectional links",
      "Graph view of all notes",
      "Real-time collaboration",
    ],
  },
  breathscape: {
    detailedDescription:
      "A guided breathing exercise with live particle feedback. The 4-7-8 pattern, animated in a way that actually calms you down.",
    howToUse: [
      "Click start to begin a session.",
      "Follow the expanding and contracting particles.",
      "Sessions last 2 minutes by default.",
    ],
    enrichedFeatures: [
      "4-7-8 breathing pattern",
      "Particle feedback synced to breath",
      "Session timer",
      "Calming ambient audio",
    ],
  },
  "flow-state": {
    detailedDescription:
      "A Pomodoro timer that grows a forest as you work. Each session plants a tree — miss a day, and the forest feels it.",
    howToUse: [
      "Pick a focus interval.",
      "Work until the timer ends.",
      "Come back tomorrow to keep your forest alive.",
    ],
    enrichedFeatures: [
      "Pomodoro timer",
      "Visual forest growth",
      "Streak tracking",
      "Customizable intervals",
    ],
  },
  "mood-board": {
    detailedDescription:
      "A drag-and-drop creative board for collecting ideas. Sticky notes, color swatches, images — arranged however your brain works.",
    howToUse: [
      "Drag the toolbar to add a note or image.",
      "Drag any item to reposition it.",
      "Right-click to delete or duplicate.",
    ],
    enrichedFeatures: [
      "Free-form drag and drop",
      "Sticky notes, images, swatches",
      "Persistent local storage",
      "Export to image",
    ],
  },
  "typing-arena": {
    detailedDescription:
      "Words fall from the sky. Type them before they hit the ground. A typing game that turns practice into a reflex.",
    howToUse: [
      "Type the falling words before they land.",
      "Press space to commit.",
      "Don't let the stack get too tall.",
    ],
    enrichedFeatures: [
      "Falling-word physics",
      "Combo multiplier",
      "Difficulty levels",
      "High-score tracking",
    ],
  },
  "color-memory": {
    detailedDescription:
      "Flip cards to match colors. It looks easy. It is not. Trains both memory and color recognition at the same time.",
    howToUse: [
      "Click any card to flip it.",
      "Find its matching pair.",
      "Clear the board in as few moves as possible.",
    ],
    enrichedFeatures: [
      "Card matching mechanic",
      "Color recognition training",
      "Timer mode",
      "Move counter and high scores",
    ],
  },
  "reaction-time": {
    detailedDescription:
      "A reflex test that measures how fast you can react to a color change. Spoiler: not as fast as you think.",
    howToUse: [
      "Wait for the screen to turn green.",
      "Click as fast as you can.",
      "Don't click too early — that's a foul.",
    ],
    enrichedFeatures: [
      "Millisecond-precision timing",
      "Best-of-5 averaging",
      "History tracking",
      "Global leaderboard",
    ],
  },
  "dots-boxes": {
    detailedDescription:
      "The classic pencil-and-paper game, in the browser. Play against an AI that doesn't feel bad about stealing your boxes.",
    howToUse: [
      "Click a line to draw it.",
      "Close a box to score a point.",
      "Chain captures to keep the turn.",
    ],
    enrichedFeatures: [
      "AI opponent with multiple difficulties",
      "Local 2-player mode",
      "Score tracking",
      "Multiple board sizes",
    ],
  },
  "color-harmony": {
    detailedDescription:
      "Match target colors using RGB sliders. A focused, tactile way to internalize how the three channels of color mix.",
    howToUse: [
      "Adjust the R, G, and B sliders.",
      "Match the target color as closely as possible.",
      "Score points for accuracy.",
    ],
    enrichedFeatures: [
      "RGB slider matching",
      "Progressive difficulty",
      "Color theory tips",
      "Score system",
    ],
  },
  "wave-painter": {
    detailedDescription:
      "Draw strokes that become animated waves. Press play, and your drawing dances to its own rhythm.",
    howToUse: [
      "Draw strokes on the canvas.",
      "Hit play to animate them as waves.",
      "Adjust amplitude, frequency, and color.",
    ],
    enrichedFeatures: [
      "Wave brush engine",
      "Animation playback",
      "Color palette",
      "Export to GIF",
    ],
  },
  "gravity-switch": {
    detailedDescription:
      "A 2D platformer where gravity is a verb. Flip it on the fly to navigate procedural levels that punish sloppy timing.",
    howToUse: [
      "Arrow keys or WASD to move.",
      "Press jump (or space) to flip gravity.",
      "Reach the green exit before the timer hits zero.",
    ],
    enrichedFeatures: [
      "Procedural level generation",
      "One-button gravity flip",
      "Speedrun timer",
      "Death counter",
    ],
  },
  "stack-builder": {
    detailedDescription:
      "Stack blocks as high as you can. Miss the alignment and your tower shaves down. Get a perfect and the block stays full size.",
    howToUse: [
      "Click or press space to drop the block.",
      "Time it for a perfect alignment.",
      "Chain perfects for combo points.",
    ],
    enrichedFeatures: [
      "Precision stacking",
      "Perfect bonus",
      "Combo system",
      "Endless mode",
    ],
  },
  soundscape: {
    detailedDescription:
      "A multi-layer ambient mixer. Rain, ocean, forest, fire — drag the sliders to compose the exact vibe you need.",
    howToUse: [
      "Adjust the slider for each layer.",
      "Layer multiple sounds for depth.",
      "Save your session as a preset.",
    ],
    enrichedFeatures: [
      "Multi-layer mixing",
      "Per-layer volume",
      "Preset scenes",
      "Session saving",
    ],
  },
  "daily-streak": {
    detailedDescription:
      "A habit tracker where your garden grows as you do. Skip a day and the garden shows it. Build the streak, build the flowers.",
    howToUse: [
      "Add a habit you want to track.",
      "Mark it done each day.",
      "Watch the garden grow with your streak.",
    ],
    enrichedFeatures: [
      "Habit tracking",
      "Visual garden",
      "Streak calendar",
      "Daily reminders",
    ],
  },
  reflect: {
    detailedDescription:
      "A daily journal with auto-generated word clouds from your writing. A small mirror that shows you what you've been thinking about.",
    howToUse: [
      "Write your entry in markdown.",
      "Tag your mood.",
      "Watch the word cloud update as you write.",
    ],
    enrichedFeatures: [
      "Markdown journal",
      "Word cloud generation",
      "Mood tracking",
      "Search and filter",
    ],
  },
  "pattern-play": {
    detailedDescription:
      "A spirograph drawing tool that turns geometry into generative art. Tweak the parameters and watch the math unfold.",
    howToUse: [
      "Adjust the inner and outer radius.",
      "Set the pen offset.",
      "Color-cycle the strokes.",
    ],
    enrichedFeatures: [
      "Spirograph engine",
      "Custom parameters",
      "Color cycling",
      "Export to SVG",
    ],
  },
  concentration: {
    detailedDescription:
      "The classic card-matching memory game, refined. Two decks of cards, your job is to remember where they are.",
    howToUse: [
      "Click any card to flip it.",
      "Find its matching pair.",
      "Clear the board in as few moves as possible.",
    ],
    enrichedFeatures: [
      "Card matching",
      "Move counter",
      "Timer",
      "Theme customization",
    ],
  },
  "word-flow": {
    detailedDescription:
      "A word-association game. Type words related to the prompt, score points for creativity, race the clock.",
    howToUse: [
      "Read the prompt.",
      "Type related words as fast as you can.",
      "Press enter to submit each word.",
    ],
    enrichedFeatures: [
      "Word association prompts",
      "Timed rounds",
      "Score multiplier",
      "Built-in dictionary",
    ],
  },
  pulse: {
    detailedDescription:
      "Measure your heart rate using your camera. Real-time BPM visualization backed by photoplethysmography-style signal analysis.",
    howToUse: [
      "Cover the rear camera with your fingertip.",
      "Stay still for 30 seconds.",
      "Read your estimated BPM.",
    ],
    enrichedFeatures: [
      "Camera-based heart rate estimation",
      "BPM visualization",
      "History tracking",
      "Health tips",
    ],
  },
  "infinite-maze": {
    detailedDescription:
      "An endless procedurally generated maze. Path-trace your route, race the timer, and try not to hit a dead end.",
    howToUse: [
      "Arrow keys or WASD to move.",
      "Reach the green exit.",
      "Beat your best time.",
    ],
    enrichedFeatures: [
      "Procedural generation",
      "Endless levels",
      "Path tracing",
      "Speedrun timer",
    ],
  },
  "particles-playground": {
    detailedDescription:
      "An interactive particle physics sandbox. Add gravity, vortexes, wind — see what your system can do.",
    howToUse: [
      "Click and drag to spawn particles.",
      "Use the panel to add force fields.",
      "Save your favorite configurations.",
    ],
    enrichedFeatures: [
      "Physics simulation",
      "Gravity, vortex, wind forces",
      "Multiple brush types",
      "Preset configurations",
    ],
  },
};

const DEFAULT_GUIDE = {
  detailedDescription:
    "A web-based interactive project built with modern web technologies. Open it, play with it, and dig into the source.",
  howToUse: [
    "Open the live demo.",
    "Use the controls to interact.",
    "Check the GitHub repo for source.",
  ],
  enrichedFeatures: [
    "Real-time interactivity",
    "Web-native performance",
    "Open source",
    "No build required to run",
  ],
};

export function getProjectGuide(slug: string) {
  return GUIDES[slug] ?? DEFAULT_GUIDE;
}

/**
 * Convenience helper to derive a tagline for a project.
 * Used by the dynamic project detail page header.
 */
export function projectTagline(project: Project): string {
  const guide = getProjectGuide(project.slug);
  return guide.detailedDescription;
}
