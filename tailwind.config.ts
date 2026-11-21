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
          white: "#f7f9f5",
          slate: {
            100: "#f3f6f1",
            200: "#d6ded7",
            300: "#bac6bd",
            400: "#84958a",
            500: "#58655d",
            600: "#3a4841",
            700: "#223029",
            800: "#0f1814",
            900: "#0c1410",
            950: "#090f0c"
          },
          // Legacy purple/blue utility names are remapped onto the Forest & Kente Gold palette
          purple: { 200: "#f6e0a8", 300: "#f8cf74", 400: "#f5b83d", 500: "#f5b83d", 600: "#d69b28", 700: "#966e1e" },
          violet: { 200: "#f6e0a8", 300: "#f8cf74", 400: "#f5b83d", 500: "#f5b83d", 600: "#d69b28", 700: "#966e1e" },
          indigo: { 300: "#f8cf74", 400: "#f5b83d", 500: "#f5b83d", 600: "#d69b28" },
          blue: { 300: "#96e0cd", 400: "#6fd1b8", 500: "#6fd1b8", 600: "#60aa98" },
          sky: { 200: "#c8e8de", 300: "#96e0cd", 400: "#6fd1b8", 500: "#6fd1b8" },
          cyan: { 300: "#96e0cd", 400: "#6fd1b8", 500: "#6fd1b8" },
          emerald: { 300: "#96d6b4", 400: "#5fd197", 500: "#5fd197" },
          ember: { DEFAULT: "#f5b83d", soft: "#f8cf74", deep: "#d69b28" },
          brass: { DEFAULT: "#6fd1b8", soft: "#96e0cd" },
          sage: { DEFAULT: "#5fd197" },
          brand: {
            background: "#090f0c",
            surface: "#0f1814",
            secondary: "#0c1410",
            border: "#223029",
            text: "#f3f6f1",
            muted: "#84958a",
            purple: "#f5b83d",
            violet: "#f8cf74",
            blue: "#6fd1b8",
            cyan: "#96e0cd",
            success: "#5fd197"
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
