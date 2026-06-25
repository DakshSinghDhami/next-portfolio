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
    description: 'Interactive 3D galaxy and particle explorer with real-time WebGL rendering and customizable parameters.',
    tags: ['Three.js', 'WebGL', 'GLSL'],
    port: 3401,
    url: 'http://100.64.26.104:3401',
    github: 'https://github.com/DakshSinghDhami/particle-universe',
    year: '2026',
    features: ['5 particle presets', 'Mouse interactive', 'Customizable parameters', 'Real-time performance'],
  },
  {
    id: 2,
    slug: 'waveform',
    title: 'Waveform',
    description: 'Spectral audio visualizer that transforms sound into stunning real-time waveform animations.',
    tags: ['Three.js', 'Web Audio API', 'GLSL'],
    port: 3402,
    url: 'http://100.64.26.104:3402',
    github: 'https://github.com/DakshSinghDhami/waveform',
    year: '2026',
    features: ['Real-time audio analysis', 'Multiple visualization modes', 'Audio file upload', 'Responsive design'],
  },
  {
    id: 3,
    slug: 'pixel-studio',
    title: 'Pixel Studio',
    description: 'Browser-based pixel art editor with layers, animation frames, and export capabilities.',
    tags: ['Canvas API', 'React', 'TypeScript'],
    port: 3403,
    url: 'http://100.64.26.104:3403',
    github: 'https://github.com/DakshSinghDhami/pixel-studio',
    year: '2026',
    features: ['Layer support', 'Animation timeline', 'Export to PNG/GIF', 'Color palettes'],
  },
  {
    id: 4,
    slug: 'codesnap',
    title: 'CodeSnap',
    description: 'Beautiful code snippet sharing tool with syntax highlighting and customizable themes.',
    tags: ['React', 'Prism.js', 'TypeScript'],
    port: 3404,
    url: 'http://100.64.26.104:3404',
    github: 'https://github.com/DakshSinghDhami/codesnap',
    year: '2026',
    features: ['Syntax highlighting', 'Custom themes', 'Export as image', 'Shareable links'],
  },
  {
    id: 5,
    slug: 'gitviz',
    title: 'GitViz',
    description: 'Interactive Git branch visualization tool for understanding complex repository histories.',
    tags: ['D3.js', 'React', 'TypeScript'],
    port: 3405,
    url: 'http://100.64.26.104:3405',
    github: 'https://github.com/DakshSinghDhami/gitviz',
    year: '2026',
    features: ['Branch tree visualization', 'Commit graph rendering', 'Repository import', 'Zoom & pan'],
  },
  {
    id: 6,
    slug: 'orbit',
    title: 'Orbit',
    description: '3D solar system simulator with accurate orbital mechanics and planetary data.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    port: 3406,
    url: 'http://100.64.26.104:3406',
    github: 'https://github.com/DakshSinghDhami/orbit',
    year: '2026',
    features: ['Accurate orbits', 'Planet information', 'Speed controls', 'Camera controls'],
  },
  {
    id: 7,
    slug: 'fractal',
    title: 'Fractal Forge',
    description: 'Real-time Mandelbrot and Julia set explorer with deep zoom and color mapping.',
    tags: ['WebGL', 'GLSL', 'Canvas API'],
    port: 3407,
    url: 'http://100.64.26.104:3407',
    github: 'https://github.com/DakshSinghDhami/fractal-forge',
    year: '2026',
    features: ['Mandelbrot & Julia sets', 'Deep zoom', 'Custom color palettes', 'Screenshot capture'],
  },
  {
    id: 8,
    slug: 'typerush',
    title: 'TypeRush',
    description: 'Minimal typing speed test with live WPM tracking, accuracy stats, and race mode.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    port: 3408,
    url: 'http://100.64.26.104:3408',
    github: 'https://github.com/DakshSinghDhami/typerush',
    year: '2026',
    features: ['Live WPM tracking', 'Accuracy statistics', 'Multiple word sets', 'Race mode'],
  },
  {
    id: 9,
    slug: 'weather',
    title: 'Weather Diorama',
    description: '3D weather visualization that reflects real-time conditions with atmospheric effects.',
    tags: ['Three.js', 'WebGL', 'OpenWeather API'],
    port: 3409,
    url: 'http://100.64.26.104:3409',
    github: 'https://github.com/DakshSinghDhami/weather-diorama',
    year: '2026',
    features: ['Real-time weather', '3D atmosphere', 'Day/night cycle', 'Location search'],
  },
  {
    id: 10,
    slug: 'gradient',
    title: 'Gradient Lab',
    description: 'Advanced CSS gradient generator with real-time preview and export to CSS code.',
    tags: ['React', 'Canvas API', 'TypeScript'],
    port: 3410,
    url: 'http://100.64.26.104:3410',
    github: 'https://github.com/DakshSinghDhami/gradient-lab',
    year: '2026',
    features: ['Multi-stop gradients', 'Real-time preview', 'CSS export', 'Color picker'],
  },
  {
    id: 11,
    slug: 'neural',
    title: 'Neural Sketch',
    description: 'Interactive neural network visualization that demonstrates how AI models learn and process data.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    port: 3411,
    url: 'http://100.64.26.104:3411',
    github: 'https://github.com/DakshSinghDhami/neural-sketch',
    year: '2026',
    features: ['Network visualization', 'Training animation', 'Layer inspection', 'Interactive weights'],
  },
  {
    id: 12,
    slug: 'graphite',
    title: 'Graphite',
    description: 'Modern note-taking app with markdown support, graph view, and real-time collaboration.',
    tags: ['React', 'TypeScript', 'Socket.io'],
    port: 3412,
    url: 'http://100.64.26.104:3412',
    github: 'https://github.com/DakshSinghDhami/graphite',
    year: '2026',
    features: ['Markdown editing', 'Graph view', 'Real-time collaboration', 'Tag organization'],
  },
];
