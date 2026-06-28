export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  port: number;
  url: string;
  github: string;
  year: string;
  features: string[];
  category: 'arcade' | 'tools' | 'opensource';
}

export interface OSSProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  stars: number;
}

export const OSS_PROJECTS: OSSProject[] = [
  { id: 1, title: '@lucii/hooks', description: '22 production-ready React hooks — localStorage, debounce, media query, fetch, and more. Fully typed, tree-shakeable, zero dependencies.', tags: ['React', 'TypeScript', 'Hooks'], github: 'https://github.com/DakshSinghDhami/hooks', stars: 0 },
  { id: 2, title: 'type-fns', description: '36 TypeScript utility types — DeepPartial, DeepPick, PathValues, CamelCase, IsNever, and more. For strict type safety.', tags: ['TypeScript', 'Types', 'Utilities'], github: 'https://github.com/DakshSinghDhami/type-fns', stars: 0 },
  { id: 3, title: 'css-breeze', description: 'Minimal CSS framework (~5KB). 12-column grid, dark palette, utilities, components. Like Tailwind but tiny.', tags: ['CSS', 'Framework', 'Dark Theme'], github: 'https://github.com/DakshSinghDhami/css-breeze', stars: 0 },
  { id: 4, title: 'pico-fetch', description: 'Tiny fetch wrapper (~1KB gzip). Interceptors, retry with backoff, timeout, cancellation. TypeScript generics.', tags: ['HTTP', 'TypeScript', 'Lightweight'], github: 'https://github.com/DakshSinghDhami/pico-fetch', stars: 0 },
  { id: 5, title: 'color-to', description: 'Color manipulation library (~1KB). Parse, convert, lighten, darken, contrast ratios. Hex/RGB/HSL/HSV/HWB/CMYK.', tags: ['Color', 'Utility', 'TypeScript'], github: 'https://github.com/DakshSinghDhami/color-to', stars: 0 },
  { id: 6, title: 'react-form-zen', description: 'Lightweight form validation with Zod integration. Nested fields, dirty/touched states, custom validators.', tags: ['React', 'Forms', 'Zod'], github: 'https://github.com/DakshSinghDhami/react-form-zen', stars: 0 },
  { id: 7, title: 'clsx-extra', description: 'Enhanced clsx with variant resolution. `cx("btn", { variant: "primary" })` → "btn btn-primary". Tailwind-friendly.', tags: ['CSS', 'Utility', 'TypeScript'], github: 'https://github.com/DakshSinghDhami/clsx-extra', stars: 0 },
  { id: 8, title: 'serve-dir', description: 'HTTP directory server CLI. One command: `npx serve-dir .` Auto-open, HTTPS, live reload, directory listing UI.', tags: ['CLI', 'Node.js', 'Server'], github: 'https://github.com/DakshSinghDhami/serve-dir', stars: 0 },
  { id: 9, title: 'react-scroll-anim', description: 'Scroll-triggered animation library (<2KB). useReveal, Reveal component, useParallax, useCountUp. IntersectionObserver-based.', tags: ['React', 'Animation', 'Scroll'], github: 'https://github.com/DakshSinghDhami/react-scroll-anim', stars: 0 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'galaxy',
    title: 'Particle Universe',
    description: 'Interactive 3D galaxy and particle explorer with real-time WebGL rendering, customizable parameters, and immersive space visualization. A creative web-based tool built with Three.js.',
    tags: ['Three.js', 'WebGL', 'GLSL'],
    port: 3401,
    url: 'https://galaxy.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/particle-universe',
    year: '2026',
    features: ['5 particle presets', 'Mouse interactive', 'Customizable parameters', 'Real-time performance'],
    category: 'tools',
  },
  {
    id: 2,
    slug: 'waveform',
    title: 'Waveform',
    description: 'Real-time spectral audio visualizer that transforms sound into stunning 3D waveform animations. An interactive web-based creative tool for music visualization built with Three.js and Web Audio API.',
    tags: ['Three.js', 'Web Audio API', 'GLSL'],
    port: 3402,
    url: 'https://waveform.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/waveform',
    year: '2026',
    features: ['Real-time audio analysis', 'Multiple visualization modes', 'Audio file upload', 'Responsive design'],
    category: 'tools',
  },
  {
    id: 3,
    slug: 'pixel-studio',
    title: 'Pixel Studio',
    description: 'Browser-based interactive pixel art editor with layers, animation frames, and export capabilities. A creative web-based tool for digital art and sprite creation.',
    tags: ['Canvas API', 'React', 'TypeScript'],
    port: 3403,
    url: 'https://pixel.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/pixel-studio',
    year: '2026',
    features: ['Layer support', 'Animation timeline', 'Export to PNG/GIF', 'Color palettes'],
    category: 'tools',
  },
  {
    id: 4,
    slug: 'codesnap',
    title: 'CodeSnap',
    description: 'Beautiful interactive code snippet sharing tool with syntax highlighting, customizable themes, and image export. A web-based creative tool for developers.',
    tags: ['React', 'Prism.js', 'TypeScript'],
    port: 3404,
    url: 'https://codesnap.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/codesnap',
    year: '2026',
    features: ['Syntax highlighting', 'Custom themes', 'Export as image', 'Shareable links'],
    category: 'tools',
  },
  {
    id: 5,
    slug: 'gitviz',
    title: 'GitViz',
    description: 'Interactive Git branch visualization tool for understanding complex repository histories. A web-based 3D visualization and creative data tool for developers.',
    tags: ['D3.js', 'React', 'TypeScript'],
    port: 3405,
    url: 'https://gitviz.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/gitviz',
    year: '2026',
    features: ['Branch tree visualization', 'Commit graph rendering', 'Repository import', 'Zoom & pan'],
    category: 'tools',
  },
  {
    id: 6,
    slug: 'orbit',
    title: 'Orbit',
    description: 'Interactive 3D solar system simulator with accurate orbital mechanics and planetary data. An immersive web-based educational tool built with Three.js.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    port: 3406,
    url: 'https://orbit.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/orbit',
    year: '2026',
    features: ['Accurate orbits', 'Planet information', 'Speed controls', 'Camera controls'],
    category: 'arcade',
  },
  {
    id: 7,
    slug: 'fractal',
    title: 'Fractal Forge',
    description: 'Interactive real-time Mandelbrot and Julia set fractal explorer with deep zoom and custom color mapping. A creative web-based visualization tool built with WebGL and GLSL.',
    tags: ['WebGL', 'GLSL', 'Canvas API'],
    port: 3407,
    url: 'https://fractal.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/fractal-forge',
    year: '2026',
    features: ['Mandelbrot & Julia sets', 'Deep zoom', 'Custom color palettes', 'Screenshot capture'],
    category: 'tools',
  },
  {
    id: 8,
    slug: 'typerush',
    title: 'TypeRush',
    description: 'Minimal interactive typing speed test with live WPM tracking, accuracy stats, and race mode. A web-based game for improving typing skills.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    port: 3408,
    url: 'https://typerush.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/typerush',
    year: '2026',
    features: ['Live WPM tracking', 'Accuracy statistics', 'Multiple word sets', 'Race mode'],
    category: 'arcade',
  },
  {
    id: 9,
    slug: 'weather',
    title: 'Weather Diorama',
    description: 'Interactive 3D weather visualization that reflects real-time conditions with atmospheric effects and day/night cycles. A creative web-based tool built with Three.js.',
    tags: ['Three.js', 'WebGL', 'OpenWeather API'],
    port: 3409,
    url: 'https://weather.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/weather-diorama',
    year: '2026',
    features: ['Real-time weather', '3D atmosphere', 'Day/night cycle', 'Location search'],
    category: 'tools',
  },
  {
    id: 10,
    slug: 'gradient',
    title: 'Gradient Lab',
    description: 'Advanced interactive CSS gradient generator with real-time preview, multi-stop gradients, and CSS code export. A creative web-based tool for designers and developers.',
    tags: ['React', 'Canvas API', 'TypeScript'],
    port: 3410,
    url: 'https://gradient.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/gradient-lab',
    year: '2026',
    features: ['Multi-stop gradients', 'Real-time preview', 'CSS export', 'Color picker'],
    category: 'tools',
  },
  {
    id: 11,
    slug: 'neural',
    title: 'Neural Sketch',
    description: 'Interactive 3D neural network visualization that demonstrates how AI models learn and process data. An immersive web-based educational tool built with Three.js.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    port: 3411,
    url: 'https://neural.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/neural-sketch',
    year: '2026',
    features: ['Network visualization', 'Training animation', 'Layer inspection', 'Interactive weights'],
    category: 'tools',
  },
  {
    id: 12,
    slug: 'graphite',
    title: 'Graphite',
    description: 'Modern interactive note-taking app with markdown support, graph view, and real-time collaboration. A web-based creative tool for knowledge management.',
    tags: ['React', 'TypeScript', 'Socket.io'],
    port: 3412,
    url: 'https://graphite.lucii.xyz',
    github: 'https://github.com/DakshSinghDhami/graphite',
    year: '2026',
    features: ['Markdown editing', 'Graph view', 'Real-time collaboration', 'Tag organization'],
    category: 'tools',
  },
];

export const NEW_PROJECTS: Project[] = [
  { id: 13, slug: 'breathscape', title: 'Breathscape', description: 'Interactive guided breathing exercise with live particle feedback and 4-7-8 pattern. A web-based wellness creative tool for mindfulness.', tags: ['Canvas2D', 'Wellness', 'Audio'], port: 3420, url: 'https://breathscape.lucii.xyz', github: 'https://github.com/DakshSinghDhami/breathscape', year: '2026', features: ['4-7-8 breathing pattern', 'Particle feedback', 'Session timer', 'Calming audio cues'], category: 'tools' },
  { id: 14, slug: 'flow-state', title: 'Flow State', description: 'Interactive Pomodoro timer that grows a forest with each session. A web-based productivity creative tool with gamification.', tags: ['Canvas2D', 'Productivity', 'Gamification'], port: 3421, url: 'https://flowstate.lucii.xyz', github: 'https://github.com/DakshSinghDhami/flow-state', year: '2026', features: ['Pomodoro timer', 'Forest growth system', 'Session statistics', 'Customizable intervals'], category: 'tools' },
  { id: 15, slug: 'mood-board', title: 'Mood Board', description: 'Interactive drag & drop creative board with sticky notes, colors, and images. A web-based visual creative tool for brainstorming.', tags: ['Canvas2D', 'Creative', 'DragDrop'], port: 3422, url: 'https://moodboard.lucii.xyz', github: 'https://github.com/DakshSinghDhami/mood-board', year: '2026', features: ['Drag & drop canvas', 'Sticky notes', 'Image uploads', 'Color swatches'], category: 'tools' },
  { id: 16, slug: 'typing-arena', title: 'Typing Arena', description: 'Interactive typing game where words fall from the sky — type them before they hit! A web-based arcade game for fast fingers.', tags: ['Canvas2D', 'Game', 'Typing'], port: 3423, url: 'https://typingarena.lucii.xyz', github: 'https://github.com/DakshSinghDhami/typing-arena', year: '2026', features: ['Falling words', 'Speed scoring', 'Difficulty levels', 'Combo system'], category: 'arcade' },
  { id: 17, slug: 'color-memory', title: 'Color Memory', description: 'Interactive color matching memory game — flip cards to find matching colors. A web-based brain training arcade game.', tags: ['Canvas2D', 'Game', 'Memory'], port: 3424, url: 'https://colormemory.lucii.xyz', github: 'https://github.com/DakshSinghDhami/color-memory', year: '2026', features: ['Card matching', 'Color recognition', 'Timer mode', 'Score tracking'], category: 'arcade' },
  { id: 18, slug: 'reaction-time', title: 'Reaction Time', description: 'Interactive reflex testing game — click when the screen changes. A web-based arcade game to measure your reaction speed.', tags: ['Canvas2D', 'Game', 'Reflex'], port: 3425, url: 'https://reactiontime.lucii.xyz', github: 'https://github.com/DakshSinghDhami/reaction-time', year: '2026', features: ['Reflex testing', 'Instant feedback', 'History tracking', 'Global leaderboard'], category: 'arcade' },
  { id: 19, slug: 'dots-boxes', title: 'Dots & Boxes', description: 'Classic pencil-and-paper game reimagined as an interactive web arcade game. Play against AI or a friend with multiple board sizes.', tags: ['Canvas2D', 'Game', 'AI'], port: 3426, url: 'https://dotsboxes.lucii.xyz', github: 'https://github.com/DakshSinghDhami/dots-boxes', year: '2026', features: ['AI opponent', 'Local multiplayer', 'Score tracking', 'Multiple board sizes'], category: 'arcade' },
  { id: 20, slug: 'color-harmony', title: 'Color Harmony', description: 'Interactive color learning tool — match target colors with RGB sliders. A web-based educational creative tool for mastering color theory.', tags: ['Canvas2D', 'Educational', 'Color'], port: 3427, url: 'https://colorharmony.lucii.xyz', github: 'https://github.com/DakshSinghDhami/color-harmony', year: '2026', features: ['RGB color matching', 'Progressive difficulty', 'Color theory tips', 'Score system'], category: 'tools' },
  { id: 21, slug: 'wave-painter', title: 'Wave Painter', description: 'Interactive wave drawing tool — draw strokes that become animated waves. A creative web-based art tool with mesmerizing animation.', tags: ['Canvas2D', 'Creative', 'Animation'], port: 3428, url: 'https://wavepainter.lucii.xyz', github: 'https://github.com/DakshSinghDhami/wave-painter', year: '2026', features: ['Wave brush strokes', 'Animation playback', 'Color palette', 'Export as GIF'], category: 'tools' },
  { id: 22, slug: 'gravity-switch', title: 'Gravity Switch', description: 'Interactive 2D platformer where you flip gravity to navigate endless procedurally generated levels. A web-based arcade game.', tags: ['Canvas2D', 'Game', 'Platformer'], port: 3429, url: 'https://gravityswitch.lucii.xyz', github: 'https://github.com/DakshSinghDhami/gravity-switch', year: '2026', features: ['Gravity flipping', 'Procedural levels', 'Score system', 'Death counter'], category: 'arcade' },
  { id: 23, slug: 'stack-builder', title: 'Stack Builder', description: 'Interactive precision stacking game — stack blocks as high as you can. A web-based arcade game with endless mode and combo system.', tags: ['Canvas2D', 'Game', 'Precision'], port: 3430, url: 'https://stackbuilder.lucii.xyz', github: 'https://github.com/DakshSinghDhami/stack-builder', year: '2026', features: ['Precision stacking', 'Perfect bonus', 'Combo system', 'Endless mode'], category: 'arcade' },
  { id: 24, slug: 'soundscape', title: 'Soundscape', description: 'Interactive ambient sound mixer — rain, ocean, forest, and more. A web-based creative tool for creating your perfect soundscape.', tags: ['Web Audio', 'Ambient', 'Creative'], port: 3431, url: 'https://soundscape.lucii.xyz', github: 'https://github.com/DakshSinghDhami/soundscape', year: '2026', features: ['Multi-layer mixing', 'Volume controls', 'Preset scenes', 'Session saving'], category: 'tools' },
  { id: 25, slug: 'daily-streak', title: 'Daily Streak', description: 'Interactive habit tracker with a visual garden that grows as you do. A web-based productivity creative tool with gamification.', tags: ['Canvas2D', 'Productivity', 'Gamification'], port: 3432, url: 'https://dailystreak.lucii.xyz', github: 'https://github.com/DakshSinghDhami/daily-streak', year: '2026', features: ['Habit tracking', 'Visual garden', 'Streak calendar', 'Daily reminders'], category: 'tools' },
  { id: 26, slug: 'reflect', title: 'Reflect', description: 'Interactive daily journal with auto-generated word clouds and mood tracking. A web-based creative tool for reflective writing.', tags: ['Canvas2D', 'Journal', 'Analytics'], port: 3433, url: 'https://reflect.lucii.xyz', github: 'https://github.com/DakshSinghDhami/reflect', year: '2026', features: ['Markdown journal', 'Word cloud generation', 'Mood tracking', 'Search & filter'], category: 'tools' },
  { id: 27, slug: 'pattern-play', title: 'Pattern Play', description: 'Interactive spirograph drawing tool for creating infinite geometric art. A creative web-based generative art tool with SVG export.', tags: ['Canvas2D', 'Creative', 'Generative'], port: 3434, url: 'https://patternplay.lucii.xyz', github: 'https://github.com/DakshSinghDhami/pattern-play', year: '2026', features: ['Spirograph engine', 'Custom parameters', 'Color cycling', 'Export as SVG'], category: 'tools' },
  { id: 28, slug: 'concentration', title: 'Concentration', description: 'Classic card matching memory game reimagined as an interactive web arcade game with timer and theme customization.', tags: ['Canvas2D', 'Game', 'Memory'], port: 3435, url: 'https://concentration.lucii.xyz', github: 'https://github.com/DakshSinghDhami/concentration', year: '2026', features: ['Card matching', 'Timer', 'Move counter', 'Theme customization'], category: 'arcade' },
  { id: 29, slug: 'word-flow', title: 'Word Flow', description: 'Interactive word association game — type related words to score points. A web-based arcade game for vocabulary and creativity.', tags: ['Canvas2D', 'Game', 'Word'], port: 3436, url: 'https://wordflow.lucii.xyz', github: 'https://github.com/DakshSinghDhami/word-flow', year: '2026', features: ['Word association', 'Timed rounds', 'Score multiplier', 'Dictionary API'], category: 'arcade' },
  { id: 30, slug: 'pulse', title: 'Pulse', description: 'Interactive heart rate estimation tool — tap to measure your BPM with real-time visualization. A web-based health creative tool.', tags: ['Canvas2D', 'Health', 'Visualization'], port: 3437, url: 'https://pulse.lucii.xyz', github: 'https://github.com/DakshSinghDhami/pulse', year: '2026', features: ['Heart rate estimation', 'BPM visualization', 'History tracking', 'Health tips'], category: 'tools' },
  { id: 31, slug: 'infinite-maze', title: 'Infinite Maze', description: 'Interactive endless maze navigation game with procedurally generated levels. A web-based arcade game that challenges your spatial memory.', tags: ['Canvas2D', 'Game', 'Maze'], port: 3438, url: 'https://infinitemaze.lucii.xyz', github: 'https://github.com/DakshSinghDhami/infinite-maze', year: '2026', features: ['Procedural generation', 'Infinite levels', 'Path tracing', 'Timer'], category: 'arcade' },
  { id: 32, slug: 'particles-playground', title: 'Particles Playground', description: 'Interactive particle physics sandbox with gravity, vortex, and force fields. A creative web-based simulation tool for endless experimentation.', tags: ['Canvas2D', 'Physics', 'Creative'], port: 3439, url: 'https://particles.lucii.xyz', github: 'https://github.com/DakshSinghDhami/particles-playground', year: '2026', features: ['Physics simulation', 'Force fields', 'Multiple brush types', 'Preset configurations'], category: 'tools' },
];

export const ALL_PROJECTS: Project[] = [...PROJECTS, ...NEW_PROJECTS];
