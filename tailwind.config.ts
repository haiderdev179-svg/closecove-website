import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.375rem" }],  // 14px (was 12px)
        sm: ["1rem", { lineHeight: "1.5rem" }],         // 16px (was 14px)
        base: ["1.125rem", { lineHeight: "1.75rem" }],  // 18px (was 16px)
      },
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        "surface-subtle": "#141414",
        "border-subtle": "#222222",
        "border-glow": "#333333",
        accent: {
          DEFAULT: "#F26A21",
          hover: "#FF7A33",
          light: "#FF8F52",
          dim: "rgba(242, 106, 33, 0.12)",
          glow: "rgba(242, 106, 33, 0.35)",
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
        "accent-glow": "0 0 25px -4px rgba(242, 106, 33, 0.4)",
        "accent-glow-lg": "0 0 45px -8px rgba(242, 106, 33, 0.5)",
        "blue-500\/20": "0 4px 14px 0 rgba(242, 106, 33, 0.2)",
        "blue-500\/10": "0 2px 8px 0 rgba(242, 106, 33, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;