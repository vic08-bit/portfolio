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
        // --- Light Theme ---
        'light-bg': '#ffffff',         // Crisp white for main sections
        'light-bg-alt': '#f3f4f6',     // A noticeable light gray for alternate sections
        'light-text-primary': '#111827', // Strong charcoal for headings
        'light-text-secondary': '#374151', // Readable gray for body text
        'light-card': '#ffffff',
        'light-border': '#e5e7eb',

        // --- Dark Theme ---
        'dark-bg': '#0f172a',          // Deep Slate for main sections
        'dark-bg-alt': '#1e293b',      // Lighter, noticeable slate for alternate sections
        'dark-text-primary': '#f8fafc',   // Bright off-white for headings
        'dark-text-secondary': '#94a3b8',// Cool slate gray for body text
        'dark-card': '#1e293b',
        'dark-border': '#334155',

        // --- Accent Color ---
        'accent': '#1520a6',            // Your new professional blue
        'accent-hover': '#11187a',       // A darker shade for hover
      },
    },
  },
  plugins: [],
};