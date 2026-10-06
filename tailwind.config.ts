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
          slate: {
            300: "#AAB4CC",
            400: "#6F7B96",
            700: "#1B2745",
            800: "#0B1228",
            900: "#080D24",
            950: "#05091A"
          },
          purple: {
            300: "#A855F7",
            400: "#8B5CF6",
            500: "#8B5CF6"
          },
          violet: {
            300: "#A855F7",
            400: "#8B5CF6",
            500: "#8B5CF6"
          },
          blue: {
            300: "#22D3EE",
            400: "#3B82F6",
            500: "#3B82F6"
          },
          emerald: {
            300: "#10B981",
            400: "#10B981",
            500: "#10B981"
          },
          brand: {
            background: "#05091A",
            surface: "#0B1228",
            secondary: "#080D24",
            border: "#1B2745",
            text: "#F5F7FF",
            muted: "#6F7B96",
            purple: "#8b5cf6",
            violet: "#a855f7",
            blue: "#3b82f6",
            cyan: "#22d3ee",
            success: "#10b981"
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
