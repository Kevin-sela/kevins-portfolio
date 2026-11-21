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
          white: "#F7F3EC",
          slate: {
            100: "#F1ECE2",
            200: "#E4DDD0",
            300: "#B5AC9C",
            400: "#847B6D",
            500: "#6A6255",
            600: "#4A443B",
            700: "#2B2722",
            800: "#171512",
            900: "#12110E",
            950: "#0E0D0B"
          },
          // Legacy purple/blue utility names are remapped onto the Ink & Ember palette
          purple: { 200: "#F9C3A3", 300: "#F5925F", 400: "#EF6A3A", 500: "#EF6A3A", 600: "#D4521F", 700: "#A63E16" },
          violet: { 200: "#F9C3A3", 300: "#F5925F", 400: "#EF6A3A", 500: "#EF6A3A", 600: "#D4521F", 700: "#A63E16" },
          indigo: { 300: "#F5925F", 400: "#EF6A3A", 500: "#EF6A3A", 600: "#D4521F" },
          blue: { 300: "#E7C27A", 400: "#D9A84E", 500: "#D9A84E", 600: "#B88A35" },
          sky: { 200: "#F0DDB4", 300: "#E7C27A", 400: "#D9A84E", 500: "#D9A84E" },
          cyan: { 300: "#E7C27A", 400: "#D9A84E", 500: "#D9A84E" },
          emerald: { 300: "#A9C99A", 400: "#8DB37B", 500: "#8DB37B" },
          ember: { DEFAULT: "#EF6A3A", soft: "#F5925F", deep: "#D4521F" },
          brass: { DEFAULT: "#D9A84E", soft: "#E7C27A" },
          sage: { DEFAULT: "#8DB37B" },
          brand: {
            background: "#0E0D0B",
            surface: "#171512",
            secondary: "#12110E",
            border: "#2B2722",
            text: "#F1ECE2",
            muted: "#847B6D",
            purple: "#EF6A3A",
            violet: "#F5925F",
            blue: "#D9A84E",
            cyan: "#E7C27A",
            success: "#8DB37B"
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
