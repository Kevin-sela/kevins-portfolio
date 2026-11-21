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
          white: "#ffffff",
          slate: {
            100: "#ffffff",
            200: "#d6ded7",
            300: "#d3e8de",
            400: "#9cc2b2",
            500: "#58655d",
            600: "#3a4841",
            700: "#1d5040",
            800: "#0a3024",
            900: "#082a20",
            950: "#06241b"
          },
          // Legacy purple/blue utility names are remapped onto the Forest & Kente Gold palette
          purple: { 200: "#f6e0a8", 300: "#ffdb7a", 400: "#ffc83d", 500: "#ffc83d", 600: "#f0ad1c", 700: "#966e1e" },
          violet: { 200: "#f6e0a8", 300: "#ffdb7a", 400: "#ffc83d", 500: "#ffc83d", 600: "#f0ad1c", 700: "#966e1e" },
          indigo: { 300: "#ffdb7a", 400: "#ffc83d", 500: "#ffc83d", 600: "#f0ad1c" },
          blue: { 300: "#8af0d2", 400: "#4fe3b8", 500: "#4fe3b8", 600: "#60aa98" },
          sky: { 200: "#c8e8de", 300: "#8af0d2", 400: "#4fe3b8", 500: "#4fe3b8" },
          cyan: { 300: "#8af0d2", 400: "#4fe3b8", 500: "#4fe3b8" },
          emerald: { 300: "#96d6b4", 400: "#5cf2a6", 500: "#5cf2a6" },
          ember: { DEFAULT: "#ffc83d", soft: "#ffdb7a", deep: "#f0ad1c" },
          brass: { DEFAULT: "#4fe3b8", soft: "#8af0d2" },
          sage: { DEFAULT: "#5cf2a6" },
          brand: {
            background: "#06241b",
            surface: "#0a3024",
            secondary: "#082a20",
            border: "#1d5040",
            text: "#ffffff",
            muted: "#9cc2b2",
            purple: "#ffc83d",
            violet: "#ffdb7a",
            blue: "#4fe3b8",
            cyan: "#8af0d2",
            success: "#5cf2a6"
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
