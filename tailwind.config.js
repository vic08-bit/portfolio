// file: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#ffffff',
        'light-card': '#f3f4f6',
        'light-text-primary': '#111827',
        'light-text-secondary': '#374151',
        'dark-bg': '#050505', 
        'dark-card': '#0a0a0a',
        'dark-text-primary': '#ededed',
        'dark-text-secondary': '#a1a1aa',
        'accent': '#2563eb', // The unified Blue for your name
      },
      // Animations removed as requested
    },
  },
  plugins: [],
};