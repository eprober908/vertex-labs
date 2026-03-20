/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070e1b",
        surface: "#070e1b",
        "surface-dim": "#070e1b",
        "surface-container-low": "#0c1322",
        "surface-container-high": "#131b2c",
        "surface-container-highest": "#1c2639",
        "surface-container": "#11192a",
        "surface-bright": "#222c41",
        "surface-variant": "#1c2639",
        primary: "#8ff5ff",
        "primary-container": "#00eefc",
        "primary-dim": "#00deec",
        secondary: "#d674ff",
        tertiary: "#ac89ff",
        "tertiary-dim": "#874cff",
        "on-surface": "#e2e8fb",
        "on-surface-variant": "#a5abbd",
        outline: "#6f7586",
        "outline-variant": "#414857",
        "on-primary": "#005d63",
        "on-primary-container": "#005359",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        label: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        bevel: "inset 2px 2px 4px rgba(255,255,255,0.05), inset -2px -2px 4px rgba(0,0,0,0.5)",
      },
      backdropBlur: {
        glass: "20px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};
