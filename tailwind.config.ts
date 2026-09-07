import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        "surface-subtle": "#141414",
        "border-subtle": "#222222",
        "border-glow": "#333333",
        accent: {
          DEFAULT: "#0066FF",
          hover: "#1A75FF",
          light: "#3385FF",
          dim: "rgba(0, 102, 255, 0.12)",
          glow: "rgba(0, 102, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.025em",
      },
      boxShadow: {
        "accent-glow": "0 0 25px -4px rgba(0, 102, 255, 0.4)",
        "accent-glow-lg": "0 0 45px -8px rgba(0, 102, 255, 0.5)",
        "blue-500\/20": "0 4px 14px 0 rgba(59, 130, 246, 0.2)",
        "blue-500\/10": "0 2px 8px 0 rgba(59, 130, 246, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
