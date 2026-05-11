import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          glow: "rgba(16,185,129,0.4)",
        },
        gold: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        neon: {
          blue: "#00D4FF",
          purple: "#9333EA",
          green: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #000000 0%, #0a0a1a 50%, #000000 100%)",
        "emerald-gradient": "linear-gradient(135deg, #10B981, #3B82F6)",
        "purple-gradient": "linear-gradient(135deg, #8B5CF6, #EC4899)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B, #EF4444)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-down": "fadeDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "glow-emerald": "glowEmerald 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-shift": "gradientShift 4s ease infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        "blink": "blink 1s step-end infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16,185,129,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(16,185,129,0.7), 0 0 60px rgba(59,130,246,0.3)" },
        },
        glowEmerald: {
          "0%, 100%": { textShadow: "0 0 10px rgba(16,185,129,0.5)" },
          "50%": { textShadow: "0 0 25px rgba(16,185,129,1), 0 0 50px rgba(16,185,129,0.5)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-emerald": "0 0 20px rgba(16,185,129,0.4), 0 0 60px rgba(16,185,129,0.1)",
        "glow-blue": "0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.1)",
        "glow-purple": "0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.1)",
        "glow-gold": "0 0 20px rgba(245,158,11,0.4), 0 0 60px rgba(245,158,11,0.1)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card": "0 25px 50px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
