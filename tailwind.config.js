/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Professional Blue
        dark: "#0f172a",    // Deep Slate
      },
    },
  },
  plugins: [],
};
