/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand
        navy: '#1E2856',
        'navy-deep': '#161D40',
        'navy-light': '#2A356C',
        crimson: '#B12A33',
        'crimson-deep': '#8E1F26',
        // Surfaces
        cream: '#F7F4EE',
        bone: '#FAF7F0',
        ink: '#1F1B1A',
        // Greys
        'ink-soft': '#4A4744',
        'ink-mute': '#7A7672',
        rule: '#E6E1D7',
      },
      fontFamily: {
        // Display serif — Cormorant Garamond
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // UI sans — DM Sans
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Body & eyebrows — Lato (clean web font)
        mono: ['Lato', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        prose: '68ch',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
};
