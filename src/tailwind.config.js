/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← covers everything in src/
    // Add more if needed, e.g.:
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can move some @theme variables here if you prefer JS config
      // borderRadius: { DEFAULT: 'var(--radius)' },
    },
  },
  plugins: [],
};