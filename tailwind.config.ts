import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
        colors: {
          bg: "hsl(var(--bg))",
          fg: "hsl(var(--fg))",
          muted: "hsl(var(--muted))",
          border: "hsl(var(--border))",
          card: "hsl(var(--card))",
          ring: "hsl(var(--ring))",
          white: "#f0f4ee",
          slate: {
            100: "#e9eee6",
            200: "#d6ded7",
            300: "#a3b0a6",
            400: "#7a8a80",
            500: "#58655d",
            600: "#3a4841",
            700: "#24312b",
            800: "#121a17",
            900: "#0f1613",
            950: "#0c1210"
          },
          // Legacy purple/blue utility names are remapped onto the Forest & Kente Gold palette
          purple: { 200: "#f6e0a8", 300: "#f2ce7f", 400: "#e8b54a", 500: "#e8b54a", 600: "#c9962e", 700: "#966e1e" },
          violet: { 200: "#f6e0a8", 300: "#f2ce7f", 400: "#e8b54a", 500: "#e8b54a", 600: "#c9962e", 700: "#966e1e" },
          indigo: { 300: "#f2ce7f", 400: "#e8b54a", 500: "#e8b54a", 600: "#c9962e" },
          blue: { 300: "#a0d6c7", 400: "#7dc4b2", 500: "#7dc4b2", 600: "#60aa98" },
          sky: { 200: "#c8e8de", 300: "#a0d6c7", 400: "#7dc4b2", 500: "#7dc4b2" },
          cyan: { 300: "#a0d6c7", 400: "#7dc4b2", 500: "#7dc4b2" },
          emerald: { 300: "#96d6b4", 400: "#74c69d", 500: "#74c69d" },
          ember: { DEFAULT: "#e8b54a", soft: "#f2ce7f", deep: "#c9962e" },
          brass: { DEFAULT: "#7dc4b2", soft: "#a0d6c7" },
          sage: { DEFAULT: "#74c69d" },
          brand: {
            background: "#0c1210",
            surface: "#121a17",
            secondary: "#0f1613",
            border: "#24312b",
            text: "#e9eee6",
            muted: "#7a8a80",
            purple: "#e8b54a",
            violet: "#f2ce7f",
            blue: "#7dc4b2",
            cyan: "#a0d6c7",
            success: "#74c69d"
          },
        accent: {
          1: "hsl(var(--accent-1))",
          2: "hsl(var(--accent-2))",
          3: "hsl(var(--accent-3))",
          4: "hsl(var(--accent-4))",
          5: "hsl(var(--accent-5))",
          6: "hsl(var(--accent-6))"
        }
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--border)), 0 10px 30px -12px rgba(0,0,0,.35)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 10s ease infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
