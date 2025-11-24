/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    primary: "#111827",        // Deep gray for headings
    secondary: "#374151",      // Softer gray for subtext
    accent: "#6366f1",         // Indigo/blue accent
    lightbg: "#f9fafb",        // Light gray backgrounds
    card: "#ffffff",           // White card background
    },
  },
  plugins: [],
};