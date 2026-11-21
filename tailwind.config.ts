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
            300: "#d9dbe1",
            400: "#9ea2ad",
            500: "#58655d",
            600: "#3a4841",
            700: "#2c2e35",
            800: "#18191d",
            900: "#141518",
            950: "#111214"
          },
          // Legacy purple/blue utility names are remapped onto the Graphite & Tangerine palette
          purple: { 200: "#f6e0a8", 300: "#ffb07a", 400: "#ff8a3d", 500: "#ff8a3d", 600: "#e8701f", 700: "#966e1e" },
          violet: { 200: "#f6e0a8", 300: "#ffb07a", 400: "#ff8a3d", 500: "#ff8a3d", 600: "#e8701f", 700: "#966e1e" },
          indigo: { 300: "#ffb07a", 400: "#ff8a3d", 500: "#ff8a3d", 600: "#e8701f" },
          blue: { 300: "#8ae6fa", 400: "#38d5f5", 500: "#38d5f5", 600: "#60aa98" },
          sky: { 200: "#c8e8de", 300: "#8ae6fa", 400: "#38d5f5", 500: "#38d5f5" },
          cyan: { 300: "#8ae6fa", 400: "#38d5f5", 500: "#38d5f5" },
          emerald: { 300: "#96d6b4", 400: "#5cf2a6", 500: "#5cf2a6" },
          ember: { DEFAULT: "#ff8a3d", soft: "#ffb07a", deep: "#e8701f" },
          brass: { DEFAULT: "#38d5f5", soft: "#8ae6fa" },
          sage: { DEFAULT: "#5cf2a6" },
          brand: {
            background: "#111214",
            surface: "#18191d",
            secondary: "#141518",
            border: "#2c2e35",
            text: "#ffffff",
            muted: "#9ea2ad",
            purple: "#ff8a3d",
            violet: "#ffb07a",
            blue: "#38d5f5",
            cyan: "#8ae6fa",
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
