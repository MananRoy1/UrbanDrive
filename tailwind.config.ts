import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fea90b",
        "background-light": "#f8f7f5",
        "background-dark": "#231c0f",
        "text-main": "#3A3A3A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
