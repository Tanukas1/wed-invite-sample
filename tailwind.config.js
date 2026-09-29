/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: "hsl(var(--cream))",
        gold: "hsl(var(--gold))",
        "gold-soft": "hsl(var(--gold-soft))",
        rose: "hsl(var(--rose))",
        "rose-deep": "hsl(var(--rose-deep))",
        sage: "hsl(var(--sage))",
        "sage-deep": "hsl(var(--sage-deep))",
        "sage-soft": "hsl(var(--sage-soft))",
        ink: "hsl(var(--ink))",
      },
      fontFamily: {
        script: ["Candlescript", "cursive"],
        "serif-display": ["Cormorant Garamond", "serif"],
        cinzel: ["Cinzel", "serif"],
        emoji: ['"Noto Color Emoji"', "sans-serif"],
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        soft: "var(--shadow-soft)",
        gold: "var(--shadow-gold)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        drift: "drift 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
