import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#1a0308",
          900: "#2d0510",
          800: "#4a0818",
          700: "#6b0a22",
          600: "#8b0d2c",
          500: "#a01030",
          400: "#b81235",
        },
        wine: {
          950: "#1e0612",
          900: "#3d0b21",
          800: "#5c1132",
          700: "#7a1643",
          600: "#981c54",
          500: "#b52265",
        },
        gold: {
          50: "#fdf9e7",
          100: "#faf0c0",
          200: "#f5e083",
          300: "#efcf47",
          400: "#e8be1a",
          500: "#d4af37",
          600: "#b8951e",
          700: "#9a7a15",
          800: "#7c600e",
          900: "#614a09",
        },
        parchment: {
          50: "#fdf8f0",
          100: "#f9eedc",
          200: "#f3ddb8",
          300: "#ebc890",
          400: "#e0af66",
          500: "#d49640",
        },
        cream: "#fdf6e9",
        ivory: "#f8f0e0",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
      backgroundImage: {
        "maroon-gradient": "linear-gradient(135deg, #1a0308 0%, #3d0b21 50%, #2d0510 100%)",
        "gold-gradient": "linear-gradient(135deg, #d4af37 0%, #f5e083 50%, #b8951e 100%)",
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(180,20,60,0.12) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.25)",
        "gold-sm": "0 0 15px rgba(212,175,55,0.15)",
        maroon: "0 8px 40px rgba(26,3,8,0.6)",
        glass: "0 8px 32px rgba(26,3,8,0.4), inset 0 1px 0 rgba(212,175,55,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
