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
        // --- Text & Accent Colors ---
        'light-text-primary': '#111827',
        'light-text-secondary': '#374151',
        'dark-text-primary': '#f8fafc',
        'dark-text-secondary': '#94a3b8',
        'accent': '#1520a6',
        
        // --- NEW: Colors for the Glass Effect ---
        'glass-light': 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
        'glass-dark': 'rgba(15, 23, 42, 0.6)',   // Semi-transparent deep slate
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      // --- NEW: Enabling the blur effect ---
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};